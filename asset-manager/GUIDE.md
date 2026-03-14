# Asset Manager — Usage Guide

## Workflow A: Audit & Replace

Use this when you have an existing project with emoji icons or hardcoded fonts.

### Step 1: Run the audit

```bash
# Emoji only
node scripts/audit-icons.mjs /path/to/project

# Emoji + fonts
node scripts/audit-icons.mjs /path/to/project --fonts

# Machine-readable output
node scripts/audit-icons.mjs /path/to/project --fonts --json
```

**Output example:**
```
=== Asset Audit: /path/to/project ===
Files scanned: 56
Emoji icons found: 8
Font issues found: 3
Files with issues: 5

--- Emoji Icons ---
  src/ui/HomeScreen.kt:42  ❤️  → lucide:heart
    Text("❤️ Favorites")
  src/ui/Settings.kt:18  ⚙️  → lucide:settings
    Text("⚙️ Settings")
```

### Step 2: Fetch replacement icons

```bash
node scripts/fetch-icons.mjs --icons "heart,settings,star" --source lucide --output ./assets/icons/
```

Or fetch a whole category:

```bash
node scripts/fetch-icons.mjs --category navigation --source lucide --output ./assets/icons/
```

Available categories: `navigation`, `action`, `status`, `communication`, `user`, `media`, `commerce`, `social`, `files`, `data`

### Step 3: Generate framework wrappers

```bash
node scripts/convert-icons.mjs --input ./assets/icons/ --format compose
```

This generates an `AppIcons.kt` (or `index.ts`, `app_icons.dart`, `AppIcons.swift`) with typed references to all icons.

### Step 4: Replace in code

Swap emoji references with icon components. Example for Compose:

```kotlin
// Before
Text("❤️ Favorites")

// After
Row {
    Icon(painterResource(Res.drawable.ic_heart), contentDescription = "Favorites")
    Text("Favorites")
}
```

---

## Workflow B: Bootstrap from App Idea

Use this when starting a new project or adding icons/fonts to a greenfield app.

### Step 1: Generate the plan

```bash
node scripts/generate-asset-plan.mjs \
  --app "dating app with AI matchmaking" \
  --framework compose
```

The script auto-detects the app category (social/dating) and outputs:
- 25+ categorized icons from Lucide
- Font pairing recommendation (Space Grotesk + DM Sans)
- Custom icon prompts for AI-specific concepts

### Step 2: Preview

Add `--preview` to open a visual HTML preview in the browser:

```bash
node scripts/generate-asset-plan.mjs \
  --app "dating app with AI matchmaking" \
  --framework compose \
  --preview /tmp/asset-preview
```

The preview shows:
- All icons rendered live from Lucide CDN, grouped by category
- Font samples at multiple sizes and weights
- Summary stats (icon count, categories, font families)
- Custom AI icons as dashed placeholders

### Step 3: Save the plan

```bash
node scripts/generate-asset-plan.mjs \
  --app "dating app with AI matchmaking" \
  --framework compose \
  --output asset-plan.json
```

### Step 4: Fetch everything

```bash
# Icons
node scripts/fetch-icons.mjs \
  --icons "home,search,heart,message-circle,user,star,sparkles,flame" \
  --source lucide \
  --output ./assets/icons/

# Fonts
node scripts/fetch-fonts.mjs \
  --fonts "Space Grotesk,DM Sans" \
  --output ./fonts/ \
  --format compose

# Wrappers
node scripts/convert-icons.mjs --input ./assets/icons/ --format compose
```

### Step 5: Custom AI icons

For icons in the `customIcons` array (e.g., `ai-icon`, `zodiac-icon`), use the `ai-multimodal` skill:

```
Use ai-multimodal to generate: "flat, single-color icon representing AI.
Style: minimal line art, uniform 2px stroke, 24x24 grid, no fill, rounded corners.
White on transparent, PNG 512x512."
```

Then trace to SVG and add to your icon set.

---

## Workflow C: Font Setup

Use this when you only need to set up typography.

### Step 1: Choose a pairing

Check `references/font-pairings.md` for recommendations by mood:

| Mood | Heading | Body |
|------|---------|------|
| Professional | IBM Plex Sans | IBM Plex Sans |
| Modern tech | Space Grotesk | DM Sans |
| Calm/wellness | Lora | Raleway |
| Playful | Fredoka | Nunito |
| Bold marketing | Bebas Neue | Source Sans 3 |

### Step 2: Fetch and generate config

```bash
# CSS
node scripts/fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format css

# Compose (Kotlin)
node scripts/fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format compose

# Tailwind
node scripts/fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format tailwind

# Flutter
node scripts/fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format flutter

# SwiftUI
node scripts/fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format swift
```

### Step 3: Integrate

Each format generates a ready-to-use config file. See `references/framework-integration.md` for complete integration patterns per framework.

---

## Script Reference

| Script | Purpose | Key Flags |
|--------|---------|-----------|
| `generate-asset-plan.mjs` | App idea → JSON plan | `--app`, `--framework`, `--preview`, `--output` |
| `fetch-icons.mjs` | Download SVGs from CDN | `--icons`, `--category`, `--source`, `--output` |
| `fetch-fonts.mjs` | Fetch fonts + config | `--fonts`, `--format`, `--output` |
| `convert-icons.mjs` | SVG → framework wrappers | `--input`, `--format` |
| `audit-icons.mjs` | Scan for emoji/fonts | `<dir>`, `--fonts`, `--json` |

## Framework Values

Use these for `--framework` and `--format` flags:

- `compose` — Jetpack Compose / Kotlin Multiplatform
- `react` — React / Next.js
- `tailwind` — Tailwind CSS
- `flutter` — Flutter / Dart
- `swift` — SwiftUI / iOS

## Icon Source Values

Use these for `--source` flag:

- `lucide` (default) — Clean outlined icons
- `material-symbols` — Google Material icons
- `phosphor` — Multi-weight icons
- `tabler` — Tabler icons
