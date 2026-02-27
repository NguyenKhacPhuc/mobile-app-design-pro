# Mobile App Design System Reference

Detailed component specifications, platform guidelines, and patterns for mobile app UI design.

## Table of Contents
1. [Typography System](#typography-system)
2. [Color System](#color-system)
3. [Component Library](#component-library)
4. [Navigation Patterns](#navigation-patterns)
5. [Screen Templates](#screen-templates)
6. [Motion & Animation](#motion--animation)
7. [Platform Guidelines Summary](#platform-guidelines)
8. [Accessibility Requirements](#accessibility)

---

## Typography System

### Font Pairing Recommendations

Pick ONE pairing per app. Never reuse the same pairing across different designs.

| Category | Display Font | Body Font | Vibe |
|----------|-------------|-----------|------|
| Modern Luxury | Playfair Display | Source Sans 3 | Refined, editorial |
| Tech Forward | Space Grotesk | IBM Plex Sans | Clean, technical |
| Friendly | Nunito | Open Sans | Warm, approachable |
| Bold & Playful | Sora | DM Sans | Energetic, young |
| Elegant Minimal | Cormorant Garamond | Lato | Sophisticated |
| Neo Brutalist | Clash Display | Satoshi | Edgy, raw |
| Organic | Fraunces | Outfit | Natural, warm |
| Geometric | Plus Jakarta Sans | Inter | Structured (use sparingly) |
| Editorial | Newsreader | Work Sans | Magazine-like |
| Premium | Manrope | Geist | High-end SaaS |

### Type Scale (Mobile)

```
Display:    32-40px / Bold or Black
Heading 1:  28-32px / Bold
Heading 2:  22-24px / SemiBold
Heading 3:  18-20px / SemiBold
Body Large: 17px / Regular
Body:       15-16px / Regular
Caption:    13px / Regular or Medium
Overline:   11-12px / SemiBold, uppercase, tracked
```

### Line Heights
- Headings: 1.2-1.3
- Body text: 1.5-1.6
- Captions: 1.4

---

## Color System

### Building a Palette

Every app needs these color roles:

```
Primary:     Main brand color (buttons, active states, links)
Secondary:   Supporting accent (badges, highlights, secondary actions)
Background:  Main background (#FFFFFF light, #0A0A0A dark)
Surface:     Cards, sheets, elevated content
Text Primary:    Main text (#111827 light, #F9FAFB dark)
Text Secondary:  Supporting text (#6B7280 light, #9CA3AF dark)
Border:      Dividers, input borders (#E5E7EB light, #374151 dark)
Success:     #10B981 or similar green
Warning:     #F59E0B or similar amber
Error:       #EF4444 or similar red
```

### Palette Examples (avoid overusing any single one)

**Midnight Ocean**: Primary #0EA5E9, Secondary #06B6D4, BG #0F172A, Surface #1E293B
**Forest Calm**: Primary #059669, Secondary #D97706, BG #FAFAF9, Surface #FFFFFF
**Sunset Warm**: Primary #F97316, Secondary #EC4899, BG #FFFBEB, Surface #FFFFFF
**Electric Purple**: Primary #8B5CF6, Secondary #06B6D4, BG #030712, Surface #111827
**Coral Fresh**: Primary #FB7185, Secondary #38BDF8, BG #FFF1F2, Surface #FFFFFF
**Monochrome Bold**: Primary #18181B, Secondary #A1A1AA, BG #FAFAFA, Surface #FFFFFF
**Neo Mint**: Primary #34D399, Secondary #818CF8, BG #F0FDF4, Surface #FFFFFF

---

## Component Library

### Status Bar (Simulated)
```
Height: 54px (including notch area)
Content: Time (left), network indicators (right)
Font: 15px, semibold
Always match app header background color
```

### Navigation Bar / App Bar
```
Height: 56px (standard) or 96px (large title)
Large title: 34px bold, left-aligned, with 16px padding
Standard title: 17px semibold, centered
Back button: chevron-left icon + optional label
Action buttons: right-aligned, icon or text
```

### Bottom Tab Bar
```
Height: 56-64px (+ safe area padding ~34px)
Items: 3-5 tabs
Icon size: 24px
Label: 10-12px
Active state: filled icon + primary color
Inactive state: outlined icon + secondary text color
Background: surface color with top border or shadow
```

### Cards
```
Border radius: 12-16px
Padding: 16px
Shadow: 0 2px 8px rgba(0,0,0,0.08) (light) or border 1px solid rgba(255,255,255,0.06) (dark)
Image aspect ratio: 16:9 or 4:3 for thumbnails
Gap between cards: 12-16px
Full-width cards: margin 16px horizontal
```

### Buttons
```
Primary:   Full-width, 48-56px height, primary color bg, white text, 12px radius
Secondary: Full-width, 48-56px height, transparent bg, primary color border + text
Ghost:     No border, primary color text only
Icon:      40-48px circle or rounded square
FAB:       56px circle, elevated shadow, bottom-right positioning

All buttons: font-weight 600, 16px font-size, center-aligned
Press state: opacity 0.85 or slight scale(0.98)
```

### Input Fields
```
Height: 48-56px
Border: 1px solid border-color, 12px radius
Padding: 0 16px
Label: above field, 13-14px, medium weight
Placeholder: secondary text color
Focus: primary color border, optional glow
Error: error color border, error message below (13px)
```

### List Items
```
Height: 56-72px
Padding: 16px horizontal
Left: Avatar (40px) or Icon (24px)
Center: Title (16px medium) + Subtitle (14px regular, secondary color)
Right: Accessory (chevron, toggle, badge, timestamp)
Separator: 1px line, inset from left (after avatar/icon)
```

### Badges / Chips
```
Height: 28-32px
Padding: 8px 12px horizontal
Border radius: full (pill shape)
Font: 13px, medium
Variants: filled, outlined, subtle (tinted background)
```

### Toggle / Switch
```
Track: 51×31px (iOS style)
Thumb: 27px circle
Active: primary color track, white thumb
Inactive: gray track, white thumb
Transition: 200ms ease
```

### Bottom Sheet
```
Border radius: 20px top-left, top-right
Handle: 36×5px centered gray pill, 8px from top
Padding: 20px
Background: surface color
Overlay: rgba(0,0,0,0.4) backdrop
Animate: slide up from bottom, 300ms ease-out
```

### Avatar
```
Sizes: 32px (small), 40px (medium), 48px (large), 64px (profile)
Shape: circle
Fallback: initials on colored background
Border: optional 2px white border for overlapping avatars
```

---

## Navigation Patterns

### Tab Bar Navigation (Most Common)
- 3-5 items, icon + label
- Active state clearly distinguished
- Center item can be elevated (FAB-like) for primary action
- Example: Home, Search, Add, Messages, Profile

### Stack Navigation
- Push/pop screens with slide animation
- Back button (chevron-left) in top-left
- Swipe-from-left-edge to go back (iOS convention)

### Drawer Navigation
- Hamburger menu icon top-left
- Side panel slides in from left
- Use for apps with many sections (6+ destinations)
- Less common in modern apps — prefer tab bar

### Top Tabs
- Horizontal scrolling tab bar below the header
- For sub-categories within a screen
- Indicator line slides under active tab
- Example: Following / For You / Trending

---

## Screen Templates

### Home / Feed Screen
```
[Status Bar]
[Header: App Logo | Title          Search | Avatar]
[Category tabs or filters - horizontal scroll]
[Feed content - scrollable cards/posts]
[Bottom Tab Bar]
```

### Detail Screen
```
[Status Bar]
[← Back    Title    ⋯ More]
[Hero image or content]
[Title + metadata]
[Description / body content]
[Action buttons - sticky bottom]
```

### Profile Screen
```
[Status Bar]
[Settings ⚙️        Edit]
[Avatar - large, centered]
[Name + handle]
[Stats row: Posts | Followers | Following]
[Bio text]
[Action buttons: Follow | Message]
[Content tabs: Posts | Likes | Media]
[Grid or list content]
[Bottom Tab Bar]
```

### Search / Explore Screen
```
[Status Bar]
[Search bar - prominent, full-width]
[Recent searches or suggestions]
[Category grid or trending content]
[Bottom Tab Bar]
```

### Settings Screen
```
[Status Bar]
[← Back    Settings]
[Grouped list sections]
  [Section header]
  [Setting item + toggle/chevron]
  [Setting item + toggle/chevron]
  [Section header]
  [Setting item + value + chevron]
[Logout button - destructive red]
```

### Onboarding Screen
```
[Skip - top right]
[Illustration - centered, 40% of screen]
[Title - large, bold]
[Description - secondary text, centered]
[Pagination dots]
[Continue button - full width, bottom]
```

---

## Motion & Animation

### Transition Guidelines
- Screen transitions: 300ms ease-in-out
- Micro-interactions: 150-200ms
- Loading skeletons: pulse animation 1.5s infinite
- Tab switches: crossfade 200ms

### Key Animations to Include
1. **Tab bar**: Smooth icon/label transition on active change
2. **Like/Favorite**: Scale bounce (1 → 1.3 → 1) with color fill
3. **Pull to refresh**: Spinner rotation
4. **Card press**: Subtle scale(0.98) on press
5. **Screen enter**: Slide in from right (push) or fade up (modal)
6. **Toggle switch**: Smooth thumb slide with track color transition
7. **Skeleton loading**: Gradient shimmer animation

### CSS Animation Snippets
```css
/* Skeleton shimmer */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Like bounce */
@keyframes likeBounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

/* Fade up entrance */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## Platform Guidelines

### Apple Human Interface Guidelines (HIG) Summary
- San Francisco font family → use Plus Jakarta Sans or DM Sans as web alternatives
- Large title nav bars that shrink on scroll
- Bottom tab bars with SF Symbols-style icons
- Sheet presentations (bottom modals)
- Subtle transparency and blur effects
- Consistent 44pt minimum touch targets
- Swipe gestures for navigation
- Rounded rectangles everywhere (not perfect circles for app icons)

### Google Material Design 3 Summary
- Dynamic color from content or wallpaper
- Elevated surfaces with tonal color (not just shadows)
- FAB for primary actions
- Top app bar + bottom navigation
- 48dp minimum touch targets
- Ripple effect on touch
- Bold color usage with tonal palettes
- Rounded corners: small (8dp), medium (12dp), large (16dp), extra-large (28dp)

---

## Accessibility

### Touch Targets
- iOS minimum: 44×44 points
- Android minimum: 48×48 dp
- Recommended: 48×48 for all interactive elements
- Spacing between targets: minimum 8px

### Color Contrast
- Normal text: ≥ 4.5:1 ratio
- Large text (18px+ or 14px+ bold): ≥ 3:1 ratio
- Interactive elements: ≥ 3:1 against background

### Text Size
- Body text minimum: 15px (iOS) / 14sp (Android)
- Never rely solely on color to convey information
- Support Dynamic Type / font scaling where possible

### Screen Reader
- All images need alt text
- Interactive elements need descriptive labels
- Group related content semantically
- Announce state changes (loading, errors, success)

---

## Realistic Content Examples

Use these for placeholder data instead of Lorem ipsum:

### User Names
Sarah Chen, Marcus Johnson, Priya Patel, Alex Kim, Jordan Rivera, Emma Tanaka, David Okafor, Mia Andersson

### App-Specific Content

**Food Delivery**: "Spicy Tuna Poke Bowl — $14.50 · 25-35 min · ⭐ 4.8"
**Fitness**: "Morning HIIT Blast — 20 min · 320 cal · Intermediate"
**Finance**: "Netflix · Entertainment · -$15.99 · Oct 27"
**Social**: "Just explored the most incredible trail in Yosemite! 🏔️"
**E-commerce**: "Premium Wireless Headphones · $89.99 · ⭐ 4.6 (2.3k reviews)"
**Music**: "Midnight City — M83 · Hurry Up, We're Dreaming · 4:03"
**Travel**: "Tokyo, Japan · Mar 15-22 · 2 travelers · From $1,249"
