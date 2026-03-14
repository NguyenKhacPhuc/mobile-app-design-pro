#!/usr/bin/env node

/**
 * fetch-fonts.mjs — Download Google Fonts CSS and generate framework config.
 *
 * Usage:
 *   node fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format css
 *   node fetch-fonts.mjs --fonts "Inter" --output ./fonts/ --format compose
 *   node fetch-fonts.mjs --fonts "Poppins,Open Sans" --output ./fonts/ --format tailwind
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

function parseArgs(args) {
  const parsed = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--') && i + 1 < args.length) {
      parsed[args[i].slice(2)] = args[i + 1];
      i++;
    }
  }
  return parsed;
}

function buildGoogleFontsUrl(fontNames) {
  const families = fontNames.map(f =>
    `family=${f.replace(/ /g, '+')}:wght@400;500;600;700`
  ).join('&');
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

function generateCssConfig(fontNames, cssContent) {
  const importUrl = buildGoogleFontsUrl(fontNames);
  const vars = fontNames.length === 1
    ? `:root { --font-primary: '${fontNames[0]}', sans-serif; }`
    : `:root {\n  --font-heading: '${fontNames[0]}', sans-serif;\n  --font-body: '${fontNames[1]}', sans-serif;\n}`;
  return `/* Google Fonts */\n@import url('${importUrl}');\n\n${vars}\n`;
}

function generateTailwindConfig(fontNames) {
  const config = fontNames.length === 1
    ? `  fontFamily: {\n    sans: ['${fontNames[0]}', 'sans-serif'],\n  }`
    : `  fontFamily: {\n    heading: ['${fontNames[0]}', 'sans-serif'],\n    body: ['${fontNames[1]}', 'sans-serif'],\n  }`;
  return `// tailwind.config.js — add to theme.extend:\nmodule.exports = {\n  theme: {\n    extend: {\n${config}\n    },\n  },\n}\n`;
}

function toSnakeCase(str) {
  return str.replace(/ /g, '_').toLowerCase();
}

function toCamelCase(str) {
  return str.replace(/ /g, '');
}

function generateComposeConfig(fontNames) {
  const families = fontNames.map(f => {
    const varName = toCamelCase(f);
    return `val ${varName} = FontFamily(\n    Font(Res.font.${toSnakeCase(f)}_regular, FontWeight.Normal),\n    Font(Res.font.${toSnakeCase(f)}_medium, FontWeight.Medium),\n    Font(Res.font.${toSnakeCase(f)}_semibold, FontWeight.SemiBold),\n    Font(Res.font.${toSnakeCase(f)}_bold, FontWeight.Bold),\n)`;
  }).join('\n\n');

  const heading = toCamelCase(fontNames[0]);
  const body = fontNames.length > 1 ? toCamelCase(fontNames[1]) : heading;

  return `// Typography.kt — Compose font families\n// Place .ttf files in composeResources/font/\n\n${families}\n\nval AppTypography = Typography(\n    displayLarge = TextStyle(fontFamily = ${heading}, fontWeight = FontWeight.Bold, fontSize = 36.sp),\n    headlineMedium = TextStyle(fontFamily = ${heading}, fontWeight = FontWeight.SemiBold, fontSize = 24.sp),\n    bodyLarge = TextStyle(fontFamily = ${body}, fontWeight = FontWeight.Normal, fontSize = 16.sp),\n    bodyMedium = TextStyle(fontFamily = ${body}, fontWeight = FontWeight.Normal, fontSize = 14.sp),\n    labelLarge = TextStyle(fontFamily = ${body}, fontWeight = FontWeight.Medium, fontSize = 14.sp),\n)\n`;
}

function generateFlutterConfig(fontNames) {
  const heading = fontNames[0].replace(/ /g, '');
  const body = fontNames.length > 1 ? fontNames[1].replace(/ /g, '') : heading;
  const headingLower = heading.charAt(0).toLowerCase() + heading.slice(1);
  const bodyLower = body.charAt(0).toLowerCase() + body.slice(1);

  return `// Flutter font config — add google_fonts package\nimport 'package:google_fonts/google_fonts.dart';\n\nfinal appTheme = ThemeData(\n  textTheme: TextTheme(\n    displayLarge: GoogleFonts.${headingLower}(fontWeight: FontWeight.w700, fontSize: 36),\n    headlineMedium: GoogleFonts.${headingLower}(fontWeight: FontWeight.w600, fontSize: 24),\n    bodyLarge: GoogleFonts.${bodyLower}(fontWeight: FontWeight.w400, fontSize: 16),\n    bodyMedium: GoogleFonts.${bodyLower}(fontWeight: FontWeight.w400, fontSize: 14),\n  ),\n);\n`;
}

function generateSwiftConfig(fontNames) {
  const extensions = fontNames.map(f => {
    const camel = f.replace(/ /g, '');
    const funcName = camel.charAt(0).toLowerCase() + camel.slice(1);
    return `extension Font {\n    static func ${funcName}(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {\n        switch weight {\n        case .bold: return .custom("${camel}-Bold", size: size)\n        case .semibold: return .custom("${camel}-SemiBold", size: size)\n        case .medium: return .custom("${camel}-Medium", size: size)\n        default: return .custom("${camel}-Regular", size: size)\n        }\n    }\n}`;
  }).join('\n\n');

  return `// SwiftUI font extensions\n// Add .ttf files to Xcode project and register in Info.plist\nimport SwiftUI\n\n${extensions}\n`;
}

const FORMAT_GENERATORS = {
  css: generateCssConfig,
  tailwind: generateTailwindConfig,
  compose: generateComposeConfig,
  flutter: generateFlutterConfig,
  swift: generateSwiftConfig,
};

const FORMAT_FILES = {
  css: 'fonts.css',
  tailwind: 'tailwind-fonts.config.js',
  compose: 'Typography.kt',
  flutter: 'app_fonts.dart',
  swift: 'FontExtensions.swift',
};

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const format = opts.format || 'css';
  const outputDir = opts.output || './fonts';

  if (!opts.fonts) {
    console.error('Usage: node fetch-fonts.mjs --fonts "Font1,Font2" --output ./fonts/ --format css|compose|tailwind|flutter|swift');
    process.exit(1);
  }

  if (!FORMAT_GENERATORS[format]) {
    console.error(`Unknown format: ${format}. Available: ${Object.keys(FORMAT_GENERATORS).join(', ')}`);
    process.exit(1);
  }

  const fontNames = opts.fonts.split(',').map(s => s.trim());
  await mkdir(outputDir, { recursive: true });

  // Fetch Google Fonts CSS
  const googleUrl = buildGoogleFontsUrl(fontNames);
  console.log(`Fetching fonts: ${fontNames.join(', ')}`);
  try {
    const res = await fetch(googleUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; asset-manager/1.0)' },
    });
    if (res.ok) {
      const css = await res.text();
      await writeFile(join(outputDir, 'google-fonts.css'), css, 'utf-8');
      console.log(`  ✓ Saved google-fonts.css`);
    } else {
      console.log(`  ⚠ Could not fetch Google Fonts CSS (HTTP ${res.status})`);
    }
  } catch (err) {
    console.log(`  ⚠ Could not fetch Google Fonts CSS: ${err.message}`);
  }

  // Generate framework config
  const config = FORMAT_GENERATORS[format](fontNames);
  const configFile = join(outputDir, FORMAT_FILES[format]);
  await writeFile(configFile, config, 'utf-8');
  console.log(`  ✓ Generated ${FORMAT_FILES[format]}`);
  console.log(`\nDone. Files saved to ${outputDir}/`);
}

main();
