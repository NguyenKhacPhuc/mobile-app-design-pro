---
name: mobile-app-design-pro
description: "Design professional, production-grade mobile app UI with intelligent theme generation. Combines mobile-first design philosophy with an AI-powered design system engine (inspired by UI/UX Pro Max). Use this skill whenever the user asks to design a mobile app, create app screens, build a mobile UI, mockup phone screens, or anything related to mobile application interface design. Triggers include: 'mobile app', 'app design', 'app UI', 'phone screen', 'iOS app', 'Android app', 'app mockup', 'app prototype', 'mobile interface', 'app wireframe', 'app layout', 'design an app', 'build me an app', 'SwiftUI', 'React Native', 'Flutter', 'Jetpack Compose'. Also trigger when users upload app screenshots to recreate or improve, describe a mobile app idea to visualize, or casually mention 'I have an app idea' or 'what would this look like as an app'. Covers 67 visual styles, 96 color palettes, 57 font pairings, and 100 industry-specific reasoning rules for generating perfect themes automatically."
---

# Mobile App Design Pro

Create stunning, professional mobile app UIs with **intelligent design system generation**. This skill combines mobile-first UX philosophy with an AI-powered theme engine that automatically selects the perfect style, colors, typography, and patterns based on your app's industry and purpose.

## When This Skill Is Read

Before writing ANY code:
1. Read this entire file
2. Read `./references/design-system.md` for component specs and platform guidelines
3. Read `./references/theme-engine.md` for the complete style/color/typography database
4. Read `./references/ux-animation.md` for animation patterns, micro-interactions, and motion design
5. Read `./asset-manager/SKILL.md` for icon and font asset management (CDN lookup, font fetching, AI icon generation)

---

## PHASE 1: INTELLIGENT DESIGN SYSTEM GENERATION

Before designing a single pixel, generate a complete design system. This is the core differentiator — no generic designs.

### Step 1: Analyze the Request

Extract from the user's request:
- **Product type**: Social, productivity, e-commerce, health, finance, entertainment, education, food delivery, travel, fitness, messaging, music, etc.
- **Industry keywords**: wellness, fintech, crypto, gaming, luxury, minimal, etc.
- **Target platform**: iOS, Android, or cross-platform
- **Mood/tone**: Professional, playful, calm, bold, luxurious, energetic, minimal
- **Stack preference**: React Native, Flutter, SwiftUI, Jetpack Compose, or default (React artifact)

### Step 2: Run the Design System Reasoning Engine

Use the **100 Industry-Specific Reasoning Rules** (in `./references/theme-engine.md`) to auto-generate:

```
┌──────────────────────────────────────────────────────────┐
│  DESIGN SYSTEM for [App Name]                            │
├──────────────────────────────────────────────────────────┤
│  CATEGORY:    [matched product type]                     │
│  PATTERN:     [recommended screen layout pattern]        │
│  STYLE:       [from 67 available styles]                 │
│                                                          │
│  COLORS:                                                 │
│    Primary:    [hex] ([name])                            │
│    Secondary:  [hex] ([name])                            │
│    Accent:     [hex] ([name])                            │
│    Background: [hex]                                     │
│    Surface:    [hex]                                     │
│    Text:       [hex]                                     │
│                                                          │
│  TYPOGRAPHY:  [Display Font] / [Body Font]               │
│    Mood: [personality description]                       │
│    Google Fonts URL: [import link]                       │
│                                                          │
│  ANIMATIONS & MOTION (from ux-animation.md):             │
│    Screen transitions: [type + duration]                 │
│    Micro-interactions: [button, toggle, like, loading]   │
│    Easing: [curve recommendation]                        │
│    Gestures: [swipe, pull-to-refresh, long-press]        │
│                                                          │
│  ANTI-PATTERNS:                                          │
│    [what to specifically avoid for this industry]        │
│                                                          │
│  PRE-DELIVERY CHECKLIST:                                 │
│    [ ] Touch targets ≥ 44pt / 48dp                       │
│    [ ] No emoji as icons (use SVG/Lucide)               │
│    [ ] cursor-pointer on all clickable                  │
│    [ ] Hover/press states with transitions              │
│    [ ] Text contrast ≥ 4.5:1                             │
│    [ ] Consistent spacing on 8px grid                   │
│    [ ] Realistic content (no Lorem ipsum)               │
│    [ ] Phone frame renders correctly                    │
└──────────────────────────────────────────────────────────┘
```

