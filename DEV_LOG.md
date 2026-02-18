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
  layouts/
    BaseLayout.astro         ← nav, header, footer wrapper
  pages/
    index.astro              ← homepage
    characters/[slug].astro  ← character detail page
    sessions/[slug].astro    ← rich session log page
    sessions/index.astro     ← session archive with campaign stats
    party/level-tracker.astro ← full party level overview + Level 2 preview
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

---

## Deployment Status

**Site is LIVE:** `https://philferguson1979.github.io/shadows-before-the-flame/`
**GitHub Actions:** Auto-deploys on every push to `main` (workflow in `.github/workflows/deploy.yml`)
**Git push works from terminal** — no longer blocked, regular `git push origin main` succeeds

---

## TODO — Still To Do

- [x] ~~Push to GitHub~~ — force pushed 2026-02-18, resolved history divergence
- [x] ~~Fix 404 on subpages~~ — all links now use `import.meta.env.BASE_URL` prefix
- [ ] **Verify the live site** — check all pages at `https://philferguson1979.github.io/shadows-before-the-flame/`
- [ ] **Session 2 content** — add session 2 `.md` file to `src/content/sessions/` when it happens
- [ ] **Level up characters** — when party hits Level 2, update each character's `level`, `maxHp`, `hp`, and add a `levelHistory` entry with features gained
- [ ] **Add portraits** — character portrait images in `public/portraits/` and set `portrait:` field in frontmatter
- [ ] **Spell tracking** — add spells known/prepared to character schema (especially Dorthol, Cerci, Dwardo, Legolas post-level-2)
- [ ] **Condition tracking** — add `conditions[]` field to characters (poisoned, frightened, etc.)
- [ ] **Initiative tracker** — optional combat tool page
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
