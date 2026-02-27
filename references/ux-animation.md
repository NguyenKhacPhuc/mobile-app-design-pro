# UX Philosophy & Animation Reference

Comprehensive mobile UX philosophy, interaction psychology, and animation principles for crafting exceptional mobile app experiences. This reference combines modern UX best practices with Disney's foundational animation principles adapted for mobile UI.

## Table of Contents
1. [UX Philosophy](#ux-philosophy)
2. [Cognitive Psychology Laws for Mobile](#cognitive-laws)
3. [Animation Philosophy](#animation-philosophy)
4. [Disney's 12 Principles Applied to Mobile UI](#disney-12-principles)
5. [Animation Types & Timing](#animation-types)
6. [Platform-Specific Motion Guidelines](#platform-motion)
7. [Animation Implementation Guide](#implementation)
8. [UX Anti-Patterns](#ux-anti-patterns)

---

## UX Philosophy

### The UX Honeycomb (Peter Morville)

Every mobile app must be:
- **Useful**: Fulfills real user needs and goals
- **Usable**: Easy and self-descriptive to operate
- **Desirable**: Evokes positive emotions — users WANT to use it
- **Findable**: Navigation is intuitive; important info found quickly
- **Accessible**: Usable by people with disabilities
- **Credible**: Users trust the app and its data

### Core UX Philosophies

**1. Progressive Disclosure**
Don't show everything at once. Reveal features and information as the user needs them. Reduces cognitive load and prevents decision paralysis.
- Duolingo: unlocks lessons progressively
- LinkedIn: guides profile completion step-by-step
- App settings: grouped into sections, details on tap

**2. Mobile-First Thinking**
Start with the smallest screen. Prioritize ruthlessly. If a feature doesn't earn its place on a 375px screen, question whether it belongs at all. This forces clarity and focus.

**3. Emotional Design (Don Norman's 3 Levels)**
- **Visceral**: First impression — colors, shapes, visual appeal (< 50ms judgment)
- **Behavioral**: Usability, effectiveness, ease of completing tasks
- **Reflective**: How users feel about the app after use — pride, satisfaction, identity

**4. The "Invisible Design" Principle**
The best design is invisible. Users shouldn't notice the design — they should just accomplish their goals effortlessly. When design calls attention to itself, something is wrong.

**5. Microcopy Matters**
Words on buttons, tooltips, error messages, and empty states define the experience as much as layout.
- Clarity over cleverness: "Check your connection and try again" > "Oops! Something went wrong"
- Supportive tone builds trust
- Action-oriented labels: "Place Order" > "Submit"

### User Behavior Realities

- 77% of apps lose their daily active users within 3 days of install
- Users decide to keep or delete an app in seconds
- 85% of phone usage is one-handed (thumb zone is critical)
- 95% of users miss some parts of any screen (visual hierarchy is essential)
- A 1-second load delay reduces conversions by 7%
- Users scan in F-pattern or Z-pattern — place key elements on these paths

---

## Cognitive Laws

### Hick's Law
Decision time increases with the number of choices. Reduce options on each screen. Instagram uses 5 bottom tabs — users never need to search or guess.

### Fitts's Law
Larger, closer targets are easier and faster to tap. Make primary actions big and within thumb reach. Secondary actions can be smaller and higher.

### Miller's Law
Short-term memory holds ~7 (±2) items. Keep navigation items, form fields per screen, and visible options within this range.

### Gestalt Principles
- **Proximity**: Items near each other are perceived as related
- **Similarity**: Items that look alike are grouped mentally
- **Closure**: Users complete incomplete shapes in their minds
- **Continuity**: Eye follows lines and curves naturally

### Kano Model (Feature Prioritization)
- **Basic**: Must-have features (login, core function) — absence causes frustration
- **Performance**: Better execution = more satisfaction (speed, search quality)
- **Delight**: Unexpected pleasures (animations, easter eggs, personalization)

### Jakob's Law
Users spend most time on OTHER apps. They expect your app to work like the ones they already know. Follow platform conventions.

### Doherty Threshold
Productivity soars when response time < 400ms. Keep interactions feeling instant. Use optimistic UI updates and skeleton screens.

---

## Animation Philosophy

### The Golden Rule
**Animation must be functional FIRST, decorative second.** Every motion must serve a purpose: guide, inform, feedback, or delight. If you can't articulate why an animation exists, remove it.

### Four Pillars of Mobile Animation

**1. Clarity**
Animation communicates a clear message: state change, navigation transition, or call to action. Users should understand what happened and what to do next.

**2. Continuity**
Smooth flow between screens, elements, and actions. Never break the user's mental model. Motion shows spatial relationships — where things come from and where they go.

**3. Context**
Animation respects the environment, content, and user expectations. A banking app uses refined, subtle motion. A gaming app uses energetic, exaggerated motion. Match the tone.

**4. Feedback**
Immediate, relevant response to user input. Touch, gesture, voice — every action gets a reaction. Without feedback, users feel lost and uncertain.

### When Animation Helps
- Explaining spatial relationships between screens
- Providing feedback on user actions
- Guiding attention to important changes
- Reducing perceived wait time
- Teaching new interactions (onboarding)
- Adding personality and emotional connection
- Communicating state changes (loading → loaded, error, success)

### When Animation Hurts
- Slowing down experienced users
- Distracting from the primary task
- Causing motion sickness (excessive parallax, spinning)
- Adding latency to time-sensitive actions
- Running poorly on low-end devices
- Being decorative without functional value

---

## Disney's 12 Principles Applied to Mobile UI

Disney animators Frank Thomas and Ollie Johnston published these in "The Illusion of Life" (1981). Originally for film animation, they are the foundation of all motion design — including mobile UI.

### 1. Squash and Stretch
**Film**: Objects deform to show weight, flexibility, and impact
**Mobile UI**: Buttons compress on tap (squash) and expand on release (stretch). Cards flex slightly when dragged. Pull-to-refresh stretches content. Makes UI feel tactile and physical.
```css
.button:active { transform: scale(0.95); }
.button { transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1); }
```

### 2. Anticipation
**Film**: Character winds up before jumping
**Mobile UI**: Hover/press states preview what will happen. Drag hints reveal what completing the gesture will do. A slight pull-back before a card slides away. Swipe previews showing peeking content.
```css
.card-swipe { transform: translateX(-8px); } /* slight pull before swipe */
```

### 3. Staging
**Film**: Directing the viewer's eye to what matters
**Mobile UI**: Dim backgrounds when modals appear. Animate only the element that changed. Use motion to guide focus — one animation at a time, not competing chaos. Bottom sheets darken the backdrop.

### 4. Straight Ahead vs Pose to Pose
**Film**: Frame-by-frame vs keyframe animation
**Mobile UI**: Pose-to-pose maps to defining key states (default → hover → active → complete) and letting CSS/JS interpolate between them. Figma's Smart Animate works this way.

### 5. Follow Through & Overlapping Action
**Film**: Hair, clothes keep moving after body stops
**Mobile UI**: When a list scrolls to stop, items have slight momentum overshoot. Staggered animations — elements don't all stop at once. Card parallax effects where image and text move at different rates.
```css
.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
```

### 6. Slow In & Slow Out (Easing)
**Film**: Objects accelerate and decelerate naturally
**Mobile UI**: NEVER use linear timing. Always use easing curves. Objects enter slowly, speed up, then decelerate to stop — like real physics.
```
ease-in:       slow start → fast end     (elements leaving)
ease-out:      fast start → slow end     (elements entering)
ease-in-out:   slow → fast → slow        (elements moving between states)

CSS: cubic-bezier(0.4, 0, 0.2, 1)  — Material Design standard
CSS: cubic-bezier(0.25, 0.1, 0.25, 1)  — iOS standard
```

### 7. Arcs
**Film**: Natural movement follows curved paths
**Mobile UI**: Dragged items follow arc trajectories, not straight lines. Swiped cards arc away naturally. Expanding FABs grow along a curve. Avoid purely linear x/y movements.

### 8. Secondary Action
**Film**: Supporting actions that enhance the main one
**Mobile UI**: When a heart icon fills (primary), small particles burst outward (secondary). When a toast notification appears, a subtle shadow shifts underneath. Success checkmark with a confetti burst.

### 9. Timing
**Film**: Number of frames determines speed and mood
**Mobile UI**: Timing defines personality. Fast = snappy, confident. Slow = elegant, deliberate.
```
Feedback (tap, toggle):     100–200ms  — instant
Simple transitions:         200–300ms  — smooth
Complex transitions:        300–500ms  — deliberate
Page transitions:           300–400ms  — navigation
Decorative/delight:         500–800ms  — memorable
NEVER exceed 1000ms for functional animation
```

### 10. Exaggeration
**Film**: Push movements beyond realism for impact
**Mobile UI**: Use sparingly but powerfully. A like button that scales to 130% before settling. A delete action with dramatic slide-out. Shake animation for errors. Pull-to-refresh that stretches beyond natural limits.

### 11. Solid Drawing
**Film**: Maintaining volume and weight consistency
**Mobile UI**: Elements must feel grounded and solid. Shadows should be consistent with a single light source. 3D transforms should maintain perspective. Don't let elements feel floaty or weightless.

### 12. Appeal
**Film**: Characters are charismatic and engaging
**Mobile UI**: The overall charm of the interface. Delightful loading animations, witty empty states, personality in microinteractions. The difference between a generic app and one users love. Appeal creates emotional connection.

---

## Animation Types

### Functional Animations (REQUIRED)
| Type | Purpose | Timing | Example |
|------|---------|--------|---------|
| Feedback | Confirm user action | 100-200ms | Button press, toggle switch |
| Transition | Show spatial relationship | 200-400ms | Screen push/pop, tab switch |
| Loading | Reduce perceived wait | Continuous | Skeleton shimmer, spinner |
| Progress | Show completion status | Continuous | Progress bar, step indicator |
| State Change | Indicate new state | 150-300ms | Error shake, success check |

### Enhance Animations (RECOMMENDED)
| Type | Purpose | Timing | Example |
|------|---------|--------|---------|
| Attention | Direct focus | 300-500ms | Badge pulse, notification dot |
| Orientation | Show hierarchy | 200-300ms | Expand/collapse, accordion |
| Stagger | Create rhythm | 50ms delays | List item entrance cascade |
| Parallax | Create depth | Scroll-driven | Header image vs content speed |

### Delight Animations (OPTIONAL — use sparingly)
| Type | Purpose | Timing | Example |
|------|---------|--------|---------|
| Celebration | Reward achievement | 500-1000ms | Confetti, achievement unlock |
| Personality | Brand expression | 300-600ms | Animated logo, mascot wave |
| Easter Egg | Surprise & delight | Varies | Hidden interaction rewards |
| Ambient | Create atmosphere | Continuous, subtle | Floating particles, gradient shift |

---

## Platform Motion

### iOS Motion Philosophy
**Core**: Deference, clarity, depth
- Transitions feel physical — screens slide in from right, modals rise from bottom
- Spring animations with natural damping (not mechanical ease-in-out)
- Blur effects (backdrop-filter) during transitions
- Interactive dismissal — swipe down to dismiss with velocity tracking
- Shared element transitions — tapped item expands into detail view
- Rubber-band overscroll at list boundaries
```
iOS Spring: damping ratio 0.7-0.85, response 0.3-0.5s
```

### Android / Material Motion Philosophy
**Core**: Authentic motion, adaptive design, meaningful feedback
- Container transforms — element morphs into its detail screen
- Shared axis transitions — related screens slide along common axis
- Fade through — unrelated screens crossfade
- Ripple touch feedback on all interactive elements
- Elevation changes with shadow animation
- Staggered entrance with consistent direction
```
Material Standard: cubic-bezier(0.2, 0, 0, 1) duration 300ms
Material Emphasized: cubic-bezier(0.2, 0, 0, 1) duration 500ms
Material Decelerate: cubic-bezier(0, 0, 0, 1) duration 250ms
```

---

## Implementation

### CSS Animation Snippets for React Artifacts

```css
/* ─── EASING CURVES ─── */
:root {
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ─── FEEDBACK ─── */
/* Button press */
.btn:active { transform: scale(0.96); }
.btn { transition: transform 120ms var(--ease-standard); }

/* Toggle switch */
.toggle-thumb {
  transition: transform 200ms var(--ease-spring);
}

/* Like bounce */
@keyframes likeBounce {
  0% { transform: scale(1); }
  30% { transform: scale(1.3); }
  50% { transform: scale(0.9); }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* ─── TRANSITIONS ─── */
/* Screen slide */
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Fade up entrance */
@keyframes fadeUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Bottom sheet */
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

/* ─── LOADING ─── */
/* Skeleton shimmer */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.skeleton {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Pulse (notification dot) */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.7; }
}

/* ─── STAGGER PATTERN ─── */
/* Apply to list items for cascading entrance */
.stagger-item {
  animation: fadeUp 400ms var(--ease-decelerate) both;
}
.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 60ms; }
.stagger-item:nth-child(3) { animation-delay: 120ms; }
.stagger-item:nth-child(4) { animation-delay: 180ms; }
.stagger-item:nth-child(5) { animation-delay: 240ms; }

/* ─── DELIGHT ─── */
/* Success checkmark draw */
@keyframes drawCheck {
  0% { stroke-dashoffset: 24; }
  100% { stroke-dashoffset: 0; }
}

/* Error shake */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}

/* Confetti burst (use with JS for particle positions) */
@keyframes confettiFall {
  0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100px) rotate(720deg); opacity: 0; }
}

/* ─── ACCESSIBILITY ─── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### React Animation Patterns

```jsx
// Stagger entrance for lists
{items.map((item, i) => (
  <div key={item.id} style={{
    animation: `fadeUp 400ms cubic-bezier(0,0,0.2,1) ${i * 60}ms both`,
  }}>
    {/* item content */}
  </div>
))}

// Press feedback with state
const [pressed, setPressed] = useState(null);
<button
  onMouseDown={() => setPressed(id)}
  onMouseUp={() => setPressed(null)}
  onMouseLeave={() => setPressed(null)}
  style={{
    transform: pressed === id ? 'scale(0.96)' : 'scale(1)',
    transition: 'transform 120ms cubic-bezier(0.4,0,0.2,1)',
  }}
/>

// Like bounce with state
const [likeAnim, setLikeAnim] = useState(null);
const handleLike = (id) => {
  setLikeAnim(id);
  setTimeout(() => setLikeAnim(null), 500);
  // toggle favorite logic
};
<div style={{
  animation: likeAnim === id ? 'likeBounce 500ms ease' : 'none',
}} />
```

---

## UX Anti-Patterns

### Navigation Anti-Patterns
- Navigation at top only (no bottom tab bar)
- More than 5 tabs in bottom navigation
- Deep hierarchies (> 3 levels)
- Inconsistent back button behavior
- Hidden hamburger menus as primary navigation

### Animation Anti-Patterns
- Linear timing curves (robotic feel)
- Animations > 1000ms for functional UI
- Too many simultaneous animations (competing for attention)
- Animations that block user input
- No prefers-reduced-motion support
- Decorative animations on loading-critical paths
- Bouncing/spinning elements with no purpose

### Interaction Anti-Patterns
- Touch targets < 44px (iOS) / 48dp (Android)
- No press/active state feedback
- No loading indicator during async operations
- Destructive actions without confirmation
- Form fields that don't show validation inline
- Pull-to-refresh with no visual indicator

### Visual Anti-Patterns
- Lorem ipsum or "Test User" placeholder text
- Using emojis instead of proper icons
- Low contrast text (< 4.5:1 ratio)
- Identical screens with no visual variation
- Overcrowded layouts with no whitespace
- Generic AI aesthetic (purple gradient, Inter font)

### Performance Anti-Patterns
- Heavy animations on scroll (jank)
- Large uncompressed images
- No skeleton screens during loading
- Synchronous blocking operations
- Animations using layout properties (width/height) instead of transforms

---

## Gesture Design

### The Gesture Hierarchy
Gestures should be layered by complexity and discoverability:

| Tier | Gesture | Discoverability | Use For |
|------|---------|----------------|---------|
| 1 - Universal | Tap | Obvious | Primary actions, selections |
| 1 - Universal | Scroll | Obvious | Content browsing |
| 2 - Expected | Swipe L/R | High | Navigation, dismiss, reveal actions |
| 2 - Expected | Pull down | High | Refresh content |
| 3 - Learned | Long press | Medium | Context menus, edit mode |
| 3 - Learned | Double tap | Medium | Zoom, like/favorite |
| 4 - Power User | Pinch | Medium | Zoom in/out |
| 5 - Hidden | Multi-finger | Low | Avoid for core features |

### Gesture Design Principles

**1. Respect Muscle Memory**
Users carry gesture patterns from every other app. A swipe-left in your app should not do the opposite of what Gmail or Messages does. Fight the urge to be "different" with core gestures.

**2. One Gesture = One Action (per context)**
Don't overload a single gesture with multiple meanings. If swipe-left deletes in a list, it should delete everywhere in that list — not archive in one section and delete in another.

**3. Always Provide Visual Affordances**
Hidden gestures are dead gestures. Show hints:
- Peeking content at edges (swipeable cards)
- Subtle bounce at scroll boundaries (pull-to-refresh)
- Drag handles (reorder lists)
- Tutorial animations on first use

**4. Gesture + Feedback = Trust**
Every gesture must produce immediate feedback:
- Visual: Element moves with finger, color change, animation
- Haptic: Vibration on threshold cross (iOS Taptic Engine)
- Audio: Subtle sound cues (optional, contextual)

**5. Allow Reversal**
If a swipe gesture triggers a destructive action (delete, archive), provide an undo mechanism. Threshold-based gestures should snap back if the user doesn't commit.

### Gesture Velocity Matters
Material Design distinguishes three speeds:
- **Drag**: Slow, controlled, typically has on-screen target (rearranging items)
- **Swipe**: Fast, gross movement, typically no on-screen target (dismiss)
- **Fling**: Very fast, momentum-based (scroll continues after finger lifts)

### Platform-Specific Gestures

**iOS**:
- Swipe from left edge → Back navigation
- Swipe down on modal → Interactive dismiss
- Long press → Context menu (3D Touch / Haptic Touch)
- Pull down from top → Notification Center / widgets

**Android**:
- Bottom edge swipe up → Home
- Bottom edge swipe up + hold → App switcher
- Back gesture from either edge
- Long press → Select/context menu

---

## App States Design

### The 5 Essential States
Every screen in your app exists in one of these states. Design ALL of them — not just the "happy path."

### 1. Loading State
The first thing users see. Make it feel fast.

**Skeleton Screens** (preferred over spinners):
- Show content-shaped placeholder blocks that shimmer
- Preserves spatial layout so content doesn't "jump" when loaded
- Reduces perceived wait time by ~35%
- Used by Facebook, LinkedIn, YouTube, Slack

**Spinner/Progress**:
- Use only when skeleton screens don't make sense (file upload, processing)
- Always show progress percentage when possible (determinate > indeterminate)
- Add contextual messaging: "Preparing your order..." not just a spinning wheel

**Optimistic UI**:
- Assume success, update UI immediately, rollback on failure
- Used for likes, saves, toggles — anything with high success rate
- Instagram likes, Twitter bookmarks work this way

```
TIMING RULES:
< 100ms     → Instant, no feedback needed
100-300ms   → Show subtle feedback (opacity change)
300ms-1s    → Show micro-loading (button spinner)
1-5s        → Show skeleton/progress
5s+         → Show progress bar + estimated time
```

### 2. Empty State
The screen has no content. Turn this into an opportunity.

**4 Types of Empty States**:

**First Use** (new user, no data yet):
- Welcome message + illustration
- Clear explanation of what this screen will show
- Single prominent CTA to get started
- Example: "No projects yet. Create your first project to get started."

**User Cleared** (all tasks done, inbox zero):
- Celebration! Reward the accomplishment
- Encouraging message + delightful illustration
- Suggest next actions
- Example: "All caught up! You've cleared your inbox. 🎉"

**No Results** (search/filter returned nothing):
- Clearly state no results were found
- Suggest modifications: "Try adjusting your filters"
- Offer alternatives or popular items
- NEVER show a completely blank screen

**Error State** (system failure, offline):
- Explain what happened in plain language (no error codes)
- Tell user what they can do about it
- Provide a retry action
- Example: "Can't connect right now. Check your connection and tap to retry."

**Empty State Anatomy**:
```
┌─────────────────────────────┐
│                             │
│     [Illustration/Icon]     │  ← Brand-consistent, not generic
│                             │
│     Headline Message        │  ← What happened / what goes here
│                             │
│     Secondary explanation   │  ← Why it's empty / what to do
│     with helpful context    │
│                             │
│     [ Primary CTA Button ]  │  ← Single clear action
│                             │
│     Optional secondary link │  ← Alternative path
│                             │
└─────────────────────────────┘
```

### 3. Partial State
Some content loaded, some didn't. Or the list is sparse.

- Show available content; indicate what's missing
- Use placeholders for failed images
- Provide "retry" for failed sections without blocking the rest
- Starter content: pre-populate with sample data to show value

### 4. Error State
Something went wrong.

**Error Severity Levels**:
| Level | Visual | Example |
|-------|--------|---------|
| Inline warning | Yellow/amber text below field | "Password must be 8+ characters" |
| Toast/snackbar | Temporary bottom notification | "Couldn't save. Try again." |
| Banner | Persistent top strip | "You're offline. Changes saved locally." |
| Full screen | Takes over screen | "Something went wrong. Tap to retry." |
| Dialog | Modal overlay | "Delete this item? This can't be undone." |

**Error Message Formula**:
1. What happened (plain language, no codes)
2. Why it happened (if known and useful)
3. What to do next (actionable)

**Good**: "Payment failed — your card was declined. Try a different card."
**Bad**: "Error 402: Transaction processing failure. Contact support."

### 5. Ideal/Loaded State
The "happy path." Content is loaded, everything works.

- This is what most designers design first (and only!)
- Ensure it still looks good with realistic data lengths
- Test with 1 item, 5 items, 50 items, and 500 items
- Test with very long text and very short text
- Test with missing optional fields

---

## Haptic Feedback Design

### Philosophy
Haptic feedback adds the dimension of touch to digital interfaces. Good haptics feel like craftsmanship — unnoticed until absent. Bad haptics feel like a broken phone.

### Haptic Vocabulary

| Feedback Type | Sensation | When to Use |
|---------------|-----------|-------------|
| Light tap | Soft, barely perceptible | Toggle switch, selection change |
| Medium tap | Clear, confident | Button press, successful action |
| Heavy tap | Strong, deliberate | Error, destructive action confirm |
| Success | Double pulse (short-short) | Payment complete, task done |
| Warning | Triple pulse (short-short-short) | Invalid input, approaching limit |
| Error | Long buzz | Failed action, rejected input |
| Selection tick | Very light, repeated | Scrolling through picker wheel |
| Impact | Sharp, single | Snapping to position, threshold crossed |

### Haptic Design Principles

**1. Less is More**
Too much haptic feedback numbs the user. Reserve it for meaningful moments: confirmations, errors, state changes, threshold crossings.

**2. Match the Metaphor**
The haptic sensation should feel like what it represents:
- Toggle ON → Crisp click (like a physical switch)
- Error → Sharp buzz (like hitting a wall)
- Success → Satisfying double-tap (like a high-five)
- Scroll picker → Light ticks (like a spinning wheel)

**3. Synchronize with Visual + Audio**
Haptics, animation, and sound must fire simultaneously. Desync of even 50ms feels wrong. The brain perceives them as one event.

**4. Respect User Preferences**
Always honor system haptic settings. Provide app-level control:
- Full haptics (default)
- Reduced haptics (critical only)
- Off

**5. Clear > Rich > Buzzy**
Per Android guidelines:
- **Clear**: Crisp, discrete sensations for single events (preferred)
- **Rich**: Expressive, multi-layered for important moments (use sparingly)
- **Buzzy**: Long, crude vibrations — AVOID for touch feedback

### Platform Haptic APIs

**iOS (Taptic Engine / Core Haptics)**:
- UIImpactFeedbackGenerator: .light, .medium, .heavy, .rigid, .soft
- UINotificationFeedbackGenerator: .success, .warning, .error
- UISelectionFeedbackGenerator: for picker/scroll ticks
- Core Haptics: Custom patterns with sharpness + intensity curves

**Android (HapticFeedbackConstants)**:
- CLOCK_TICK, CONTEXT_CLICK, KEYBOARD_PRESS
- LONG_PRESS, VIRTUAL_KEY
- VibrationEffect: EFFECT_CLICK, EFFECT_TICK, EFFECT_HEAVY_CLICK
- VibrationEffect.Composition: Custom sequences of primitives

---

## Sound Design

### When to Use Sound
Sound in mobile apps should be the exception, not the rule. Most app interactions are silent — haptics + visual suffice.

**Use sound for**:
- Notifications and alerts (system-level)
- Payment/transaction confirmations
- Achievement unlocks and celebrations
- Voice/audio features (obviously)
- Ambient atmosphere (meditation, music apps)

**Never use sound for**:
- Regular button taps
- Navigation transitions
- Form interactions
- Default state — sound should always be opt-in or contextual

### Sound + Haptic Pairing
When both are used, they must be perfectly synchronized:
- Same onset time (within 20ms)
- Matching energy: heavy haptic = deeper sound, light haptic = higher pitch
- Same duration envelope: short haptic = short sound

---

## Accessibility in Animation & Interaction

### prefers-reduced-motion
Always respect this system setting. Users with vestibular disorders, epilepsy, or motion sensitivity need alternatives.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**What to do instead**:
- Replace slide animations with opacity fades
- Replace parallax with static backgrounds
- Replace auto-playing animations with user-triggered ones
- Keep functional animations (loading spinners) but simplify them

### Touch Target Accessibility
- Minimum 44×44pt (iOS) / 48×48dp (Android)
- Minimum 8px spacing between touch targets
- Buttons in thumb zone for primary actions
- Large text option support (Dynamic Type on iOS)

### Color & Contrast
- WCAG AA: 4.5:1 for normal text, 3:1 for large text
- WCAG AAA: 7:1 for normal text, 4.5:1 for large text
- Never convey information through color alone — use icons/text labels
- Support Dark Mode and High Contrast Mode

### Screen Reader Compatibility
- All interactive elements need accessible labels
- Announce state changes programmatically
- Provide text alternatives for animations
- Decorative animations should be hidden from assistive technology

---

## UX Psychology Patterns

### The Peak-End Rule
People judge an experience based on its most intense moment (peak) and its ending, not the average. Design memorable peaks (delightful animations, celebration screens) and strong endings (confirmation, satisfaction).

### The Zeigarnik Effect
Unfinished tasks stay in memory longer than completed ones. Use progress indicators and completion percentages to motivate users to finish flows (onboarding, profile setup, checkout).

### The Endowment Effect
People value things more once they feel ownership. Let users customize, personalize, and invest in the app early (avatar, preferences, saved items). The more they invest, the less likely they'll leave.

### Variable Reward
Unpredictable rewards trigger dopamine more than predictable ones. Pull-to-refresh with fresh content, random achievement badges, personalized recommendations. Used by social media (infinite scroll) — use ethically.

### Social Proof
Show that others use and value the feature: "2.3k people ordered this", "4.9 stars", "Jordan and 3 friends also like this". Reduces uncertainty and increases conversion.

### The IKEA Effect
Users value things they helped create. Let them build, customize, organize. A playlist they curated, a dashboard they arranged, a profile they filled in — all increase attachment.

---

## Performance Optimization

### The 60fps Rule
Animations must run at 60fps (16.6ms per frame) to feel smooth. Anything below 30fps feels broken.

**DO animate** (GPU-accelerated, composited):
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (blur, brightness)

**DON'T animate** (triggers layout/paint, janky):
- `width`, `height`
- `margin`, `padding`
- `top`, `left`, `right`, `bottom`
- `border-width`
- `font-size`

### will-change Hint
```css
.animated-element {
  will-change: transform, opacity;
}
```
Use sparingly — only on elements that will actually animate. Remove after animation completes.

### Request Animation Frame
For JS-driven animations, always use `requestAnimationFrame` instead of `setTimeout` or `setInterval`. This syncs with the browser's paint cycle.

### Lazy Loading
- Images: Load only when approaching viewport
- Heavy components: Code-split and load on demand
- Animations: Start only when visible (IntersectionObserver)
- Data: Paginate, don't load everything at once
