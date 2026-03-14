#!/usr/bin/env node

/**
 * convert-icons.mjs — Generate framework-specific icon wrappers from SVG files.
 *
 * Usage:
 *   node convert-icons.mjs --input ./icons/ --format compose
 *   node convert-icons.mjs --input ./icons/ --format react
 *   node convert-icons.mjs --input ./icons/ --format flutter
 *   node convert-icons.mjs --input ./icons/ --format swift
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';

function toPascalCase(str) {
  return str.replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase());
}

function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal[0].toLowerCase() + pascal.slice(1);
}

function toSnakeCase(str) {
  return str.replace(/-/g, '_').toLowerCase();
}

const GENERATORS = {
  compose(iconNames) {
    const entries = iconNames.map(n =>
      `    val ${toPascalCase(n)} = "ic_${toSnakeCase(n)}"`
    ).join('\n');
    return `package app.icons\n\n/**\n * Generated icon references.\n * SVGs should be placed in composeResources/drawable/ as ic_${toSnakeCase(iconNames[0])}.xml etc.\n */\nobject AppIcons {\n${entries}\n}\n`;
  },

  react(iconNames) {
    const imports = iconNames.map(n =>
      `export { default as ${toPascalCase(n)}Icon } from './${n}.svg';`
    ).join('\n');
    return `// Generated icon exports\n// Import: import { HeartIcon, StarIcon } from './icons'\n${imports}\n`;
  },

  flutter(iconNames) {
    const entries = iconNames.map(n =>
      `  static const String ${toCamelCase(n)} = 'assets/icons/${n}.svg';`
    ).join('\n');
    return `/// Generated icon asset paths.\nclass AppIcons {\n  AppIcons._();\n\n${entries}\n}\n`;
  },

  swift(iconNames) {
    const entries = iconNames.map(n =>
      `    static let ${toCamelCase(n)} = "${n}"`
    ).join('\n');
    return `import Foundation\n\n/// Generated icon asset names.\nenum AppIcons {\n${entries}\n}\n`;
  },
};

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

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const inputDir = opts.input;
  const format = opts.format;

  if (!inputDir || !format) {
    console.error('Usage: node convert-icons.mjs --input ./icons/ --format compose|react|flutter|swift');
    process.exit(1);
  }

  if (!GENERATORS[format]) {
    console.error(`Unknown format: ${format}. Available: ${Object.keys(GENERATORS).join(', ')}`);
    process.exit(1);
  }

  const files = await readdir(inputDir);
  const svgFiles = files.filter(f => extname(f) === '.svg');
  const iconNames = svgFiles.map(f => basename(f, '.svg'));

  if (iconNames.length === 0) {
    console.error(`No SVG files found in ${inputDir}`);
    process.exit(1);
  }

  const output = GENERATORS[format](iconNames);
  const outFile = join(inputDir, format === 'compose' ? 'AppIcons.kt'
    : format === 'react' ? 'index.ts'
    : format === 'flutter' ? 'app_icons.dart'
    : 'AppIcons.swift');

  await writeFile(outFile, output, 'utf-8');
  console.log(`Generated ${outFile} with ${iconNames.length} icons for ${format}.`);
}

main();
