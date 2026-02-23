# Shadows Before The Flame — Developer Log
**Astro Campaign Wiki** | `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`
**Repo:** PhilFerguson1979/shadows-before-the-flame
**Live site (once pushed):** `https://philferguson1979.github.io/shadows-before-the-flame/`
**Preview locally:** `http://localhost:4321` (run `astro preview` after each build)
**Build command:** `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' build`

---

## Stack
- **Astro 5.17** — static site generator
- **Tailwind CSS 4** — via `@tailwindcss/vite` plugin
- **Content Collections** — all data lives in `src/content/`
- **Node.js v22.13.1** at `C:\Program Files\nodejs\node.exe`
- **Serve mode:** `astro preview` (serves `dist/`) — must rebuild + restart after changes
- **Dev mode alt:** `astro dev` — hot-reloads automatically, use this for active development

---

## Important Notes
- The site runs `astro preview` NOT `astro dev` — file changes to `src/` are NOT live.
  After any edit: build first, then restart preview server.
- Node is NOT on the default PowerShell PATH. Always use full path:
  `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' build`
- There are TWO repos on this machine — do not confuse them:
  - `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame` ← **Astro site (this one)**
  - `C:\Users\djric\OneDrive\Documents\GitHub\Dungeons-and-Dragons` ← old markdown wiki (ignore)
- **Git push works from terminal** — `git push origin main` succeeds. GitHub Desktop is no longer required.
- **All internal links must use BASE_URL** — never hardcode `href="/path"`. Always use `${base}/path` where
  `const base = import.meta.env.BASE_URL.replace(/\/$/, '')`. See Session 4 notes for details.

---

## Project Structure
```
public/
  portraits/                   ← 9 SVG character portrait placeholders (class-themed)
src/
  components/
    CurrencyDisplay.astro      ← coin display with GP/SP/CP/PP/EP
    EquipmentPanel.astro       ← dynamic D&D equipment system (interactive JS)
    FeatManager.astro          ← feat management for character pages
    LevelTracker.astro         ← level tracking display
    LevelUpTracker.astro       ← level pip bar + level history per character
    LevelUpWizard.astro        ← interactive level-up wizard
    SkillsPanel.astro          ← skills display for character pages
    SpellManager.astro         ← interactive spell slot tracking + prepared/known caster support
    XPTracker.astro            ← XP tracking with level-up detection
  content/
    characters/                ← 9 character .md files with full frontmatter
    sessions/                  ← session logs
    npcs/                      ← NPC entries
    locations/                 ← location entries
    lore/                      ← lore articles
    inventory/                 ← (placeholder, unused)
    config.ts                  ← Zod schemas for all collections
  data/
    backgrounds.ts             ← 15 backgrounds (13 PHB + 2 Dragonlance)
    classes.ts                 ← 13 classes with 95 subclasses
    feats.ts                   ← 78 feats from PHB, TCE, XGE, FToD, DL
    items.ts                   ← comprehensive item database (weapons, armor, gear, magic items)
    leveling.ts                ← leveling rules/data
    monsters.ts                ← 290+ monster stat blocks
    races.ts                   ← 12 races with 16 subraces (PHB + Dragonlance)
    skills.ts                  ← 18 core D&D 5e skills
    spells.ts                  ← 425 D&D 5e spells with full stat blocks
  layouts/
    BaseLayout.astro           ← grouped dropdown nav, header, footer wrapper
  pages/
    index.astro                ← homepage
    character-creation/index.astro ← 5-step interactive character builder
    characters/index.astro     ← party grid with portraits
    characters/[slug].astro    ← character detail (stats, spells, equipment, feats, skills)
    classes/index.astro        ← class browser
    classes/[slug].astro       ← class detail with subclasses
    dm/index.astro             ← DM award items & currency tool
    dm/encounters.astro        ← encounter builder with difficulty calc + loot
    dm/initiative.astro        ← combat initiative tracker
    feats/index.astro          ← feat browser with filters
    feats/[slug].astro         ← feat detail pages
    inventory/index.astro      ← party inventory tracker
    items/index.astro          ← item browser with search/filter
    items/[slug].astro         ← item detail pages
    locations/index.astro + [slug].astro
    lore/index.astro + [slug].astro
    monsters/index.astro       ← bestiary browser
    monsters/[slug].astro      ← monster stat block pages
    npcs/index.astro + [slug].astro
    party/level-tracker.astro  ← full party level overview
    party/level-up.astro       ← level-up wizard page
    sessions/index.astro + [slug].astro
    skills/index.astro + [slug].astro
    spells/index.astro + [slug].astro
  styles/
    global.css                 ← CSS variables, base styles, shared components
```

---

## Character Frontmatter Schema
Each character `.md` supports these frontmatter fields (all optional except `name`):

