# Website Update Plan — Shadows Before The Flame
*Created: February 20, 2026*
*Purpose: Reference plan for ongoing website feature development. If chat resets, hand this file to Claude to resume work.*

---

## Quick Resume Instructions

If the chat resets, tell Claude:
1. Read `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame\WEBSITE_UPDATE_PLAN.md` (this file)
2. Read `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame\DEV_LOG.md` for full session history
3. Check `git status` and `git log --oneline -5` for uncommitted work
4. Check the task statuses below to see what's done vs pending
5. Source material is at `C:\Users\djric\OneDrive\Desktop\Dungeons And Dragons\`
6. Live site: https://philferguson1979.github.io/shadows-before-the-flame/

---

## Project Info

| | |
|---|---|
| **Astro Project** | `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame` |
| **Old Jekyll Site** | `C:\Users\djric\shadows-before-the-flame` (backup, do not use) |
| **Live URL** | https://philferguson1979.github.io/shadows-before-the-flame/ |
| **Stack** | Astro 5.17 + Tailwind CSS 4 + TypeScript data files |
| **Node.js** | `C:\Program Files\nodejs\node.exe` (v22.13.1) |
| **Deploy** | GitHub Actions auto-deploy on push to `main` |
| **Dev server** | `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' dev` |
| **Build** | `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' build` |

### Critical Dev Pattern
All internal links MUST use BASE_URL prefix:
```astro
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
<a href={`${base}/characters/${slug}`}>Link</a>
```
Never hardcode `href="/path"` — it will 404 on GitHub Pages.

---

## What Already Exists (Sessions 1-6)

### Pages Built
| Page | Route | Data Source | Status |
|------|-------|-------------|--------|
| Homepage | `/` | index.astro | Done |
| Party (characters) | `/characters` + `/characters/[slug]` | Content Collection (9 chars) | Done |
| Sessions | `/sessions` + `/sessions/[slug]` | Content Collection | Done (Session 1) |
| NPCs | `/npcs` + `/npcs/[slug]` | Content Collection (8 NPCs) | Done |
| Locations | `/locations` + `/locations/[slug]` | Content Collection (2 locations) | Done |
| Inventory | `/inventory` | Content Collection | Done |
| Lore | `/lore` + `/lore/[slug]` | Content Collection (6 topics) | Done |
| Spells | `/spells` + `/spells/[slug]` | TypeScript data (`src/data/spells.ts`, 223 spells) | Done |
| Skills | `/skills` + `/skills/[slug]` | TypeScript data (`src/data/skills.ts`) | Done |
| Feats | `/feats` + `/feats/[slug]` | TypeScript data (`src/data/feats.ts`) | Done |
| Items | `/items` + `/items/[slug]` | TypeScript data (`src/data/items.ts`) | INCOMPLETE — missing tons of items |
| Bestiary | `/monsters` + `/monsters/[slug]` | TypeScript data (`src/data/monsters.ts`) | Done |
| Encounters | `/encounters` | Page exists | Needs content |
| DM Tools | `/dm` | Page exists | Needs content |
| Level Tracker | `/party/level-tracker` | Character data | Done |
| Level Up | `/party/level-up` | Page exists | Needs content |
| Combat Initiative | `/party/initiative` | Interactive JS | Done |

### Components Built
- `EquipmentPanel.astro` — 10 equipment slots, AC calculation, weapon attack cards, inventory grid
- `CurrencyDisplay.astro` — PP/GP/EP/SP/CP coin cards
- `LevelUpTracker.astro` — 20-pip level bar with class colors and history
- `LevelUpWizard.astro` — Level up wizard component
- `FeatManager.astro` — Feat management
- `SkillsPanel.astro` — Skills display
- `SpellManager.astro` — Spell management
- `XPTracker.astro` — XP tracking

### Data Files (TypeScript)
- `src/data/spells.ts` — 223 D&D 5e spells with full stat blocks
- `src/data/items.ts` — Item database (NEEDS EXPANSION)
- `src/data/skills.ts` — Skills database
- `src/data/feats.ts` — Feats database
- `src/data/monsters.ts` — Monster/bestiary database
- `src/data/leveling.ts` — Leveling rules/data

---

## TASK 1: Fix Dropdown/Navigation Menu Readability
**Priority:** HIGHEST — Quick fix, high impact
**Status:** NOT STARTED

### Problem
The navigation bar has 17 flat links that wrap and become cramped. On mobile the hamburger menu shows a dropdown, but the text colors are hard to read — gray text appears on a light/white background instead of the dark theme.

