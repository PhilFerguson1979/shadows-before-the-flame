---
name: "Dwardo Gutterson"
player: "Gavin"
race: "Kender"
class: "Bard"
level: 1
hp: 1
maxHp: 10
ac: 13
speed: 30
profBonus: 2
status: "active"
portrait: "/portraits/dwardo-gutterson.svg"
str: 8
dex: 15
con: 14
int: 10
wis: 11
cha: 17
currency:
  gp: 0
  sp: 2
  cp: 0
inventory:
  - name: "Leather Armor"
    type: "armor"
    slot: "armor"
    acBase: 11
    weight: "light"
    notes: "AC = 11 + DEX mod"
  - name: "Dagger"
    type: "weapon"
    slot: "mainhand"
    dmg: "1d4"
    dmgType: "piercing"
    properties: ["finesse", "light", "thrown"]
  - name: "Lute"
    type: "misc"
    notes: "Arcane focus for bardic spells"
  - name: "Entertainer's Pack"
    type: "pack"
    notes: "Backpack, bedroll, 2 costumes, 5 candles, rations, waterskin, disguise kit"
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
    notes: "Session 1 loot"
  - name: "Shield"
    type: "shield"
    slot: "offhand"
    acBonus: 2
    notes: "Session 1 loot"
  - name: "Glass Bottle"
    type: "misc"
    notes: "Session 1 loot — empty"
equipped:
  armor: "Leather Armor"
  mainhand: "Dagger"
levelHistory:
  - level: 1
    sessionNumber: 1
    hpGained: 10
    features:
      - "Bardic Inspiration d6 (3/long rest)"
      - "Spellcasting (CHA-based, DC 13, +5)"
      - "Kender Taunting, Fearless"
spellSlots:
  - level: 1
    total: 2
    used: 0
spellcastingAbility: "cha"
casterType: "known"
spells:
  - name: "Vicious Mockery"
    level: 0
    school: "Enchantment"
    notes: "1d4 psychic, disadvantage on next attack"
  - name: "Minor Illusion"
    level: 0
    school: "Illusion"
  - name: "Healing Word"
    level: 1
    school: "Evocation"
    notes: "1d4+CHA bonus action heal, 60 ft"
  - name: "Dissonant Whispers"
    level: 1
    school: "Enchantment"
    notes: "3d6 psychic, target must flee"
  - name: "Faerie Fire"
    level: 1
    school: "Evocation"
    concentration: true
    notes: "Advantage on attacks vs affected creatures"
  - name: "Thunderwave"
    level: 1
    school: "Evocation"
    notes: "2d8 thunder, push 10 ft"
---

## Class Features

- **Bardic Inspiration** (d6, 3/long rest) — give an ally a bonus die on a check, attack, or save
- **Kender Taunting** — taunt creatures as a bonus action
- **Fearless** — immune to the frightened condition

## Spells

| Spell | Level | Notes |
|-------|-------|-------|
| Vicious Mockery | Cantrip | Psychic damage + disadvantage |
| True Strike | Cantrip | Advantage on next attack |
| Thunderclap | Cantrip | CON save, thunder, audible 100 ft |
| Sleep | 1st (2 slots) | Put creatures to sleep (5d8 HP worth) |

> ⚠️ **No healing spells — party has no dedicated healer.**

## Session Highlights

### Session 1 — The Inn of the Last Home
- **Sleep** put **innocent bystanders** to sleep instead of guards
- **Vicious Mockery** on Hagar — 3 psychic damage + disadvantage on next attack
- Tried to springboard off a stuck sword, hit the ceiling, **knocked unconscious on a rafter**
- Ended the session at **1 HP**

## Personality

> *Friendly and curious.*
