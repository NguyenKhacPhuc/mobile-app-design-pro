#!/usr/bin/env node

/**
 * fetch-icons.mjs — Download SVG icons from CDN sources.
 *
 * Usage:
 *   node fetch-icons.mjs --icons "heart,star,home" --source lucide --output ./icons/
 *   node fetch-icons.mjs --category "navigation" --source lucide --output ./icons/
 *   node fetch-icons.mjs --icons "heart,star" --source material-symbols --output ./icons/
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const SOURCES = {
  lucide: (name) => `https://unpkg.com/lucide-static/icons/${name}.svg`,
  'material-symbols': (name) => `https://api.iconify.design/material-symbols/${name}.svg`,
  phosphor: (name) => `https://api.iconify.design/ph/${name}.svg`,
  tabler: (name) => `https://api.iconify.design/tabler/${name}.svg`,
};

const CATEGORIES = {
  navigation: ['home', 'search', 'menu', 'arrow-left', 'arrow-right', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right', 'x', 'external-link'],
  action: ['plus', 'minus', 'trash-2', 'edit', 'save', 'download', 'upload', 'copy', 'share', 'filter', 'settings', 'refresh-cw'],
  status: ['check', 'check-circle', 'x-circle', 'alert-triangle', 'alert-circle', 'info', 'loader', 'clock'],
  communication: ['mail', 'message-circle', 'phone', 'send', 'bell', 'bell-off'],
  user: ['user', 'users', 'user-plus', 'log-in', 'log-out', 'shield'],
  media: ['image', 'video', 'play', 'pause', 'volume-2', 'mic', 'camera'],
  commerce: ['shopping-cart', 'shopping-bag', 'credit-card', 'dollar-sign', 'tag', 'gift', 'percent'],
  social: ['heart', 'star', 'thumbs-up', 'bookmark', 'flag', 'share-2'],
  files: ['file', 'file-text', 'folder', 'paperclip', 'link', 'clipboard'],
  data: ['bar-chart-3', 'trending-up', 'trending-down', 'activity', 'database', 'pie-chart'],
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

async function fetchWithRetry(url, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return await res.text();
    } catch (err) {
      if (i === retries) throw err;
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
}

async function fetchBatch(icons, getUrl, outputDir, batchSize = 5) {
  const results = { success: [], failed: [] };
  for (let i = 0; i < icons.length; i += batchSize) {
    const batch = icons.slice(i, i + batchSize);
    const promises = batch.map(async (name) => {
      const url = getUrl(name);
      try {
        const svg = await fetchWithRetry(url);
        const outPath = join(outputDir, `${name}.svg`);
        await writeFile(outPath, svg, 'utf-8');
        results.success.push(name);
        console.log(`  ✓ ${name}`);
      } catch (err) {
        results.failed.push({ name, error: err.message });
        console.log(`  ✗ ${name}: ${err.message}`);
      }
    });
    await Promise.all(promises);
  }
  return results;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const source = opts.source || 'lucide';
  const outputDir = opts.output || './icons';

  if (!SOURCES[source]) {
    console.error(`Unknown source: ${source}. Available: ${Object.keys(SOURCES).join(', ')}`);
    process.exit(1);
  }

  let icons = [];
  if (opts.icons) {
    icons = opts.icons.split(',').map(s => s.trim());
  } else if (opts.category) {
    const cat = opts.category.toLowerCase();
    if (!CATEGORIES[cat]) {
      console.error(`Unknown category: ${cat}. Available: ${Object.keys(CATEGORIES).join(', ')}`);
      process.exit(1);
    }
    icons = CATEGORIES[cat];
  } else {
    console.error('Usage: node fetch-icons.mjs --icons "heart,star" --source lucide --output ./icons/');
    console.error('       node fetch-icons.mjs --category "navigation" --source lucide --output ./icons/');
    process.exit(1);
  }

  await mkdir(outputDir, { recursive: true });
  console.log(`\nFetching ${icons.length} icons from ${source} → ${outputDir}\n`);

  const results = await fetchBatch(icons, SOURCES[source], outputDir);

  console.log(`\nDone: ${results.success.length} fetched, ${results.failed.length} failed.`);
  if (results.failed.length > 0) {
    console.log('Failed icons:', results.failed.map(f => f.name).join(', '));
  }
}

main();