### Root Cause
The mobile nav dropdown (`.main-nav.open`) uses `background: var(--bg-surface)` which is correct (#12141a dark), but the browser or Tailwind CSS reset may be overriding it. The nav link color is `var(--text-muted)` (#8a8e96) which can look washed out.

### Fix Required
In `src/layouts/BaseLayout.astro`, update the `<style>` block:

1. **Ensure dark background on dropdowns** — Force `background-color` and `color` with `!important` if Tailwind is overriding
2. **Improve text contrast** — Use `var(--text-normal)` (#c4c7cc) instead of `var(--text-muted)` for nav links
3. **Group navigation into dropdown categories** to reduce clutter (17 links is too many):

**Proposed grouped navigation:**
```
Home | Party ▾ | Sessions | World ▾ | Reference ▾ | DM Tools ▾
```

Where:
- **Party ▾** → Characters, Level Tracker, Level Up, Combat Initiative, Character Creation (new)
- **World ▾** → NPCs, Locations, Lore, Bestiary, Encounters
- **Reference ▾** → Items, Spells, Skills, Feats
- **DM Tools ▾** → DM Screen, Encounter Builder

4. **Add dropdown CSS** with proper dark theme colors:
   - Background: `var(--bg-surface)` or `var(--bg-card)`
   - Text: `var(--text-normal)` default, `var(--accent-primary)` on hover
   - Border: `var(--border-accent)`
   - Shadow: `var(--shadow-elevated)`

5. **Add dropdown JavaScript** for hover (desktop) and click (mobile) toggle

### Files to Modify
- `src/layouts/BaseLayout.astro` — nav HTML structure + `<style>` block + `<script>` block

---

## TASK 2: Complete Items Page — Full D&D 5e Item Database
**Priority:** HIGH — Largest content task
**Status:** NOT STARTED

### Problem
`src/data/items.ts` exists but is missing the vast majority of D&D 5e items. The Items page and individual item detail pages exist (`/items` and `/items/[slug]`) but the database needs to be massively expanded.

### What Needs to Be Added
Extract from ALL source material and add to `src/data/items.ts`:

#### 2a. Campaign Artifacts (from `04 - Artifacts/` folder — 24 files)
- Blue Crystal Staff, Staff of Magius, Device of Time, True Dragonlance, Shield of Huma
- Dragon Orb, Scepter of Kingpriest, Disks of Mishakal, Silver Arm of Ergoth
- Helm of Grallen, Frostreaver, Wyvernsbane, Bloodstone, The Starjewel
- Mage-link Stone, Mantle of High Sorcery, Gnome Spectacles, and more
- Each has full mechanics in their `.md` files

#### 2b. Magic Items (from source material MDs)
- `632339823-RPG-Magic-Item-Collection-pdf.md` — curated magic items
- `689429261-Mage-Forge-Magic-Items-for-5e.md` — Nerdarchy items
- `513379915-Mordenkainens-Tome-of-Marvelous-Magic.md` — extended magic items
- `554366186-Treasures-of-the-Realms-Magic-Items-Weapons-of-Faerun.md` — FR items

#### 2c. Magic Weapons
- `432011723-DnD-magic-weapons.md`
- Weapon entries from Treasures of the Realms

#### 2d. Standard Equipment, Weapons, Armor
- `619530352-D-D-5e-Comprehensive-Equipment-Manual.md` — double weapons, polearms, firearms, vehicles
- PHB equipment tables (from `910864860-DnD-5e-Players-Handbook-BnW-OCR-Fixed-Pages.md`)

#### 2e. Dragonlance-Specific Items
- `588526580-Dragonlance-5e-v2-5.md`
- `616027176-D-D-5-0-WotC-DragonLance-Shadow-of-the-Dragon-Queen-OCR.md`
- `419519236-Dragonlance-Campaign-Setting.md`

#### 2f. Potions, Scrolls, Spell Components
- Extract from DMG sections in source material
- Material components for all spells

### Non-5e Conversion Rules
Items from older editions (3.5e, AD&D Dragonlance) need conversion:
- AC/attack/damage → 5e bounded accuracy
- Save DCs → 8 + proficiency + modifier
- Use 5e rarity tiers (Common, Uncommon, Rare, Very Rare, Legendary, Artifact)
- Special abilities → 5e action economy (action, bonus action, reaction)

### Item TypeScript Schema (match existing pattern in `src/data/items.ts`)
Each item should have: name, slug, type, subtype, rarity, attunement, weight, cost, properties, damage, damageType, acBase, acBonus, description, source, magical

### Files to Modify
- `src/data/items.ts` — massively expand item database
- `src/pages/items/index.astro` — may need filtering improvements
- `src/pages/items/[slug].astro` — may need layout updates for new item types

---

## TASK 3: Player Character Creation Page (Interactive Builder)
**Priority:** MEDIUM — Depends on classes/items being populated
**Status:** NOT STARTED

### Requirements
Build a fully interactive character creation page where players can:
1. **Step through creation** — Race → Class → Ability Scores → Background → Equipment → Review
2. **See live character sheet** update as they make choices
3. **Build a complete, playable character** with all stats calculated
4. **Add the finished character to the party** (save to site data)
5. **Delete a character** if they want to start over or remove it after building

### Step-by-Step Flow

#### Step 1: Race Selection
- All available races with stat bonuses, traits, size, speed, languages
- Dragonlance races: Kender, Kyrie, plus core races
- Source: `09 - Player Handouts/Race Guides/` + PHB + Volo's + Tasha's
- Visual cards with race descriptions

#### Step 2: Class Selection
- All 13 classes with hit die, primary ability, proficiencies, key features
- Subclass selection (for classes that choose at Level 1)
- Source: `09 - Player Handouts/Class Guides/` + all source books
- Krynn-specific flavor notes

#### Step 3: Ability Score Assignment
- Standard Array (15, 14, 13, 12, 10, 8) — drag to assign
- Point Buy calculator (27 points, costs per score)
- Apply racial modifiers
- Show resulting modifiers live

#### Step 4: Background Selection
- Standard PHB backgrounds + campaign customs
- Skill proficiencies, tool proficiencies, languages, equipment, feature

#### Step 5: Equipment Selection
- Starting equipment by class OR starting gold
- Pull from items database (Task 2)

#### Step 6: Review & Save
- Full character sheet preview (matches existing character page layout)
- "Add to Party" button — generates a character `.md` file with proper frontmatter
- "Start Over" button — clears and resets
- "Delete" button — removes a previously created character

### Technical Implementation
- New page: `src/pages/character-creation/index.astro`
- Heavy client-side JavaScript (multi-step form, calculations, state management)
- Uses existing data files (`items.ts`, `spells.ts`, `feats.ts`, `skills.ts`)
- Needs new data: `src/data/races.ts`, `src/data/classes.ts`, `src/data/backgrounds.ts`
- Save mechanism: Could generate downloadable `.md` file or use localStorage + manual copy

### Character Deletion
- Add a "Manage Characters" section or button on the Party page
- Allow marking a character as "retired" or "deleted"
- Characters marked deleted should be hidden from the main party view but recoverable
- Alternative: provide a delete confirmation modal that removes the character data

### Files to Create
- `src/pages/character-creation/index.astro` — main builder page
- `src/data/races.ts` — race database with all traits/bonuses
- `src/data/classes.ts` — class database with features, proficiencies, subclasses
- `src/data/backgrounds.ts` — background database

### Files to Modify
- `src/layouts/BaseLayout.astro` — add Character Creation to nav (under Party dropdown)
- `src/pages/characters/index.astro` — add "Create New Character" button + delete functionality

---

## TASK 4: Expand Classes & Subclasses Data
**Priority:** MEDIUM — Needed for character creation
**Status:** NOT STARTED (some class data exists in class guides but not in TypeScript)

### All 13 Classes + All Subclasses Needed

Source material to extract from:
- `910864860-DnD-5e-Players-Handbook-BnW-OCR-Fixed-Pages.md` — Core classes + PHB subclasses
- `486175946-D-D-5th-Tasha-s-Cauldron-of-Everything-pdf.md` — New subclasses, optional features
- `750098725-Xanathar-s-Guide-to-Everything.md` — Additional subclasses
- `588526580-Dragonlance-5e-v2-5.md` — Dragonlance-specific subclasses
- `705230547-Fizban-s-Treasury-of-Dragons-1-050-100.md` — Draconic subclasses
- `09 - Player Handouts/Class Guides/` — 11 class guide files with Krynn flavor

Create `src/data/classes.ts` with:
- Class name, hit die, primary ability, saving throw proficiencies
- Armor/weapon proficiencies
- Starting equipment options
- All features by level (1-20)
- All subclasses with features
- Spell list references (for casting classes)

---

## TASK 5: Expand Skills & Feats Data
**Priority:** MEDIUM
**Status:** PARTIALLY DONE — `src/data/skills.ts` and `src/data/feats.ts` exist, need verification

### Skills
Verify all 18 core skills are present with:
- Name, ability score, description, example uses, proficient classes

### Feats
Verify ALL feats from all sources:
- PHB feats
- Xanathar's racial feats + expanded feats
- Tasha's new feats
- Fizban's draconic feats
- Dragonlance setting feats

Each feat needs: name, prerequisite, description, source

---

## Source Material File Locations

All under `C:\Users\djric\OneDrive\Desktop\Dungeons And Dragons\`:

### Core Rulebooks (DnD Source Material/)
| File | Content |
|------|---------|
| `910864860-DnD-5e-Players-Handbook-BnW-OCR-Fixed-Pages.md` | PHB — classes, races, spells, feats, skills, equipment |
| `750098725-Xanathar-s-Guide-to-Everything.md` | XGE — subclasses, feats, spells |
| `486175946-D-D-5th-Tasha-s-Cauldron-of-Everything-pdf.md` | TCE — subclasses, spells, feats |
| `581852298-D-D-5e-Monster-Manual.md` | Monster stat blocks |
| `616924846-Volo-s-Guide-to-Monsters.md` | Monstrous races, monster variants |
| `574852192-Mordenkainen-Presents-Monsters-of-the-Multiverse.md` | Revised creatures |
| `705230547-Fizban-s-Treasury-of-Dragons-1-050-100.md` | Dragon rules, draconic feats |

### Equipment & Items (DnD Source Material/)
| File | Content |
|------|---------|
| `619530352-D-D-5e-Comprehensive-Equipment-Manual.md` | Extended equipment, double weapons, firearms, vehicles |
| `632339823-RPG-Magic-Item-Collection-pdf.md` | Magic item compendium |
| `689429261-Mage-Forge-Magic-Items-for-5e.md` | Nerdarchy magic items |
| `513379915-Mordenkainens-Tome-of-Marvelous-Magic.md` | Extended magic items |
| `554366186-Treasures-of-the-Realms-Magic-Items-Weapons-of-Faerun.md` | FR magic items/weapons |
| `432011723-DnD-magic-weapons.md` | Enchanted weapons |

### Dragonlance (DnD Source Material/)
| File | Content |
|------|---------|
| `588526580-Dragonlance-5e-v2-5.md` | Raistlin's Guide — races, classes, feats, mechanics |
| `616027176-D-D-5-0-WotC-DragonLance-Shadow-of-the-Dragon-Queen-OCR.md` | Official WotC Dragonlance |
| `419519236-Dragonlance-Campaign-Setting.md` | Campaign setting |
| `429170007-DragonLance-Bestiary-of-Krynn-pdf.md` | Krynn creatures |
| `346606815-The-Atlas-of-the-Dragonlance-World-pdf.md` | Geography |

### Campaign Content
| Path | Content |
|------|---------|
| `Shadows Before The Flame Campaign/.../04 - Artifacts/` | 24 campaign artifact files with full mechanics |
| `Shadows Before The Flame Campaign/.../09 - Player Handouts/Class Guides/` | 11 class guides with Krynn flavor |
| `Shadows Before The Flame Campaign/.../09 - Player Handouts/Race Guides/` | Kender, Kyrie guides |
| `Shadows Before The Flame Campaign/.../09 - Player Handouts/` | Available classes, races, alignments, backstory notes |
| `Shadows Before The Flame Campaign/.../10 - World Lore/` | Deities, factions, geography + duplicate source refs |

---

## Priority Order

| # | Task | Priority | Effort | Dependencies |
|---|------|----------|--------|-------------|
| 1 | Fix dropdown/nav readability | HIGHEST | Small (CSS/JS) | None |
| 2 | Complete Items database | HIGH | Large (data extraction) | None |
| 3 | Expand Classes & Subclasses data | MEDIUM | Large (data extraction) | None |
| 4 | Expand Skills & Feats data | MEDIUM | Medium (verify + fill gaps) | None |
| 5 | Character Creation page | MEDIUM | Large (interactive JS) | Tasks 2, 3, 4 |

---

## Notes
- Site is player-facing — no DM spoilers in public pages
- Non-5e content from older Dragonlance books needs conversion to 5e
- Large databases (items, spells, monsters) benefit from client-side filtering (already implemented for spells)
- TypeScript data files are preferred over Content Collections for tabular reference data (established pattern)
- All data lives in `src/data/*.ts`, all authored content in `src/content/`
