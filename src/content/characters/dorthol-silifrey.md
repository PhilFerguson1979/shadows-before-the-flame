---
name: "Dorthol Silifrey"
player: "Daniel"
race: "Half-Elf"
class: "Lunar Sorcerer"
level: 1
hp: 15
maxHp: 15
ac: 12
speed: 30
profBonus: 2
status: "active"
portrait: "/portraits/dorthol-silifrey.svg"
str: 10
dex: 14
con: 16
int: 11
wis: 10
cha: 20
currency:
  gp: 0
  sp: 2
  cp: 0
inventory:
  - name: "Dagger"
    type: "weapon"
    slot: "mainhand"
    dmg: "1d4"
    dmgType: "piercing"
    properties: ["finesse", "light", "thrown"]
  - name: "Light Crossbow"
    type: "weapon"
    dmg: "1d8"
    dmgType: "piercing"
    properties: ["ammunition", "loading", "two-handed"]
    notes: "Range 80/320 ft"
  - name: "Component Pouch"
    type: "misc"
    notes: "Replaces arcane focus — holds spell components"
  - name: "Dungeoneer's Pack"
    type: "pack"
    notes: "Crowbar, hammer, pitons, torches, tinderbox, rations, waterskin, rope"
  - name: "Spear"
    type: "weapon"
    dmg: "1d6"
    dmgType: "piercing"
    properties: ["thrown", "versatile"]
    notes: "Session 1 loot"
  - name: "Chain Shirt"
    type: "armor"
    slot: "armor"
    acBase: 13
    weight: "medium"
    notes: "Session 1 loot — AC = 13 + DEX mod (max 2)"
  - name: "Shield"
    type: "shield"
    slot: "offhand"
    acBonus: 2
    notes: "Session 1 loot — NOTE: Sorcerers not proficient with shields"
  - name: "Glass Bottle"
    type: "misc"
    notes: "Session 1 loot — empty"
equipped:
  mainhand: "Dagger"
levelHistory:
  - level: 1
    sessionNumber: 1
    hpGained: 15
    features:
      - "Spellcasting (CHA-based, DC 15, +7)"
      - "Lunar Embodiment — bonus spells by moon phase"
      - "Sorcery Points: 1"
spellSlots:
  - level: 1
    total: 2
    used: 0
spells:
  - name: "Fire Bolt"
    level: 0
    school: "Evocation"
    notes: "1d10 fire, 120 ft range"
  - name: "Light"
    level: 0
    school: "Evocation"
  - name: "Mage Hand"
    level: 0
    school: "Conjuration"
  - name: "Prestidigitation"
    level: 0
    school: "Transmutation"
  - name: "Sacred Flame"
    level: 0
    school: "Evocation"
    notes: "Lunar bonus cantrip (Full Moon)"
  - name: "Shield"
    level: 1
    school: "Abjuration"
    notes: "+5 AC reaction"
  - name: "Magic Missile"
    level: 1
    school: "Evocation"
    notes: "3 darts, 1d4+1 each, auto-hit"
  - name: "Faerie Fire"
    level: 1
    school: "Evocation"
    concentration: true
    notes: "Lunar bonus spell (Full Moon)"
---

## Class Features

- **Spellcasting** — CHA-based, Spell Save DC 15, Spell Attack +7
- **Lunar Embodiment** — bonus spells based on moon phase
- **Fey Ancestry** — advantage vs charm, immune to magical sleep
- **Darkvision** 60 ft.

## Spells

| Spell | Level | Notes |
|-------|-------|-------|
| Fire Bolt | Cantrip | 1d10 fire, 120 ft |
| Light | Cantrip | Object glows 20 ft radius |
| Mage Hand | Cantrip | Spectral hand, 30 ft |
| Sacred Flame | Cantrip | DEX save, radiant damage |
| Dissonant Whispers | 1st (2 slots) | Psychic damage + flee |
| Shield | 1st | +5 AC reaction |
| Color Spray | 1st | Blind creatures |
| Grease | 1st | Slippery surface |

## Session Highlights

### Session 1 — The Inn of the Last Home
- Cast **Grease** — slipped on a cup, greased the wall instead
- Threw **water on a grease fire** causing an explosion
- Took **6 fire damage** from the resulting flames
- Learned the hard way about water + grease + fire interactions

## Personality

> *Always calm. Logic over emotion.*
