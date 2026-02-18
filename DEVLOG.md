# Shadows Before The Flame — Developer Log

**Project:** Astro + Tailwind CSS campaign website  
**Repo:** `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`  
**Live (local):** http://localhost:4321  
**GitHub Pages:** https://philferguson1979.github.io/shadows-before-the-flame/ *(wiki repo — separate)*  
**Node path:** `C:\Program Files\nodejs\node.exe`  
**Astro binary:** `.\node_modules\astro\astro.js`  
**Build command:** `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' build`  
**Preview command:** `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' preview`  
**Dev command (preferred):** `& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\astro.js' dev`

> ⚠️ The server runs `astro preview` (serves pre-built `dist/`). Always rebuild after changes, then restart preview. Switch to `astro dev` for hot-reload during active development.

---

## ✅ Session 1 — GitHub Pages Wiki Fixes

**Repo:** PhilFerguson1979/shadows-before-the-flame (GitHub Pages wiki, separate from Astro site)  
**Files copied to:** `C:\Users\djric\OneDrive\Documents\GitHub\Dungeons-and-Dragons`

### What was done
- Corrected player name spelling across 8 files: "Sonata" → "Senada", "Lindsay" → "Linzee", "Keegan" → "Keygen"
- Fixed Robe of Useful Items carrier: Vomilia → Cogmaw
- Removed DM spoilers from `lore/ispin-greenshield.md` and `lore/the-dragon-army.md`

---

## ✅ Session 2 — Astro Character Sheet Overhaul

**Site location:** `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`

### What was done

#### Schema & Content (`src/content/config.ts`)
- Added full item schema with fields: `name`, `type`, `slot`, `acBase`, `acBonus`, `dmg`, `dmgType`, `weight`, `properties`, `notes`, `quantity`, `magical`
- Added to character schema: `subclass`, `speed`, `initiative`, `profBonus`, `str/dex/con/int/wis/cha`, `currency` (pp/gp/ep/sp/cp), `inventory` (array of items), `equipped` (record of slot→item name)

#### All 9 character `.md` files updated with structured frontmatter
- `darian-vayne.md` — Rogue, Leather Armor + 2x Shortsword equipped, 4 SP
- `cogmaw-fraker.md` — Artificer, Scale Mail + Light Crossbow, 25 GP, Robe of Useful Items
- `cerci-sanja.md` — Druid, Wooden Shield + Dagger, 2 SP, druid armor warnings added
- `dorthol-silifrey.md` — Lunar Sorcerer, Dagger, 2 SP
- `dwardo-gutterson.md` — Bard, Leather Armor + Dagger, 2 SP, 1 HP (session end)
- `legolas-pine.md` — Ranger, Leather Armor + Longbow, 15 GP
- `metallyn-osborne.md` — Barbarian, unarmored (Unarmored Defense noted), 2 SP
- `shoto-todoroki.md` — Monk, unarmored (Unarmored Defense noted, AC 17), 2 SP
- `vomilia-fraker.md` — Artificer, Scale Mail + Light Crossbow, 2 SP

#### New Components
- `src/components/CurrencyDisplay.astro` — coin-card display for PP/GP/EP/SP/CP with GP equivalent values
- `src/components/EquipmentPanel.astro` — full D&D 5e equipment system:
  - 10 equipment slots (Armor, Main Hand, Off Hand, Helmet, Cloak/Back, Gloves, Boots, Ring×2, Amulet)
  - Dropdowns filtered by item type per slot
  - Live AC calculation (light/medium/heavy armor, Barbarian Unarmored Defense, Monk Unarmored Defense, shield bonus)
  - Active Bonuses panel (color-coded by defense/attack/magic/warning)
  - Weapon attack cards (to-hit bonus, damage dice, damage bonus, damage type, property tags)
  - Full inventory grid (color-coded by item type)
  - Pre-selects currently equipped items from `equipped` frontmatter on load

#### Updated `src/pages/characters/[slug].astro`
- Added ability score bar (all 6 stats with modifier, pulled from frontmatter)
- Added Speed and Prof Bonus badges to vitals row
- Integrated `CurrencyDisplay` and `EquipmentPanel` components
- Removed inline currency table (now handled by component)

### Known issue (to fix)
- Character `.md` files still contain ability score tables and equipment lists in markdown body → shows as duplicate content below the dynamic panels. **Fix: strip these sections from all 9 `.md` files.**

---

## ✅ Session 3 — In Progress

### Task List
- [ ] Richer session log formatting
- [ ] Level-up tracker component
- [ ] Fix markdown content duplication (strip ability score tables + equipment lists from all 9 `.md` files)
- [ ] Deploy to GitHub Pages (Astro site, not just wiki)

---
