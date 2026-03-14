---
name: asset-manager
description: "Audit, generate, and integrate icons and fonts for any project. Use when: replacing emoji with proper icons, setting up icons/fonts for a new project, bootstrapping assets from an app idea, selecting font pairings, or integrating typography. Covers icon CDN lookup, AI generation fallback (Imagen 4), font fetching, and framework-specific integration (Compose, React, Flutter, Swift, Tailwind)."
version: 1.0.0
---

# Asset Manager

Unified icon and font management — audit existing projects, bootstrap new ones, generate custom assets with AI.

## Dependencies

- `ai-multimodal` skill: Imagen 4 for custom icon generation
- `ui-ux-pro-max` skill: Font pairings database (57 pairings in `typography.csv`)

## Workflow A: Audit & Replace

Scan an existing project for emoji icons and hardcoded fonts, then replace with proper assets.

### Steps

1. **Audit** — Run `audit-icons.mjs` on the project root:
   ```bash
   node ~/.claude/skills/asset-manager/scripts/audit-icons.mjs /path/to/project
   node ~/.claude/skills/asset-manager/scripts/audit-icons.mjs /path/to/project --fonts
   ```
   Outputs JSON: `{ emojis: [{file, line, char, context}], fonts: [{file, line, family}] }`

2. **Map replacements** — For each emoji, find the matching icon in `references/icon-sources.md`. Prefer Lucide → Material Symbols → Phosphor.

3. **Fetch icons** — Download SVGs via `fetch-icons.mjs`:
   ```bash
   node ~/.claude/skills/asset-manager/scripts/fetch-icons.mjs --icons "heart,star,home" --source lucide --output ./assets/icons/
   ```

4. **Convert** — Generate platform-specific formats:
   ```bash
   node ~/.claude/skills/asset-manager/scripts/convert-icons.mjs --input ./assets/icons/ --format compose|react|flutter|swift
   ```

5. **Replace** — Swap emoji references in code with icon component imports.

6. **Font replacement** — If `--fonts` audit found hardcoded fonts, recommend pairings from `references/font-pairings.md` and fetch via Workflow C.

## Workflow B: Bootstrap Assets from App Idea

Generate a complete icon + font plan for a new project from a description.

### Steps

1. **Generate plan** — Run `generate-asset-plan.mjs`:
   ```bash
   node ~/.claude/skills/asset-manager/scripts/generate-asset-plan.mjs --app "dating app with AI matchmaking" --framework compose
   ```
   Outputs JSON: `{ icons: [{name, source, category}], fonts: {heading, body, cssImport, config}, customIcons: [{name, aiPrompt}] }`

2. **Preview** — Add `--preview` to generate an HTML preview and auto-open in browser:
   ```bash
   node ~/.claude/skills/asset-manager/scripts/generate-asset-plan.mjs --app "dating app" --framework compose --preview /tmp/asset-preview
   ```
   Shows: live Lucide icons rendered in a grid, font samples at multiple sizes/weights, summary stats. Custom AI icons shown as placeholders.

3. **Review** — Present the asset plan to the user for approval.

3. **Fetch standard icons** — Use `fetch-icons.mjs` with the plan's icon list:
   ```bash
   node ~/.claude/skills/asset-manager/scripts/fetch-icons.mjs --icons "heart,message,star,user,settings" --source lucide --output ./assets/icons/
   ```

4. **AI-generate custom icons** — For items in `customIcons`, use the `ai-multimodal` skill with Imagen 4:
   - Use the `aiPrompt` from the plan
   - Request flat, single-color SVG-style output
   - Manually trace generated images to SVG if needed

5. **Fetch fonts** — Use Workflow C with the plan's font recommendation.

6. **Scaffold** — Convert icons and generate framework-specific wrappers + font config.

## Workflow C: Font Setup

Select, fetch, and integrate fonts into any project.

### Steps

1. **Recommend** — Based on app mood/category, look up `references/font-pairings.md` for matching pairings. Present 2-3 options to the user.

2. **Fetch** — Download font CSS and generate config:
   ```bash
   node ~/.claude/skills/asset-manager/scripts/fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format compose
   ```
   Supported formats: `css`, `compose`, `tailwind`, `flutter`, `swift`

3. **Integrate** — Apply the generated config snippet to the project. See `references/framework-integration.md` for patterns.

## Icon Source Priority

1. **Lucide** — Default. Clean, consistent, MIT licensed.
2. **Material Symbols** — Google's icon set. Good for Material Design projects.
3. **Phosphor** — Flexible weight system. Good for multi-weight needs.
4. **AI Generation** — Imagen 4 via `ai-multimodal` skill. Last resort for custom icons not in any CDN.

## Font Source

- **Google Fonts** — Primary source. Free, CDN-hosted, 1500+ families.
- **Fontshare** — Secondary. Premium-quality free fonts (Satoshi, Clash Display, General Sans).

## Anti-Patterns

- Do NOT use emoji as icons in production UIs
- Do NOT hardcode font-family strings — use theme/design system tokens
- Do NOT fetch fonts at runtime if they can be bundled
- Do NOT generate AI icons when a standard icon exists — AI is the fallback, not the default
- Do NOT mix icon libraries in the same project — pick one and stick with it
