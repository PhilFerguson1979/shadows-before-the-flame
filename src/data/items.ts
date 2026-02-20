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

  // ═══════════════════════════════════════
  // MAGIC ITEMS
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
