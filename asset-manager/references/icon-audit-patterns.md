# Icon & Font Audit Patterns

## Emoji Detection

### Regex Patterns
```
Unicode emoji range (broad):
[\u{1F600}-\u{1F64F}]  Emoticons
[\u{1F300}-\u{1F5FF}]  Misc Symbols & Pictographs
[\u{1F680}-\u{1F6FF}]  Transport & Map Symbols
[\u{1F1E0}-\u{1F1FF}]  Flags
[\u{2600}-\u{26FF}]    Misc Symbols
[\u{2700}-\u{27BF}]    Dingbats
[\u{FE00}-\u{FE0F}]    Variation Selectors
[\u{1F900}-\u{1F9FF}]  Supplemental Symbols
[\u{1FA00}-\u{1FA6F}]  Chess Symbols
[\u{1FA70}-\u{1FAFF}]  Symbols Extended-A
[\u{200D}]              Zero Width Joiner
[\u{20E3}]              Combining Enclosing Keycap
```

### Common False Positives
- Copyright/trademark symbols (©, ®, ™) — skip these
- Currency symbols ($, €, £, ¥) — skip these
- Math symbols (±, ×, ÷) — skip these
- Arrow symbols used as text (→, ←, ↑, ↓) — flag but low priority

### Files to Scan
- `*.kt`, `*.kts` — Compose/Android
- `*.swift` — SwiftUI/iOS
- `*.tsx`, `*.jsx`, `*.ts`, `*.js` — React/Next.js
- `*.dart` — Flutter
- `*.vue`, `*.svelte` — Vue/Svelte
- `*.xml` — Android resources
- `*.strings`, `*.xcstrings` — iOS strings

### Files to Skip
- `*.md`, `*.txt` — Documentation (emoji OK)
- `*.json`, `*.yaml` — Config (usually data, not UI)
- `node_modules/`, `.gradle/`, `build/`, `Pods/` — Dependencies
- `*.test.*`, `*.spec.*` — Test files (emoji in test data OK)

## Font Detection

### Patterns to Flag
```
Kotlin/Compose:
  fontFamily\s*=\s*FontFamily\.\w+         # FontFamily.SansSerif, etc.
  FontFamily\(Font\(                        # Custom font declaration (OK if in theme)
  fontFamily\s*=\s*FontFamily\.Default      # Using system default

Swift/SwiftUI:
  \.font\(\.system                          # Using system font directly
  Font\.custom\("                           # Custom font (check if registered)
  UIFont\.systemFont                        # UIKit system font

CSS/HTML:
  font-family:\s*['"]?[A-Z]                # Hardcoded font-family
  font-family:\s*system-ui                  # System font stack (usually OK)
  font-family:\s*sans-serif                 # Generic fallback only

React/Tailwind:
  fontFamily:\s*['"]                        # Inline font-family
  className=".*font-\[                      # Arbitrary Tailwind font value

Flutter:
  fontFamily:\s*['"]                        # Hardcoded fontFamily in TextStyle
  TextStyle\(.*fontFamily                   # Inline font specification
```

### What's OK vs What to Flag
| Pattern | Verdict | Reason |
|---------|---------|--------|
| Theme/Typography object | OK | Centralized font definition |
| `fontFamily = AppTheme.heading` | OK | Using design token |
| `fontFamily = "Arial"` | FLAG | Hardcoded font name |
| `Font.system(size: 16)` | FLAG | No custom font applied |
| `GoogleFonts.poppins()` | OK | Using font package properly |
| `font-family: var(--font-body)` | OK | Using CSS custom property |
| `font-family: 'Helvetica'` | FLAG | Hardcoded font name |

## Output Format

```json
{
  "emojis": [
    {
      "file": "src/ui/HomeScreen.kt",
      "line": 42,
      "char": "❤️",
      "context": "Text(\"❤️ Favorites\")",
      "suggestion": "lucide:heart"
    }
  ],
  "fonts": [
    {
      "file": "src/ui/theme/Type.kt",
      "line": 15,
      "family": "FontFamily.Default",
      "context": "fontFamily = FontFamily.Default",
      "suggestion": "Define custom FontFamily in theme"
    }
  ],
  "summary": {
    "totalEmojis": 12,
    "totalFonts": 3,
    "filesScanned": 45,
    "filesWithIssues": 8
  }
}
```
