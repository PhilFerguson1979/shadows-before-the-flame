# Shadows Before The Flame — Developer Log
**Astro Campaign Wiki** | `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`
**Repo:** PhilFerguson1979/shadows-before-the-flame
**Preview:** `http://localhost:4321` (run `astro preview` after each build)
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
- There are TWO repos — do not confuse them:
  - `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame` ← **Astro site (this one)**
  - `C:\Users\djric\OneDrive\Documents\GitHub\Dungeons-and-Dragons` ← GitHub Pages markdown wiki (old)

---

## Project Structure
```
src/
  components/
    EquipmentPanel.astro   ← dynamic D&D equipment system (interactive JS)
    CurrencyDisplay.astro  ← coin display with GP/SP/CP/PP/EP
  content/
    characters/            ← 9 character .md files with full frontmatter
    sessions/              ← session logs
    npcs/                  ← NPC entries
    locations/             ← location entries
    lore/                  ← lore articles
    inventory/             ← (placeholder, unused)
    config.ts              ← Zod schemas for all collections
  layouts/
    BaseLayout.astro       ← nav, header, footer wrapper
  pages/
    index.astro            ← homepage
    characters/[slug].astro ← character detail page (uses EquipmentPanel + CurrencyDisplay)
    sessions/[slug].astro  ← session detail page
    sessions/index.astro   ← session list
    npcs/[slug].astro
    locations/[slug].astro
    lore/[slug].astro
    inventory/index.astro
  styles/
    global.css             ← CSS variables, base styles, shared components
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
```

**Item types:** `armor`, `weapon`, `shield`, `helmet`, `cloak`, `magic`, `gloves`, `boots`, `ring`, `amulet`, `tool`, `pack`, `misc`, `ammo`
**Armor weights:** `light`, `medium`, `heavy` (affects DEX cap in AC calc)
**Equipment slots:** `armor`, `mainhand`, `offhand`, `helmet`, `cloak`, `gloves`, `boots`, `ring1`, `ring2`, `amulet`

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
- **Fixes applied (prev session):**
  - Player names: Sonata→Senada, Lindsay→Linzee, Keegan→Keygen; Tyler/Senada swapped
  - Robe of Useful Items carrier: Vomilia→Cogmaw (19/20 patches)
  - Removed "Dragon Army" spoiler from `lore/ispin-greenshield.md`
  - Removed Dragon Army evidence from `lore/the-dragon-army.md`

### Session 1 — Astro Site Foundation
- Discovered Astro project at `C:\Users\djric\OneDrive\Documents\GitHub\shadows-before-the-flame`
- Existing Astro structure with content collections for all 6 content types
- Dark fantasy theme with CSS variables (gold/parchment/dark palette)

### Session 2 — Equipment System + Character Overhaul
**Files changed:**
- `src/content/config.ts` — expanded character schema with ability scores, currency, inventory, equipped
- `src/components/EquipmentPanel.astro` — **NEW** — full D&D 5e equipment panel:
  - 10 equipment slots with filtered dropdowns (armor, mainhand, offhand, helmet, cloak, gloves, boots, ring×2, amulet)
  - Live AC calculation (handles light/medium/heavy armor DEX caps, Barbarian/Monk unarmored defense)
  - Active Bonuses panel (color-coded: blue=defense, red=attack, purple=magic, orange=warning)
  - Weapon attack cards (shows To Hit bonus, damage dice, damage bonus, type, properties)
  - Full inventory grid (color-coded by item type)
  - All powered by `define:vars` injected JSON — works in static build
- `src/components/CurrencyDisplay.astro` — **NEW** — coin display with icons and GP conversion
- `src/pages/characters/[slug].astro` — rebuilt: hero header, ability score bar, currency, equipment panel, then prose
- All 9 character `.md` files — full structured frontmatter (ability scores, currency, inventory, equipped)

---

## TODO / Upcoming Work

- [ ] **Session log richer formatting** — better [slug].astro template with MVP callout, timeline, loot table
- [ ] **Level-up tracker** — component + schema fields for tracking level gains and features earned
- [ ] **Fix markdown duplication** — strip ability score tables and equipment lists from .md body (now driven by frontmatter)
- [ ] **GitHub Pages deployment** — configure Astro for GitHub Pages, add `base` path, GitHub Actions workflow
- [ ] Switch from `astro preview` to `astro dev` for active development sessions

---
