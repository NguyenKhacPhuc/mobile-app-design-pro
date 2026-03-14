# Icon Sources Reference

## CDN Sources

### Lucide (Default)
- **CDN**: `https://unpkg.com/lucide-static/icons/{name}.svg`
- **API**: `https://api.iconify.design/lucide/{name}.svg`
- **Browse**: https://lucide.dev/icons
- **Style**: Outlined, 24x24, stroke-width 2
- **License**: ISC (MIT-compatible)
- **Count**: 1400+ icons
- **Best for**: General purpose, consistent line icons

### Material Symbols
- **CDN**: `https://api.iconify.design/material-symbols/{name}.svg`
- **Browse**: https://fonts.google.com/icons
- **Style**: Outlined/Filled/Rounded, 24x24
- **License**: Apache 2.0
- **Count**: 2500+ icons
- **Best for**: Material Design projects, Android/Compose apps

### Phosphor
- **CDN**: `https://api.iconify.design/ph/{name}.svg`
- **Browse**: https://phosphoricons.com
- **Style**: 6 weights (thin/light/regular/bold/fill/duotone)
- **License**: MIT
- **Count**: 1200+ icons
- **Best for**: Multi-weight icon systems, flexible design

### Simple Icons (Brands)
- **CDN**: `https://cdn.simpleicons.org/{brand}`
- **Browse**: https://simpleicons.org
- **License**: CC0
- **Best for**: Brand/company logos (Google, Apple, Facebook, etc.)

## Iconify Unified API

All icon sets available via Iconify:
```
https://api.iconify.design/{prefix}/{name}.svg?width={size}&height={size}&color={hex}
```
Prefixes: `lucide`, `material-symbols`, `ph`, `mdi`, `heroicons`, `tabler`, `carbon`

## AI Generation (Imagen 4)

For custom icons not available in any CDN, use the `ai-multimodal` skill with Imagen 4.

### Prompt Format
```
Generate a flat, single-color icon for "{description}".
Style: minimal line art, uniform 2px stroke, 24x24 grid, no fill, rounded corners.
Output: white icon on transparent background, PNG 512x512.
```

### When to Use AI Generation
- Icon represents a domain-specific concept (e.g., "zodiac scorpio", "chakra heart")
- No matching icon exists in Lucide, Material, or Phosphor
- Brand/product-specific iconography needed
- Custom illustration-style icons for onboarding/empty states

### Post-Processing
1. Generate with Imagen 4 at 512x512 PNG
2. Trace to SVG using Potrace or manual vectorization
3. Normalize to 24x24 viewBox
4. Ensure consistent stroke-width with project's icon set
5. Save as `.svg` in project's icon directory

## Common Icon Mappings

| Emoji | Icon Name (Lucide) | Category |
|-------|-------------------|----------|
| ❤️ | heart | social |
| ⭐ | star | social |
| 🏠 | home | navigation |
| ⚙️ | settings | navigation |
| 🔍 | search | action |
| ➕ | plus | action |
| ✏️ | pencil | action |
| 🗑️ | trash-2 | action |
| 📧 | mail | communication |
| 💬 | message-circle | communication |
| 🔔 | bell | communication |
| 👤 | user | user |
| 📸 | camera | media |
| 🎵 | music | media |
| 🛒 | shopping-cart | commerce |
| 💳 | credit-card | commerce |
| 📊 | bar-chart-3 | data |
| 📁 | folder | files |
| 🔒 | lock | security |
| 📍 | map-pin | location |
| 📅 | calendar | time |
| ✅ | check-circle | status |
| ⚠️ | alert-triangle | status |
| ❌ | x-circle | status |
| ℹ️ | info | status |
