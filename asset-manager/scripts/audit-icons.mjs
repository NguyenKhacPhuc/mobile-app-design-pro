#!/usr/bin/env node

/**
 * audit-icons.mjs — Scan a project for emoji icons and hardcoded fonts.
 *
 * Usage:
 *   node audit-icons.mjs /path/to/project
 *   node audit-icons.mjs /path/to/project --fonts
 *   node audit-icons.mjs /path/to/project --fonts --json
 */

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const CODE_EXTS = new Set(['.kt', '.kts', '.swift', '.tsx', '.jsx', '.ts', '.js', '.dart', '.vue', '.svelte', '.xml']);
const SKIP_DIRS = new Set(['node_modules', '.gradle', 'build', 'Pods', '.git', '.idea', 'dist', '.next', '.expo']);
const SKIP_PATTERNS = [/\.test\./, /\.spec\./, /__tests__/];

// Broad emoji regex covering most Unicode emoji ranges
const EMOJI_RE = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu;

// Font detection patterns
const FONT_PATTERNS = [
  { re: /fontFamily\s*=\s*FontFamily\.\w+/g, type: 'compose-system-font' },
  { re: /fontFamily\s*=\s*FontFamily\.Default/g, type: 'compose-default-font' },
  { re: /\.font\(\.system/g, type: 'swift-system-font' },
  { re: /UIFont\.systemFont/g, type: 'uikit-system-font' },
  { re: /font-family:\s*['"]?[A-Za-z]/g, type: 'css-hardcoded-font' },
  { re: /fontFamily:\s*['"]/g, type: 'js-hardcoded-font' },
];

// Common emoji-to-icon suggestions
const SUGGESTIONS = {
  '❤️': 'lucide:heart', '❤': 'lucide:heart', '⭐': 'lucide:star', '🏠': 'lucide:home',
  '⚙️': 'lucide:settings', '🔍': 'lucide:search', '➕': 'lucide:plus', '✏️': 'lucide:pencil',
  '🗑️': 'lucide:trash-2', '📧': 'lucide:mail', '💬': 'lucide:message-circle', '🔔': 'lucide:bell',
  '👤': 'lucide:user', '📸': 'lucide:camera', '🛒': 'lucide:shopping-cart', '💳': 'lucide:credit-card',
  '📊': 'lucide:bar-chart-3', '📁': 'lucide:folder', '🔒': 'lucide:lock', '📍': 'lucide:map-pin',
  '📅': 'lucide:calendar', '✅': 'lucide:check-circle', '⚠️': 'lucide:alert-triangle',
  '❌': 'lucide:x-circle', 'ℹ️': 'lucide:info', '🎵': 'lucide:music', '🔥': 'lucide:flame',
};

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) yield* walkDir(full);
    } else if (CODE_EXTS.has(extname(entry.name))) {
      if (!SKIP_PATTERNS.some(p => p.test(entry.name))) yield full;
    }
  }
}

async function auditFile(filePath, auditFonts) {
  const content = await readFile(filePath, 'utf-8');
  const lines = content.split('\n');
  const emojis = [];
  const fonts = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Emoji detection
    let match;
    while ((match = EMOJI_RE.exec(line)) !== null) {
      emojis.push({
        file: filePath,
        line: i + 1,
        char: match[0],
        context: line.trim().slice(0, 80),
        suggestion: SUGGESTIONS[match[0]] || 'unknown — check icon-sources.md',
      });
    }
    // Font detection
    if (auditFonts) {
      for (const pattern of FONT_PATTERNS) {
        pattern.re.lastIndex = 0;
        while ((match = pattern.re.exec(line)) !== null) {
          fonts.push({
            file: filePath,
            line: i + 1,
            family: match[0].trim(),
            context: line.trim().slice(0, 80),
            type: pattern.type,
          });
        }
      }
    }
  }
  return { emojis, fonts };
}

async function main() {
  const args = process.argv.slice(2);
  const projectDir = args.find(a => !a.startsWith('--'));
  const auditFonts = args.includes('--fonts');
  const jsonOutput = args.includes('--json');

  if (!projectDir) {
    console.error('Usage: node audit-icons.mjs <project-dir> [--fonts] [--json]');
    process.exit(1);
  }

  // Verify dir exists
  try { await stat(projectDir); } catch {
    console.error(`Directory not found: ${projectDir}`);
    process.exit(1);
  }

  const allEmojis = [];
  const allFonts = [];
  let filesScanned = 0;

  for await (const file of walkDir(projectDir)) {
    filesScanned++;
    const { emojis, fonts } = await auditFile(file, auditFonts);
    allEmojis.push(...emojis);
    allFonts.push(...fonts);
  }

  const filesWithIssues = new Set([...allEmojis.map(e => e.file), ...allFonts.map(f => f.file)]).size;

  const result = {
    emojis: allEmojis,
    ...(auditFonts ? { fonts: allFonts } : {}),
    summary: {
      totalEmojis: allEmojis.length,
      ...(auditFonts ? { totalFonts: allFonts.length } : {}),
      filesScanned,
      filesWithIssues,
    },
  };

  if (jsonOutput) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(`\n=== Asset Audit: ${projectDir} ===`);
    console.log(`Files scanned: ${filesScanned}`);
    console.log(`Emoji icons found: ${allEmojis.length}`);
    if (auditFonts) console.log(`Font issues found: ${allFonts.length}`);
    console.log(`Files with issues: ${filesWithIssues}\n`);

    if (allEmojis.length > 0) {
      console.log('--- Emoji Icons ---');
      for (const e of allEmojis) {
        console.log(`  ${e.file}:${e.line}  ${e.char}  → ${e.suggestion}`);
        console.log(`    ${e.context}`);
      }
    }
    if (auditFonts && allFonts.length > 0) {
      console.log('\n--- Font Issues ---');
      for (const f of allFonts) {
        console.log(`  ${f.file}:${f.line}  [${f.type}]  ${f.family}`);
        console.log(`    ${f.context}`);
      }
    }
  }
}

main();
