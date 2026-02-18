# Shadows Before The Flame — Developer Log

## Project Overview
- **Astro** static site with Tailwind CSS
- Repo: `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`
- Live preview: `http://localhost:4321`
- GitHub Pages target: `https://philferguson1979.github.io/shadows-before-the-flame/`
- GitHub repo: `PhilFerguson1979/shadows-before-the-flame`

## How To Run
```powershell
# Dev mode (hot reload — use this when actively editing)
cd "C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame"
node .\node_modules\astro\astro.js dev

# Build for production
node .\node_modules\astro\astro.js build

# Preview built site
node .\node_modules\astro\astro.js preview
```

## Deploy to GitHub Pages (manual step — run in PowerShell)
```powershell
cd "C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame"
node .\node_modules\astro\astro.js build
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force https://github.com/PhilFerguson1979/shadows-before-the-flame.git HEAD:gh-pages
```
> Note: You'll be prompted for your GitHub credentials. Use a Personal Access Token (PAT) as the password if you have 2FA enabled.

---

## Session History

### Session A — Obsidian Vault Name Corrections
- Fixed "Sonata" → "Senada", "Lindsay" → "Linzee", "Keegan" → "Keygen" across Obsidian vault
- Vault location: `C:\Users\djric\OneDrive\Desktop\Dungeons And Dragons\Shadows Before The Flame Campaign\Shadows Before The Flame\`

### Session B — GitHub Pages Initial Fixes
- Corrected player names across 8 files on the GitHub Pages site
- Fixed Robe of Useful Items carrier: Vomilia → Cogmaw
- Removed DM spoilers from `lore/ispin-greenshield.md` and `lore/the-dragon-army.md`

### Session C — Equipment System Build (Major)

#### Schema Updates (`src/content/config.ts`)
- Added `itemSchema` with: name, type, slot, acBase, acBonus, dmg, dmgType, weight, properties, notes, quantity, magical
- Added ability scores (str, dex, con, int, wis, cha) to character schema
- Added `currency` object (pp, gp, ep, sp, cp)
- Added `inventory` array and `equipped` record to character schema
- Added `subclass`, `speed`, `profBonus` fields

#### Character Data Migration — All 9 Characters Updated
All characters at `src/content/characters/`:
1. **darian-vayne.md** — Rogue, dual shortswords, leather armor, Session 1 loot (2 spears, 2 chain shirts, 2 shields)
2. **cogmaw-fraker.md** — Artificer, scale mail, light crossbow, Robe of Useful Items (19 patches), Hederick's loot
3. **cerci-sanja.md** — Druid, wooden shield, dagger, herbalism kit (cannot wear metal)
4. **dorthol-silifrey.md** — Lunar Sorcerer, component pouch, dagger, light crossbow
5. **dwardo-gutterson.md** — Bard, leather armor, lute, dagger (currently at 1 HP)
6. **legolas-pine.md** — Ranger, longbow, 2 shortswords, thieves' tools, Hagar's loot (mace, iron key ring)
7. **metallyn-osborne.md** — Barbarian, battleaxe, 4 javelins, whip (Unarmored AC = 14)
8. **shoto-todoroki.md** — Monk, quarterstaff, 10 darts (Unarmored AC = 17 — never wear armor)
9. **vomilia-fraker.md** — Artificer, scale mail, light crossbow, wrist-mounted fire bolt device

#### Components Created
- **`src/components/EquipmentPanel.astro`** — Full D&D 5e equipment system:
  - 10 equipment slots with filtered dropdowns
  - Live AC calculation (light/medium/heavy armor, unarmored defense for Barbarian/Monk, shields)
  - Active Bonuses panel (color-coded: blue=defense, red=attack, purple=magic, orange=warning)
  - Weapon attack cards (to-hit bonus, damage dice, damage bonus, damage type, properties)
  - Full inventory grid with color-coded item types
- **`src/components/CurrencyDisplay.astro`** — Coin cards for PP/GP/EP/SP/CP with GP equivalent values

#### Page Updates (`src/pages/characters/[slug].astro`)
- Integrated EquipmentPanel and CurrencyDisplay
- Added ability scores bar (all 6 stats with modifiers)
- Added Speed and Proficiency Bonus to vitals display
- Enhanced hero section with player name, race, class, level badges

#### Key Bug Found & Fixed
- Dev server was running `astro preview` (serves pre-built dist/) not `astro dev` (hot reload)
- Changes to `src/` require a rebuild + server restart when using preview mode
- Recommend switching to `astro dev` for active development

### Session D — Current Session (In Progress)
- [x] Created this DEVLOG.md
- [ ] Session log richer formatting
- [ ] Level-up tracker
- [ ] Fix Markdown content duplication (ability score tables show twice)
- [ ] GitHub Pages deployment setup

---

## Architecture Notes

### Content Collections (`src/content/`)
| Collection | Path | Notes |
|---|---|---|
| characters | `src/content/characters/*.md` | 9 player characters |
| sessions | `src/content/sessions/*.md` | Session recaps |
| npcs | `src/content/npcs/*.md` | Named NPCs |
| locations | `src/content/locations/*.md` | Places visited |
| lore | `src/content/lore/*.md` | World lore articles |
| inventory | `src/content/inventory/*.md` | (empty, reserved) |

### Key Files
| File | Purpose |
|---|---|
| `src/content/config.ts` | Zod schemas for all collections |
| `src/pages/characters/[slug].astro` | Character sheet page template |
| `src/components/EquipmentPanel.astro` | Interactive equipment & AC calculator |
| `src/components/CurrencyDisplay.astro` | Currency display widget |
| `src/layouts/BaseLayout.astro` | Site-wide layout with nav/footer |

### D&D Rules Implemented
- **Light armor**: AC = base + full DEX mod
- **Medium armor**: AC = base + DEX mod (max +2)
- **Heavy armor**: AC = base only
- **Unarmored (Barbarian)**: AC = 10 + DEX + CON
- **Unarmored (Monk)**: AC = 10 + DEX + WIS
- **Shield**: +2 AC
- **Finesse weapons**: use higher of STR or DEX for attack/damage
- **Proficiency bonus**: currently hardcoded at +2 (Level 1–4)

---

## To Do / Future Ideas
- [ ] Encumbrance / carry weight tracking
- [ ] Spell slot tracker
- [ ] Drag-and-drop equipment slots
- [ ] Initiative tracker for combat
- [ ] Session XP / milestone tracker
- [ ] NPC relationship tracker per character