### Step 3: Generate Asset Plan

After design system generation, use `asset-manager` to resolve icons and fonts:

1. **Icon plan**: Run `generate-asset-plan.mjs` to map UI elements to real icons (Lucide/Material/Phosphor). Fetch via `fetch-icons.mjs`.
2. **Font plan**: Use `./asset-manager/references/font-pairings.md` to validate/enhance the theme engine's font recommendation. Fetch via `fetch-fonts.mjs`.
3. **Custom icons**: For app-specific icons not in any CDN, mark for AI generation via `ai-multimodal` skill (Imagen 4).

```bash
# Generate asset plan from app description
node ./asset-manager/scripts/generate-asset-plan.mjs --app "<app description>" --framework <target>
# Fetch resolved icons
node ./asset-manager/scripts/fetch-icons.mjs --icons "heart,star,home,..." --source lucide --output ./assets/icons/
# Fetch fonts
node ./asset-manager/scripts/fetch-fonts.mjs --fonts "Space Grotesk,DM Sans" --output ./fonts/ --format <target>
```

**CRITICAL**: Present this design system to the user BEFORE writing code. Let them confirm or adjust.

---

## PHASE 2: MOBILE DESIGN PHILOSOPHY

### Core Principles

1. **Thumb-Driven Design**: 85% of users operate phones one-handed. Primary actions go in the bottom 1/3 of the screen (the "thumb zone").
2. **Glanceable Content**: Users spend seconds per screen. Visual hierarchy must be immediate and obvious.
3. **Clarity Over Complexity**: Every element earns its place. Remove anything that doesn't serve the user's immediate goal.
4. **3-Click Rule**: Users should reach any part of the app in ≤ 3 taps.
5. **Reduce Cognitive Load**: Fewer words, grouped items, generous whitespace, one primary action per screen.
6. **Platform Consistency**: Follow iOS HIG or Material Design conventions — users expect familiar patterns.

### Thumb Zone Layout

```
┌─────────────────────┐
│   HARD TO REACH     │  ← Status bar, search, profile icon
│   (top 20%)         │
│                     │
│   EASY TO REACH     │  ← Scrollable content, cards, feed
│   (middle 50%)      │
│                     │
│   NATURAL ZONE      │  ← Tab bar, FAB, primary CTAs
│   (bottom 30%)      │  ← THIS IS WHERE KEY ACTIONS GO
└─────────────────────┘
```

### Screen Structure (Every Screen)

```
┌─────────────────────┐
│ 9:41          ▂▂ ▂▂ │  Status bar (54px)
├─────────────────────┤
│ ← Title       ⚙ ⋯  │  Nav bar (56px standard / 96px large title)
├─────────────────────┤
│                     │
│   Scrollable        │  Content area (flex, scrollable)
│   Content           │
│   Area              │
│                     │
├─────────────────────┤
│ 🏠  🔍  ➕  💬  👤 │  Tab bar (56-64px + 34px safe area)
└─────────────────────┘
```

---

## PHASE 3: BUILD THE REACT ARTIFACT

### Phone Frame (REQUIRED)

ALWAYS wrap output in a realistic phone frame. The user must see a device, not a raw webpage.

```jsx
// Outer container - centers the phone on screen
<div style={{
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  minHeight: '100vh', background: '#f5f5f5', padding: 20
}}>
  {/* Phone device */}
  <div style={{
    width: 375, height: 812,
    borderRadius: 44,
    border: '8px solid #1a1a1a',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
    background: designSystem.colors.background
  }}>
    {/* Dynamic Island / Notch */}
    <div style={{
      position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
      width: 120, height: 32, borderRadius: 20, background: '#000', zIndex: 100
    }} />

    {/* Status Bar */}
    <div style={{
      height: 54, padding: '14px 24px 0',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: designSystem.colors.background
    }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: designSystem.colors.text }}>9:41</span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        {/* Signal + WiFi + Battery */}
      </div>
    </div>

    {/* App Content - Scrollable */}
    <div style={{
      height: 'calc(100% - 54px - 90px)',
      overflowY: 'auto', overflowX: 'hidden'
    }}>
      {/* Render active screen here */}
    </div>

    {/* Bottom Tab Bar */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      height: 90, // 56px bar + 34px safe area
      background: designSystem.colors.surface,
      borderTop: `1px solid ${designSystem.colors.border}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start',
      paddingTop: 8
    }}>
      {tabs.map(tab => (
        <TabItem key={tab.id} active={activeTab === tab.id} />
      ))}
    </div>
  </div>
