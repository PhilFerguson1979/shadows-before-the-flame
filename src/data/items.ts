// D&D 5e Items Database
// Comprehensive item catalog for equipment search and inventory management

export interface Item {
  name: string;
  type: string;
  slot?: string;
  acBase?: number;
  acBonus?: number;
  dmg?: string;
  dmgType?: string;
  weight?: string;
  properties?: string[];
  notes?: string;
  quantity?: number;
  magical?: boolean;
  value?: string;
  rarity?: string;
  category?: string;
}

export const items: Item[] = [
  // ═══════════════════════════════════════
  // SIMPLE MELEE WEAPONS
  // ═══════════════════════════════════════
  { name: 'Club', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'bludgeoning', properties: ['light'], value: '1 sp', category: 'Simple Weapons' },
  { name: 'Dagger', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'piercing', properties: ['finesse', 'light', 'thrown'], value: '2 gp', category: 'Simple Weapons' },
  { name: 'Greatclub', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'bludgeoning', properties: ['two-handed'], value: '2 sp', category: 'Simple Weapons' },
  { name: 'Handaxe', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'slashing', properties: ['light', 'thrown'], value: '5 gp', category: 'Simple Weapons' },
  { name: 'Javelin', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'piercing', properties: ['thrown'], value: '5 sp', category: 'Simple Weapons' },
  { name: 'Light Hammer', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'bludgeoning', properties: ['light', 'thrown'], value: '2 gp', category: 'Simple Weapons' },
  { name: 'Mace', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'bludgeoning', value: '5 gp', category: 'Simple Weapons' },
  { name: 'Quarterstaff', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'bludgeoning', properties: ['versatile'], value: '2 sp', category: 'Simple Weapons' },
  { name: 'Sickle', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'slashing', properties: ['light'], value: '1 gp', category: 'Simple Weapons' },
  { name: 'Spear', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'piercing', properties: ['thrown', 'versatile'], value: '1 gp', category: 'Simple Weapons' },

  // ═══════════════════════════════════════
  // SIMPLE RANGED WEAPONS
  // ═══════════════════════════════════════
  { name: 'Crossbow, Light', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'piercing', properties: ['ammunition', 'loading', 'two-handed'], value: '25 gp', category: 'Simple Weapons' },
  { name: 'Dart', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'piercing', properties: ['finesse', 'thrown'], value: '5 cp', category: 'Simple Weapons' },
  { name: 'Shortbow', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'piercing', properties: ['ammunition', 'two-handed'], value: '25 gp', category: 'Simple Weapons' },
  { name: 'Sling', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'bludgeoning', properties: ['ammunition'], value: '1 sp', category: 'Simple Weapons' },

  // ═══════════════════════════════════════
  // MARTIAL MELEE WEAPONS
  // ═══════════════════════════════════════
  { name: 'Battleaxe', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'slashing', properties: ['versatile'], value: '10 gp', category: 'Martial Weapons' },
  { name: 'Flail', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'bludgeoning', value: '10 gp', category: 'Martial Weapons' },
  { name: 'Glaive', type: 'weapon', slot: 'mainhand', dmg: '1d10', dmgType: 'slashing', properties: ['heavy', 'reach', 'two-handed'], value: '20 gp', category: 'Martial Weapons' },
  { name: 'Greataxe', type: 'weapon', slot: 'mainhand', dmg: '1d12', dmgType: 'slashing', properties: ['heavy', 'two-handed'], value: '30 gp', category: 'Martial Weapons' },
  { name: 'Greatsword', type: 'weapon', slot: 'mainhand', dmg: '2d6', dmgType: 'slashing', properties: ['heavy', 'two-handed'], value: '50 gp', category: 'Martial Weapons' },
  { name: 'Halberd', type: 'weapon', slot: 'mainhand', dmg: '1d10', dmgType: 'slashing', properties: ['heavy', 'reach', 'two-handed'], value: '10 gp', category: 'Martial Weapons' },
  { name: 'Lance', type: 'weapon', slot: 'mainhand', dmg: '1d12', dmgType: 'piercing', properties: ['reach', 'special'], value: '10 gp', notes: 'Disadvantage within 5 ft. Requires two hands when not mounted.', category: 'Martial Weapons' },
  { name: 'Longsword', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'slashing', properties: ['versatile'], value: '15 gp', category: 'Martial Weapons' },
  { name: 'Maul', type: 'weapon', slot: 'mainhand', dmg: '2d6', dmgType: 'bludgeoning', properties: ['heavy', 'two-handed'], value: '10 gp', category: 'Martial Weapons' },
  { name: 'Morningstar', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'piercing', value: '15 gp', category: 'Martial Weapons' },
  { name: 'Pike', type: 'weapon', slot: 'mainhand', dmg: '1d10', dmgType: 'piercing', properties: ['heavy', 'reach', 'two-handed'], value: '5 gp', category: 'Martial Weapons' },
  { name: 'Rapier', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'piercing', properties: ['finesse'], value: '25 gp', category: 'Martial Weapons' },
  { name: 'Scimitar', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'slashing', properties: ['finesse', 'light'], value: '25 gp', category: 'Martial Weapons' },
  { name: 'Shortsword', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'piercing', properties: ['finesse', 'light'], value: '10 gp', category: 'Martial Weapons' },
  { name: 'Trident', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'piercing', properties: ['thrown', 'versatile'], value: '5 gp', category: 'Martial Weapons' },
  { name: 'War Pick', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'piercing', value: '5 gp', category: 'Martial Weapons' },
  { name: 'Warhammer', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'bludgeoning', properties: ['versatile'], value: '15 gp', category: 'Martial Weapons' },
  { name: 'Whip', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'slashing', properties: ['finesse', 'reach'], value: '2 gp', category: 'Martial Weapons' },

  // ═══════════════════════════════════════
  // MARTIAL RANGED WEAPONS
  // ═══════════════════════════════════════
  { name: 'Blowgun', type: 'weapon', slot: 'mainhand', dmg: '1', dmgType: 'piercing', properties: ['ammunition', 'loading'], value: '10 gp', category: 'Martial Weapons' },
  { name: 'Crossbow, Hand', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'piercing', properties: ['ammunition', 'light', 'loading'], value: '75 gp', category: 'Martial Weapons' },
  { name: 'Crossbow, Heavy', type: 'weapon', slot: 'mainhand', dmg: '1d10', dmgType: 'piercing', properties: ['ammunition', 'heavy', 'loading', 'two-handed'], value: '50 gp', category: 'Martial Weapons' },
  { name: 'Longbow', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'piercing', properties: ['ammunition', 'heavy', 'two-handed'], value: '50 gp', category: 'Martial Weapons' },
  { name: 'Net', type: 'weapon', slot: 'mainhand', properties: ['special', 'thrown'], value: '1 gp', notes: 'Restrained on hit. DC 10 STR or slash damage to escape.', category: 'Martial Weapons' },

  // ═══════════════════════════════════════
  // ARMOR
  // ═══════════════════════════════════════
  { name: 'Padded Armor', type: 'armor', slot: 'armor', acBase: 11, weight: 'light', value: '5 gp', notes: 'Disadvantage on Stealth', category: 'Armor' },
  { name: 'Leather Armor', type: 'armor', slot: 'armor', acBase: 11, weight: 'light', value: '10 gp', category: 'Armor' },
  { name: 'Studded Leather', type: 'armor', slot: 'armor', acBase: 12, weight: 'light', value: '45 gp', category: 'Armor' },
  { name: 'Hide Armor', type: 'armor', slot: 'armor', acBase: 12, weight: 'medium', value: '10 gp', notes: 'Max DEX bonus +2', category: 'Armor' },
  { name: 'Chain Shirt', type: 'armor', slot: 'armor', acBase: 13, weight: 'medium', value: '50 gp', category: 'Armor' },
  { name: 'Scale Mail', type: 'armor', slot: 'armor', acBase: 14, weight: 'medium', value: '50 gp', notes: 'Disadvantage on Stealth', category: 'Armor' },
  { name: 'Breastplate', type: 'armor', slot: 'armor', acBase: 14, weight: 'medium', value: '400 gp', category: 'Armor' },
  { name: 'Half Plate', type: 'armor', slot: 'armor', acBase: 15, weight: 'medium', value: '750 gp', notes: 'Disadvantage on Stealth', category: 'Armor' },
  { name: 'Ring Mail', type: 'armor', slot: 'armor', acBase: 14, weight: 'heavy', value: '30 gp', notes: 'Disadvantage on Stealth', category: 'Armor' },
  { name: 'Chain Mail', type: 'armor', slot: 'armor', acBase: 16, weight: 'heavy', value: '75 gp', notes: 'STR 13 required. Disadvantage on Stealth', category: 'Armor' },
  { name: 'Splint Armor', type: 'armor', slot: 'armor', acBase: 17, weight: 'heavy', value: '200 gp', notes: 'STR 15 required. Disadvantage on Stealth', category: 'Armor' },
  { name: 'Plate Armor', type: 'armor', slot: 'armor', acBase: 18, weight: 'heavy', value: '1,500 gp', notes: 'STR 15 required. Disadvantage on Stealth', category: 'Armor' },

  // ═══════════════════════════════════════
  // SHIELDS
  // ═══════════════════════════════════════
  { name: 'Shield', type: 'shield', slot: 'offhand', acBonus: 2, value: '10 gp', category: 'Shields' },

  // ═══════════════════════════════════════
  // AMMUNITION
  // ═══════════════════════════════════════
  { name: 'Arrows (20)', type: 'gear', value: '1 gp', quantity: 20, category: 'Ammunition' },
  { name: 'Bolts (20)', type: 'gear', value: '1 gp', quantity: 20, category: 'Ammunition' },
  { name: 'Blowgun Needles (50)', type: 'gear', value: '1 gp', quantity: 50, category: 'Ammunition' },
  { name: 'Sling Bullets (20)', type: 'gear', value: '4 cp', quantity: 20, category: 'Ammunition' },

  // ═══════════════════════════════════════
  // ADVENTURING GEAR
  // ═══════════════════════════════════════
  { name: 'Backpack', type: 'gear', value: '2 gp', category: 'Adventuring Gear' },
  { name: 'Bedroll', type: 'gear', value: '1 gp', category: 'Adventuring Gear' },
  { name: 'Rope, Hempen (50 ft)', type: 'gear', value: '1 gp', category: 'Adventuring Gear' },
  { name: 'Rope, Silk (50 ft)', type: 'gear', value: '10 gp', category: 'Adventuring Gear' },
  { name: 'Torch', type: 'gear', value: '1 cp', notes: '20 ft bright, 20 ft dim light for 1 hour', category: 'Adventuring Gear' },
  { name: 'Rations (1 day)', type: 'gear', value: '5 sp', category: 'Adventuring Gear' },
  { name: 'Waterskin', type: 'gear', value: '2 sp', category: 'Adventuring Gear' },
  { name: 'Tinderbox', type: 'gear', value: '5 sp', category: 'Adventuring Gear' },
  { name: 'Grappling Hook', type: 'gear', value: '2 gp', category: 'Adventuring Gear' },
  { name: 'Crowbar', type: 'gear', value: '2 gp', notes: 'Advantage on STR checks where leverage applies', category: 'Adventuring Gear' },
  { name: 'Piton (10)', type: 'gear', value: '5 cp', quantity: 10, category: 'Adventuring Gear' },
  { name: 'Lantern, Hooded', type: 'gear', value: '5 gp', notes: '30 ft bright, 30 ft dim. 6 hours on 1 flask oil', category: 'Adventuring Gear' },
  { name: 'Lantern, Bullseye', type: 'gear', value: '10 gp', notes: '60 ft cone bright, 60 ft dim. 6 hours on 1 flask oil', category: 'Adventuring Gear' },
  { name: 'Oil (flask)', type: 'gear', value: '1 sp', notes: 'As improvised weapon: 5 fire dmg for 2 rounds', category: 'Adventuring Gear' },
  { name: 'Candle (10)', type: 'gear', value: '1 cp', quantity: 10, notes: '5 ft bright, 5 ft dim light for 1 hour', category: 'Adventuring Gear' },
  { name: 'Chalk (10)', type: 'gear', value: '1 cp', quantity: 10, category: 'Adventuring Gear' },
  { name: 'Caltrops (bag of 20)', type: 'gear', value: '1 gp', notes: 'DC 15 DEX or stop, take 1 piercing, -10 speed', category: 'Adventuring Gear' },
  { name: 'Ball Bearings (bag of 1000)', type: 'gear', value: '1 gp', notes: 'DC 10 DEX or fall prone (10x10 ft area)', category: 'Adventuring Gear' },
  { name: 'Chain (10 ft)', type: 'gear', value: '5 gp', notes: 'AC 19, 10 HP. DC 20 STR to break', category: 'Adventuring Gear' },
  { name: "Climber's Kit", type: 'gear', value: '25 gp', notes: 'Pitons, boot tips, gloves, harness. Advantage on climbing', category: 'Adventuring Gear' },
  { name: "Healer's Kit", type: 'gear', value: '5 gp', notes: '10 uses. Stabilize a creature at 0 HP without Medicine check', category: 'Adventuring Gear' },
  { name: 'Holy Water (flask)', type: 'gear', value: '25 gp', notes: 'Ranged: 2d6 radiant to fiends/undead', category: 'Adventuring Gear' },
  { name: 'Antitoxin', type: 'gear', value: '50 gp', notes: 'Advantage on saves vs poison for 1 hour', category: 'Adventuring Gear' },
  { name: 'Acid (vial)', type: 'gear', value: '25 gp', notes: 'Ranged: 2d6 acid damage', category: 'Adventuring Gear' },
  { name: "Alchemist's Fire", type: 'gear', value: '50 gp', notes: 'Ranged: 1d4 fire per turn. DC 10 DEX to extinguish', category: 'Adventuring Gear' },
  { name: 'Component Pouch', type: 'gear', value: '25 gp', notes: 'Spellcasting focus for material components', category: 'Adventuring Gear' },
  { name: 'Arcane Focus (crystal)', type: 'gear', value: '10 gp', notes: 'Spellcasting focus for arcane casters', category: 'Adventuring Gear' },
  { name: 'Druidic Focus (wooden staff)', type: 'gear', value: '5 gp', notes: 'Spellcasting focus for druids', category: 'Adventuring Gear' },
  { name: 'Holy Symbol', type: 'gear', value: '5 gp', notes: 'Spellcasting focus for clerics/paladins', category: 'Adventuring Gear' },
  { name: 'Manacles', type: 'gear', value: '2 gp', notes: 'DC 20 STR or DC 15 DEX to escape', category: 'Adventuring Gear' },
  { name: 'Mirror, Steel', type: 'gear', value: '5 gp', category: 'Adventuring Gear' },
  { name: 'Signal Whistle', type: 'gear', value: '5 cp', category: 'Adventuring Gear' },
  { name: 'Ink (1 oz bottle)', type: 'gear', value: '10 gp', category: 'Adventuring Gear' },
  { name: 'Parchment (sheet)', type: 'gear', value: '1 sp', category: 'Adventuring Gear' },
  { name: 'Spyglass', type: 'gear', value: '1,000 gp', notes: 'Objects appear twice their actual size', category: 'Adventuring Gear' },
  { name: 'Tent, Two-Person', type: 'gear', value: '2 gp', category: 'Adventuring Gear' },

  // ═══════════════════════════════════════
  // TOOLS
  // ═══════════════════════════════════════
  { name: "Thieves' Tools", type: 'tool', value: '25 gp', notes: 'Pick locks, disarm traps', category: 'Tools' },
  { name: 'Herbalism Kit', type: 'tool', value: '5 gp', notes: 'Identify plants, create potions of healing', category: 'Tools' },
  { name: "Poisoner's Kit", type: 'tool', value: '50 gp', notes: 'Create and identify poisons', category: 'Tools' },
  { name: "Alchemist's Supplies", type: 'tool', value: '50 gp', category: 'Tools' },
  { name: "Brewer's Supplies", type: 'tool', value: '20 gp', category: 'Tools' },
  { name: "Carpenter's Tools", type: 'tool', value: '8 gp', category: 'Tools' },
  { name: "Cartographer's Tools", type: 'tool', value: '15 gp', category: 'Tools' },
  { name: "Cobbler's Tools", type: 'tool', value: '5 gp', category: 'Tools' },
  { name: "Cook's Utensils", type: 'tool', value: '1 gp', category: 'Tools' },
  { name: 'Forgery Kit', type: 'tool', value: '15 gp', category: 'Tools' },
  { name: "Jeweler's Tools", type: 'tool', value: '25 gp', category: 'Tools' },
  { name: "Leatherworker's Tools", type: 'tool', value: '5 gp', category: 'Tools' },
  { name: "Mason's Tools", type: 'tool', value: '10 gp', category: 'Tools' },
  { name: "Painter's Supplies", type: 'tool', value: '10 gp', category: 'Tools' },
  { name: "Potter's Tools", type: 'tool', value: '10 gp', category: 'Tools' },
  { name: "Smith's Tools", type: 'tool', value: '20 gp', category: 'Tools' },
  { name: "Tinker's Tools", type: 'tool', value: '50 gp', category: 'Tools' },
  { name: "Weaver's Tools", type: 'tool', value: '1 gp', category: 'Tools' },
  { name: "Woodcarver's Tools", type: 'tool', value: '1 gp', category: 'Tools' },
  { name: 'Disguise Kit', type: 'tool', value: '25 gp', category: 'Tools' },
  { name: "Navigator's Tools", type: 'tool', value: '25 gp', category: 'Tools' },
  { name: 'Musical Instrument (Lute)', type: 'tool', value: '35 gp', category: 'Tools' },
  { name: 'Musical Instrument (Flute)', type: 'tool', value: '2 gp', category: 'Tools' },
  { name: 'Musical Instrument (Drum)', type: 'tool', value: '6 gp', category: 'Tools' },

  // ═══════════════════════════════════════
  // POTIONS
  // ═══════════════════════════════════════
  { name: 'Potion of Healing', type: 'potion', value: '50 gp', rarity: 'common', notes: 'Restores 2d4+2 HP', category: 'Potions' },
  { name: 'Potion of Greater Healing', type: 'potion', value: '150 gp', rarity: 'uncommon', notes: 'Restores 4d4+4 HP', category: 'Potions' },
  { name: 'Potion of Superior Healing', type: 'potion', value: '500 gp', rarity: 'rare', notes: 'Restores 8d4+8 HP', category: 'Potions' },
  { name: 'Potion of Supreme Healing', type: 'potion', value: '5,000 gp', rarity: 'very rare', notes: 'Restores 10d4+20 HP', category: 'Potions' },
  { name: 'Potion of Resistance', type: 'potion', rarity: 'uncommon', notes: 'Resistance to one damage type for 1 hour', category: 'Potions' },
  { name: 'Potion of Speed', type: 'potion', rarity: 'very rare', notes: 'Haste for 1 minute (no concentration)', category: 'Potions' },
  { name: 'Potion of Invisibility', type: 'potion', rarity: 'very rare', notes: 'Invisible for 1 hour or until you attack/cast', category: 'Potions' },
  { name: 'Potion of Fire Breath', type: 'potion', rarity: 'uncommon', notes: '4d6 fire, 30 ft cone, DEX save DC 13. 3 uses in 1 hour', category: 'Potions' },
  { name: 'Potion of Hill Giant Strength', type: 'potion', rarity: 'uncommon', notes: 'STR becomes 21 for 1 hour', category: 'Potions' },
  { name: 'Potion of Flying', type: 'potion', rarity: 'very rare', notes: '60 ft fly speed for 1 hour', category: 'Potions' },
  { name: 'Potion of Heroism', type: 'potion', rarity: 'rare', notes: '10 temp HP, blessed for 1 hour', category: 'Potions' },
  { name: 'Potion of Climbing', type: 'potion', rarity: 'common', notes: 'Climbing speed equal to walking speed for 1 hour. Advantage on Athletics checks to climb.', category: 'Potions' },
  { name: 'Potion of Animal Friendship', type: 'potion', rarity: 'uncommon', notes: 'Cast Animal Friendship (DC 13) for 1 hour after drinking.', category: 'Potions' },
  { name: 'Potion of Growth', type: 'potion', rarity: 'uncommon', notes: 'Enlarge effect for 1d4 hours. +1d4 to damage, advantage on STR checks/saves.', category: 'Potions' },
  { name: 'Potion of Diminution', type: 'potion', rarity: 'rare', notes: 'Reduce effect for 1d4 hours. Disadvantage on STR checks/saves, -1d4 damage.', category: 'Potions' },
  { name: 'Potion of Water Breathing', type: 'potion', rarity: 'uncommon', notes: 'Breathe underwater for 1 hour.', category: 'Potions' },
  { name: 'Potion of Clairvoyance', type: 'potion', rarity: 'rare', notes: 'Cast Clairvoyance after drinking. No concentration needed.', category: 'Potions' },
  { name: 'Potion of Gaseous Form', type: 'potion', rarity: 'rare', notes: 'Gaseous Form effect for 1 hour. Fly 10 ft, resist nonmagical damage.', category: 'Potions' },
  { name: 'Potion of Vitality', type: 'potion', rarity: 'very rare', notes: 'Removes exhaustion, cures disease/poison, maximizes hit dice for 24 hours.', category: 'Potions' },
  { name: 'Potion of Longevity', type: 'potion', rarity: 'very rare', notes: 'Reduces age by 1d6+6 years. 10% cumulative chance of aging 1d6+6 instead.', category: 'Potions' },
  { name: 'Potion of Storm Giant Strength', type: 'potion', rarity: 'legendary', notes: 'STR becomes 29 for 1 hour.', category: 'Potions' },
  { name: 'Potion of Fire Giant Strength', type: 'potion', rarity: 'rare', notes: 'STR becomes 25 for 1 hour.', category: 'Potions' },
  { name: 'Potion of Cloud Giant Strength', type: 'potion', rarity: 'very rare', notes: 'STR becomes 27 for 1 hour.', category: 'Potions' },
  { name: 'Potion of Frost Giant Strength', type: 'potion', rarity: 'uncommon', notes: 'STR becomes 23 for 1 hour.', category: 'Potions' },
  { name: 'Potion of Stone Giant Strength', type: 'potion', rarity: 'rare', notes: 'STR becomes 23 for 1 hour.', category: 'Potions' },
  { name: 'Potion of Mind Reading', type: 'potion', rarity: 'rare', notes: 'Cast Detect Thoughts (DC 13) after drinking.', category: 'Potions' },
  { name: 'Elixir of Health', type: 'potion', rarity: 'rare', notes: 'Cures disease, removes blinded, deafened, paralyzed, and poisoned conditions.', category: 'Potions' },
  { name: 'Oil of Etherealness', type: 'potion', rarity: 'rare', notes: 'Ethereal for 1 hour. Can see and hear the Material Plane.', category: 'Potions' },
  { name: 'Oil of Sharpness', type: 'potion', rarity: 'very rare', notes: 'Apply to weapon or 5 ammo: +3 to attack and damage for 1 hour.', category: 'Potions' },
  { name: 'Oil of Slipperiness', type: 'potion', rarity: 'uncommon', notes: 'Apply to self: Freedom of Movement for 8 hours. Or pour on ground: Grease spell.', category: 'Potions' },
  { name: 'Philter of Love', type: 'potion', rarity: 'uncommon', notes: 'Charmed by next creature seen within 10 min for 1 hour.', category: 'Potions' },
  { name: 'Perfume of Bewitching', type: 'potion', rarity: 'common', notes: 'Advantage on Persuasion checks on humanoids within 5 ft for 1 hour.', category: 'Potions' },

  // ═══════════════════════════════════════
  // MAGIC ITEMS (Core)
  // ═══════════════════════════════════════
  { name: 'Bag of Holding', type: 'wondrous', rarity: 'uncommon', magical: true, notes: 'Holds 500 lbs / 64 cu ft. Always weighs 15 lbs', category: 'Magic Items' },
  { name: 'Ring of Protection', type: 'ring', slot: 'ring1', acBonus: 1, rarity: 'rare', magical: true, notes: '+1 AC and saving throws (requires attunement)', category: 'Magic Items' },
  { name: 'Cloak of Protection', type: 'cloak', slot: 'cloak', acBonus: 1, rarity: 'uncommon', magical: true, notes: '+1 AC and saving throws (requires attunement)', category: 'Magic Items' },
  { name: 'Boots of Elvenkind', type: 'boots', slot: 'boots', rarity: 'uncommon', magical: true, notes: 'Advantage on Stealth checks (silent movement)', category: 'Magic Items' },
  { name: 'Cloak of Elvenkind', type: 'cloak', slot: 'cloak', rarity: 'uncommon', magical: true, notes: 'Advantage on Stealth, disadvantage to spot you (requires attunement)', category: 'Magic Items' },
  { name: 'Gauntlets of Ogre Power', type: 'gloves', slot: 'gloves', rarity: 'uncommon', magical: true, notes: 'STR becomes 19 (requires attunement)', category: 'Magic Items' },
  { name: 'Headband of Intellect', type: 'helmet', slot: 'helmet', rarity: 'uncommon', magical: true, notes: 'INT becomes 19 (requires attunement)', category: 'Magic Items' },
  { name: 'Amulet of Health', type: 'amulet', slot: 'amulet', rarity: 'rare', magical: true, notes: 'CON becomes 19 (requires attunement)', category: 'Magic Items' },
  { name: 'Periapt of Wound Closure', type: 'amulet', slot: 'amulet', rarity: 'uncommon', magical: true, notes: 'Stabilize at 0 HP. Double HP from hit dice (requires attunement)', category: 'Magic Items' },
  { name: 'Ring of Spell Storing', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: 'Store up to 5 levels of spells (requires attunement)', category: 'Magic Items' },
  { name: 'Pearl of Power', type: 'misc', rarity: 'uncommon', magical: true, notes: 'Recover one spell slot up to 3rd level (requires attunement)', category: 'Magic Items' },
  { name: 'Immovable Rod', type: 'misc', rarity: 'uncommon', magical: true, notes: 'Holds in place, supports 8,000 lbs. DC 30 STR to move', category: 'Magic Items' },
  { name: 'Decanter of Endless Water', type: 'misc', rarity: 'uncommon', magical: true, notes: 'Produces 1-30 gallons of water per round', category: 'Magic Items' },
  { name: 'Bag of Tricks', type: 'misc', rarity: 'uncommon', magical: true, notes: 'Pull fuzzy ball, throw to summon random beast', category: 'Magic Items' },
  { name: '+1 Weapon', type: 'weapon', slot: 'mainhand', rarity: 'uncommon', magical: true, notes: '+1 to attack and damage rolls', category: 'Magic Items' },
  { name: '+1 Shield', type: 'shield', slot: 'offhand', acBonus: 3, rarity: 'uncommon', magical: true, notes: '+1 bonus over normal shield (+3 total AC)', category: 'Magic Items' },
  { name: '+1 Armor', type: 'armor', slot: 'armor', rarity: 'rare', magical: true, notes: '+1 AC bonus over base armor value', category: 'Magic Items' },
  { name: 'Cloak of Displacement', type: 'cloak', slot: 'cloak', rarity: 'rare', magical: true, notes: 'Attackers have disadvantage until hit (requires attunement)', category: 'Magic Items' },
  { name: 'Boots of Speed', type: 'boots', slot: 'boots', rarity: 'rare', magical: true, notes: 'Double walking speed, disadvantage to attack you (requires attunement)', category: 'Magic Items' },
  { name: 'Winged Boots', type: 'boots', slot: 'boots', rarity: 'uncommon', magical: true, notes: 'Fly speed equal to walking speed for 4 hours (requires attunement)', category: 'Magic Items' },
  { name: 'Bracers of Defense', type: 'gloves', slot: 'gloves', acBonus: 2, rarity: 'rare', magical: true, notes: '+2 AC when not wearing armor or shield (requires attunement)', category: 'Magic Items' },
  { name: 'Amulet of Proof Against Detection', type: 'amulet', slot: 'amulet', rarity: 'uncommon', magical: true, notes: 'Hidden from divination magic (requires attunement)', category: 'Magic Items' },
  { name: 'Ring of Resistance', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: 'Resistance to one damage type (requires attunement)', category: 'Magic Items' },
  { name: 'Portable Hole', type: 'misc', rarity: 'rare', magical: true, notes: '6 ft diameter, 10 ft deep extradimensional space', category: 'Magic Items' },
  { name: 'Rope of Climbing', type: 'misc', rarity: 'uncommon', magical: true, notes: '60 ft, moves on command, holds 3,000 lbs', category: 'Magic Items' },

  // ═══════════════════════════════════════════════════════════════════════════
  // CAMPAIGN ARTIFACTS — Shadows Before The Flame Campaign-Specific Items
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Blue Crystal Staff', type: 'staff', slot: 'mainhand', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', properties: ['requires attunement (Good Alignment)', '10 charges', 'regens 1d6+4 at dawn'], notes: 'Casts Cure Wounds and Revivify from charges. Grants advantage on saving throws against fear.' },
  { name: 'Staff of Magius', type: 'staff', slot: 'mainhand', acBonus: 2, magical: true, rarity: 'artifact', category: 'Campaign Artifacts', properties: ['requires attunement (Sorcerer, Wizard, or Warlock)'], notes: '+2 to AC, saving throws, spell attacks, and initiative. Must be used to stabilize magic near the Abyss.' },
  { name: 'Device of Time', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', properties: ['requires attunement'], notes: 'Casts Time-Plane Shift (requires a Fixed Point item). DC 15 Arcana check or suffer a Time Slip.' },
  { name: 'True Dragonlance', type: 'weapon', slot: 'mainhand', dmg: '1d12+3', dmgType: 'piercing', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', properties: ['+3 weapon', 'lance', 'reach', 'heavy'], notes: '+3 lance. On hit vs a dragon, deals bonus damage equal to half the dragon\'s max HP.' },
  { name: 'Shield of Huma', type: 'shield', slot: 'offhand', acBonus: 4, magical: true, rarity: 'artifact', category: 'Campaign Artifacts', properties: ['requires attunement'], notes: '+2 AC shield (total +4). Allies within 10 ft gain fire resistance and advantage vs breath weapons. Immune to dragon fear.' },
  { name: 'Dragon Orb', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Can charm a dragon (DC 18 save). Wielder must make DC 16 CHA save each long rest or suffer 4d10 psychic damage.' },
  { name: 'Scepter of Kingpriest', type: 'rod', slot: 'mainhand', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Functions as Rod of Rulership with 3 casts of Command at 3rd level. +3 Persuasion but -2 Insight (Hubris).' },
  { name: 'Disks of Mishakal', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Grants +1 Channel Divinity use, casts Legend Lore, and advantage on Persuasion checks.' },
  { name: 'Silver Arm of Ergoth', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Legendary prosthetic arm that can forge dragonlances. Can heal wounds or regenerate lost limbs.' },
  { name: 'Helm of Grallen', type: 'wondrous', slot: 'helmet', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Grants 120 ft darkvision and Speak with Dead on dwarves. Prince\'s spirit may interject during social encounters.' },
  { name: 'Frostreaver', type: 'weapon', slot: 'mainhand', dmg: '1d12+2', dmgType: 'slashing', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', properties: ['+2 greataxe', 'heavy', 'two-handed'], notes: '+2 greataxe dealing +1d8 cold damage (+2d8 vs fire creatures). Grants cold immunity.' },
  { name: 'Wyvernsbane', type: 'weapon', slot: 'mainhand', dmg: '1d8+3', dmgType: 'slashing', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', properties: ['+3 longsword', 'versatile'], notes: '+3 longsword dealing +2d6 radiant damage against dragons. Fear immunity aura, glows near dragons.' },
  { name: 'Bloodstone', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Grants 1d10 temp HP on a kill and 2 casts of Vampiric Touch. Disadvantage vs undead charms.' },
  { name: 'The Starjewel', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Grants immunity to dragon fear and ability to sense bonded allies\' locations.' },
  { name: 'Mage-link Stone', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Grants telepathy and allows donating one spell slot (up to 3rd level) to a linked ally.' },
  { name: 'Mantle of High Sorcery', type: 'wondrous', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Advantage on saves vs spells, +1 spell save DC. Immune to Temporal Exhaustion.' },
  { name: 'Gnome Spectacles', type: 'wondrous', slot: 'helmet', magical: true, rarity: 'artifact', category: 'Campaign Artifacts', notes: 'Grants 30 ft truesight and ability to see Temporal Echoes. Prolonged use causes blurriness.' },
  { name: 'Robe of Useful Items', type: 'wondrous', magical: true, rarity: 'uncommon', category: 'Campaign Artifacts', notes: 'Each patch becomes a real object when detached. Currently held by Cogmaw Fraker (19 patches remaining).' },

  // ═══════════════════════════════════════════════════════════════════════════
  // SCROLLS
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Spell Scroll (Cantrip)', type: 'scroll', rarity: 'common', notes: 'Cast one cantrip from it. No ability check needed if on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (1st Level)', type: 'scroll', rarity: 'common', notes: 'Cast one 1st-level spell. DC 13 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (2nd Level)', type: 'scroll', rarity: 'uncommon', notes: 'Cast one 2nd-level spell. DC 13 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (3rd Level)', type: 'scroll', rarity: 'uncommon', notes: 'Cast one 3rd-level spell. DC 15 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (4th Level)', type: 'scroll', rarity: 'rare', notes: 'Cast one 4th-level spell. DC 15 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (5th Level)', type: 'scroll', rarity: 'rare', notes: 'Cast one 5th-level spell. DC 17 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (6th Level)', type: 'scroll', rarity: 'very rare', notes: 'Cast one 6th-level spell. DC 17 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (7th Level)', type: 'scroll', rarity: 'very rare', notes: 'Cast one 7th-level spell. DC 18 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (8th Level)', type: 'scroll', rarity: 'very rare', notes: 'Cast one 8th-level spell. DC 18 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Spell Scroll (9th Level)', type: 'scroll', rarity: 'legendary', notes: 'Cast one 9th-level spell. DC 19 ability check if not on your spell list.', category: 'Scrolls' },
  { name: 'Scroll of Protection (Aberrations)', type: 'scroll', rarity: 'rare', notes: 'Aberrations cannot enter 5-ft radius for 5 min or until you attack/cast at them.', category: 'Scrolls' },
  { name: 'Scroll of Protection (Fiends)', type: 'scroll', rarity: 'rare', notes: 'Fiends cannot enter 5-ft radius for 5 min or until you attack/cast at them.', category: 'Scrolls' },
  { name: 'Scroll of Protection (Undead)', type: 'scroll', rarity: 'rare', notes: 'Undead cannot enter 5-ft radius for 5 min or until you attack/cast at them.', category: 'Scrolls' },

  // ═══════════════════════════════════════════════════════════════════════════
  // MAGIC WEAPONS
  // ═══════════════════════════════════════════════════════════════════════════
  { name: '+2 Weapon', type: 'weapon', slot: 'mainhand', rarity: 'rare', magical: true, notes: '+2 to attack and damage rolls', category: 'Magic Weapons' },
  { name: '+3 Weapon', type: 'weapon', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '+3 to attack and damage rolls', category: 'Magic Weapons' },
  { name: 'Flame Tongue', type: 'weapon', slot: 'mainhand', rarity: 'rare', magical: true, notes: 'Bonus action to ignite: +2d6 fire damage. Bright light 40 ft, dim 40 ft. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Frost Brand', type: 'weapon', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '+1d6 cold damage. Fire resistance while held. In freezing temps: 10 ft bright, 10 ft dim light. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Holy Avenger', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'slashing', rarity: 'legendary', magical: true, notes: '+3 weapon. +2d10 radiant vs fiends/undead. 10 ft aura: advantage on saves vs spells. Requires attunement by a paladin.', category: 'Magic Weapons' },
  { name: 'Vorpal Sword', type: 'weapon', slot: 'mainhand', rarity: 'legendary', magical: true, notes: '+3 weapon. Natural 20: sever head if target has one and less than 200 HP. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Dancing Sword', type: 'weapon', slot: 'mainhand', rarity: 'very rare', magical: true, notes: 'Bonus action to toss: hovers and attacks on its own for 4 rounds. Uses your attack bonus. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Defender', type: 'weapon', slot: 'mainhand', rarity: 'legendary', magical: true, notes: '+3 weapon. Transfer any amount of +3 bonus to AC until next turn. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Luck Blade', type: 'weapon', slot: 'mainhand', rarity: 'legendary', magical: true, notes: '+1 weapon. +1 to saves. 1d4-1 Wish charges. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Sun Blade', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'radiant', rarity: 'rare', magical: true, notes: '+2 weapon. Radiant damage. +1d8 vs undead. Bright light 15 ft, dim 15 ft (expandable). Finesse, light. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Sword of Sharpness', type: 'weapon', slot: 'mainhand', rarity: 'very rare', magical: true, notes: 'On 20: extra 4d6 slashing. On max damage roll: sever limb. +14 slashing damage vs objects. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Nine Lives Stealer', type: 'weapon', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '+2 weapon. On 20 vs creature with < 100 HP: target dies (9 charges). Requires attunement.', category: 'Magic Weapons' },
  { name: 'Dragon Slayer', type: 'weapon', slot: 'mainhand', rarity: 'rare', magical: true, notes: '+1 weapon. +3d6 damage vs dragons. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Giant Slayer', type: 'weapon', slot: 'mainhand', rarity: 'rare', magical: true, notes: '+1 weapon. +2d6 vs giants. Giant must DC 15 STR or fall prone. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Vicious Weapon', type: 'weapon', slot: 'mainhand', rarity: 'rare', magical: true, notes: 'On 20: +2d6 damage of the weapon\'s type.', category: 'Magic Weapons' },
  { name: 'Weapon of Warning', type: 'weapon', slot: 'mainhand', rarity: 'uncommon', magical: true, notes: 'Advantage on initiative. You and allies within 30 ft cannot be surprised. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Berserker Axe', type: 'weapon', slot: 'mainhand', dmg: '1d12', dmgType: 'slashing', rarity: 'rare', magical: true, notes: '+1 weapon. +1 HP per level. Cursed: must attack nearest creature when damaged. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Javelin of Lightning', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'piercing', rarity: 'uncommon', magical: true, notes: 'Throw + command word: becomes 120 ft lightning bolt. 4d6 lightning, DEX DC 13 half. Once per dawn.', category: 'Magic Weapons' },
  { name: 'Trident of Fish Command', type: 'weapon', slot: 'mainhand', rarity: 'uncommon', magical: true, notes: 'Cast Dominate Beast (aquatic only, DC 15) once per dawn. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Mace of Disruption', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'bludgeoning', rarity: 'rare', magical: true, notes: '+2d6 radiant vs fiends/undead. If target has 25 HP or fewer after hit: DC 15 WIS or destroyed. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Mace of Smiting', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'bludgeoning', rarity: 'rare', magical: true, notes: '+1 weapon (+3 vs constructs). On 20: +2d6 or +4d6 vs constructs. Constructs at 25 HP or less: destroyed.', category: 'Magic Weapons' },
  { name: 'Mace of Terror', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'bludgeoning', rarity: 'rare', magical: true, notes: '3 charges. Action: 30 ft fear, WIS DC 15 or frightened 1 min. Regains 1d3 at dawn. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Hammer of Thunderbolts', type: 'weapon', slot: 'mainhand', dmg: '2d6', dmgType: 'bludgeoning', rarity: 'legendary', magical: true, notes: '+1 maul. With Gauntlets of Ogre Power + Belt of Giant Strength: +4d6 thunder on 20, DC 17 STR or stunned. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Dwarven Thrower', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'bludgeoning', rarity: 'very rare', magical: true, notes: '+3 warhammer. Thrown: 1d8 extra (2d8 vs giants). Returns to hand. Requires attunement by a dwarf.', category: 'Magic Weapons' },
  { name: 'Oathbow', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'piercing', rarity: 'very rare', magical: true, notes: 'Swear enemy: +3d6 damage, advantage on attacks vs that target. Disadvantage vs all others until sworn enemy dies. Requires attunement.', category: 'Magic Weapons' },
  { name: 'Moon-Touched Sword', type: 'weapon', slot: 'mainhand', rarity: 'common', magical: true, notes: 'Any sword. Glows in darkness: 15 ft bright, 15 ft dim. Counts as magical.', category: 'Magic Weapons' },

  // ═══════════════════════════════════════════════════════════════════════════
  // RODS & STAVES
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Staff of Power', type: 'staff', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '+2 weapon/AC/saves/spell attacks. 20 charges for spells. Retributive strike on break. Requires attunement by a sorcerer, warlock, or wizard.', category: 'Rods & Staves' },
  { name: 'Staff of the Magi', type: 'staff', slot: 'mainhand', rarity: 'legendary', magical: true, notes: '+2 weapon/saves/spell attacks. 50 charges. Absorb spells. Plane Shift. Retributive strike. Requires attunement by a sorcerer, warlock, or wizard.', category: 'Rods & Staves' },
  { name: 'Staff of Fire', type: 'staff', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '10 charges. Burning Hands (1), Fireball (3), Wall of Fire (4). Regains 1d6+4 at dawn. Requires attunement by a druid, sorcerer, warlock, or wizard.', category: 'Rods & Staves' },
  { name: 'Staff of Frost', type: 'staff', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '10 charges. Cone of Cold (5), Fog Cloud (1), Ice Storm (4), Wall of Ice (4). Cold resistance. Requires attunement.', category: 'Rods & Staves' },
  { name: 'Staff of Healing', type: 'staff', slot: 'mainhand', rarity: 'rare', magical: true, notes: '10 charges. Cure Wounds (1/level), Lesser Restoration (2), Mass Cure Wounds (5). Regains 1d6+4 at dawn. Requires attunement by a cleric, druid, or bard.', category: 'Rods & Staves' },
  { name: 'Staff of the Woodlands', type: 'staff', slot: 'mainhand', rarity: 'rare', magical: true, notes: '+2 weapon. 10 charges for nature spells. Can plant to become a tree. Requires attunement by a druid.', category: 'Rods & Staves' },
  { name: 'Staff of Withering', type: 'staff', slot: 'mainhand', rarity: 'rare', magical: true, notes: '3 charges. On hit, spend 1 charge: +2d10 necrotic, DC 15 CON or disadvantage on STR checks/saves for 1 hr. Requires attunement.', category: 'Rods & Staves' },
  { name: 'Staff of Thunder and Lightning', type: 'staff', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '+2 weapon. Lightning (5d6), Thunder (2d6+stun), Thunder and Lightning (both), Lightning Strike (bolt), Thunderclap (300 ft stun). Requires attunement.', category: 'Rods & Staves' },
  { name: 'Rod of Absorption', type: 'rod', slot: 'mainhand', rarity: 'very rare', magical: true, notes: 'Absorb spells targeting you as reaction. Store up to 50 levels. Convert to spell slots. Requires attunement.', category: 'Rods & Staves' },
  { name: 'Rod of the Pact Keeper +1', type: 'rod', slot: 'mainhand', rarity: 'uncommon', magical: true, notes: '+1 to spell attack and save DC. Once per long rest: regain one warlock spell slot. Requires attunement by a warlock.', category: 'Rods & Staves' },
  { name: 'Rod of the Pact Keeper +2', type: 'rod', slot: 'mainhand', rarity: 'rare', magical: true, notes: '+2 to spell attack and save DC. Once per long rest: regain one warlock spell slot. Requires attunement by a warlock.', category: 'Rods & Staves' },
  { name: 'Rod of the Pact Keeper +3', type: 'rod', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '+3 to spell attack and save DC. Once per long rest: regain one warlock spell slot. Requires attunement by a warlock.', category: 'Rods & Staves' },
  { name: 'Wand of Fireballs', type: 'wand', slot: 'mainhand', rarity: 'rare', magical: true, notes: '7 charges. Cast Fireball (3+ charges for higher level). Regains 1d6+1 at dawn. Requires attunement by a spellcaster.', category: 'Rods & Staves' },
  { name: 'Wand of Magic Missiles', type: 'wand', slot: 'mainhand', rarity: 'uncommon', magical: true, notes: '7 charges. Cast Magic Missile (1+ charges for higher level). Regains 1d6+1 at dawn.', category: 'Rods & Staves' },
  { name: 'Wand of Lightning Bolts', type: 'wand', slot: 'mainhand', rarity: 'rare', magical: true, notes: '7 charges. Cast Lightning Bolt (3+ charges for higher level). Regains 1d6+1 at dawn. Requires attunement by a spellcaster.', category: 'Rods & Staves' },
  { name: 'Wand of Paralysis', type: 'wand', slot: 'mainhand', rarity: 'rare', magical: true, notes: '7 charges. DC 15 CON or paralyzed 1 minute. Regains 1d6+1 at dawn. Requires attunement by a spellcaster.', category: 'Rods & Staves' },
  { name: 'Wand of Fear', type: 'wand', slot: 'mainhand', rarity: 'rare', magical: true, notes: '7 charges. Command (1) or 60 ft cone fear (2). Regains 1d6+1 at dawn. Requires attunement.', category: 'Rods & Staves' },
  { name: 'Wand of the War Mage +1', type: 'wand', slot: 'mainhand', rarity: 'uncommon', magical: true, notes: '+1 to spell attack rolls. Ignore half cover. Requires attunement by a spellcaster.', category: 'Rods & Staves' },
  { name: 'Wand of the War Mage +2', type: 'wand', slot: 'mainhand', rarity: 'rare', magical: true, notes: '+2 to spell attack rolls. Ignore half cover. Requires attunement by a spellcaster.', category: 'Rods & Staves' },
  { name: 'Wand of the War Mage +3', type: 'wand', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '+3 to spell attack rolls. Ignore half cover. Requires attunement by a spellcaster.', category: 'Rods & Staves' },
  { name: 'Wand of Polymorph', type: 'wand', slot: 'mainhand', rarity: 'very rare', magical: true, notes: '7 charges. Cast Polymorph (DC 15). Regains 1d6+1 at dawn. Requires attunement by a spellcaster.', category: 'Rods & Staves' },
  { name: 'Wand of Web', type: 'wand', slot: 'mainhand', rarity: 'uncommon', magical: true, notes: '7 charges. Cast Web (DC 15). Regains 1d6+1 at dawn. Requires attunement by a spellcaster.', category: 'Rods & Staves' },

  // ═══════════════════════════════════════════════════════════════════════════
  // MAGIC ARMOR
  // ═══════════════════════════════════════════════════════════════════════════
  { name: '+2 Armor', type: 'armor', slot: 'armor', rarity: 'rare', magical: true, notes: '+2 AC bonus over base armor value', category: 'Magic Armor' },
  { name: '+3 Armor', type: 'armor', slot: 'armor', rarity: 'legendary', magical: true, notes: '+3 AC bonus over base armor value', category: 'Magic Armor' },
  { name: '+2 Shield', type: 'shield', slot: 'offhand', acBonus: 4, rarity: 'rare', magical: true, notes: '+2 bonus over normal shield (+4 total AC)', category: 'Magic Armor' },
  { name: '+3 Shield', type: 'shield', slot: 'offhand', acBonus: 5, rarity: 'very rare', magical: true, notes: '+3 bonus over normal shield (+5 total AC)', category: 'Magic Armor' },
  { name: 'Adamantine Armor', type: 'armor', slot: 'armor', rarity: 'uncommon', magical: true, notes: 'Any medium or heavy armor. Critical hits become normal hits while wearing.', category: 'Magic Armor' },
  { name: 'Mithral Armor', type: 'armor', slot: 'armor', rarity: 'uncommon', magical: true, notes: 'Any medium or heavy armor. No STR requirement, no stealth disadvantage.', category: 'Magic Armor' },
  { name: 'Armor of Resistance', type: 'armor', slot: 'armor', rarity: 'rare', magical: true, notes: 'Resistance to one damage type. Requires attunement.', category: 'Magic Armor' },
  { name: 'Animated Shield', type: 'shield', slot: 'offhand', acBonus: 2, rarity: 'very rare', magical: true, notes: 'Bonus action: shield floats and protects you without holding it for 1 minute. Requires attunement.', category: 'Magic Armor' },
  { name: 'Arrow-Catching Shield', type: 'shield', slot: 'offhand', acBonus: 2, rarity: 'rare', magical: true, notes: '+2 AC vs ranged attacks. Reaction: redirect ranged attack to you instead of adjacent ally. Requires attunement.', category: 'Magic Armor' },
  { name: 'Sentinel Shield', type: 'shield', slot: 'offhand', acBonus: 2, rarity: 'uncommon', magical: true, notes: 'Advantage on initiative and Perception checks.', category: 'Magic Armor' },
  { name: 'Spellguard Shield', type: 'shield', slot: 'offhand', acBonus: 2, rarity: 'very rare', magical: true, notes: 'Advantage on saves vs spells. Spell attacks have disadvantage against you. Requires attunement.', category: 'Magic Armor' },
  { name: 'Dragon Scale Mail', type: 'armor', slot: 'armor', acBase: 14, rarity: 'very rare', magical: true, notes: '+1 AC. Advantage vs Frightful Presence and dragon breath. Resistance to one damage type based on dragon. Sense dragons within 30 miles. Requires attunement.', category: 'Magic Armor' },
  { name: 'Dwarven Plate', type: 'armor', slot: 'armor', acBase: 20, rarity: 'very rare', magical: true, notes: '+2 plate armor. Reduce forced movement by 10 ft.', category: 'Magic Armor' },
  { name: 'Elven Chain', type: 'armor', slot: 'armor', acBase: 14, rarity: 'rare', magical: true, notes: '+1 chain shirt. Can be worn under clothing. Proficiency not required.', category: 'Magic Armor' },
  { name: 'Glamoured Studded Leather', type: 'armor', slot: 'armor', acBase: 12, rarity: 'rare', magical: true, notes: '+1 studded leather. Bonus action: change appearance to any clothing.', category: 'Magic Armor' },
  { name: 'Plate Armor of Etherealness', type: 'armor', slot: 'armor', acBase: 18, rarity: 'legendary', magical: true, notes: 'Action: Etherealness for up to 10 min once per dawn. Requires attunement.', category: 'Magic Armor' },
  { name: 'Demon Armor', type: 'armor', slot: 'armor', acBase: 18, rarity: 'very rare', magical: true, notes: '+1 plate. Understand Abyssal. Unarmed +1d8 slashing. Cursed: disadvantage vs demons. Requires attunement.', category: 'Magic Armor' },
  { name: 'Armor of Invulnerability', type: 'armor', slot: 'armor', acBase: 18, rarity: 'legendary', magical: true, notes: 'Plate. Resistance to nonmagical damage. Action: immune to nonmagical damage for 10 min (once per dawn). Requires attunement.', category: 'Magic Armor' },
  { name: "Mariner's Armor", type: 'armor', slot: 'armor', rarity: 'uncommon', magical: true, notes: 'Any armor. Swim speed = walking speed. If at 0 HP underwater, rise 60 ft toward surface.', category: 'Magic Armor' },

  // ═══════════════════════════════════════════════════════════════════════════
  // RINGS
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Ring of Invisibility', type: 'ring', slot: 'ring1', rarity: 'legendary', magical: true, notes: 'Action: invisible until you attack, cast, or remove ring. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Regeneration', type: 'ring', slot: 'ring1', rarity: 'very rare', magical: true, notes: 'Regain 1d6 HP every 10 min if you have at least 1 HP. Regrow lost body parts over 1d6+1 days. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Telekinesis', type: 'ring', slot: 'ring1', rarity: 'very rare', magical: true, notes: 'Cast Telekinesis at will. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Free Action', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: 'Difficult terrain costs no extra movement. Speed cannot be reduced. Cannot be paralyzed or restrained by magic. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Evasion', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: '3 charges. When you fail a DEX save: reaction to succeed instead. Regains 1d3 at dawn. Requires attunement.', category: 'Rings' },
  { name: 'Ring of X-Ray Vision', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: 'Action: see through solid matter for 1 min. 30 ft range. 1 ft stone, 1 in metal, 3 ft wood/dirt. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Shooting Stars', type: 'ring', slot: 'ring1', rarity: 'very rare', magical: true, notes: 'Dancing Lights and Light at will. Faerie Fire (1), Ball Lightning (2), Shooting Stars (1-3). 6 charges, regains 1d6 at dawn. Requires attunement outdoors at night.', category: 'Rings' },
  { name: 'Ring of Three Wishes', type: 'ring', slot: 'ring1', rarity: 'legendary', magical: true, notes: 'Cast Wish 3 times. Ring becomes nonmagical after last wish.', category: 'Rings' },
  { name: 'Ring of the Ram', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: '3 charges. Ranged attack 60 ft: 2d10 force per charge. +5 to STR checks vs objects. Regains 1d3 at dawn. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Water Walking', type: 'ring', slot: 'ring1', rarity: 'uncommon', magical: true, notes: 'Stand and walk on liquid surfaces as if solid ground.', category: 'Rings' },
  { name: 'Ring of Feather Falling', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: 'Fall at 60 ft per round and take no falling damage. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Mind Shielding', type: 'ring', slot: 'ring1', rarity: 'uncommon', magical: true, notes: 'Immune to magic that reads thoughts/determines lying/knows alignment. Telepathy opt-in only. Soul can enter ring on death. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Warmth', type: 'ring', slot: 'ring1', rarity: 'uncommon', magical: true, notes: 'Resistance to cold damage. Comfortable in temps as low as -50\u00B0F. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Animal Influence', type: 'ring', slot: 'ring1', rarity: 'rare', magical: true, notes: '3 charges. Cast Animal Friendship (1), Fear on beasts (1), or Speak with Animals (1). Regains 1d3 at dawn.', category: 'Rings' },
  { name: 'Ring of Jumping', type: 'ring', slot: 'ring1', rarity: 'uncommon', magical: true, notes: 'Cast Jump on yourself at will. Requires attunement.', category: 'Rings' },
  { name: 'Ring of Swimming', type: 'ring', slot: 'ring1', rarity: 'uncommon', magical: true, notes: 'Swim speed of 40 ft.', category: 'Rings' },

  // ═══════════════════════════════════════════════════════════════════════════
  // WONDROUS ITEMS
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Crystal Ball', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Cast Scrying (DC 17) while touching. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Cube of Force', type: 'wondrous', rarity: 'rare', magical: true, notes: '36 charges. Create 15 ft cube barrier with various effects. Regains 1d20 at dawn. Requires attunement.', category: 'Wondrous Items' },
  { name: "Daern's Instant Fortress", type: 'wondrous', rarity: 'rare', magical: true, notes: 'Throw: becomes 20 ft square, 30 ft tall adamantine tower. 10d10 damage to creatures in area. Command word to shrink back.', category: 'Wondrous Items' },
  { name: 'Carpet of Flying', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Fly at 80 ft (3x3), 60 ft (4x6), 40 ft (5x7), or 30 ft (6x9) depending on size.', category: 'Wondrous Items' },
  { name: 'Broom of Flying', type: 'wondrous', rarity: 'uncommon', magical: true, notes: '50 ft fly speed (50 lbs or less, 30 ft if 51-200 lbs). Command word to hover. Can send and recall up to 1 mile.', category: 'Wondrous Items' },
  { name: 'Helm of Brilliance', type: 'wondrous', slot: 'helmet', rarity: 'very rare', magical: true, notes: 'Gem charges for spells (Daylight, Fireball, Prismatic Spray, Wall of Fire). Fire resistance. +1d6 radiant vs undead. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Robe of the Archmagi', type: 'wondrous', rarity: 'legendary', magical: true, notes: 'AC 15 + DEX. Advantage on saves vs spells. +2 spell save DC and spell attack. Requires attunement by a sorcerer, warlock, or wizard.', category: 'Wondrous Items' },
  { name: 'Robe of Stars', type: 'wondrous', rarity: 'very rare', magical: true, notes: '+1 saves. 6 stars: Magic Missile (5th level) each. Enter Astral Plane as action. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Robe of Eyes', type: 'wondrous', rarity: 'rare', magical: true, notes: 'See in all directions. Advantage on Perception. Darkvision/ethereal sight 120 ft. Disadvantage on saves vs light/gaze. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Robe of Scintillating Colors', type: 'wondrous', rarity: 'very rare', magical: true, notes: '3 charges. Action to dazzle: DC 15 WIS or stunned. Advantage on attacks vs dazzled. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Mantle of Spell Resistance', type: 'wondrous', slot: 'cloak', rarity: 'rare', magical: true, notes: 'Advantage on saves vs spells. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Cape of the Mountebank', type: 'wondrous', slot: 'cloak', rarity: 'rare', magical: true, notes: 'Cast Dimension Door once per dawn. Smoke at origin and destination.', category: 'Wondrous Items' },
  { name: 'Eyes of the Eagle', type: 'wondrous', slot: 'helmet', rarity: 'uncommon', magical: true, notes: 'Advantage on Perception checks that rely on sight. In clear conditions, see up to 1 mile as if 100 ft. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Necklace of Fireballs', type: 'wondrous', slot: 'amulet', rarity: 'rare', magical: true, notes: 'Pull and throw beads: 5d6 fire Fireball each. Multiple beads increase damage +1d6 per extra.', category: 'Wondrous Items' },
  { name: 'Brooch of Shielding', type: 'wondrous', rarity: 'uncommon', magical: true, notes: 'Resistance to force damage. Immune to Magic Missile. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Stone of Good Luck (Luckstone)', type: 'wondrous', rarity: 'uncommon', magical: true, notes: '+1 to ability checks and saving throws while on your person. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Dimensional Shackles', type: 'wondrous', rarity: 'rare', magical: true, notes: "Restrain creature and prevent extradimensional travel. DC 30 STR or DC 30 Dexterity (thieves' tools) to escape.", category: 'Wondrous Items' },
  { name: 'Iron Flask', type: 'wondrous', rarity: 'legendary', magical: true, notes: 'Capture extraplanar creature inside. DC 17 WIS or trapped. Open to release and command creature for 1 hour.', category: 'Wondrous Items' },
  { name: 'Eversmoking Bottle', type: 'wondrous', rarity: 'uncommon', magical: true, notes: 'Open: 60 ft radius heavily obscured smoke. Expands 10 ft/round to max 120 ft. Command word to stop.', category: 'Wondrous Items' },
  { name: 'Lantern of Revealing', type: 'wondrous', rarity: 'uncommon', magical: true, notes: 'Burns for 6 hours on 1 pint oil. 30 ft bright, 30 ft dim. Invisible creatures/objects visible in bright light.', category: 'Wondrous Items' },
  { name: 'Gem of Seeing', type: 'wondrous', rarity: 'rare', magical: true, notes: '3 charges. Truesight 120 ft for 10 min. Regains 1d3 at dawn. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Gem of Brightness', type: 'wondrous', rarity: 'uncommon', magical: true, notes: '50 charges. 1 charge: 30 ft bright light. 5 charges: 30 ft cone, DC 15 CON or blinded.', category: 'Wondrous Items' },
  { name: 'Medallion of Thoughts', type: 'wondrous', slot: 'amulet', rarity: 'uncommon', magical: true, notes: '3 charges. Cast Detect Thoughts (DC 13). Regains 1d3 at dawn. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Horn of Blasting', type: 'wondrous', rarity: 'rare', magical: true, notes: 'Action: 30 ft cone, 5d6 thunder, DC 15 CON half + deafened. Glass/crystal creatures/objects: 10d6. 20% break chance.', category: 'Wondrous Items' },
  { name: 'Horn of Valhalla (Silver)', type: 'wondrous', rarity: 'rare', magical: true, notes: 'Summon 2d4+2 berserker spirits for 1 hour. Once per 7 days.', category: 'Wondrous Items' },
  { name: 'Gloves of Missile Snaring', type: 'wondrous', slot: 'gloves', rarity: 'uncommon', magical: true, notes: 'Reaction when hit by ranged weapon: reduce damage by 1d10 + DEX. If reduced to 0, catch it. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Gloves of Swimming and Climbing', type: 'wondrous', slot: 'gloves', rarity: 'uncommon', magical: true, notes: 'Climb speed and swim speed equal to walking speed. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Belt of Hill Giant Strength', type: 'wondrous', rarity: 'rare', magical: true, notes: 'STR becomes 21. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Belt of Fire Giant Strength', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'STR becomes 25. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Belt of Frost Giant Strength', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'STR becomes 23. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Belt of Stone Giant Strength', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'STR becomes 23. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Belt of Cloud Giant Strength', type: 'wondrous', rarity: 'legendary', magical: true, notes: 'STR becomes 27. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Belt of Storm Giant Strength', type: 'wondrous', rarity: 'legendary', magical: true, notes: 'STR becomes 29. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Helm of Telepathy', type: 'wondrous', slot: 'helmet', rarity: 'uncommon', magical: true, notes: 'Cast Detect Thoughts (DC 13) at will. Telepathy with focused creature. Cast Suggestion once per dawn. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Helm of Comprehending Languages', type: 'wondrous', slot: 'helmet', rarity: 'uncommon', magical: true, notes: 'Cast Comprehend Languages at will while wearing.', category: 'Wondrous Items' },
  { name: 'Circlet of Blasting', type: 'wondrous', slot: 'helmet', rarity: 'uncommon', magical: true, notes: 'Cast Scorching Ray once per dawn.', category: 'Wondrous Items' },
  { name: 'Cloak of the Bat', type: 'wondrous', slot: 'cloak', rarity: 'rare', magical: true, notes: 'Advantage on Stealth in dim/dark. Fly 40 ft in dim/dark. Polymorph into bat once per dawn. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Cloak of Arachnida', type: 'wondrous', slot: 'cloak', rarity: 'very rare', magical: true, notes: 'Climb speed, web immunity, resistance to poison. Cast Web once per dawn. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Cloak of the Manta Ray', type: 'wondrous', slot: 'cloak', rarity: 'uncommon', magical: true, notes: 'Breathe underwater and swim 60 ft while wearing with hood up.', category: 'Wondrous Items' },
  { name: 'Necklace of Adaptation', type: 'wondrous', slot: 'amulet', rarity: 'uncommon', magical: true, notes: 'Breathe normally in any environment. Advantage on saves vs harmful gases/vapors. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Necklace of Prayer Beads', type: 'wondrous', slot: 'amulet', rarity: 'rare', magical: true, notes: '1d4+2 magic beads (Blessing, Curing, Favor, Smiting, Summons, Wind Walking). Regains beads at dawn. Requires attunement by a cleric, druid, or paladin.', category: 'Wondrous Items' },
  { name: 'Scarab of Protection', type: 'wondrous', rarity: 'legendary', magical: true, notes: 'Advantage on saves vs spells. Reaction: negate failed save vs necromancy or harmful undead effect (12 charges). Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Absorption)', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Absorb spells of 4th level or lower (cancel them). 20 levels max. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Agility)', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'DEX score increases by 2, to max 20. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Fortitude)', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'CON score increases by 2, to max 20. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Insight)', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'WIS score increases by 2, to max 20. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Intellect)', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'INT score increases by 2, to max 20. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Leadership)', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'CHA score increases by 2, to max 20. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Mastery)', type: 'wondrous', rarity: 'legendary', magical: true, notes: 'Proficiency bonus increases by 1. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Protection)', type: 'wondrous', rarity: 'rare', magical: true, notes: '+1 AC. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Awareness)', type: 'wondrous', rarity: 'rare', magical: true, notes: 'Cannot be surprised. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Reserve)', type: 'wondrous', rarity: 'rare', magical: true, notes: 'Store up to 3 levels of spells. Cast them later. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Ioun Stone (Sustenance)', type: 'wondrous', rarity: 'rare', magical: true, notes: 'No need for food or drink. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Alchemy Jug', type: 'wondrous', rarity: 'uncommon', magical: true, notes: 'Produce various liquids daily: acid, beer, honey, oil, vinegar, water, wine, etc.', category: 'Wondrous Items' },
  { name: 'Driftglobe', type: 'wondrous', rarity: 'uncommon', magical: true, notes: 'Speak command: sheds bright light 30 ft. Once per dawn: cast Daylight.', category: 'Wondrous Items' },
  { name: 'Horseshoes of Speed', type: 'wondrous', rarity: 'rare', magical: true, notes: 'Increase horse walking speed by 30 ft. All four horseshoes must be affixed.', category: 'Wondrous Items' },
  { name: 'Wings of Flying', type: 'wondrous', slot: 'cloak', rarity: 'rare', magical: true, notes: 'Command word: cloak becomes wings. Fly 60 ft for 1 hour. Once per 1d12 hours. Requires attunement.', category: 'Wondrous Items' },
  { name: 'Manual of Bodily Health', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Read over 48 hours: CON and CON max increase by 2. Book loses magic for 100 years.', category: 'Wondrous Items' },
  { name: 'Manual of Gainful Exercise', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Read over 48 hours: STR and STR max increase by 2. Book loses magic for 100 years.', category: 'Wondrous Items' },
  { name: 'Manual of Quickness of Action', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Read over 48 hours: DEX and DEX max increase by 2. Book loses magic for 100 years.', category: 'Wondrous Items' },
  { name: 'Tome of Clear Thought', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Read over 48 hours: INT and INT max increase by 2. Book loses magic for 100 years.', category: 'Wondrous Items' },
  { name: 'Tome of Understanding', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Read over 48 hours: WIS and WIS max increase by 2. Book loses magic for 100 years.', category: 'Wondrous Items' },
  { name: 'Tome of Leadership and Influence', type: 'wondrous', rarity: 'very rare', magical: true, notes: 'Read over 48 hours: CHA and CHA max increase by 2. Book loses magic for 100 years.', category: 'Wondrous Items' },

  // ═══════════════════════════════════════════════════════════════════════════
  // DRAGONLANCE ITEMS
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Brightblade', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'slashing', rarity: 'rare', magical: true, notes: '+2 longsword. Advantage on Persuasion. Shatters if wielded by evil. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Nightbringer', type: 'weapon', slot: 'mainhand', dmg: '1d6', dmgType: 'bludgeoning', rarity: 'rare', magical: true, notes: '+1 mace. DC 15 CON or blinded 1 min. Deals 2d6 necrotic to pure-hearted wielders. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Wyrmsbane', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'slashing', rarity: 'rare', magical: true, notes: '+1 longsword. +3d6 vs dragons. Cast Locate Object 3/day. Immune to baaz death throes. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Wyrmslayer', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'slashing', rarity: 'very rare', magical: true, notes: '+2 longsword. +3d6 vs dragons. Advantage vs Frightful Presence and breath weapons. Buzzes within 30 ft of dragons. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Dagger of Magius', type: 'weapon', slot: 'mainhand', dmg: '1d4', dmgType: 'piercing', rarity: 'very rare', magical: true, properties: ['finesse', 'light', 'thrown'], notes: '+3 silver dagger. Cannot be detected by magical or mundane searches. Requires attunement by a spellcaster.', category: 'Dragonlance Items' },
  { name: 'Hammer of Kharas', type: 'weapon', slot: 'mainhand', dmg: '1d8', dmgType: 'bludgeoning', rarity: 'artifact', magical: true, notes: '+2 sentient warhammer. Destroys undead (DC 15 WIS). Immune to fear. Advantage on saves vs spells. Casts Heal, Bless, Shield. Requires attunement (Good).', category: 'Dragonlance Items' },
  { name: 'Lesser Dragonlance', type: 'weapon', slot: 'mainhand', dmg: '1d12', dmgType: 'piercing', rarity: 'very rare', magical: true, properties: ['reach', 'heavy'], notes: '+2 lance. +3d6 vs evil dragons. Forged from dragonmetal. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Dragonarmor (Black)', type: 'armor', slot: 'armor', acBase: 15, rarity: 'very rare', magical: true, notes: '+1 dragon scale mail. Resistance to acid. Advantage vs black dragon fear/breath. Detect dragons 30 mi. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Dragonarmor (Blue)', type: 'armor', slot: 'armor', acBase: 15, rarity: 'very rare', magical: true, notes: '+1 dragon scale mail. Resistance to lightning. Advantage vs blue dragon fear/breath. Detect dragons 30 mi. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Dragonarmor (Red)', type: 'armor', slot: 'armor', acBase: 15, rarity: 'very rare', magical: true, notes: '+1 dragon scale mail. Resistance to fire. Advantage vs red dragon fear/breath. Detect dragons 30 mi. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Dragonarmor (Green)', type: 'armor', slot: 'armor', acBase: 15, rarity: 'very rare', magical: true, notes: '+1 dragon scale mail. Resistance to poison. Advantage vs green dragon fear/breath. Detect dragons 30 mi. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Dragonarmor (White)', type: 'armor', slot: 'armor', acBase: 15, rarity: 'very rare', magical: true, notes: '+1 dragon scale mail. Resistance to cold. Advantage vs white dragon fear/breath. Detect dragons 30 mi. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Medallion of Faith', type: 'wondrous', slot: 'amulet', rarity: 'uncommon', magical: true, notes: 'Required divine focus for Krynn clerics. Without it, cannot cast divine spells above 3rd level. Can create new medallions. 2d4 radiant to those who take it by force.', category: 'Dragonlance Items' },
  { name: 'Glasses of the Arcanist', type: 'wondrous', slot: 'helmet', rarity: 'uncommon', magical: true, notes: 'Read any written language (Comprehend Languages, written only). Can read magical writings but cannot cast from them. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Kagonesti Forest Shroud', type: 'wondrous', slot: 'cloak', rarity: 'rare', magical: true, notes: 'Advantage on Stealth in forests. Action: invisible in wooded areas for 1 hour. Once per dawn. Requires attunement.', category: 'Dragonlance Items' },
  { name: 'Flying Citadel Helm', type: 'wondrous', slot: 'helmet', rarity: 'very rare', magical: true, notes: 'Controls a flying citadel. Action: fly fortress 80 ft. Pilot is incapacitated while controlling. Requires attunement by a spellcaster.', category: 'Dragonlance Items' },
];

// Slug generation
export function itemNameToSlug(name: string): string {
  return name.toLowerCase().replace(/['']/g, '').replace(/[\s/]+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// Add computed slug to each item
export interface ItemWithSlug extends Item {
  slug: string;
}

export const itemsWithSlugs: ItemWithSlug[] = items.map(item => ({
  ...item,
  slug: itemNameToSlug(item.name),
}));

// Utility functions
export function searchItems(query: string): Item[] {
  const q = query.toLowerCase();
  return items.filter(i => i.name.toLowerCase().includes(q));
}

export function getItemsByCategory(category: string): Item[] {
  return items.filter(i => i.category === category);
}

export function getItemsByType(type: string): Item[] {
  return items.filter(i => i.type === type);
}

export function getItemBySlug(slug: string): ItemWithSlug | undefined {
  return itemsWithSlugs.find(i => i.slug === slug);
}

export const itemCategories: string[] = [...new Set(items.map(i => i.category).filter(Boolean))].sort() as string[];

export default items;