```yaml
name, player, race, class, subclass, level
hp, maxHp, ac, speed, profBonus, status, portrait
str, dex, con, int, wis, cha
currency: { pp, gp, ep, sp, cp }
inventory:
  - name, type, slot, acBase, acBonus, dmg, dmgType
    weight, properties[], notes, quantity, magical
equipped: { armor, mainhand, offhand, helmet, cloak, gloves, boots, ring1, ring2, amulet }
levelHistory:
  - level, sessionNumber, date, hpGained, features[], notes
conditions: [string]            # poisoned, frightened, prone, etc.
spells:
  - name, level (0=cantrip), school, prepared, concentration, ritual, notes
spellSlots:
  - level, total, used
```

**Item types:** `armor`, `weapon`, `shield`, `helmet`, `cloak`, `magic`, `gloves`, `boots`, `ring`, `amulet`, `tool`, `pack`, `misc`, `ammo`
**Armor weights:** `light`, `medium`, `heavy` (affects DEX cap in AC calc)
**Equipment slots:** `armor`, `mainhand`, `offhand`, `helmet`, `cloak`, `gloves`, `boots`, `ring1`, `ring2`, `amulet`

---

## Session Schema (sessions/*.md frontmatter)
```yaml
title, sessionNumber, date, location, level
summary, mvp, casualties[], totalKills, xp, nextSession
highlights:
  - who, what, type  (type: epic | kill | fail | social | loot | death)
loot:
  - item, who, notes
```

---

## Characters
| Character | Player | Class | File |
|-----------|--------|-------|------|
| Darian Vayne | Caden | Rogue | darian-vayne.md |
| Cogmaw Fraker | Tyler | Artificer | cogmaw-fraker.md |
| Vomilia Fraker | Senada | Artificer | vomilia-fraker.md |
| Cerci Sanja | Keygen | Druid | cerci-sanja.md |
| Metallyn Osborne | Linzee | Barbarian | metallyn-osborne.md |
| Shoto Todoroki | Scarlett | Monk | shoto-todoroki.md |
| Dorthol Silifrey | Daniel | Lunar Sorcerer | dorthol-silifrey.md |
| Dwardo Gutterson | Gavin | Bard | dwardo-gutterson.md |
| Legolas Pine | Jacob | Ranger | legolas-pine.md |

---

## Completed Work Log

### Session 0 — Initial Wiki (GitHub Pages Markdown)
- Created basic GitHub Pages site at `PhilFerguson1979/shadows-before-the-flame`
- Markdown files for characters, NPCs, locations, lore, inventory, sessions
- **Fixes applied:**
  - Player names: Sonata→Senada, Lindsay→Linzee, Keegan→Keygen; Tyler/Senada swapped
  - Robe of Useful Items carrier: Vomilia→Cogmaw (19/20 patches)
  - Removed "Dragon Army" spoiler from `lore/ispin-greenshield.md`
  - Removed Dragon Army evidence from `lore/the-dragon-army.md`

### Session 1 — Astro Site Foundation
- Discovered Astro project at `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`
- Existing Astro structure with content collections for all 6 content types
- Dark fantasy theme with CSS variables (gold/parchment/dark palette)

### Session 2 — Equipment System + Character Overhaul
- `src/content/config.ts` — expanded character schema with ability scores, currency, inventory, equipped
- `src/components/EquipmentPanel.astro` — **NEW**
  - 10 equipment slots with filtered dropdowns
  - Live AC calculation (light/medium/heavy armor DEX caps, Barbarian/Monk unarmored defense)
  - Active Bonuses panel (color-coded by type)
  - Weapon attack cards (To Hit, damage dice, damage bonus, type, properties)
  - Full inventory grid (color-coded by item type)
  - Powered by `define:vars` injected JSON — works in static build
- `src/components/CurrencyDisplay.astro` — **NEW** — coin cards with GP conversion
- `src/pages/characters/[slug].astro` — rebuilt with hero header, ability score bar, currency, equipment panel
- All 9 character `.md` files — full structured frontmatter (ability scores, currency, inventory, equipped)

### Session 3 — Session Logs, Level Tracker, Deployment Prep
- `src/content/config.ts` — added full session schema (highlights, loot, mvp, casualties, xp, nextSession)
- `src/content/config.ts` — added `levelHistory` array to character schema
- `src/components/LevelUpTracker.astro` — **NEW**
  - 20-pip visual level bar (filled pips = current level, current level glows)
  - Color-coded by class (Rogue=red, Druid=green, Monk=blue, etc.)
  - Level history entries showing session number, HP gained, features earned
- `src/pages/party/level-tracker.astro` — **NEW** full party level page
  - Party stats bar (avg level, prof bonus, total HP)
  - Card per character with vitals and level history
  - "What happens at Level 2" reference section for all 8 classes
