# Shadows Before The Flame — Developer Log

> Astro + Tailwind static site for a Dragonlance 5e D&D campaign.
> Repo: `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`
> Live preview: `http://localhost:4321`
> GitHub Pages target: `https://philferguson1979.github.io/shadows-before-the-flame/`

---

## How To Run Locally

```powershell
# From the project root:
cd "C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame"

# Dev mode (hot reload — USE THIS for active development):
node .\node_modules\astro\astro.js dev

# Build + preview (what we used before — requires manual rebuild):
node .\node_modules\astro\astro.js build
node .\node_modules\astro\astro.js preview
```

> ⚠️ We were running `astro preview` which serves a static build — changes to `src/` don't reflect until you rebuild. Switch to `astro dev` for live development.

---

## Project Structure

```
src/
  components/
    EquipmentPanel.astro     ← Interactive equipment slots + AC calculator
    CurrencyDisplay.astro    ← Coin cards with GP equivalent values
  content/
    characters/              ← One .md file per player character
    sessions/                ← Session recap .md files
    npcs/                    ← NPC entries
    locations/               ← Location entries
    lore/                    ← Lore articles
    config.ts                ← Zod schema for all content collections
  pages/
    characters/[slug].astro  ← Character sheet page
    sessions/[slug].astro    ← Session recap page
    index.astro              ← Home page
    ...
```

---

## Session 1 — Name Corrections (Obsidian Vault)

**Location:** `C:\Users\djric\OneDrive\Desktop\Dungeons And Dragons\Shadows Before The Flame Campaign\`

Corrected character names across the Obsidian vault:
- "Sonata" → **Senada**
- "Lindsay" → **Linzee**
- "Keegan" → **Keygen**

---

## Session 2 — GitHub Pages Wiki Fixes

**Repo:** `PhilFerguson1979/shadows-before-the-flame`
**Site:** `https://philferguson1979.github.io/shadows-before-the-flame/`

- Corrected player names across 8 files
- Fixed Robe of Useful Items carrier: Vomilia → Cogmaw
- Removed DM spoilers from `lore/ispin-greenshield.md` and `lore/the-dragon-army.md`

---

## Session 3 — Astro Equipment System

### Schema Updates (`src/content/config.ts`)
- Added `itemSchema` with: name, type, slot, acBase, acBonus, dmg, dmgType, weight, properties, notes, quantity, magical
- Added ability scores (str, dex, con, int, wis, cha) to character schema
- Added currency object (pp, gp, ep, sp, cp)
- Added `inventory` array and `equipped` record to character schema

### Character Data — All 9 Characters Updated

| Character | Class | Notable Equipment |
|---|---|---|
| Darian Vayne | Rogue | Leather armor, 2x shortsword, session 1 loot (2 spears, 2 chain shirts, 2 shields) |
| Cogmaw Fraker | Artificer | Scale mail, light crossbow, Robe of Useful Items (19 patches), Hederick's loot |
| Cerci Sanja | Druid | Wooden shield, dagger, herbalism kit — ⚠️ cannot wear metal armor |
| Dorthol Silifrey | Lunar Sorcerer | Component pouch, dagger, light crossbow |
| Dwardo Gutterson | Bard | Leather armor, lute, dagger — ⚠️ currently at 1 HP |
| Legolas Pine | Ranger | Longbow, 2x shortsword, thieves' tools, Hagar's loot (mace, iron key ring) |
| Metallyn Osborne | Barbarian | Battleaxe, 4 javelins, whip — Unarmored AC = 14 |
| Shoto Todoroki | Monk | Quarterstaff, 10 darts — Unarmored AC = 17, never wear armor |
| Vomilia Fraker | Artificer | Scale mail, light crossbow, wrist fire bolt device |

### Components Created

**`src/components/EquipmentPanel.astro`**
- 10 D&D 5e equipment slots with dropdown selection
- Live AC calculation: light/medium/heavy armor, unarmored defense (Barbarian, Monk)
- Active Bonuses panel with color-coded cards (defense, attack, magic, warnings)
- Weapon attack cards showing to-hit and damage for equipped weapons
- Full inventory grid with item type color coding
- All data injected as JSON via `define:vars` — fully client-side interactive

**`src/components/CurrencyDisplay.astro`**
- Individual coin cards for PP, GP, EP, SP, CP
- Shows GP equivalent for non-gold denominations
- Color-coded borders per coin type

### Character Page Updates (`src/pages/characters/[slug].astro`)
- Hero section with player name, race, class, level
- Ability scores bar (all 6 stats + modifiers from frontmatter)
- Speed and Proficiency Bonus in vitals
- Integrated EquipmentPanel and CurrencyDisplay components

---

## Session 4 — Current Work (In Progress)

### ✅ Task 1: Session Log Richer Formatting
- [ ] In progress

### ⏳ Task 2: Level-Up Tracker
- [ ] Pending

### ⏳ Task 3: Fix Markdown Content Duplication
- [ ] Pending — ability score tables appear twice (dynamic bar + markdown body)

### ⏳ Task 4: Deploy to GitHub Pages
- [ ] Pending

---

*Last updated: 2026-02-18*
