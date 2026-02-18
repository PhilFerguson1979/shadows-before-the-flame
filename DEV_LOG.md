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
  portraits/                 ← 9 SVG character portrait placeholders (class-themed)
src/
  components/
    EquipmentPanel.astro     ← dynamic D&D equipment system (interactive JS)
    CurrencyDisplay.astro    ← coin display with GP/SP/CP/PP/EP
    LevelUpTracker.astro     ← level pip bar + level history per character
  content/
    characters/              ← 9 character .md files with full frontmatter
    sessions/                ← session logs
    npcs/                    ← NPC entries
    locations/               ← location entries
    lore/                    ← lore articles
    inventory/               ← (placeholder, unused)
    config.ts                ← Zod schemas for all collections
  data/
    spells.ts                ← master spell database (200+ D&D 5e spells, TypeScript)
  layouts/
    BaseLayout.astro         ← nav, header, footer wrapper
  pages/
    index.astro              ← homepage
    characters/[slug].astro  ← character detail (portrait, stats, spells, conditions, equipment)
    sessions/[slug].astro    ← rich session log page
    sessions/index.astro     ← session archive with campaign stats
    spells/index.astro       ← spell browser with level groups + filter bar
    spells/[slug].astro      ← spell detail pages (stat block, description, party cross-ref)
    party/level-tracker.astro ← full party level overview + Level 2 preview
    party/initiative.astro   ← combat initiative tracker (roll, sort, damage, enemies)
    npcs/[slug].astro
    locations/[slug].astro
    lore/[slug].astro
    inventory/index.astro
  styles/
    global.css               ← CSS variables, base styles, shared components
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
964934a  Add spell browser, spell detail pages, and clickable spell links
fcfc590  Update DEV_LOG with Session 5: portraits, initiative tracker, conditions, spell tracking
a85668e  Add portraits, initiative tracker, conditions, and spell tracking
bbd3024  Update DEV_LOG with Session 4: force push fix, BASE_URL routing fix
cc292f8  Fix all internal links to use BASE_URL for GitHub Pages
```

---

## Deployment Status

**Site is LIVE:** `https://philferguson1979.github.io/shadows-before-the-flame/`
**GitHub Actions:** Auto-deploys on every push to `main` (workflow in `.github/workflows/deploy.yml`)
**Git push works from terminal** — no longer blocked, regular `git push origin main` succeeds

---

## TODO — Still To Do

- [x] ~~Push to GitHub~~ — force pushed 2026-02-18, resolved history divergence
- [x] ~~Fix 404 on subpages~~ — all links now use `import.meta.env.BASE_URL` prefix
- [x] ~~Add portraits~~ — 9 SVG placeholders with class-themed icons, wired into cards + detail pages
- [x] ~~Initiative tracker~~ — full combat page with roll, sort, add enemies, damage/heal, round tracking
- [x] ~~Condition tracking~~ — `conditions[]` schema + red tag display on character detail pages
- [x] ~~Spell tracking~~ — spells/spellSlots schema, full UI with slot pips, grouping, C/R tags; 3 casters populated
- [x] ~~Spell browser~~ — 200+ spell database, filterable browser page, spell detail pages with full stat blocks
- [x] ~~Clickable spell links~~ — character page spell cards link to spell detail pages (graceful fallback for homebrew)
- [x] ~~Spells nav link~~ — "Spells" added to top navigation bar
- [ ] **Verify the live site** — check all pages at `https://philferguson1979.github.io/shadows-before-the-flame/`
- [ ] **Expand spell database** — add more spells from supplemental books (currently 200+, D&D 5e has ~500+ total)
- [ ] **Replace placeholder portraits** — swap SVG placeholders with actual character art when available
- [ ] **Add spells to Legolas Pine** — Ranger spells unlocked at Level 2 (no spells at Level 1)
- [ ] **Session 2 content** — add session 2 `.md` file to `src/content/sessions/` when it happens
- [ ] **Level up characters** — when party hits Level 2, update each character's `level`, `maxHp`, `hp`, and add a `levelHistory` entry with features gained
- [ ] **Share site with players** — site is live, share the URL

---

## How To Pick Up Next Session

1. Read this file top to bottom
2. Run the local dev server:
   ```
   Set-Location 'C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame'
   & 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' preview
   ```
3. Open `http://localhost:4321` to see current state
4. Make changes to `src/` files
5. Rebuild: `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' build`
6. Restart preview server (kill old PID, run preview again)
7. Push via GitHub Desktop when ready

---
