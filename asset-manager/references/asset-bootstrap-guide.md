# Asset Bootstrap Guide

How to go from an app idea to a complete icon + font setup.

## Icon Category Templates

### Social / Dating App
**Navigation**: home, search, heart, message-circle, user
**Actions**: plus, camera, share, send, x, filter, sliders
**Content**: heart, star, sparkles, flame, map-pin, calendar
**Status**: check-circle, clock, shield, eye, eye-off, bell
**Profile**: user, settings, log-out, edit, image, badge-check

### Fintech / Banking App
**Navigation**: home, wallet, bar-chart-3, bell, user
**Actions**: send, arrow-up-right, arrow-down-left, qr-code, scan
**Content**: credit-card, banknote, piggy-bank, trending-up, trending-down
**Status**: check-circle, alert-triangle, lock, shield-check, clock
**Profile**: user, settings, help-circle, file-text, log-out

### Health / Wellness App
**Navigation**: home, activity, heart-pulse, calendar, user
**Actions**: plus, play, pause, timer, target
**Content**: heart-pulse, apple, moon, sun, droplet, thermometer
**Status**: check-circle, alert-circle, trophy, flame, zap
**Profile**: user, settings, bell, bar-chart, log-out

### E-commerce App
**Navigation**: home, search, shopping-cart, heart, user
**Actions**: plus, minus, filter, sliders, share, scan-barcode
**Content**: package, truck, tag, percent, gift, star
**Status**: check-circle, clock, map-pin, shield-check, undo-2
**Profile**: user, settings, credit-card, map-pin, log-out

### Productivity App
**Navigation**: home, inbox, calendar, check-square, user
**Actions**: plus, edit, trash-2, copy, clipboard, archive
**Content**: file-text, folder, tag, clock, flag, link
**Status**: check-circle, alert-circle, loader, zap, target
**Profile**: user, settings, bell, bar-chart, log-out

### Education App
**Navigation**: home, book-open, graduation-cap, trophy, user
**Actions**: play, pause, bookmark, pen-tool, download
**Content**: book, video, headphones, brain, lightbulb, puzzle
**Status**: check-circle, star, flame, target, award
**Profile**: user, settings, bell, bar-chart-3, log-out

### Gaming App
**Navigation**: home, gamepad-2, trophy, users, user
**Actions**: play, pause, volume-2, settings, share
**Content**: sword, shield, crown, gem, coins, map
**Status**: check-circle, zap, flame, star, skull
**Profile**: user, settings, bell, bar-chart, log-out

## AI Generation Prompt Templates

For icons not available in standard CDN libraries:

### Flat Icon
```
Generate a flat, single-color icon representing "{concept}".
Style: minimal line art, uniform 2px stroke, 24x24 grid, no fill, rounded line caps and joins.
Color: white on transparent background.
Output: PNG 512x512, centered with 10% padding.
```

### Filled Icon
```
Generate a filled icon representing "{concept}".
Style: solid fill, simple shapes, 24x24 grid, rounded corners.
Color: white on transparent background.
Output: PNG 512x512, centered with 10% padding.
```

### App-Specific Symbol
```
Generate an icon for a {app_type} app representing "{concept}".
Style: match {icon_library} aesthetic — {weight}px stroke, rounded caps, {size}x{size} grid.
Color: white on transparent.
Keep it simple — max 3-4 visual elements. Must be recognizable at 16x16.
```

## Font Selection Decision Tree

```
What's the app mood?
├── Professional/Corporate → IBM Plex Sans or Inter
├── Playful/Fun → Fredoka + Nunito or Baloo 2 + Comic Neue
├── Luxury/Premium → Playfair Display + Inter or Bodoni Moda + Jost
├── Techy/Modern → Space Grotesk + DM Sans or JetBrains Mono + IBM Plex
├── Calm/Wellness → Lora + Raleway or Figtree + Noto Sans
├── Bold/Marketing → Bebas Neue + Source Sans 3 or Anton + Epilogue
└── Neutral/Versatile → Plus Jakarta Sans or Outfit + Work Sans
```

## Integration Checklist

### Compose (KMP)
- [ ] SVG icons in `composeResources/drawable/`
- [ ] Font .ttf files in `composeResources/font/`
- [ ] `FontFamily` declarations in theme
- [ ] `Typography` object with all text styles
- [ ] Icon wrapper composable (optional)

### React / Next.js
- [ ] Install icon package (`lucide-react`)
- [ ] Google Fonts `@import` in global CSS or `next/font`
- [ ] Tailwind `fontFamily` config extension
- [ ] Icon component wrapper (optional)

### Flutter
- [ ] `flutter_svg` package for SVG icons
- [ ] `google_fonts` package for typography
- [ ] Theme `textTheme` configured
- [ ] Assets registered in `pubspec.yaml`

### SwiftUI
- [ ] SF Symbols for standard icons
- [ ] Custom SVGs in Assets.xcassets
- [ ] Font .ttf files in Xcode project
- [ ] Info.plist font registration
- [ ] Font extension helpers
