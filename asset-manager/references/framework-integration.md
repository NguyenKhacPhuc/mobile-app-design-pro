# Framework Integration Reference

## Icon Integration

### Jetpack Compose (Kotlin Multiplatform)
```kotlin
// Using Compose resources (recommended for KMP)
// Place SVGs in composeApp/src/commonMain/composeResources/drawable/
import org.jetbrains.compose.resources.painterResource
import myapp.composeapp.generated.resources.Res
import myapp.composeapp.generated.resources.ic_heart

Icon(
    painter = painterResource(Res.drawable.ic_heart),
    contentDescription = "Heart",
    tint = MaterialTheme.colorScheme.primary
)
```

### React / Next.js
```tsx
// Using lucide-react (recommended)
import { Heart, Star, Home } from 'lucide-react'

<Heart size={24} color="currentColor" strokeWidth={2} />

// Using SVG files directly
import HeartIcon from './icons/heart.svg'
<HeartIcon className="w-6 h-6 text-primary" />
```

### Flutter
```dart
// Using flutter_svg package
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.asset(
  'assets/icons/heart.svg',
  width: 24,
  height: 24,
  colorFilter: ColorFilter.mode(Colors.red, BlendMode.srcIn),
)
```

### SwiftUI
```swift
// Using SF Symbols (preferred on Apple platforms)
Image(systemName: "heart.fill")
    .font(.system(size: 24))
    .foregroundColor(.red)

// Using custom SVG (add to Assets.xcassets)
Image("custom-heart")
    .resizable()
    .frame(width: 24, height: 24)
```

---

## Font Integration

### Jetpack Compose (Kotlin)
```kotlin
// 1. Place .ttf files in composeApp/src/commonMain/composeResources/font/
// 2. Create Typography object:

val SpaceGrotesk = FontFamily(
    Font(Res.font.space_grotesk_regular, FontWeight.Normal),
    Font(Res.font.space_grotesk_medium, FontWeight.Medium),
    Font(Res.font.space_grotesk_semibold, FontWeight.SemiBold),
    Font(Res.font.space_grotesk_bold, FontWeight.Bold),
)

val DMSans = FontFamily(
    Font(Res.font.dm_sans_regular, FontWeight.Normal),
    Font(Res.font.dm_sans_medium, FontWeight.Medium),
    Font(Res.font.dm_sans_bold, FontWeight.Bold),
)

val AppTypography = Typography(
    displayLarge = TextStyle(fontFamily = SpaceGrotesk, fontWeight = FontWeight.Bold, fontSize = 36.sp),
    headlineMedium = TextStyle(fontFamily = SpaceGrotesk, fontWeight = FontWeight.SemiBold, fontSize = 24.sp),
    bodyLarge = TextStyle(fontFamily = DMSans, fontWeight = FontWeight.Normal, fontSize = 16.sp),
    bodyMedium = TextStyle(fontFamily = DMSans, fontWeight = FontWeight.Normal, fontSize = 14.sp),
    labelLarge = TextStyle(fontFamily = DMSans, fontWeight = FontWeight.Medium, fontSize = 14.sp),
)
```

### CSS / HTML
```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');

:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
body { font-family: var(--font-body); }
```

### Tailwind CSS
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
}
```
```html
<h1 class="font-heading text-4xl font-bold">Title</h1>
<p class="font-body text-base">Body text</p>
```

### Flutter
```dart
// pubspec.yaml — add google_fonts package
// dependencies:
//   google_fonts: ^6.0.0

import 'package:google_fonts/google_fonts.dart';

final appTheme = ThemeData(
  textTheme: TextTheme(
    displayLarge: GoogleFonts.spaceGrotesk(fontWeight: FontWeight.w700, fontSize: 36),
    headlineMedium: GoogleFonts.spaceGrotesk(fontWeight: FontWeight.w600, fontSize: 24),
    bodyLarge: GoogleFonts.dmSans(fontWeight: FontWeight.w400, fontSize: 16),
    bodyMedium: GoogleFonts.dmSans(fontWeight: FontWeight.w400, fontSize: 14),
  ),
);
```

### SwiftUI
```swift
// 1. Add .ttf files to Xcode project
// 2. Register in Info.plist under "Fonts provided by application"

extension Font {
    static func spaceGrotesk(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
        switch weight {
        case .bold: return .custom("SpaceGrotesk-Bold", size: size)
        case .semibold: return .custom("SpaceGrotesk-SemiBold", size: size)
        case .medium: return .custom("SpaceGrotesk-Medium", size: size)
        default: return .custom("SpaceGrotesk-Regular", size: size)
        }
    }

    static func dmSans(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
        switch weight {
        case .bold: return .custom("DMSans-Bold", size: size)
        case .medium: return .custom("DMSans-Medium", size: size)
        default: return .custom("DMSans-Regular", size: size)
        }
    }
}

Text("Hello")
    .font(.spaceGrotesk(24, weight: .bold))
```
