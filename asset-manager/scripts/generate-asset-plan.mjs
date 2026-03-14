#!/usr/bin/env node

/**
 * generate-asset-plan.mjs — Generate icon + font plan from an app description.
 *
 * Usage:
 *   node generate-asset-plan.mjs --app "dating app with AI matchmaking" --framework compose
 *   node generate-asset-plan.mjs --app "fitness tracker" --framework react --output plan.json
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const CATEGORY_ICONS = {
  'social/dating': {
    navigation: ['home', 'search', 'heart', 'message-circle', 'user'],
    actions: ['plus', 'camera', 'share', 'send', 'x', 'filter', 'sliders'],
    content: ['heart', 'star', 'sparkles', 'flame', 'map-pin', 'calendar'],
    status: ['check-circle', 'clock', 'shield', 'eye', 'eye-off', 'bell'],
    profile: ['user', 'settings', 'log-out', 'edit', 'image', 'badge-check'],
  },
  fintech: {
    navigation: ['home', 'wallet', 'bar-chart-3', 'bell', 'user'],
    actions: ['send', 'arrow-up-right', 'arrow-down-left', 'qr-code', 'scan'],
    content: ['credit-card', 'banknote', 'piggy-bank', 'trending-up', 'trending-down'],
    status: ['check-circle', 'alert-triangle', 'lock', 'shield-check', 'clock'],
    profile: ['user', 'settings', 'help-circle', 'file-text', 'log-out'],
  },
  health: {
    navigation: ['home', 'activity', 'heart-pulse', 'calendar', 'user'],
    actions: ['plus', 'play', 'pause', 'timer', 'target'],
    content: ['heart-pulse', 'apple', 'moon', 'sun', 'droplet', 'thermometer'],
    status: ['check-circle', 'alert-circle', 'trophy', 'flame', 'zap'],
    profile: ['user', 'settings', 'bell', 'bar-chart', 'log-out'],
  },
  'e-commerce': {
    navigation: ['home', 'search', 'shopping-cart', 'heart', 'user'],
    actions: ['plus', 'minus', 'filter', 'sliders', 'share', 'scan-barcode'],
    content: ['package', 'truck', 'tag', 'percent', 'gift', 'star'],
    status: ['check-circle', 'clock', 'map-pin', 'shield-check', 'undo-2'],
    profile: ['user', 'settings', 'credit-card', 'map-pin', 'log-out'],
  },
  productivity: {
    navigation: ['home', 'inbox', 'calendar', 'check-square', 'user'],
    actions: ['plus', 'edit', 'trash-2', 'copy', 'clipboard', 'archive'],
    content: ['file-text', 'folder', 'tag', 'clock', 'flag', 'link'],
    status: ['check-circle', 'alert-circle', 'loader', 'zap', 'target'],
    profile: ['user', 'settings', 'bell', 'bar-chart', 'log-out'],
  },
  gaming: {
    navigation: ['home', 'gamepad-2', 'trophy', 'users', 'user'],
    actions: ['play', 'pause', 'volume-2', 'settings', 'share'],
    content: ['sword', 'shield', 'crown', 'gem', 'coins', 'map'],
    status: ['check-circle', 'zap', 'flame', 'star', 'skull'],
    profile: ['user', 'settings', 'bell', 'bar-chart', 'log-out'],
  },
  education: {
    navigation: ['home', 'book-open', 'graduation-cap', 'trophy', 'user'],
    actions: ['play', 'pause', 'bookmark', 'pen-tool', 'download'],
    content: ['book', 'video', 'headphones', 'brain', 'lightbulb', 'puzzle-piece'],
    status: ['check-circle', 'star', 'flame', 'target', 'award'],
    profile: ['user', 'settings', 'bell', 'bar-chart-3', 'log-out'],
  },
};

const CATEGORY_FONTS = {
  'social/dating': { heading: 'Space Grotesk', body: 'DM Sans', pairing: 'Tech Startup' },
  fintech: { heading: 'IBM Plex Sans', body: 'IBM Plex Sans', pairing: 'Financial Trust' },
  health: { heading: 'Lora', body: 'Raleway', pairing: 'Wellness Calm' },
  'e-commerce': { heading: 'Rubik', body: 'Nunito Sans', pairing: 'E-commerce Clean' },
  productivity: { heading: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans', pairing: 'Friendly SaaS' },
  gaming: { heading: 'Russo One', body: 'Chakra Petch', pairing: 'Gaming Bold' },
  education: { heading: 'Fredoka', body: 'Nunito', pairing: 'Playful Creative' },
};

// Keywords to detect app category from description
const CATEGORY_KEYWORDS = {
  'social/dating': ['dating', 'social', 'match', 'swipe', 'love', 'relationship', 'chat', 'meet', 'opener', 'flirt'],
  fintech: ['finance', 'bank', 'payment', 'crypto', 'wallet', 'invest', 'money', 'trading', 'fintech'],
  health: ['health', 'fitness', 'wellness', 'medical', 'workout', 'yoga', 'meditation', 'diet', 'nutrition'],
  'e-commerce': ['shop', 'store', 'ecommerce', 'e-commerce', 'product', 'buy', 'sell', 'marketplace', 'retail'],
  productivity: ['task', 'project', 'todo', 'note', 'productivity', 'organize', 'schedule', 'plan', 'manage'],
  gaming: ['game', 'gaming', 'play', 'esport', 'rpg', 'arcade', 'puzzle', 'adventure'],
  education: ['learn', 'education', 'course', 'study', 'teach', 'school', 'tutorial', 'quiz', 'training'],
};

function detectCategory(appDesc) {
  const lower = appDesc.toLowerCase();
  let bestCat = 'productivity'; // default
  let bestScore = 0;
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const score = keywords.filter(kw => lower.includes(kw)).length;
    if (score > bestScore) { bestScore = score; bestCat = cat; }
  }
  return bestCat;
}

function buildFontConfig(cat, framework) {
  const font = CATEGORY_FONTS[cat];
  const families = font.heading === font.body
    ? `${font.heading}:wght@300;400;500;600;700`
    : `${font.heading}:wght@400;500;600;700&family=${font.body}:wght@400;500;700`;
  const cssImport = `@import url('https://fonts.googleapis.com/css2?family=${families.replace(/ /g, '+')}&display=swap');`;

  const config = { heading: font.heading, body: font.body, pairing: font.pairing, cssImport };

  if (framework === 'tailwind' || framework === 'react') {
    config.tailwindConfig = `fontFamily: { heading: ['${font.heading}', 'sans-serif'], body: ['${font.body}', 'sans-serif'] }`;
  }
  if (framework === 'compose') {
    config.composeNote = `Place .ttf files in composeResources/font/. See framework-integration.md for Typography setup.`;
  }
  if (framework === 'flutter') {
    config.flutterNote = `Use google_fonts package: GoogleFonts.${font.heading.replace(/ /g, '').charAt(0).toLowerCase() + font.heading.replace(/ /g, '').slice(1)}()`;
  }
  if (framework === 'swift') {
    config.swiftNote = `Add .ttf files to Xcode project and register in Info.plist.`;
  }
  return config;
}

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
  const appDesc = opts.app;
  const framework = opts.framework || 'react';

  if (!appDesc) {
    console.error('Usage: node generate-asset-plan.mjs --app "app description" --framework compose|react|flutter|swift|tailwind');
    process.exit(1);
  }

  const category = detectCategory(appDesc);
  const iconSet = CATEGORY_ICONS[category];
  const allIcons = new Set();
  const iconList = [];

  for (const [cat, names] of Object.entries(iconSet)) {
    for (const name of names) {
      if (!allIcons.has(name)) {
        allIcons.add(name);
        iconList.push({ name, source: 'lucide', category: cat });
      }
    }
  }

  // Detect potential custom icons from the description
  const customIcons = [];
  const customKeywords = ['ai', 'zodiac', 'astrology', 'horoscope', 'tarot', 'crystal', 'chakra'];
  const lower = appDesc.toLowerCase();
  for (const kw of customKeywords) {
    if (lower.includes(kw)) {
      customIcons.push({
        name: `${kw}-icon`,
        aiPrompt: `Generate a flat, single-color icon representing "${kw}". Style: minimal line art, uniform 2px stroke, 24x24 grid, no fill, rounded corners. White on transparent, PNG 512x512.`,
      });
    }
  }

  const plan = {
    app: appDesc,
    detectedCategory: category,
    framework,
    icons: iconList,
    fonts: buildFontConfig(category, framework),
    customIcons,
    totalIcons: iconList.length + customIcons.length,
  };

  const output = JSON.stringify(plan, null, 2);

  if (opts.output) {
    await writeFile(opts.output, output, 'utf-8');
    console.log(`Asset plan written to ${opts.output}`);
  } else {
    console.log(output);
  }

  // Generate HTML preview
  if (opts.preview !== undefined) {
    const previewDir = opts.preview || '/tmp/asset-preview';
    await mkdir(previewDir, { recursive: true });
    const html = generatePreviewHtml(plan);
    const previewPath = join(previewDir, 'preview.html');
    await writeFile(previewPath, html, 'utf-8');
    console.log(`\nPreview: ${previewPath}`);
    // Auto-open in browser
    try {
      const cmd = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
      execSync(`${cmd} "${previewPath}"`);
    } catch { /* silent fail if no browser */ }
  }
}