- `src/pages/sessions/[slug].astro` — already had rich formatting (MVP badge, highlight cards, loot table, cliffhanger)
- `src/pages/sessions/index.astro` — already had campaign stats bar and session cards
- `src/pages/characters/[slug].astro` — cleaned up (removed duplicate LevelTracker call, fixed import name)
- `src/pages/level-tracker.astro` — **DELETED** (was a broken duplicate, replaced by `party/level-tracker.astro`)
- `astro.config.mjs` — `site` and `base` already set correctly for GitHub Pages
- `.github/workflows/deploy.yml` — GitHub Actions workflow already in place (auto-deploys on push to main)
- Build confirmed clean: 34 pages, zero errors
- All changes committed locally (3 commits ahead of remote)

### Session 4 — GitHub Push Fix + BASE_URL Routing Fix
**Date:** 2026-02-18

**Force push to GitHub (resolved):**
- The remote repo had old Jekyll/markdown wiki history that diverged from the Astro site's commit history
- Normal `git push` was rejected (`non-fast-forward`) because the histories were unrelated
- Resolved with `git push --force origin main` — replaced remote history with the Astro site's 3 commits
- The old Jekyll site still exists locally at `C:\Users\djric\shadows-before-the-flame` as a backup
- **Git push now works from terminal** — no longer requires GitHub Desktop

**All internal links 404'd on GitHub Pages (resolved):**
- **Root cause:** Every `href` across the site was hardcoded to root paths (e.g. `/characters/aurora`)
- On GitHub Pages, the site lives at `/shadows-before-the-flame/`, so `/characters/aurora` resolved to
  `philferguson1979.github.io/characters/aurora` instead of
  `philferguson1979.github.io/shadows-before-the-flame/characters/aurora`
- The homepage worked because GitHub Pages serves the index at the base path, but all navigation broke
- **Fix:** Added `const base = import.meta.env.BASE_URL.replace(/\/$/, '')` to every page and the layout,
  then prefixed all `href` values with `${base}`. Astro reads this from `astro.config.mjs`'s `base` setting.
- **Files changed (13):**
  - `src/layouts/BaseLayout.astro` — nav links, site title href, favicon, active link detection
  - `src/pages/index.astro` — session, character, and explore section links
  - `src/pages/characters/index.astro` + `[slug].astro` — card links and back link
  - `src/pages/sessions/index.astro` + `[slug].astro` — card links and back link
  - `src/pages/npcs/index.astro` + `[slug].astro` — card links and back link
  - `src/pages/locations/index.astro` + `[slug].astro` — card links and back link
  - `src/pages/lore/index.astro` + `[slug].astro` — card links and back link
  - `src/pages/party/level-tracker.astro` — back link and character name links

**Important pattern for future pages:** Any new page with internal links MUST use:
```astro
---
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
---
<a href={`${base}/characters/${slug}`}>Link</a>
```
Never hardcode `href="/characters/..."` — it will work in dev but 404 on GitHub Pages.

**Git state after this session:**
```
cc292f8  Fix all internal links to use BASE_URL for GitHub Pages
9c585fb  Add LevelUpTracker component, level-tracker page, fix session schema, clean up [slug].astro
224175c  Session 4: richer session archive, level-up tracker, Levels nav link, devlog
17f522b  Initial commit: Astro character sheet site with equipment system, currency display, level tracker, session logs
```

### Session 5 — Portraits, Initiative Tracker, Conditions & Spell Tracking
**Date:** 2026-02-18

**Character Portraits:**
- Created 9 SVG placeholder portraits in `public/portraits/` — one per character
- Each portrait has a class-themed icon and matching color scheme:
  - Darian Vayne (Rogue) — dagger, crimson
  - Cogmaw Fraker (Artificer) — gear, copper
  - Vomilia Fraker (Artificer) — gear, teal
  - Cerci Sanja (Druid) — leaf, forest green
  - Metallyn Osborne (Barbarian) — axe, blood red
  - Shoto Todoroki (Monk) — fist, sky blue
  - Dorthol Silifrey (Lunar Sorcerer) — crescent moon, deep purple
  - Dwardo Gutterson (Bard) — lute, warm gold
  - Legolas Pine (Ranger) — bow and arrow, teal
- Added `portrait: "/portraits/<slug>.svg"` to all 9 character `.md` files
- Portraits display as circular images on both the party grid (index) and character detail pages

**Initiative Tracker (`src/pages/party/initiative.astro`)** — **NEW:**
- Full combat management page accessible via "Combat" nav link
- Server-renders all 9 party members with DEX modifiers, AC, HP, and portrait
- Client-side JavaScript features:
  - Roll All — rolls d20+DEX for each character, sorts by initiative
  - Add Enemy — custom name, AC, HP, DEX input for monsters
  - Next Turn — advances turn marker with round counter
  - Reset — clears all initiative values and enemies
  - Damage/Heal buttons per combatant with HP bar updates
- Enemy cards can be removed mid-combat
- Uses `<template>` element for enemy card creation