</div>
```

### Implementation Rules

1. **Font Loading**: Always import Google Fonts via `<style>` tag with `@import url(...)`. Use the Google Fonts URL from the asset plan.
2. **Icons**: Use Lucide React icons (`lucide-react` CDN) or inline SVGs from the asset plan. NEVER use emoji as icons.
3. **Design Tokens**: Define ALL colors, spacing, fonts as a `designSystem` object at the top
4. **State**: Use `useState` for activeTab, currentScreen, form inputs, toggles, liked items
5. **Navigation**: Working tab bar switching between 3-5 screens minimum
6. **Animations**: CSS transitions on tab changes, button presses (scale 0.97), toggles, likes
7. **Scroll**: Content scrolls independently inside phone frame
8. **Realistic Data**: Use real-sounding names, prices, ratings, timestamps — never Lorem ipsum
9. **Microinteractions**: Like/heart bounce, toggle slides, skeleton loading states
10. **Multiple Screens**: Home, Detail/Feed, Search/Explore, Profile, Settings minimum
11. **Touch Feedback**: Active/pressed states on all interactive elements

### Design Token Structure

```jsx
const designSystem = {
  colors: {
    primary: '#...',      // From theme engine
    secondary: '#...',
    accent: '#...',
    background: '#...',
    surface: '#...',
    text: '#...',
    textSecondary: '#...',
    border: '#...',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  fonts: {
    display: "'Display Font', sans-serif",
    body: "'Body Font', sans-serif",
  },
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 },
  radius: { sm: 8, md: 12, lg: 16, xl: 24, full: 9999 },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 4px 12px rgba(0,0,0,0.1)',
    lg: '0 12px 32px rgba(0,0,0,0.15)',
  }
};
```

---

## PHASE 4: VISUAL POLISH & ANTI-PATTERNS

### Pre-Delivery Checklist

- [ ] Design system was generated and confirmed
- [ ] No generic Inter/Roboto/Arial fonts
- [ ] Consistent 8px grid spacing throughout
- [ ] All touch targets ≥ 44px (iOS) / 48px (Android)
- [ ] Bottom tab bar is functional and styled
- [ ] Content scrolls properly inside phone frame
- [ ] Status bar + Dynamic Island looks realistic
- [ ] Colors are cohesive — from the generated design system
- [ ] At least one "wow" visual element per screen
- [ ] Microinteractions on like, toggle, button press
- [ ] Realistic placeholder content everywhere
- [ ] No emojis as icons — use Lucide or SVG paths
- [ ] Press/active states on all interactive elements
- [ ] Transitions are smooth (150-300ms ease)
- [ ] Visual hierarchy is clear on every screen

### Universal Anti-Patterns (NEVER DO)

- ❌ Purple gradients on white backgrounds (AI cliché #1)
- ❌ Inter, Roboto, or Arial as display font
- ❌ No phone frame — output MUST look like a real device
- ❌ Navigation only at the top (always use bottom tab bar)
- ❌ Tiny touch targets (< 44px)
- ❌ Lorem ipsum or "Test User" placeholder text
- ❌ All screens looking identical
- ❌ Cramming 10+ elements on one screen
- ❌ Using emojis as icons
- ❌ Missing status bar or safe area padding
- ❌ Cookie-cutter card layouts with no personality
- ❌ Flat, lifeless screens with no depth or motion

### Industry-Specific Anti-Patterns

Refer to the reasoning rules in `./references/theme-engine.md`. Examples:
- **Finance/Banking**: No bright neon colors, no playful fonts, no dark mode with low contrast
- **Healthcare**: No harsh reds (triggers anxiety), no dense layouts, no tiny fonts
- **Kids/Education**: No dark themes, no complex navigation, no small touch targets
- **Luxury/Fashion**: No generic stock photos, no flat design, no system fonts
- **Food Delivery**: No cold color palettes, no complex checkout flows

---

## Output Format

The final output is a **single `.jsx` React artifact** that:
1. Presents the generated design system (as a comment or console log)
2. Renders a realistic phone frame with Dynamic Island
3. Contains 3-5+ navigable screens via bottom tab bar
4. Uses distinctive typography and colors from the theme engine
5. Has working navigation, animations, and microinteractions
6. Looks like it was designed by a senior product designer at a top studio

**Remember**: Claude is capable of extraordinary creative work. Every mobile app design should be intentional, polished, and memorable — never generic.