function generatePreviewHtml(plan) {
  const { app, detectedCategory, framework, icons, fonts, customIcons, totalIcons } = plan;
  const fontUrl = fonts.cssImport.match(/url\('([^']+)'\)/)?.[1] || '';

  // Group icons by category
  const grouped = {};
  for (const icon of icons) {
    if (!grouped[icon.category]) grouped[icon.category] = [];
    grouped[icon.category].push(icon.name);
  }

  const iconSections = Object.entries(grouped).map(([cat, names]) => `
    <div class="category">
      <h3>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
      <div class="icon-grid">
        ${names.map(n => `
          <div class="icon-item">
            <i data-lucide="${n}"></i>
            <span>${n}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const customSection = customIcons.length > 0 ? `
    <div class="category">
      <h3>Custom (AI Generation Needed)</h3>
      <div class="icon-grid">
        ${customIcons.map(c => `
          <div class="icon-item custom">
            <div class="placeholder">AI</div>
            <span>${c.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asset Plan Preview — ${app}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="${fontUrl}" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: '${fonts.body}', system-ui, sans-serif;
      background: #0a0a0f;
      color: #e4e4e7;
      min-height: 100vh;
      padding: 40px 24px;
    }
    .container { max-width: 960px; margin: 0 auto; }
    header {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 1px solid #27272a;
    }
    header h1 {
      font-family: '${fonts.heading}', system-ui, sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #818cf8, #a78bfa, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    header .meta {
      color: #71717a;
      font-size: 0.875rem;
    }
    header .meta span {
      display: inline-block;
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 6px;
      padding: 2px 10px;
      margin: 4px 4px;
    }
    section { margin-bottom: 48px; }
    section > h2 {
      font-family: '${fonts.heading}', system-ui, sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #a1a1aa;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .category { margin-bottom: 28px; }
    .category h3 {
      font-size: 0.875rem;
      font-weight: 500;
      color: #71717a;
      margin-bottom: 12px;
      text-transform: capitalize;
    }
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 12px;
    }
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 16px 8px;
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 12px;
      transition: all 0.2s ease;
    }
    .icon-item:hover {
      border-color: #818cf8;
      background: #1e1e2e;
      transform: translateY(-2px);
    }
    .icon-item svg { width: 28px; height: 28px; stroke: #e4e4e7; }
    .icon-item:hover svg { stroke: #818cf8; }
    .icon-item span { font-size: 0.7rem; color: #71717a; text-align: center; word-break: break-all; }
    .icon-item.custom .placeholder {
      width: 28px; height: 28px;
      display: flex; align-items: center; justify-content: center;
      border: 2px dashed #f59e0b;
      border-radius: 6px;
      font-size: 0.6rem;
      color: #f59e0b;
      font-weight: 700;
    }
    .font-preview {
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 16px;
      padding: 32px;
    }
    .font-card { margin-bottom: 32px; }
    .font-card:last-child { margin-bottom: 0; }
    .font-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #818cf8;
      margin-bottom: 8px;
    }
    .font-name { color: #71717a; font-size: 0.8rem; margin-bottom: 12px; }
    .font-sample-heading {
      font-family: '${fonts.heading}', system-ui, sans-serif;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .font-sample-body {
      font-family: '${fonts.body}', system-ui, sans-serif;
      font-weight: 400;
      line-height: 1.6;
      color: #a1a1aa;
    }
    .size-xl { font-size: 2.25rem; }
    .size-lg { font-size: 1.5rem; }
    .size-md { font-size: 1.125rem; }
    .size-sm { font-size: 0.875rem; }
    .weight-row {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #27272a;
    }
    .weight-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .weight-item .label { font-size: 0.7rem; color: #52525b; }
    .weight-item .sample { font-family: '${fonts.heading}', system-ui, sans-serif; font-size: 1.25rem; }
    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
    }
    .summary-card {
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
    }
    .summary-card .value {
      font-family: '${fonts.heading}', system-ui, sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: #818cf8;
    }
    .summary-card .label { font-size: 0.8rem; color: #71717a; margin-top: 4px; }
    footer {
      text-align: center;
      padding-top: 32px;
      border-top: 1px solid #27272a;
      color: #3f3f46;
      font-size: 0.75rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${app}</h1>
      <div class="meta">
        <span>${detectedCategory}</span>
        <span>${framework}</span>
        <span>${totalIcons} icons</span>
        <span>${fonts.pairing}</span>
      </div>
    </header>

    <section>
      <div class="summary">
        <div class="summary-card">
          <div class="value">${icons.length}</div>
          <div class="label">Standard Icons</div>
        </div>
        <div class="summary-card">
          <div class="value">${customIcons.length}</div>
          <div class="label">Custom Icons</div>
        </div>
        <div class="summary-card">
          <div class="value">${fonts.heading === fonts.body ? '1' : '2'}</div>
          <div class="label">Font ${fonts.heading === fonts.body ? 'Family' : 'Families'}</div>
        </div>
        <div class="summary-card">
          <div class="value">${Object.keys(grouped).length}</div>
          <div class="label">Categories</div>
        </div>
      </div>
    </section>

    <section>
      <h2>Icons</h2>
      ${iconSections}
      ${customSection}
    </section>

    <section>
      <h2>Typography</h2>
      <div class="font-preview">
        <div class="font-card">
          <div class="font-label">Heading</div>
          <div class="font-name">${fonts.heading}</div>
          <div class="font-sample-heading size-xl">The quick brown fox</div>
          <div class="font-sample-heading size-lg">jumps over the lazy dog</div>
          <div class="font-sample-heading size-md">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</div>
          <div class="weight-row">
            <div class="weight-item"><span class="label">Regular 400</span><span class="sample" style="font-weight:400">Aa Bb Cc</span></div>
            <div class="weight-item"><span class="label">Medium 500</span><span class="sample" style="font-weight:500">Aa Bb Cc</span></div>
            <div class="weight-item"><span class="label">SemiBold 600</span><span class="sample" style="font-weight:600">Aa Bb Cc</span></div>
            <div class="weight-item"><span class="label">Bold 700</span><span class="sample" style="font-weight:700">Aa Bb Cc</span></div>
          </div>
        </div>
        ${fonts.heading !== fonts.body ? `
        <div class="font-card">
          <div class="font-label">Body</div>
          <div class="font-name">${fonts.body}</div>
          <div class="font-sample-body size-md">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</div>
          <div class="font-sample-body size-sm" style="margin-top:8px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
          <div class="weight-row">
            <div class="weight-item"><span class="label">Regular 400</span><span class="sample" style="font-family:'${fonts.body}',sans-serif;font-weight:400">Aa Bb Cc</span></div>
            <div class="weight-item"><span class="label">Medium 500</span><span class="sample" style="font-family:'${fonts.body}',sans-serif;font-weight:500">Aa Bb Cc</span></div>
            <div class="weight-item"><span class="label">Bold 700</span><span class="sample" style="font-family:'${fonts.body}',sans-serif;font-weight:700">Aa Bb Cc</span></div>
          </div>
        </div>
        ` : `
        <div class="font-card">
          <div class="font-label">Body (same family)</div>
          <div class="font-sample-body size-md">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</div>
          <div class="font-sample-body size-sm" style="margin-top:8px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
        </div>
        `}
      </div>
    </section>

    <footer>Asset Manager &middot; Generated ${new Date().toISOString().split('T')[0]}</footer>
  </div>
  <script>lucide.createIcons();</script>
</body>
</html>`;
}

main();