**Condition Tracking:**
- Added `conditions: z.array(z.string()).optional()` to character schema in `config.ts`
- Conditions display as red-bordered tags on the character detail page
- Supports any D&D 5e condition string (poisoned, frightened, prone, etc.)

**Spell Tracking:**
- Added to character schema in `config.ts`:
  - `spells[]` — name, level (0=cantrip), school, prepared, concentration, ritual, notes
  - `spellSlots[]` — level, total, used
- Character detail page shows:
  - Spell slot pip tracker (filled/empty circles per slot level)
  - Cantrips section
  - Leveled spells grouped by level with:
    - **C** tag for concentration spells
    - **R** tag for ritual spells
    - "Not Prepared" tag with dimmed style for unprepared spells
    - School of magic label
    - Optional notes
- Added Level 1 spells to three casters:
  - **Dorthol Silifrey** (Lunar Sorcerer) — 4 cantrips + 2 known 1st-level spells, 2 spell slots
  - **Cerci Sanja** (Druid) — 2 cantrips + full druid prepared list (8 spells), 2 spell slots
  - **Dwardo Gutterson** (Bard) — 2 cantrips + 4 known 1st-level spells, 2 spell slots

**Navigation update:**
- Added "Combat" link to `BaseLayout.astro` nav pointing to `/party/initiative`

**Files changed (23 files, +870 lines):**
- `src/content/config.ts` — conditions, spells, spellSlots schemas
- `src/layouts/BaseLayout.astro` — Combat nav link
- `src/pages/characters/index.astro` — portrait display in card grid
- `src/pages/characters/[slug].astro` — portrait hero, conditions bar, full spell UI
- `src/pages/party/initiative.astro` — **NEW** combat tracker page
- `public/portraits/*.svg` — **9 NEW** character portrait placeholders
- `src/content/characters/*.md` — portrait field added to all 9, spells added to 3 casters

**Git state after this session:**
```
a85668e  Add portraits, initiative tracker, conditions, and spell tracking
bbd3024  Update DEV_LOG with Session 4: force push fix, BASE_URL routing fix
cc292f8  Fix all internal links to use BASE_URL for GitHub Pages
9c585fb  Add LevelUpTracker component, level-tracker page, fix session schema, clean up [slug].astro
224175c  Session 4: richer session archive, level-up tracker, Levels nav link, devlog
17f522b  Initial commit: Astro character sheet site
```

### Session 6 — Spell Browser & Spell Detail Pages
**Date:** 2026-02-18

**Spell Database (`src/data/spells.ts`)** — **NEW** (~4000+ lines):
- Master TypeScript spell database with 200+ D&D 5e spells covering cantrips through 9th level
- Sources: PHB, XGE (Xanathar's Guide), TCE (Tasha's Cauldron)
- Each spell has: name, slug, level, school, castingTime, range, components, duration, concentration, ritual, classes[], description, higherLevels, source
- Chose TypeScript data file approach over Content Collections — spells are tabular reference data, not authored content
- Helper functions: `getSpellBySlug()`, `getSpellByName()`, `getSpellsByLevel()`, `getSpellsByClass()`, `spellNameToSlug()`

**Spell Browser (`src/pages/spells/index.astro`)** — **NEW:**
- Full browsable spell index grouped by level (Cantrips, 1st Level, 2nd Level, ... 9th Level)
- Each level section is collapsible/expandable with toggle buttons
- Filter bar with:
  - Text search (spell name)
  - Class dropdown (all D&D classes extracted from spell data)
  - School dropdown (all 8 schools of magic)
  - Concentration toggle
  - Ritual toggle
  - Clear filters button
- Client-side JavaScript filtering using `data-*` attributes on pre-rendered spell cards
- "No spells match your filters" message when filters return empty
- Spell count display per level section updates dynamically with filters
- Each spell card links to its detail page

**Spell Detail Pages (`src/pages/spells/[slug].astro`)** — **NEW:**
- Uses `getStaticPaths()` to generate a page for every spell in the database at build time
- Full spell stat block: casting time, range, components, duration, school
- Full description text explaining how the spell works
- Higher-level casting section (when applicable)
- "Available To" section with class tags
- "Party Members" cross-reference — queries character collection and shows party members who have the spell, with portrait, class, level, and any spell notes
- Purple-blue spell accent theme matching existing spell UI

**Clickable Spell Links on Character Pages (`src/pages/characters/[slug].astro`)** — **MODIFIED:**
- Imported `getSpellByName` and `spellNameToSlug` from spell database
- Cantrip and leveled spell cards now wrapped in `<a>` tags linking to `/spells/{slug}` when a database match exists
- Graceful fallback: homebrew or unrecognized spells render as non-clickable `<div>` cards (no broken links)
- Added `.spell-card-link` hover effect (background glow, border highlight, subtle slide-right transform)

