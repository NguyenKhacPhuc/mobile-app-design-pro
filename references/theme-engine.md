# Theme Engine Reference

AI-powered design system generation database. Contains 67 styles, 96 color palettes, 57 font pairings, and 100 industry-specific reasoning rules for generating perfect mobile app themes automatically.

## Table of Contents
1. [UI Styles Database (67)](#ui-styles)
2. [Color Palettes Database (96)](#color-palettes)
3. [Typography Pairings (57)](#typography-pairings)
4. [Industry Reasoning Rules (100)](#reasoning-rules)
5. [Design System Generation Algorithm](#generation-algorithm)

---

## UI Styles

### General Styles (49)

| # | Style | Keywords | Best For Mobile |
|---|-------|----------|-----------------|
| 1 | Minimalism & Swiss | Clean, grid, whitespace | Enterprise, productivity, notes |
| 2 | Neumorphism | Soft shadows, extruded, tactile | Health/wellness, meditation, calculators |
| 3 | Glassmorphism | Frosted glass, blur, translucent | Finance dashboards, weather, music |
| 4 | Brutalism | Raw, bold, unconventional | Design portfolios, creative tools |
| 5 | 3D & Hyperrealism | Depth, perspective, immersive | Gaming, AR, product showcase |
| 6 | Vibrant Block-based | Bold colors, geometric, chunky | Startups, kids, creative |
| 7 | Dark Mode OLED | True black, high contrast | Music, coding, nighttime apps |
| 8 | Accessible & Ethical | High contrast, large type, clear | Government, healthcare, senior |
| 9 | Claymorphism | Rounded, playful, 3D-ish | Education, kids, casual SaaS |
| 10 | Aurora UI | Gradient blurs, ethereal | Creative SaaS, design tools |
| 11 | Retro-Futurism | Neon, CRT, synthwave | Gaming, entertainment, music |
| 12 | Flat Design | No shadows, solid colors, clean | Utility apps, MVPs, system apps |
| 13 | Skeuomorphism | Realistic textures, physical | Premium apps, instruments, games |
| 14 | Liquid Glass | Reflective, high-gloss, premium | Luxury e-commerce, premium SaaS |
| 15 | Motion-Driven | Animated, dynamic, flowing | Portfolios, storytelling, fitness |
| 16 | Micro-interactions | Responsive, delightful, tactile | Any mobile app — universal enhancer |
| 17 | Inclusive Design | Universal, adaptive, empathetic | Public services, healthcare |
| 18 | Zero Interface | Voice-first, minimal chrome | AI assistants, smart home |
| 19 | Soft UI Evolution | Subtle depth, refined shadows | Modern enterprise, banking |
| 20 | Neubrutalism | Bold borders, offset shadows, raw | Gen Z brands, social, fintech |
| 21 | Bento Box Grid | Modular tiles, organized chaos | Dashboards, settings, profiles |
| 22 | Y2K Aesthetic | Chrome, bubble, iridescent | Fashion, music, social |
| 23 | Cyberpunk UI | Neon on dark, glitch, angular | Gaming, crypto, tech |
| 24 | Organic Biophilic | Natural curves, earth tones | Wellness, sustainability, organic food |
| 25 | AI-Native UI | Conversational, adaptive, smart | AI chatbots, copilots, assistants |
| 26 | Memphis Design | Squiggles, shapes, bold pattern | Creative, youth, art |
| 27 | Vaporwave | Pastel, retro, grid aesthetic | Music, art, alternative |
| 28 | Dimensional Layering | Stacked cards, parallax, z-depth | News, social feed, email |
| 29 | Exaggerated Minimalism | Oversized type, extreme space | Fashion, architecture, luxury |
| 30 | Kinetic Typography | Moving text, animated headlines | Marketing, onboarding, splash |
| 31 | Parallax Storytelling | Scroll-driven narrative | Brand apps, product launches |
| 32 | Swiss Modernism 2.0 | Precise grid, clean hierarchy | Corporate, fintech, professional |
| 33 | HUD / Sci-Fi FUI | Holographic, data overlays | Fitness tracking, sports, tech |
| 34 | Pixel Art | 8-bit, retro game aesthetic | Indie games, creative tools |
| 35 | Bento Grids | Apple-style feature grids | Product showcase, features |
| 36 | Spatial UI (VisionOS) | Floating panels, depth blur | AR/VR, spatial computing |
| 37 | E-Ink / Paper | Muted, textured, book-like | Reading, journaling, notes |
| 38 | Gen Z Chaos / Maximalism | Everything loud, layered, busy | Social, lifestyle, music |
| 39 | Biomimetic / Organic 2.0 | Living forms, nature patterns | Biotech, health, sustainability |
| 40 | Anti-Polish / Raw | Imperfect, hand-drawn, real | Creative, art, authentic brands |
| 41 | Tactile Digital | Deformable, rubber, squeeze | Playful mobile, kids, casual |
| 42 | Nature Distilled | Calming palettes, botanical | Wellness, meditation, tea/coffee |
| 43 | Interactive Cursor | Hover effects, magnetic cursor | N/A for mobile (web only) |
| 44 | Voice-First Multimodal | Large buttons, speech UI | Accessibility, driving mode |
| 45 | 3D Product Preview | Rotate, zoom, inspect | E-commerce, furniture, fashion |
| 46 | Gradient Mesh / Aurora | Complex gradients, atmospheric | Hero screens, onboarding |
| 47 | Editorial Grid / Magazine | Column layout, serif type | News, blogs, content apps |
| 48 | Chromatic Aberration | RGB split, glitch accents | Music, gaming, nightlife |
| 49 | Vintage Analog / Retro Film | Grain, warm tones, nostalgia | Photography, vinyl, journals |

### Mobile-Specific App Patterns (10)

| # | Pattern | Structure | Best For |
|---|---------|-----------|----------|
| 1 | Tab-Based Feed | Bottom tabs + scrolling feed | Social, news, content |
| 2 | Card Discovery | Swipeable cards + details | Dating, learning, recipes |
| 3 | Map-Centric | Map view + list toggle | Travel, food delivery, ride-share |
| 4 | Dashboard Hub | Bento grid + quick actions | Finance, health, productivity |
| 5 | Chat-First | Conversation list + thread | Messaging, support, AI |
| 6 | Media Player | Cover art + controls + queue | Music, podcasts, audio |
| 7 | E-commerce Browse | Grid/list + filters + cart | Shopping, marketplace |
| 8 | Profile-Centric | Stats + content grid + actions | Social, fitness, portfolio |
| 9 | Wizard/Onboarding | Step-by-step + progress | Signup, setup, tutorials |
| 10 | Settings Stack | Grouped lists + toggles | Any app settings |

---

## Color Palettes

### By Industry (96 total — showing top selections per category)

#### Tech & SaaS
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Midnight Tech | #6366F1 | #06B6D4 | #F59E0B | #0F172A | #F1F5F9 | Confident, modern |
| Clean SaaS | #3B82F6 | #10B981 | #F97316 | #FFFFFF | #1E293B | Professional, trustworthy |
| Slate Pro | #475569 | #0EA5E9 | #A78BFA | #F8FAFC | #0F172A | Serious, enterprise |
| Indie Dev | #8B5CF6 | #EC4899 | #14B8A6 | #1E1B2E | #E2E8F0 | Creative, bold |

#### Finance & Fintech
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Trust Blue | #1E40AF | #059669 | #D97706 | #F8FAFC | #111827 | Stable, secure |
| Neo Bank | #6366F1 | #22D3EE | #FCD34D | #0A0A0B | #FAFAFA | Modern, disruptive |
| Gold Standard | #92400E | #D4AF37 | #1E3A5F | #FFFBEB | #1C1917 | Premium, traditional |
| Crypto Neon | #00FFA3 | #7C3AED | #FF6B6B | #0D0D0D | #E5E7EB | Cutting-edge, bold |

#### Health & Wellness
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Calm Sage | #059669 | #0D9488 | #F59E0B | #F0FDF4 | #1B2E1B | Natural, healing |
| Serenity | #E8B4B8 | #A8D5BA | #D4AF37 | #FFF5F5 | #2D3436 | Gentle, premium |
| Medical Pro | #0284C7 | #10B981 | #F97316 | #FFFFFF | #0F172A | Clinical, trusted |
| Mindful Dark | #34D399 | #818CF8 | #FBBF24 | #111827 | #F9FAFB | Calm, focused |

#### Food & Delivery
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Warm Appetite | #EF4444 | #F97316 | #FBBF24 | #FFFBEB | #1C1917 | Warm, appetizing |
| Fresh Green | #16A34A | #84CC16 | #FB923C | #F7FEE7 | #1A2E05 | Healthy, organic |
| Gourmet Dark | #D97706 | #DC2626 | #FAFAFA | #1C1917 | #FEF3C7 | Premium, indulgent |

#### E-commerce & Retail
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Coral Fresh | #FB7185 | #38BDF8 | #FBBF24 | #FFF1F2 | #1E293B | Friendly, inviting |
| Luxury Noir | #C9A96E | #1A1A2E | #FFFFFF | #0A0A0A | #E5E7EB | Premium, exclusive |
| Market Pop | #F97316 | #06B6D4 | #A855F7 | #FFFFFF | #111827 | Bold, deal-driven |

#### Social & Communication
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Social Blue | #3B82F6 | #EC4899 | #FBBF24 | #FFFFFF | #111827 | Connected, vibrant |
| Dark Social | #A78BFA | #06B6D4 | #F472B6 | #0F0F23 | #E2E8F0 | Immersive, modern |
| Story Fresh | #14B8A6 | #F97316 | #8B5CF6 | #ECFDF5 | #134E4A | Youthful, energetic |

#### Education & Learning
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Study Bright | #2563EB | #8B5CF6 | #F59E0B | #EFF6FF | #1E293B | Focus, achievement |
| Playful Learn | #F97316 | #06B6D4 | #A855F7 | #FFF7ED | #1C1917 | Fun, engaging |
| Academic | #1E3A5F | #0D9488 | #D97706 | #F8FAFC | #111827 | Serious, trustworthy |

#### Fitness & Sports
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Power Red | #DC2626 | #F97316 | #FBBF24 | #0F0F0F | #FAFAFA | Intense, energetic |
| Active Teal | #0D9488 | #06B6D4 | #F472B6 | #042F2E | #CCFBF1 | Fresh, athletic |
| Zen Fitness | #8B5CF6 | #34D399 | #FBBF24 | #1E1B2E | #F5F3FF | Balanced, mindful |

#### Travel & Hospitality
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Wanderlust | #0EA5E9 | #F97316 | #FBBF24 | #F0F9FF | #0C4A6E | Adventure, freedom |
| Luxury Stay | #92400E | #C9A96E | #1E3A5F | #FFFBEB | #1C1917 | Elegant, restful |
| Explorer Dark | #22D3EE | #A78BFA | #F97316 | #0F172A | #E2E8F0 | Bold, discovery |

#### Music & Entertainment
| Name | Primary | Secondary | Accent | Background | Text | Mood |
|------|---------|-----------|--------|------------|------|------|
| Spotify Vibes | #1DB954 | #B49BC8 | #FF6B6B | #121212 | #FFFFFF | Immersive, cool |
| Neon Nights | #FF00FF | #00FFFF | #FFFF00 | #0A0A0A | #FFFFFF | Electric, nightlife |
| Vinyl Warm | #D97706 | #92400E | #FAFAFA | #1C1917 | #FEF3C7 | Nostalgic, warm |

---

## Typography Pairings

### Complete Font Pairing Database (57)

Organized by mood/personality. Each pairing: Display (headings) + Body (content).

#### Elegant & Sophisticated (10)
| # | Display | Body | Mood | Best For |
|---|---------|------|------|----------|
| 1 | Playfair Display | Source Sans 3 | Refined editorial | Luxury, fashion, wine |
| 2 | Cormorant Garamond | Lato | Classical elegance | Beauty, spa, weddings |
| 3 | Libre Baskerville | Karla | Bookish charm | Publishing, education |
| 4 | DM Serif Display | DM Sans | Modern classic | Finance, real estate |
| 5 | Fraunces | Outfit | Quirky elegance | Organic brands, artisan |
| 6 | Newsreader | Work Sans | Editorial authority | News, magazines, blogs |
| 7 | Lora | Poppins | Warm sophistication | Hotels, restaurants |
| 8 | Bodoni Moda | Inter | High fashion | Fashion, beauty, luxury |
| 9 | Crimson Pro | Nunito Sans | Academic grace | Universities, law firms |
| 10 | Noto Serif Display | Noto Sans | Universal elegance | International, inclusive |

#### Modern & Clean (12)
| # | Display | Body | Mood | Best For |
|---|---------|------|------|----------|
| 11 | Plus Jakarta Sans | DM Sans | Polished modern | SaaS, fintech, apps |
| 12 | Manrope | Geist | Premium tech | High-end SaaS, tools |
| 13 | Sora | DM Sans | Energetic modern | Startups, social |
| 14 | Outfit | Plus Jakarta Sans | Friendly modern | Health, wellness, casual |
| 15 | Lexend | Source Sans 3 | Readable modern | Education, accessibility |
| 16 | General Sans | Inter | Swiss clean | Corporate, enterprise |
| 17 | Satoshi | Work Sans | Geometric clarity | Tech, crypto, dev tools |
| 18 | Cabinet Grotesk | IBM Plex Sans | Bold modern | Agency, portfolio |
| 19 | Urbanist | Nunito Sans | Soft modern | Apps, consumer tech |
| 20 | Space Grotesk | IBM Plex Sans | Tech-forward | Developer tools, APIs |
| 21 | Albert Sans | Lato | Neutral warmth | Healthcare, B2B SaaS |
| 22 | Figtree | Source Sans 3 | Approachable | Social, community |

#### Bold & Expressive (10)
| # | Display | Body | Mood | Best For |
|---|---------|------|------|----------|
| 23 | Clash Display | Satoshi | Edgy, raw | Creative, music, art |
| 24 | Anton | Work Sans | Impact, bold | Fitness, sports, gaming |
| 25 | Unbounded | DM Sans | Futuristic, round | Gaming, crypto, Web3 |
| 26 | Bricolage Grotesque | Outfit | Quirky bold | Gen Z, social media |
| 27 | Archivo Black | Archivo | Heavy industrial | Automotive, tools |
| 28 | Dela Gothic One | Noto Sans | Japanese-inspired | Gaming, anime, culture |
| 29 | Bungee | Space Mono | Retro display | Events, music festivals |
| 30 | Rubik Mono One | Rubik | Blocky fun | Kids, casual games |
| 31 | Black Ops One | Roboto Mono | Military tech | Strategy games, security |
| 32 | Protest Revolution | Work Sans | Punk energy | Alternative, activism |

#### Warm & Friendly (8)
| # | Display | Body | Mood | Best For |
|---|---------|------|------|----------|
| 33 | Nunito | Open Sans | Soft, rounded | Kids, education, family |
| 34 | Comfortaa | Lato | Bubbly, gentle | Wellness, pets, cooking |
| 35 | Baloo 2 | Poppins | Playful warm | Food, kids, casual |
| 36 | Quicksand | Open Sans | Light, airy | Travel, lifestyle |
| 37 | Patrick Hand | Lato | Hand-written | Personal, journals |
| 38 | Fredoka | DM Sans | Chunky fun | Children, education |
| 39 | Lilita One | Nunito | Cartoon bold | Games, kids, animation |
| 40 | Chewy | Outfit | Ultra-playful | Snack brands, fun apps |

#### Monospace & Technical (7)
| # | Display | Body | Mood | Best For |
|---|---------|------|------|----------|
| 41 | JetBrains Mono | Inter | Developer precise | Code editors, dev tools |
| 42 | Space Mono | Space Grotesk | Retro-tech | Terminal, hacker, crypto |
| 43 | IBM Plex Mono | IBM Plex Sans | Corporate tech | Enterprise, analytics |
| 44 | Fira Code | Fira Sans | Code-friendly | Dev tools, documentation |
| 45 | Source Code Pro | Source Sans 3 | Classic mono | IDEs, tech blogs |
| 46 | Roboto Mono | Roboto | Android standard | Android apps, Material |
| 47 | Overpass Mono | Overpass | Government tech | Public services, data |

#### Specialty & Themed (10)
| # | Display | Body | Mood | Best For |
|---|---------|------|------|----------|
| 48 | Abril Fatface | Lato | Poster-like | Events, magazines |
| 49 | Righteous | Outfit | Retro curves | Music, entertainment |
| 50 | Permanent Marker | DM Sans | Hand-drawn bold | Creative, youth |
| 51 | Press Start 2P | VT323 | 8-bit game | Retro gaming |
| 52 | Orbitron | Exo 2 | Sci-fi | Space, tech, futuristic |
| 53 | Cinzel | Lato | Ancient serif | History, museums, luxury |
| 54 | Oswald | Source Sans 3 | Condensed impact | News headlines, sports |
| 55 | Rajdhani | Nunito Sans | Geometric sharp | Automotive, speed |
| 56 | Vollkorn | Open Sans | German bookish | Publishing, academia |
| 57 | Zilla Slab | Work Sans | Tech-editorial | Tech blogs, magazines |

---

## Reasoning Rules

### Industry-to-Design Mapping (100 Rules)

Each rule maps a product category → recommended design decisions.

#### Format
```
RULE: [Category]
├── Pattern: [App pattern from mobile patterns list]
├── Style Priority: [Top 3 style recommendations]
├── Color Mood: [Palette category + specific recommendation]
├── Typography Mood: [Font category + specific pairing #]
├── Key Effects: [Animations, transitions, interactions]
└── Anti-Patterns: [What to absolutely avoid]
```

#### Tech & SaaS (Rules 1-15)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 1 | SaaS Product | Dashboard Hub | Minimalism, Bento Grid | Clean SaaS | #11 Plus Jakarta | Skeuomorphism, dark mode default |
| 2 | Micro SaaS | Tab-Based Feed | Flat Design, Soft UI | Indie Dev | #14 Outfit | Over-engineering, complex nav |
| 3 | B2B Enterprise | Dashboard Hub | Swiss Modernism 2.0 | Slate Pro | #16 General Sans | Playful fonts, neon colors |
| 4 | Developer Tools | Settings Stack | Dark Mode OLED | Midnight Tech | #41 JetBrains Mono | Serif fonts, pastel colors |
| 5 | AI / Chatbot | Chat-First | AI-Native UI | Midnight Tech | #20 Space Grotesk | Traditional layouts, heavy chrome |
| 6 | Project Management | Dashboard Hub | Minimalism | Clean SaaS | #11 Plus Jakarta | Dense data tables on mobile |
| 7 | CRM | Tab-Based Feed | Soft UI Evolution | Slate Pro | #21 Albert Sans | Gaming aesthetics, dark themes |
| 8 | Analytics | Dashboard Hub | Bento Grid | Midnight Tech | #43 IBM Plex Mono | Playful colors, rounded fonts |
| 9 | Collaboration | Chat-First | Flat Design | Social Blue | #22 Figtree | Brutalism, mono fonts |
| 10 | No-Code Platform | Wizard/Onboarding | Claymorphism | Indie Dev | #13 Sora | Complex UI, technical jargon |
| 11 | API Platform | Settings Stack | Dark Mode OLED | Midnight Tech | #44 Fira Code | Playful, non-technical styling |
| 12 | Cloud Dashboard | Dashboard Hub | Glassmorphism | Clean SaaS | #17 Satoshi | Skeuomorphism, heavy textures |
| 13 | Email Client | Tab-Based Feed | Minimalism | Slate Pro | #16 General Sans | Dense layouts, tiny text |
| 14 | Note-Taking | Tab-Based Feed | E-Ink / Paper | Academic | #56 Vollkorn | Neon, cyber, dark themes |
| 15 | Calendar | Dashboard Hub | Flat Design | Clean SaaS | #11 Plus Jakarta | Brutalism, heavy decoration |

#### Finance (Rules 16-25)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 16 | Fintech | Dashboard Hub | Soft UI Evolution | Trust Blue | #4 DM Serif Display | Neon colors, playful fonts |
| 17 | Banking | Dashboard Hub | Swiss Modernism 2.0 | Trust Blue | #11 Plus Jakarta | Dark mode with low contrast |
| 18 | Crypto | Dashboard Hub | Cyberpunk UI | Crypto Neon | #25 Unbounded | Traditional banking aesthetic |
| 19 | Insurance | Tab-Based Feed | Accessible & Ethical | Trust Blue | #9 Crimson Pro | Trendy styles, dark themes |
| 20 | Trading | Dashboard Hub | Dark Mode OLED | Crypto Neon | #20 Space Grotesk | Playful, cluttered layouts |
| 21 | Personal Finance | Dashboard Hub | Glassmorphism | Neo Bank | #13 Sora | Complex charts, dense data |
| 22 | Invoice/Billing | Settings Stack | Minimalism | Slate Pro | #16 General Sans | Over-designed, flashy |
| 23 | Payment App | Tab-Based Feed | Flat Design | Neo Bank | #14 Outfit | Heavy decoration, slow animations |
| 24 | Budgeting | Dashboard Hub | Soft UI Evolution | Calm Sage | #33 Nunito | Harsh reds, anxiety colors |
| 25 | Investment | Dashboard Hub | Swiss Modernism 2.0 | Gold Standard | #4 DM Serif Display | Trendy, unserious styles |

#### Healthcare (Rules 26-35)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 26 | Medical Clinic | Tab-Based Feed | Accessible & Ethical | Medical Pro | #21 Albert Sans | Harsh reds, dark themes |
| 27 | Pharmacy | E-commerce Browse | Minimalism | Medical Pro | #15 Lexend | Tiny fonts, dense layouts |
| 28 | Dental | Wizard/Onboarding | Soft UI Evolution | Serenity | #2 Cormorant Garamond | Clinical coldness |
| 29 | Mental Health | Chat-First | Organic Biophilic | Mindful Dark | #34 Comfortaa | Harsh colors, sharp edges |
| 30 | Fitness App | Dashboard Hub | Motion-Driven | Power Red | #24 Anton | Passive, static layouts |
| 31 | Meditation | Tab-Based Feed | Nature Distilled | Calm Sage | #36 Quicksand | Bright colors, dense info |
| 32 | Nutrition | Dashboard Hub | Flat Design | Fresh Green | #14 Outfit | Complex navigation |
| 33 | Veterinary | Tab-Based Feed | Claymorphism | Calm Sage | #33 Nunito | Clinical, cold styling |
| 34 | Elderly Care | Tab-Based Feed | Accessible & Ethical | Medical Pro | #15 Lexend | Small text, complex gestures |
| 35 | Pregnancy/Baby | Tab-Based Feed | Soft UI Evolution | Serenity | #34 Comfortaa | Dark themes, harsh colors |

#### E-commerce (Rules 36-45)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 36 | General E-commerce | E-commerce Browse | Flat Design | Market Pop | #13 Sora | Cluttered product pages |
| 37 | Luxury E-commerce | E-commerce Browse | Exaggerated Minimalism | Luxury Noir | #8 Bodoni Moda | Bright discount banners |
| 38 | Marketplace | E-commerce Browse | Vibrant Block-based | Coral Fresh | #19 Urbanist | Complex filters, dense grids |
| 39 | Subscription Box | Wizard/Onboarding | Claymorphism | Playful Learn | #26 Bricolage | Over-serious, corporate |
| 40 | Grocery | E-commerce Browse | Flat Design | Fresh Green | #14 Outfit | Dark themes, tiny images |
| 41 | Fashion | E-commerce Browse | Exaggerated Minimalism | Luxury Noir | #29 Bungee | Cluttered, info-heavy |
| 42 | Electronics | E-commerce Browse | Minimalism | Slate Pro | #20 Space Grotesk | Playful, non-technical |
| 43 | Furniture | 3D Product Preview | Liquid Glass | Luxury Stay | #2 Cormorant Garamond | Dense layouts, small images |
| 44 | Handmade/Artisan | E-commerce Browse | Vintage Analog | Vinyl Warm | #5 Fraunces | Generic, corporate styling |
| 45 | Sneakers/Streetwear | E-commerce Browse | Neubrutalism | Dark Social | #23 Clash Display | Traditional, conservative |

#### Food & Delivery (Rules 46-52)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 46 | Food Delivery | Map-Centric | Flat Design | Warm Appetite | #35 Baloo 2 | Cold colors, complex checkout |
| 47 | Restaurant | Tab-Based Feed | Soft UI Evolution | Gourmet Dark | #7 Lora | Cluttered menus, tiny images |
| 48 | Coffee Shop | Profile-Centric | Vintage Analog | Vinyl Warm | #5 Fraunces | Corporate, generic styling |
| 49 | Recipe App | Tab-Based Feed | Organic Biophilic | Fresh Green | #14 Outfit | Dense text, dark themes |
| 50 | Meal Prep | Dashboard Hub | Minimalism | Fresh Green | #33 Nunito | Complex navigation |
| 51 | Bar/Nightclub | Media Player | Cyberpunk UI | Neon Nights | #49 Righteous | Bright, daytime aesthetic |
| 52 | Bakery | E-commerce Browse | Claymorphism | Serenity | #34 Comfortaa | Sharp, corporate styling |

#### Social & Communication (Rules 53-62)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 53 | Social Network | Tab-Based Feed | Flat Design | Social Blue | #22 Figtree | Over-designed, heavy chrome |
| 54 | Messaging | Chat-First | Minimalism | Social Blue | #11 Plus Jakarta | Complex navigation, dense UI |
| 55 | Dating | Card Discovery | Vibrant Block-based | Coral Fresh | #13 Sora | Corporate, serious styling |
| 56 | Community/Forum | Tab-Based Feed | Flat Design | Story Fresh | #19 Urbanist | Dense, text-heavy layouts |
| 57 | Photo Sharing | Tab-Based Feed | Exaggerated Minimalism | Dark Social | #17 Satoshi | Heavy chrome, busy UI |
| 58 | Video Platform | Media Player | Dark Mode OLED | Spotify Vibes | #20 Space Grotesk | Light themes, distracting UI |
| 59 | Podcasts | Media Player | Glassmorphism | Spotify Vibes | #6 Newsreader | Cluttered, complex controls |
| 60 | Live Streaming | Media Player | Cyberpunk UI | Neon Nights | #25 Unbounded | Boring, static layouts |
| 61 | Professional Network | Tab-Based Feed | Swiss Modernism 2.0 | Slate Pro | #11 Plus Jakarta | Playful, casual styling |
| 62 | Anonymous Social | Tab-Based Feed | Dark Mode OLED | Dark Social | #42 Space Mono | Bright, identifiable UI |

#### Education (Rules 63-70)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 63 | Online Learning | Tab-Based Feed | Soft UI Evolution | Study Bright | #15 Lexend | Dense text, no visuals |
| 64 | Kids Education | Card Discovery | Claymorphism | Playful Learn | #38 Fredoka | Dark themes, small text |
| 65 | Language Learning | Wizard/Onboarding | Vibrant Block-based | Playful Learn | #33 Nunito | Complex nav, serious styling |
| 66 | University | Tab-Based Feed | Swiss Modernism 2.0 | Academic | #9 Crimson Pro | Trendy, non-professional |
| 67 | Coding Education | Dashboard Hub | Dark Mode OLED | Midnight Tech | #44 Fira Code | Serif fonts, playful |
| 68 | Music Education | Media Player | Skeuomorphism | Vinyl Warm | #49 Righteous | Flat, boring layouts |
| 69 | Flashcards | Card Discovery | Flat Design | Study Bright | #33 Nunito | Over-designed, complex |
| 70 | Tutoring | Chat-First | Soft UI Evolution | Study Bright | #21 Albert Sans | Impersonal, cold UI |

#### Travel & Hospitality (Rules 71-78)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 71 | Travel Booking | Tab-Based Feed | Glassmorphism | Wanderlust | #13 Sora | Dense forms, tiny images |
| 72 | Hotel | Profile-Centric | Liquid Glass | Luxury Stay | #2 Cormorant Garamond | Budget aesthetic, dense UI |
| 73 | Airline | Wizard/Onboarding | Minimalism | Wanderlust | #11 Plus Jakarta | Complex booking flows |
| 74 | City Guide | Map-Centric | Flat Design | Wanderlust | #14 Outfit | Text-heavy, no maps |
| 75 | Ride-Share | Map-Centric | Flat Design | Clean SaaS | #11 Plus Jakarta | Complex, feature-heavy |
| 76 | Vacation Rental | E-commerce Browse | Organic Biophilic | Wanderlust | #36 Quicksand | Corporate, cold styling |
| 77 | Cruise | Tab-Based Feed | Exaggerated Minimalism | Luxury Stay | #1 Playfair Display | Budget, generic styling |
| 78 | Tourism Board | Tab-Based Feed | Parallax Storytelling | Explorer Dark | #54 Oswald | Dense text, no visuals |

#### Entertainment & Lifestyle (Rules 79-90)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 79 | Music Streaming | Media Player | Dark Mode OLED | Spotify Vibes | #17 Satoshi | Light themes, heavy borders |
| 80 | Gaming | Dashboard Hub | Cyberpunk UI | Neon Nights | #25 Unbounded | Minimal, corporate styling |
| 81 | Movie/TV | Media Player | Dark Mode OLED | Spotify Vibes | #54 Oswald | Bright themes, cluttered |
| 82 | Sports | Tab-Based Feed | Motion-Driven | Power Red | #24 Anton | Passive, light themes |
| 83 | News | Tab-Based Feed | Editorial Grid | Slate Pro | #6 Newsreader | Playful, unserious styling |
| 84 | Weather | Dashboard Hub | Glassmorphism | Wanderlust | #36 Quicksand | Dense data, dark default |
| 85 | Photography | Profile-Centric | Exaggerated Minimalism | Dark Social | #29 Bungee | Heavy chrome, cluttered UI |
| 86 | Journaling | Tab-Based Feed | E-Ink / Paper | Academic | #56 Vollkorn | Bright, social styling |
| 87 | Habit Tracker | Dashboard Hub | Bento Grid | Study Bright | #14 Outfit | Complex charts, dense UI |
| 88 | Pet Care | Tab-Based Feed | Claymorphism | Calm Sage | #33 Nunito | Clinical, serious styling |
| 89 | Event Planning | Dashboard Hub | Vibrant Block-based | Coral Fresh | #13 Sora | Boring, flat layouts |
| 90 | Fashion/Style | Profile-Centric | Exaggerated Minimalism | Luxury Noir | #8 Bodoni Moda | Generic, cluttered UI |

#### Emerging & Specialty (Rules 91-100)
| # | Category | Pattern | Style | Color | Typography | Anti-Patterns |
|---|----------|---------|-------|-------|------------|---------------|
| 91 | Web3 / NFT | Dashboard Hub | Cyberpunk UI | Crypto Neon | #25 Unbounded | Traditional, corporate UI |
| 92 | Spatial Computing | Tab-Based Feed | Spatial UI (VisionOS) | Explorer Dark | #12 Manrope | Flat, 2D-only styling |
| 93 | Smart Home / IoT | Dashboard Hub | Glassmorphism | Midnight Tech | #14 Outfit | Complex settings, dense UI |
| 94 | Autonomous Systems | Dashboard Hub | HUD / Sci-Fi FUI | Crypto Neon | #52 Orbitron | Playful, non-technical |
| 95 | Sustainability | Tab-Based Feed | Organic Biophilic | Calm Sage | #42 Nature Distilled | Industrial, dark themes |
| 96 | Real Estate | E-commerce Browse | Soft UI Evolution | Trust Blue | #4 DM Serif Display | Playful, non-professional |
| 97 | Legal | Tab-Based Feed | Swiss Modernism 2.0 | Slate Pro | #9 Crimson Pro | Trendy, casual styling |
| 98 | Nonprofit | Tab-Based Feed | Inclusive Design | Calm Sage | #15 Lexend | Premium, exclusive styling |
| 99 | Government | Settings Stack | Accessible & Ethical | Medical Pro | #15 Lexend | Dark mode, trendy styles |
| 100 | Quantum Computing | Dashboard Hub | HUD / Sci-Fi FUI | Crypto Neon | #52 Orbitron | Playful, non-technical |

---

## Generation Algorithm

When a user requests a mobile app design:

```
1. EXTRACT keywords from user request
   → product_type, industry, mood, platform

2. MATCH to reasoning rule (1-100)
   → Get pattern, style priority, color mood, typography mood, anti-patterns

3. SELECT specific palette from color database
   → Match color mood → pick palette from industry section

4. SELECT font pairing from typography database
   → Match typography mood → pick pairing by number

5. COMPILE design system
   → Colors + Fonts + Style + Pattern + Effects + Anti-patterns + Checklist

6. PRESENT to user for confirmation

7. BUILD the React artifact using the confirmed design system
```

### Fallback Rules

If no exact match exists:
- Default style: Soft UI Evolution (#19)
- Default colors: Clean SaaS palette
- Default fonts: #11 Plus Jakarta Sans + DM Sans
- Default pattern: Tab-Based Feed
- Always include: bottom navigation, status bar, phone frame