**Navigation Update (`src/layouts/BaseLayout.astro`)** — **MODIFIED:**
- Added "Spells" nav link between Lore and Levels in the top navigation bar

**Files changed (5 files, +4,269 lines):**
- `src/data/spells.ts` — **NEW** master spell database (200+ spells)
- `src/pages/spells/index.astro` — **NEW** spell browser with level groups + filtering
- `src/pages/spells/[slug].astro` — **NEW** spell detail pages with party cross-reference
- `src/pages/characters/[slug].astro` — spell cards now clickable links
- `src/layouts/BaseLayout.astro` — "Spells" nav link added

**Git state after this session:**
```
f8db20d  Update DEV_LOG with Session 6: spell browser, spell detail pages, clickable spell links
964934a  Add spell browser, spell detail pages, and clickable spell links
fcfc590  Update DEV_LOG with Session 5: portraits, initiative tracker, conditions, spell tracking
a85668e  Add portraits, initiative tracker, conditions, and spell tracking
bbd3024  Update DEV_LOG with Session 4: force push fix, BASE_URL routing fix
cc292f8  Fix all internal links to use BASE_URL for GitHub Pages
```

**Live site verified after deploy:**
- `/spells` — Spell browser loads with 223 spells, level grouping, and all filters working
- `/spells/fireball` — Spell detail page displays full stat block, description, class tags
- `/characters/dorthol-silifrey` — Spell cards (Fire Bolt, Light, Mage Hand, Shield, Magic Missile, etc.) are clickable links to spell detail pages
- "Spells" nav link visible in top navigation
- GitHub Actions deploy #7 succeeded

### Session 7 — Interactive Spell Manager Component
- `src/components/SpellManager.astro` — **NEW** interactive spell slot tracking
  - Supports both "prepared" and "known" caster types
  - Slot usage tracking with pip toggles
  - Add/remove prepared spells for Druids, Clerics, etc.
- `src/components/XPTracker.astro` — **NEW** XP tracking with level-up detection
- Initiative tracker improvements: HP +/- buttons and manual dice roll entry

**Commits:**
```
ea50dad  Add interactive SpellManager component with slot tracking
873a5a2  Add HP +/- buttons and manual dice roll entry to initiative tracker
1401dab  Add XP Tracker component with level-up detection
```

### Session 8 — Dragonlance Source Material Extraction
- Extracted comprehensive content from Dragonlance sourcebooks into `DATA_REFERENCE.md`
  - 5e stat blocks, race traits, magic items, and moon magic from Raistlin's Guide
  - Complete deity pantheon, cosmology, campaign rules, and High Sorcery
  - Shadow of the Dragon Queen official 5e content
  - Classic adventure module lore from DL6/DL7/DL10
  - Lost Leaves, Unsung Heroes, and Monstrous Compendium content
  - AD&D 2e sourcebook extractions with 5e conversions
- Added comprehensive D&D 5e SRD reference document (2500+ lines)

**Commits:**
```
409e3e9  Add comprehensive D&D 5e SRD reference document
d84f5b9  Expand Dragonlance/Krynn lore in DATA_REFERENCE.md
5e07174  Add 5e stat blocks, race traits, magic items, and moon magic
38b7f20  Add complete deity pantheon, cosmology, campaign rules
12c4b9d  Add Shadow of the Dragon Queen official 5e content
2e9a1a2  Add classic adventure module lore from DL6/DL7/DL10
af4b991  Add Lost Leaves, Unsung Heroes, and Monstrous Compendium content
fb5390d  Add comprehensive AD&D 2e sourcebook extractions with 5e conversions
```

### Session 9 — Skills & Feats Tracker
- `src/data/skills.ts` — **NEW** 18 core D&D 5e skills with ability scores, descriptions, example uses
- `src/data/feats.ts` — **NEW** 70 feats from PHB, TCE, XGE with prerequisites, benefits, categories
- `src/pages/skills/index.astro` + `[slug].astro` — **NEW** skill browser and detail pages
- `src/pages/feats/index.astro` + `[slug].astro` — **NEW** feat browser and detail pages with filtering
- `src/components/SkillsPanel.astro` — **NEW** skills display on character pages
- `src/components/FeatManager.astro` — **NEW** feat management on character pages
- Character sheet integration: skills and feats panels added to `[slug].astro`

**Commits:**
```
4121a3f  Add Skills Tracker with browse pages and character sheet integration
354e911  Add Feats Tracker with 70 feats, browse pages, and character sheet integration
```

### Session 10 — Encounter Planner & Bestiary
- `src/data/monsters.ts` — **NEW** monster database with 290+ creatures
  - Full stat blocks: CR, AC, HP, DEX, type, size, XP
  - CR-to-XP table, encounter thresholds by level, encounter multiplier function
- `src/pages/monsters/index.astro` + `[slug].astro` — **NEW** bestiary browser with search/filter and monster detail pages
- `src/pages/encounters/index.astro` — **NEW** encounter planner
  - Monster search with autocomplete
  - Add custom enemies
  - Difficulty calculator with proper DMG multiplier adjustments for large parties (6-8 PCs: -1 step, 9+ PCs: -2 steps)
  - Visual difficulty bar with Easy/Medium/Hard/Deadly markers
  - Save/load encounter presets to localStorage
  - "Launch in Combat Tracker" sends enemies to initiative tracker
  - Monster dropdown search added to initiative tracker
- Bug fixes: removed duplicate monster entries (Beholder, Wraith, Mummy Lord, Goblin Boss)
- UI improvements: restyled encounter planner buttons for visibility and sizing

**Commits:**
```
cd3e0b9  Add Encounter Planner, Bestiary, and monster dropdown for initiative tracker
5db8630  Add encounter save/load system and fix difficulty calc for large parties
0432e12  Expand monster database to ~290+ creatures
280637d  Remove duplicate monster entries
5060d1d  Improve Encounter Planner button visibility and sizing
ea2238e  Restyle encounter +/- and remove buttons to match action button style
```

### Session 11 — Character Leveling System
- `src/data/leveling.ts` — **NEW** leveling rules data (XP thresholds, proficiency by level, features)
- `src/components/XPTracker.astro` — expanded with XP removal, set XP, and level override
- `src/components/LevelUpWizard.astro` — **NEW** interactive level-up wizard component
- `src/pages/party/level-up.astro` — **NEW** level-up wizard page
- Fixed localStorage XP sync for level-up detection

**Commits:**
```
6862e48  Feature 7: Character Leveling System
e457835  Add XP removal, set XP, and level override to XP Tracker
80c99f1  Fix level-up system: localStorage XP sync + Level-Up Wizard
```

### Session 12 — Visual Overhaul & Itemization System
- Full visual overhaul: D&D Beyond-inspired dark teal theme
  - New color palette, card styles, hover effects across all pages
  - Consistent button styling, form inputs, and table designs
- `src/data/items.ts` — **MASSIVE EXPANSION** comprehensive item database
  - Weapons (simple + martial), armor (light/medium/heavy/shields), adventuring gear
  - Magic items with rarity tiers, attunement requirements
  - Campaign artifacts from Dragonlance source material
  - Item categories for filtering
- `src/pages/inventory/index.astro` — rebuilt as interactive party inventory tracker
  - Per-character inventory with localStorage persistence
  - Currency tracking (PP/GP/EP/SP/CP) per character
  - Add items from database or custom items
  - Equipment management
- Encounter loot system integrated into encounter planner
  - Per-monster loot configuration with item search
  - Per-monster currency drops
  - Encounter-wide loot pool
  - "Distribute Loot" distributes items + currency to selected party members via localStorage

**Commits:**
```
773c294  Full visual overhaul: D&D Beyond dark teal theme
e941335  Add itemization system: items database, currency tracking, equipment management, encounter loot
```

### Session 13 — DM Tools, Spell Expansion & Item Browser
- `src/pages/dm/index.astro` — **NEW** DM award tools page
  - Searchable item database for awarding items to party members
  - Create custom items on-the-fly
  - Award currency with split/full distribution modes
  - Award history with localStorage persistence (up to 200 entries)
  - Select multiple recipients for bulk awards
- Per-monster loot drops added to encounter builder (collapsible loot panel per monster)
- `src/data/spells.ts` — expanded from 344 to 425 unique spells
- `src/pages/items/index.astro` + `[slug].astro` — **NEW** item browser with search, category filters, and item detail pages

**Commits:**
```
551d50e  Add DM Tools page and per-monster loot drops in encounter builder
5a9394e  Expand spell database from 344 to 425 unique spells
1248e67  Add Item Browser with searchable/filterable item catalog and detail pages
```

### Session 14 — Classes & Subclasses Database
- `src/data/classes.ts` — **NEW** comprehensive class database (~2000+ lines)
  - All 13 D&D 5e classes: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard, Artificer
  - 95 subclasses across all classes from PHB, XGE, TCE, FToD, and Dragonlance
  - Interface: name, slug, hitDie (number), primaryAbility, savingThrows, armorProficiencies, weaponProficiencies, description, features, subclasses[], source
  - Helper functions: getClassBySlug, getClassByName, getSubclassesForClass
- `src/pages/classes/index.astro` + `[slug].astro` — **NEW** class browser and detail pages with subclass listings

**Commit:**
```
b65e924  Add Classes & Subclasses database with 13 classes and 95 subclasses
```

### Session 15 — Feats Expansion, Races, Backgrounds & Character Creation
**Date:** 2026-02-22/23

**Feats expansion (70 → 78 feats):**
- Added 8 new feats from previously missing sources:
  - 3 XGE racial feats: Dwarven Fortitude, Fey Teleportation, Svirfneblin Magic
  - 3 Fizban's Treasury of Dragons feats: Gift of Chromatic/Gem/Metallic Dragon
  - 2 Dragonlance feats: Kender Nightstalker, Draconian Breath Weapon
- Added new source codes: 'FToD' (Fizban's Treasury of Dragons), 'DL' (Dragonlance)

**Races database (`src/data/races.ts`)** — **NEW** (~430 lines):
- 9 PHB races: Dwarf (Hill/Mountain/Dark Dwarf/Gully Dwarf), Elf (High/Wood/Drow), Halfling (Lightfoot/Stout), Human (Variant), Dragonborn, Gnome (Forest/Rock), Half-Elf, Half-Orc, Tiefling
- 3 Dragonlance races from `588526580-Dragonlance-5e-v2-5.md`:
  - Kender (True/Afflicted subraces) — Lucky, Keen Senses, Kender Pockets traits
  - Draconian (Baaz/Kapak/Bozak/Sivak/Aurak) — +2 CON base, Common + Nerakan, subrace-specific death throes
  - Minotaur (Krynn) — horns, goring rush, hammering horns
  - Half-Ogre (Krynn) — powerful build, aggressive
- Interface: Race { name, slug, abilityScoreIncrease, size, speed, languages, traits: RacialTrait[], subraces: Subrace[], description, source }
- Dragonlance data sourced directly from actual markdown source files for accuracy

**Backgrounds database (`src/data/backgrounds.ts`)** — **NEW** (~200 lines):
- 13 PHB backgrounds: Acolyte, Charlatan, Criminal, Entertainer, Folk Hero, Guild Artisan, Hermit, Noble, Outlander, Sage, Sailor, Soldier, Urchin
- 2 Dragonlance: Knight of Solamnia, Mage of High Sorcery
- Interface: Background { name, slug, skillProficiencies, toolProficiencies, languages, equipment, feature: BackgroundFeature, description, source }

**Character Creation page (`src/pages/character-creation/index.astro`)** — **NEW** (1127 lines):
- Full 5-step interactive character builder:
  1. **Race** — card grid selection with dynamic subrace picker
  2. **Class** — card grid with hit die, primary ability, saves display
  3. **Ability Scores** — Standard Array (click-to-assign) and Point Buy (27 points) with live racial bonus calculation
  4. **Background** — card grid with skill/tool/language proficiencies
  5. **Review** — full character sheet preview with computed HP/AC/initiative/speed + downloadable .md file
- Data injected via `define:vars` → `window.__RACES__` etc. for client-side interactivity
- `parseRacialBonuses()` parses "+2 Strength, +1 Constitution" strings into computed modifiers
- Download generates proper Astro content collection frontmatter YAML

**Commits:**
```
ac56b8d  Expand feats.ts: add 8 feats from XGE, Fizban's, and Dragonlance
8ed6c94  Add races.ts and backgrounds.ts for character creation
cffe156  Add interactive Character Creation page
```

### Session 16 — DM Tools Reorganization
**Date:** 2026-02-23

Moved Encounter Builder and Initiative Tracker under the DM Tools section for better organization.

**File moves:**
- `src/pages/encounters/index.astro` → `src/pages/dm/encounters.astro`
- `src/pages/party/initiative.astro` → `src/pages/dm/initiative.astro`

**Navigation restructured:**
- **DM Tools** is now a dropdown menu with 3 items:
  - Award Items & Currency → `/dm`
  - Encounter Builder → `/dm/encounters`
  - Initiative Tracker → `/dm/initiative`
- Removed "Encounters" from World dropdown
- Removed "Combat Initiative" from Party dropdown
- Updated cross-links between encounter builder and initiative tracker

**Current navigation structure:**
```
Home | Party ▾ | Sessions | World ▾ | Reference ▾ | Inventory | DM Tools ▾
```
- **Party ▾** → Characters, Level Tracker, Level Up, Create Character
- **World ▾** → NPCs, Locations, Lore, Bestiary
- **Reference ▾** → Classes, Items & Equipment, Spells, Skills, Feats
- **DM Tools ▾** → Award Items & Currency, Encounter Builder, Initiative Tracker

**Commit:**
```
731a313  Move Encounter Builder and Initiative Tracker to DM Tools section
```

---

## Deployment Status

**Site is LIVE:** `https://philferguson1979.github.io/shadows-before-the-flame/`
**GitHub Actions:** Auto-deploys on every push to `main` (workflow in `.github/workflows/deploy.yml`)
**Git push works from terminal** — no longer blocked, regular `git push origin main` succeeds

---

## TODO — Still To Do

### Completed (Sessions 1-16)
- [x] ~~Push to GitHub~~ — force pushed 2026-02-18, resolved history divergence
- [x] ~~Fix 404 on subpages~~ — all links now use `import.meta.env.BASE_URL` prefix
- [x] ~~Add portraits~~ — 9 SVG placeholders with class-themed icons
- [x] ~~Initiative tracker~~ — full combat tracker with roll, sort, enemies, damage/heal, rounds
- [x] ~~Condition tracking~~ — `conditions[]` schema + red tag display
- [x] ~~Spell tracking~~ — spells/spellSlots schema, full UI with slot pips, grouping, C/R tags
- [x] ~~Spell browser~~ — 425 spells, filterable browser, spell detail pages
- [x] ~~Clickable spell links~~ — character spell cards link to spell detail pages
- [x] ~~Fix dropdown/nav readability~~ — grouped dropdown navigation with dark theme (PLAN Task 1)
- [x] ~~Complete Items database~~ — comprehensive item database with browser + detail pages (PLAN Task 2)
- [x] ~~Expand Classes & Subclasses~~ — 13 classes, 95 subclasses in `classes.ts` (PLAN Task 4)
- [x] ~~Verify/expand Skills & Feats~~ — 18 skills verified, 78 feats expanded (PLAN Task 5)
- [x] ~~Character Creation page~~ — 5-step interactive builder with races, classes, backgrounds (PLAN Task 3)
- [x] ~~Encounter Planner~~ — full builder with difficulty calc, save/load, loot system
- [x] ~~Bestiary~~ — 290+ monster database with browser and stat block pages
- [x] ~~DM Tools~~ — award items/currency, encounter builder, initiative tracker under DM dropdown
- [x] ~~Character Leveling System~~ — XP tracker, level-up wizard, leveling data
- [x] ~~Visual Overhaul~~ — D&D Beyond-inspired dark teal theme
- [x] ~~Source Material Extraction~~ — comprehensive DATA_REFERENCE.md from all Dragonlance books

### ALL WEBSITE_UPDATE_PLAN.md TASKS COMPLETE ✅

### Future Ideas (when ready)
- [ ] **Replace placeholder portraits** — swap SVG placeholders with actual character art when players provide images
- [ ] **Add spells to Legolas Pine** — Ranger spells unlocked at Level 2 (no spells at Level 1)
- [ ] **Session 2+ content** — add new session `.md` files after game sessions
- [ ] **Level up characters** — when party hits Level 2, update levels, HP, features, spells
- [ ] **Homepage refresh** — update `index.astro` to feature recent session, party overview, quick links
- [ ] **NPC & Location content** — populate more NPC/location entries from gameplay
- [ ] **Expand spell database** — currently 425, D&D 5e has ~500+ total
- [ ] **DM quick reference page** — party stats at a glance, conditions reference, quick dice roller

---

## Current Git State (after Session 16)
```
731a313  Move Encounter Builder and Initiative Tracker to DM Tools section
cffe156  Add interactive Character Creation page
8ed6c94  Add races.ts and backgrounds.ts for character creation
ac56b8d  Expand feats.ts: add 8 feats from XGE, Fizban's, and Dragonlance
b65e924  Add Classes & Subclasses database with 13 classes and 95 subclasses
1248e67  Add Item Browser with searchable/filterable item catalog and detail pages
5a9394e  Expand spell database from 344 to 425 unique spells
551d50e  Add DM Tools page and per-monster loot drops in encounter builder
e941335  Add itemization system: items database, currency tracking, equipment management
773c294  Full visual overhaul: D&D Beyond dark teal theme
... (40+ commits total)
```

**Build:** 1336 pages, zero errors
**Working tree:** Clean (no uncommitted changes)

---

## Current Site Stats
- **Total pages:** 1336
- **Spells:** 425
- **Monsters:** 290+
- **Items:** comprehensive database (weapons, armor, gear, magic items, artifacts)
- **Classes:** 13 with 95 subclasses
- **Feats:** 78 from 5 source books
- **Skills:** 18 (complete)
- **Races:** 12 with 16 subraces
- **Backgrounds:** 15
- **Characters:** 9 active party members

---

## How To Pick Up Next Session

1. Read this file top to bottom
2. Read `WEBSITE_UPDATE_PLAN.md` for reference (all tasks complete as of Session 16)
3. Read `MEMORY.md` at `C:\Users\djric\.claude\projects\...\memory\MEMORY.md` for global context
4. Run the local dev server:
   ```
   Set-Location 'C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame'
   & 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' dev
   ```
5. Open `http://localhost:4321` to see current state
6. Make changes to `src/` files (hot-reloads in dev mode)
7. Build: use `run_build.bat` or:
   ```
   & 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' build
   ```
8. Commit and push:
   ```
   cd 'C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame'
   git add <files>
   git commit -m "message"
   git push
   ```

**Note on Windows build issues:** OneDrive paths with spaces can cause issues with Desktop Commander tool. Use `run_build.bat` in the project root or create batch files for complex commands. Git operations work fine from the standard terminal.

---
