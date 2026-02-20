// ============================================================
// D&D 5e Leveling Data — XP, Proficiency, Class Features
// ============================================================

// XP thresholds required to reach each level
export const xpThresholds: Record<number, number> = {
  1: 0, 2: 300, 3: 900, 4: 2700, 5: 6500,
  6: 14000, 7: 23000, 8: 34000, 9: 48000, 10: 64000,
  11: 85000, 12: 100000, 13: 120000, 14: 140000, 15: 165000,
  16: 195000, 17: 225000, 18: 265000, 19: 305000, 20: 355000,
};

// Proficiency bonus by level
export function proficiencyBonus(level: number): number {
  return Math.ceil(level / 4) + 1;
}

// XP needed for the NEXT level from current
export function xpToNextLevel(currentLevel: number, currentXP: number): number {
  if (currentLevel >= 20) return 0;
  return Math.max(0, xpThresholds[currentLevel + 1] - currentXP);
}

// Check if a character can level up
export function canLevelUp(currentLevel: number, currentXP: number): boolean {
  if (currentLevel >= 20) return false;
  return currentXP >= xpThresholds[currentLevel + 1];
}

// ============================================================
// Class Feature interface
// ============================================================
export interface ClassFeature {
  name: string;
  description: string;
}

export interface ClassLevelData {
  features: ClassFeature[];
  subclassFeature?: boolean;  // true if this level includes a subclass feature
  asiOrFeat?: boolean;        // true if ASI/Feat choice at this level
  spellsKnown?: number;       // total spells known (for known casters)
  cantripsKnown?: number;     // total cantrips known
  extraAttack?: boolean;
}

export interface SpellSlotProgression {
  [spellLevel: number]: number;  // spell level -> number of slots
}

export interface ClassData {
  name: string;
  hitDie: number;              // d6=6, d8=8, d10=10, d12=12
  primaryAbility: string;
  savingThrows: [string, string];
  subclassName: string;        // "Roguish Archetype", "Primal Path", etc.
  subclassLevel: number;       // level when subclass is chosen
  casterType: 'full' | 'half' | 'third' | 'pact' | 'none' | 'artificer';
  spellcastingAbility?: string;
  levels: Record<number, ClassLevelData>;
  spellSlots?: Record<number, SpellSlotProgression>;  // level -> spell slots
}

// ============================================================
// Full Caster Spell Slots (Wizard, Sorcerer, Bard, Cleric, Druid)
// ============================================================
const fullCasterSlots: Record<number, SpellSlotProgression> = {
  1:  {1:2},
  2:  {1:3},
  3:  {1:4, 2:2},
  4:  {1:4, 2:3},
  5:  {1:4, 2:3, 3:2},
  6:  {1:4, 2:3, 3:3},
  7:  {1:4, 2:3, 3:3, 4:1},
  8:  {1:4, 2:3, 3:3, 4:2},
  9:  {1:4, 2:3, 3:3, 4:3, 5:1},
  10: {1:4, 2:3, 3:3, 4:3, 5:2},
  11: {1:4, 2:3, 3:3, 4:3, 5:2, 6:1},
  12: {1:4, 2:3, 3:3, 4:3, 5:2, 6:1},
  13: {1:4, 2:3, 3:3, 4:3, 5:2, 6:1, 7:1},
  14: {1:4, 2:3, 3:3, 4:3, 5:2, 6:1, 7:1},
  15: {1:4, 2:3, 3:3, 4:3, 5:2, 6:1, 7:1, 8:1},
  16: {1:4, 2:3, 3:3, 4:3, 5:2, 6:1, 7:1, 8:1},
  17: {1:4, 2:3, 3:3, 4:3, 5:2, 6:1, 7:1, 8:1, 9:1},
  18: {1:4, 2:3, 3:3, 4:3, 5:3, 6:1, 7:1, 8:1, 9:1},
  19: {1:4, 2:3, 3:3, 4:3, 5:3, 6:2, 7:1, 8:1, 9:1},
  20: {1:4, 2:3, 3:3, 4:3, 5:3, 6:2, 7:2, 8:1, 9:1},
};

// Half Caster Spell Slots (Ranger, Paladin)
const halfCasterSlots: Record<number, SpellSlotProgression> = {
  2:  {1:2},
  3:  {1:3},
  4:  {1:3},
  5:  {1:4, 2:2},
  6:  {1:4, 2:2},
  7:  {1:4, 2:3},
  8:  {1:4, 2:3},
  9:  {1:4, 2:3, 3:2},
  10: {1:4, 2:3, 3:2},
  11: {1:4, 2:3, 3:3},
  12: {1:4, 2:3, 3:3},
  13: {1:4, 2:3, 3:3, 4:1},
  14: {1:4, 2:3, 3:3, 4:1},
  15: {1:4, 2:3, 3:3, 4:2},
  16: {1:4, 2:3, 3:3, 4:2},
  17: {1:4, 2:3, 3:3, 4:3, 5:1},
  18: {1:4, 2:3, 3:3, 4:3, 5:1},
  19: {1:4, 2:3, 3:3, 4:3, 5:2},
  20: {1:4, 2:3, 3:3, 4:3, 5:2},
};

// Artificer Spell Slots (unique half-caster that rounds up)
const artificerSlots: Record<number, SpellSlotProgression> = {
  1:  {1:2},
  2:  {1:2},
  3:  {1:3},
  4:  {1:3},
  5:  {1:4, 2:2},
  6:  {1:4, 2:2},
  7:  {1:4, 2:3},
  8:  {1:4, 2:3},
  9:  {1:4, 2:3, 3:2},
  10: {1:4, 2:3, 3:2},
  11: {1:4, 2:3, 3:3},
  12: {1:4, 2:3, 3:3},
  13: {1:4, 2:3, 3:3, 4:1},
  14: {1:4, 2:3, 3:3, 4:1},
  15: {1:4, 2:3, 3:3, 4:2},
  16: {1:4, 2:3, 3:3, 4:2},
  17: {1:4, 2:3, 3:3, 4:3, 5:1},
  18: {1:4, 2:3, 3:3, 4:3, 5:1},
  19: {1:4, 2:3, 3:3, 4:3, 5:2},
  20: {1:4, 2:3, 3:3, 4:3, 5:2},
};

// Third Caster Spell Slots (Eldritch Knight, Arcane Trickster)
const thirdCasterSlots: Record<number, SpellSlotProgression> = {
  3:  {1:2},
  4:  {1:3},
  7:  {1:4, 2:2},
  10: {1:4, 2:3},
  13: {1:4, 2:3, 3:2},
  16: {1:4, 2:3, 3:3},
  19: {1:4, 2:3, 3:3, 4:1},
};

// Warlock Pact Magic Slots
const pactSlots: Record<number, SpellSlotProgression> = {
  1:  {1:1},
  2:  {1:2},
  3:  {2:2},
  4:  {2:2},
  5:  {3:2},
  6:  {3:2},
  7:  {4:2},
  8:  {4:2},
  9:  {5:2},
  10: {5:2},
  11: {5:3},
  12: {5:3},
  13: {5:3},
  14: {5:3},
  15: {5:3},
  16: {5:3},
  17: {5:4},
  18: {5:4},
  19: {5:4},
  20: {5:4},
};

// ============================================================
// CLASS DEFINITIONS
// ============================================================

export const classes: Record<string, ClassData> = {

  // ==================== BARBARIAN ====================
  'Barbarian': {
    name: 'Barbarian',
    hitDie: 12,
    primaryAbility: 'Strength',
    savingThrows: ['str', 'con'],
    subclassName: 'Primal Path',
    subclassLevel: 3,
    casterType: 'none',
    levels: {
      1: { features: [
        { name: 'Rage', description: 'Enter a rage as a bonus action (2/long rest). +2 rage damage, advantage on STR checks/saves, resistance to bludgeoning/piercing/slashing damage.' },
        { name: 'Unarmored Defense', description: 'AC = 10 + DEX mod + CON mod when not wearing armor.' },
      ]},
      2: { features: [
        { name: 'Reckless Attack', description: 'When you make your first attack on your turn, you can attack recklessly. You gain advantage on melee weapon attack rolls using STR, but attack rolls against you have advantage until your next turn.' },
        { name: 'Danger Sense', description: 'Advantage on DEX saving throws against effects you can see (traps, spells, etc.), as long as you are not blinded, deafened, or incapacitated.' },
      ]},
      3: { features: [
        { name: 'Primal Path', description: 'Choose your Primal Path subclass (e.g., Path of the Berserker, Totem Warrior, Ancestral Guardian, Storm Herald, Zealot).' },
        { name: 'Rage Uses: 3', description: 'Rages per long rest increase to 3.' },
      ], subclassFeature: true },
      4: { features: [], asiOrFeat: true },
      5: { features: [
        { name: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
        { name: 'Fast Movement', description: 'Speed increases by 10 ft while not wearing heavy armor.' },
      ], extraAttack: true },
      6: { features: [
        { name: 'Path Feature', description: 'Subclass feature from your Primal Path.' },
        { name: 'Rage Uses: 4', description: 'Rages per long rest increase to 4.' },
      ], subclassFeature: true },
      7: { features: [
        { name: 'Feral Instinct', description: 'Advantage on initiative rolls. If surprised, you can act normally if you enter your rage first.' },
      ]},
      8: { features: [], asiOrFeat: true },
      9: { features: [
        { name: 'Brutal Critical (1 die)', description: 'Roll one additional weapon damage die when determining damage for a critical hit with a melee attack.' },
      ]},
      10: { features: [
        { name: 'Path Feature', description: 'Subclass feature from your Primal Path.' },
      ], subclassFeature: true },
      11: { features: [
        { name: 'Relentless Rage', description: 'If you drop to 0 HP while raging, make a DC 10 CON save to drop to 1 HP instead. DC increases by 5 each time until long rest.' },
      ]},
      12: { features: [], asiOrFeat: true },
      13: { features: [
        { name: 'Brutal Critical (2 dice)', description: 'Roll two additional weapon damage dice on a melee critical hit.' },
      ]},
      14: { features: [
        { name: 'Path Feature', description: 'Subclass feature from your Primal Path.' },
      ], subclassFeature: true },
      15: { features: [
        { name: 'Persistent Rage', description: 'Your rage ends early only if you fall unconscious or choose to end it.' },
      ]},
      16: { features: [], asiOrFeat: true },
      17: { features: [
        { name: 'Brutal Critical (3 dice)', description: 'Roll three additional weapon damage dice on a melee critical hit.' },
        { name: 'Rage Uses: 6', description: 'Rages per long rest increase to 6.' },
      ]},
      18: { features: [
        { name: 'Indomitable Might', description: 'If your total for a STR check is less than your STR score, you can use your STR score instead.' },
      ]},
      19: { features: [], asiOrFeat: true },
      20: { features: [
        { name: 'Primal Champion', description: 'STR and CON scores increase by 4. Maximum for those scores is now 24.' },
        { name: 'Unlimited Rage', description: 'Rages per long rest become unlimited.' },
      ]},
    },
  },

  // ==================== BARD ====================
  'Bard': {
    name: 'Bard',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['dex', 'cha'],
    subclassName: 'Bard College',
    subclassLevel: 3,
    casterType: 'full',
    spellcastingAbility: 'cha',
    spellSlots: fullCasterSlots,
    levels: {
      1: { features: [
        { name: 'Spellcasting', description: 'CHA-based full caster. You know 2 cantrips and 4 spells from the bard spell list.' },
        { name: 'Bardic Inspiration (d6)', description: 'CHA mod times per long rest, use a bonus action to give a creature within 60 ft a d6 inspiration die to add to one ability check, attack roll, or saving throw within 10 minutes.' },
      ], cantripsKnown: 2, spellsKnown: 4 },
      2: { features: [
        { name: 'Jack of All Trades', description: 'Add half your proficiency bonus (rounded down) to any ability check that does not already include your proficiency bonus.' },
        { name: 'Song of Rest (d6)', description: 'During a short rest, if you or allies regain HP via Hit Dice, each gains an extra 1d6 HP.' },
      ], spellsKnown: 5 },
      3: { features: [
        { name: 'Bard College', description: 'Choose your Bard College subclass (e.g., College of Lore, Valor, Glamour, Swords, Whispers, Eloquence).' },
        { name: 'Expertise (2 skills)', description: 'Choose 2 skill proficiencies. Your proficiency bonus is doubled for those skills.' },
      ], subclassFeature: true, spellsKnown: 6 },
      4: { features: [], asiOrFeat: true, cantripsKnown: 3, spellsKnown: 7 },
      5: { features: [
        { name: 'Bardic Inspiration (d8)', description: 'Inspiration die increases to d8.' },
        { name: 'Font of Inspiration', description: 'Bardic Inspiration recharges on a short rest instead of a long rest.' },
      ], spellsKnown: 8 },
      6: { features: [
        { name: 'Countercharm', description: 'As an action, start a performance that gives you and allies within 30 ft advantage on saving throws against being frightened or charmed, lasting until end of your next turn.' },
        { name: 'College Feature', description: 'Subclass feature from your Bard College.' },
      ], subclassFeature: true, spellsKnown: 9 },
      7: { features: [], spellsKnown: 10 },
      8: { features: [], asiOrFeat: true, spellsKnown: 11 },
      9: { features: [
        { name: 'Song of Rest (d8)', description: 'Song of Rest die increases to d8.' },
      ], spellsKnown: 12 },
      10: { features: [
        { name: 'Bardic Inspiration (d10)', description: 'Inspiration die increases to d10.' },
        { name: 'Expertise (2 more skills)', description: 'Choose 2 more skill proficiencies for Expertise.' },
        { name: 'Magical Secrets', description: 'Learn 2 spells from any class spell list. They count as bard spells for you.' },
      ], cantripsKnown: 4, spellsKnown: 14 },
      11: { features: [], spellsKnown: 15 },
      12: { features: [], asiOrFeat: true, spellsKnown: 15 },
      13: { features: [
        { name: 'Song of Rest (d10)', description: 'Song of Rest die increases to d10.' },
      ], spellsKnown: 16 },
      14: { features: [
        { name: 'Magical Secrets', description: 'Learn 2 more spells from any class spell list.' },
        { name: 'College Feature', description: 'Subclass feature from your Bard College.' },
      ], subclassFeature: true, spellsKnown: 18 },
      15: { features: [
        { name: 'Bardic Inspiration (d12)', description: 'Inspiration die increases to d12.' },
      ], spellsKnown: 19 },
      16: { features: [], asiOrFeat: true, spellsKnown: 19 },
      17: { features: [
        { name: 'Song of Rest (d12)', description: 'Song of Rest die increases to d12.' },
      ], spellsKnown: 20 },
      18: { features: [
        { name: 'Magical Secrets', description: 'Learn 2 more spells from any class spell list.' },
      ], spellsKnown: 22 },
      19: { features: [], asiOrFeat: true, spellsKnown: 22 },
      20: { features: [
        { name: 'Superior Inspiration', description: 'When you roll initiative and have no uses of Bardic Inspiration left, you regain one use.' },
      ], spellsKnown: 22 },
    },
  },

  // ==================== CLERIC ====================
  'Cleric': {
    name: 'Cleric',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['wis', 'cha'],
    subclassName: 'Divine Domain',
    subclassLevel: 1,
    casterType: 'full',
    spellcastingAbility: 'wis',
    spellSlots: fullCasterSlots,
    levels: {
      1: { features: [
        { name: 'Spellcasting', description: 'WIS-based full caster. Prepare spells from the cleric list each day. You know 3 cantrips.' },
        { name: 'Divine Domain', description: 'Choose your Divine Domain subclass (e.g., Life, Light, War, Tempest, Knowledge, Trickery). Gain domain spells and a domain feature.' },
      ], subclassFeature: true, cantripsKnown: 3 },
      2: { features: [
        { name: 'Channel Divinity (1/rest)', description: 'Gain Channel Divinity: Turn Undead plus your domain-specific channel option. 1 use per short or long rest.' },
        { name: 'Turn Undead', description: 'As an action, present your holy symbol. Each undead within 30 ft must make a WIS save or be turned for 1 minute.' },
        { name: 'Domain Feature', description: 'Additional Channel Divinity option from your Divine Domain.' },
      ], subclassFeature: true },
      3: { features: [] },
      4: { features: [], asiOrFeat: true, cantripsKnown: 4 },
      5: { features: [
        { name: 'Destroy Undead (CR 1/2)', description: 'When Turn Undead succeeds, undead of CR 1/2 or lower are instantly destroyed.' },
      ]},
      6: { features: [
        { name: 'Channel Divinity (2/rest)', description: 'Channel Divinity uses increase to 2 per short or long rest.' },
        { name: 'Domain Feature', description: 'Subclass feature from your Divine Domain.' },
      ], subclassFeature: true },
      7: { features: [] },
      8: { features: [
        { name: 'Destroy Undead (CR 1)', description: 'Destroy Undead threshold increases to CR 1.' },
        { name: 'Domain Feature', description: 'Subclass feature from your Divine Domain.' },
      ], subclassFeature: true, asiOrFeat: true },
      9: { features: [] },
      10: { features: [
        { name: 'Divine Intervention', description: 'Call on your deity for aid. Roll percentile dice. If the roll is equal to or less than your cleric level, your deity intervenes. Usable once per 7 days.' },
      ], cantripsKnown: 5 },
      11: { features: [
        { name: 'Destroy Undead (CR 2)', description: 'Destroy Undead threshold increases to CR 2.' },
      ]},
      12: { features: [], asiOrFeat: true },
      13: { features: [] },
      14: { features: [
        { name: 'Destroy Undead (CR 3)', description: 'Destroy Undead threshold increases to CR 3.' },
      ]},
      15: { features: [] },
      16: { features: [], asiOrFeat: true },
      17: { features: [
        { name: 'Destroy Undead (CR 4)', description: 'Destroy Undead threshold increases to CR 4.' },
        { name: 'Domain Feature', description: 'Subclass feature from your Divine Domain.' },
        { name: 'Channel Divinity (3/rest)', description: 'Channel Divinity uses increase to 3 per short or long rest.' },
      ], subclassFeature: true },
      18: { features: [] },
      19: { features: [], asiOrFeat: true },
      20: { features: [
        { name: 'Divine Intervention Improved', description: 'Your Divine Intervention feature succeeds automatically, no roll needed.' },
      ]},
    },
  },

  // ==================== DRUID ====================
  'Druid': {
    name: 'Druid',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['int', 'wis'],
    subclassName: 'Druid Circle',
    subclassLevel: 2,
    casterType: 'full',
    spellcastingAbility: 'wis',
    spellSlots: fullCasterSlots,
    levels: {
      1: { features: [
        { name: 'Druidic', description: 'You know Druidic, the secret language of druids.' },
        { name: 'Spellcasting', description: 'WIS-based full caster. Prepare spells from the druid list each day. You know 2 cantrips.' },
      ], cantripsKnown: 2 },
      2: { features: [
        { name: 'Wild Shape', description: 'Twice per short/long rest, use an action to transform into a beast you have seen. Max CR 1/4, no flying/swimming. Lasts level/2 hours.' },
        { name: 'Druid Circle', description: 'Choose your Druid Circle subclass (e.g., Circle of the Moon, Land, Dreams, Shepherd, Spores, Stars, Wildfire).' },
      ], subclassFeature: true },
      3: { features: [] },
      4: { features: [
        { name: 'Wild Shape Improvement', description: 'Max beast CR becomes 1/2. Can now use beasts with a swim speed.' },
      ], asiOrFeat: true, cantripsKnown: 3 },
      5: { features: [] },
      6: { features: [
        { name: 'Circle Feature', description: 'Subclass feature from your Druid Circle.' },
      ], subclassFeature: true },
      7: { features: [] },
      8: { features: [
        { name: 'Wild Shape Improvement', description: 'Max beast CR becomes 1. Can now use beasts with a fly speed.' },
      ], asiOrFeat: true },
      9: { features: [] },
      10: { features: [
        { name: 'Circle Feature', description: 'Subclass feature from your Druid Circle.' },
      ], subclassFeature: true, cantripsKnown: 4 },
      11: { features: [] },
      12: { features: [], asiOrFeat: true },
      13: { features: [] },
      14: { features: [
        { name: 'Circle Feature', description: 'Subclass feature from your Druid Circle.' },
      ], subclassFeature: true },
      15: { features: [] },
      16: { features: [], asiOrFeat: true },
      17: { features: [] },
      18: { features: [
        { name: 'Timeless Body', description: 'You age 1 year for every 10 years that pass.' },
        { name: 'Beast Spells', description: 'You can cast spells while in Wild Shape (V, S components only; no material components).' },
      ]},
      19: { features: [], asiOrFeat: true },
      20: { features: [
        { name: 'Archdruid', description: 'You can use Wild Shape an unlimited number of times. You can ignore V, S, and M components for druid spells (unless consumed).' },
      ]},
    },
  },

  // ==================== FIGHTER ====================
  'Fighter': {
    name: 'Fighter',
    hitDie: 10,
    primaryAbility: 'Strength or Dexterity',
    savingThrows: ['str', 'con'],
    subclassName: 'Martial Archetype',
    subclassLevel: 3,
    casterType: 'none',
    levels: {
      1: { features: [
        { name: 'Fighting Style', description: 'Choose a fighting style: Archery, Defense, Dueling, Great Weapon Fighting, Protection, Two-Weapon Fighting, etc.' },
        { name: 'Second Wind', description: 'On your turn, use a bonus action to regain 1d10 + fighter level HP. Once per short/long rest.' },
      ]},
      2: { features: [
        { name: 'Action Surge (1 use)', description: 'On your turn, you can take one additional action. Once per short/long rest.' },
      ]},
      3: { features: [
        { name: 'Martial Archetype', description: 'Choose your Martial Archetype subclass (e.g., Champion, Battle Master, Eldritch Knight, Echo Knight, Rune Knight, Psi Warrior).' },
      ], subclassFeature: true },
      4: { features: [], asiOrFeat: true },
      5: { features: [
        { name: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action.' },
      ], extraAttack: true },
      6: { features: [], asiOrFeat: true },
      7: { features: [
        { name: 'Archetype Feature', description: 'Subclass feature from your Martial Archetype.' },
      ], subclassFeature: true },
      8: { features: [], asiOrFeat: true },
      9: { features: [
        { name: 'Indomitable (1 use)', description: 'You can reroll a failed saving throw. You must use the new roll. Once per long rest.' },
      ]},
      10: { features: [
        { name: 'Archetype Feature', description: 'Subclass feature from your Martial Archetype.' },
      ], subclassFeature: true },
      11: { features: [
        { name: 'Extra Attack (2)', description: 'You can attack three times whenever you take the Attack action.' },
      ]},
      12: { features: [], asiOrFeat: true },
      13: { features: [
        { name: 'Indomitable (2 uses)', description: 'Indomitable uses increase to 2 per long rest.' },
      ]},
      14: { features: [], asiOrFeat: true },
      15: { features: [
        { name: 'Archetype Feature', description: 'Subclass feature from your Martial Archetype.' },
      ], subclassFeature: true },
      16: { features: [], asiOrFeat: true },
      17: { features: [
        { name: 'Action Surge (2 uses)', description: 'Action Surge uses increase to 2 per short/long rest.' },
        { name: 'Indomitable (3 uses)', description: 'Indomitable uses increase to 3 per long rest.' },
      ]},
      18: { features: [
        { name: 'Archetype Feature', description: 'Subclass feature from your Martial Archetype.' },
      ], subclassFeature: true },
      19: { features: [], asiOrFeat: true },
      20: { features: [
        { name: 'Extra Attack (3)', description: 'You can attack four times whenever you take the Attack action.' },
      ]},
    },
  },

  // ==================== MONK ====================
  'Monk': {
    name: 'Monk',
    hitDie: 8,
    primaryAbility: 'Dexterity & Wisdom',
    savingThrows: ['str', 'dex'],
    subclassName: 'Monastic Tradition',
    subclassLevel: 3,
    casterType: 'none',
    levels: {
      1: { features: [
        { name: 'Unarmored Defense', description: 'AC = 10 + DEX mod + WIS mod when wearing no armor and no shield.' },
        { name: 'Martial Arts (d4)', description: 'While unarmed or using monk weapons: use DEX for attack/damage, roll d4 in place of weapon damage, make one unarmed strike as a bonus action after Attack.' },
      ]},
      2: { features: [
        { name: 'Ki (2 points)', description: 'You have 2 ki points per short/long rest. Ki save DC = 8 + proficiency + WIS mod.' },
        { name: 'Flurry of Blows', description: 'Spend 1 ki after Attack to make two unarmed strikes as a bonus action.' },
        { name: 'Patient Defense', description: 'Spend 1 ki to take the Dodge action as a bonus action.' },
        { name: 'Step of the Wind', description: 'Spend 1 ki to take Disengage or Dash as a bonus action, and jump distance is doubled.' },
        { name: 'Unarmored Movement (+10 ft)', description: 'Speed increases by 10 ft while not wearing armor or a shield.' },
      ]},
      3: { features: [
        { name: 'Monastic Tradition', description: 'Choose your Monastic Tradition subclass (e.g., Way of the Open Hand, Shadow, Four Elements, Drunken Master, Kensei, Sun Soul, Mercy, Astral Self).' },
        { name: 'Deflect Missiles', description: 'Use your reaction to reduce ranged weapon attack damage by 1d10 + DEX mod + monk level. If reduced to 0, spend 1 ki to throw it back.' },
        { name: 'Ki Points: 3', description: 'Ki points increase to 3.' },
      ], subclassFeature: true },
      4: { features: [
        { name: 'Slow Fall', description: 'Use your reaction to reduce falling damage by 5 x monk level.' },
        { name: 'Ki Points: 4', description: 'Ki points increase to 4.' },
      ], asiOrFeat: true },
      5: { features: [
        { name: 'Extra Attack', description: 'You can attack twice when you take the Attack action.' },
        { name: 'Stunning Strike', description: 'When you hit with a melee weapon attack, spend 1 ki to force a CON save or the target is stunned until the end of your next turn.' },
        { name: 'Martial Arts (d6)', description: 'Martial Arts die increases to d6.' },
        { name: 'Ki Points: 5', description: 'Ki points increase to 5.' },
      ], extraAttack: true },
      6: { features: [
        { name: 'Ki-Empowered Strikes', description: 'Your unarmed strikes count as magical for overcoming resistance and immunity.' },
        { name: 'Tradition Feature', description: 'Subclass feature from your Monastic Tradition.' },
        { name: 'Unarmored Movement (+15 ft)', description: 'Unarmored Movement bonus increases to +15 ft.' },
        { name: 'Ki Points: 6', description: 'Ki points increase to 6.' },
      ], subclassFeature: true },
      7: { features: [
        { name: 'Evasion', description: 'When subjected to a DEX save for half damage, you take no damage on success and half damage on failure.' },
        { name: 'Stillness of Mind', description: 'Use an action to end one effect causing you to be charmed or frightened.' },
        { name: 'Ki Points: 7', description: 'Ki points increase to 7.' },
      ]},
      8: { features: [
        { name: 'Ki Points: 8', description: 'Ki points increase to 8.' },
      ], asiOrFeat: true },
      9: { features: [
        { name: 'Unarmored Movement Improvement', description: 'You can move along vertical surfaces and across liquids without falling during the move.' },
        { name: 'Ki Points: 9', description: 'Ki points increase to 9.' },
      ]},
      10: { features: [
        { name: 'Purity of Body', description: 'You are immune to disease and poison.' },
        { name: 'Unarmored Movement (+20 ft)', description: 'Unarmored Movement bonus increases to +20 ft.' },
        { name: 'Ki Points: 10', description: 'Ki points increase to 10.' },
      ]},
      11: { features: [
        { name: 'Tradition Feature', description: 'Subclass feature from your Monastic Tradition.' },
        { name: 'Martial Arts (d8)', description: 'Martial Arts die increases to d8.' },
        { name: 'Ki Points: 11', description: 'Ki points increase to 11.' },
      ], subclassFeature: true },
      12: { features: [{ name: 'Ki Points: 12', description: 'Ki points increase to 12.' }], asiOrFeat: true },
      13: { features: [
        { name: 'Tongue of the Sun and Moon', description: 'You can understand all spoken languages and any creature that speaks a language can understand you.' },
        { name: 'Ki Points: 13', description: 'Ki points increase to 13.' },
      ]},
      14: { features: [
        { name: 'Diamond Soul', description: 'Proficiency in all saving throws. Spend 1 ki to reroll a failed save.' },
        { name: 'Unarmored Movement (+25 ft)', description: 'Unarmored Movement bonus increases to +25 ft.' },
        { name: 'Ki Points: 14', description: 'Ki points increase to 14.' },
      ]},
      15: { features: [
        { name: 'Timeless Body', description: 'You no longer need food or water, and you suffer none of the frailty of old age. You can still die of old age.' },
        { name: 'Ki Points: 15', description: 'Ki points increase to 15.' },
      ]},
      16: { features: [{ name: 'Ki Points: 16', description: 'Ki points increase to 16.' }], asiOrFeat: true },
      17: { features: [
        { name: 'Tradition Feature', description: 'Subclass feature from your Monastic Tradition.' },
        { name: 'Martial Arts (d10)', description: 'Martial Arts die increases to d10.' },
        { name: 'Ki Points: 17', description: 'Ki points increase to 17.' },
      ], subclassFeature: true },
      18: { features: [
        { name: 'Empty Body', description: 'Spend 4 ki to become invisible for 1 minute (concentration). Spend 8 ki to cast Astral Projection.' },
        { name: 'Unarmored Movement (+30 ft)', description: 'Unarmored Movement bonus increases to +30 ft.' },
        { name: 'Ki Points: 18', description: 'Ki points increase to 18.' },
      ]},
      19: { features: [{ name: 'Ki Points: 19', description: 'Ki points increase to 19.' }], asiOrFeat: true },
      20: { features: [
        { name: 'Perfect Self', description: 'When you roll initiative and have no ki points remaining, you regain 4 ki points.' },
        { name: 'Ki Points: 20', description: 'Ki points increase to 20.' },
      ]},
    },
  },

  // ==================== PALADIN ====================
  'Paladin': {
    name: 'Paladin',
    hitDie: 10,
    primaryAbility: 'Strength & Charisma',
    savingThrows: ['wis', 'cha'],
    subclassName: 'Sacred Oath',
    subclassLevel: 3,
    casterType: 'half',
    spellcastingAbility: 'cha',
    spellSlots: halfCasterSlots,
    levels: {
      1: { features: [
        { name: 'Divine Sense', description: 'As an action, detect celestials, fiends, and undead within 60 ft. 1 + CHA mod uses per long rest.' },
        { name: 'Lay on Hands', description: 'Pool of healing HP equal to paladin level x 5. Touch to restore HP or cure disease/poison (5 HP per).' },
      ]},
      2: { features: [
        { name: 'Fighting Style', description: 'Choose a fighting style: Defense, Dueling, Great Weapon Fighting, Protection.' },
        { name: 'Spellcasting', description: 'CHA-based half caster. Prepare spells from the paladin list each day.' },
        { name: 'Divine Smite', description: 'When you hit with a melee weapon attack, expend a spell slot to deal extra 2d8 radiant damage (+1d8 per slot level above 1st, max 5d8). +1d8 vs undead/fiends.' },
      ]},
      3: { features: [
        { name: 'Sacred Oath', description: 'Choose your Sacred Oath subclass (e.g., Oath of Devotion, Ancients, Vengeance, Conquest, Redemption, Crown, Glory).' },
        { name: 'Divine Health', description: 'You are immune to disease.' },
        { name: 'Channel Divinity', description: 'Gain 2 Channel Divinity options from your Sacred Oath. 1 use per short/long rest.' },
      ], subclassFeature: true },
      4: { features: [], asiOrFeat: true },
      5: { features: [
        { name: 'Extra Attack', description: 'You can attack twice when you take the Attack action.' },
      ], extraAttack: true },
      6: { features: [
        { name: 'Aura of Protection', description: 'You and friendly creatures within 10 ft add your CHA modifier (min +1) to all saving throws while you are conscious.' },
      ]},
      7: { features: [
        { name: 'Oath Feature', description: 'Subclass feature from your Sacred Oath.' },
      ], subclassFeature: true },
      8: { features: [], asiOrFeat: true },
      9: { features: [] },
      10: { features: [
        { name: 'Aura of Courage', description: 'You and friendly creatures within 10 ft cannot be frightened while you are conscious.' },
      ]},
      11: { features: [
        { name: 'Improved Divine Smite', description: 'All melee weapon attacks deal an extra 1d8 radiant damage.' },
      ]},
      12: { features: [], asiOrFeat: true },
      13: { features: [] },
      14: { features: [
        { name: 'Cleansing Touch', description: 'As an action, end one spell on yourself or a willing creature you touch. CHA mod uses per long rest.' },
      ]},
      15: { features: [
        { name: 'Oath Feature', description: 'Subclass feature from your Sacred Oath.' },
      ], subclassFeature: true },
      16: { features: [], asiOrFeat: true },
      17: { features: [] },
      18: { features: [
        { name: 'Aura Improvements', description: 'Your auras (Protection, Courage) extend to 30 ft.' },
      ]},
      19: { features: [], asiOrFeat: true },
      20: { features: [
        { name: 'Oath Feature', description: 'Capstone subclass feature from your Sacred Oath.' },
      ], subclassFeature: true },
    },
  },

  // ==================== RANGER ====================
  'Ranger': {
    name: 'Ranger',
    hitDie: 10,
    primaryAbility: 'Dexterity & Wisdom',
    savingThrows: ['str', 'dex'],
    subclassName: 'Ranger Conclave',
    subclassLevel: 3,
    casterType: 'half',
    spellcastingAbility: 'wis',
    spellSlots: halfCasterSlots,
    levels: {
      1: { features: [
        { name: 'Favored Enemy', description: 'Choose a favored enemy type. Advantage on WIS (Survival) checks to track them, INT checks to recall info about them. Learn one associated language.' },
        { name: 'Natural Explorer', description: 'Choose a favored terrain. Double proficiency for INT/WIS checks related to it, difficult terrain does not slow your group, and more.' },
      ]},
      2: { features: [
        { name: 'Fighting Style', description: 'Choose a fighting style: Archery, Defense, Dueling, Two-Weapon Fighting.' },
        { name: 'Spellcasting', description: 'WIS-based half caster. You know 2 spells from the ranger spell list.' },
      ], spellsKnown: 2 },
      3: { features: [
        { name: 'Ranger Conclave', description: 'Choose your Ranger Conclave subclass (e.g., Hunter, Beast Master, Gloom Stalker, Horizon Walker, Monster Slayer, Fey Wanderer, Swarmkeeper).' },
        { name: 'Primeval Awareness', description: 'Expend a spell slot to sense aberrations, celestials, dragons, elementals, fey, fiends, and undead within 1 mile (6 miles in favored terrain).' },
      ], subclassFeature: true, spellsKnown: 3 },
      4: { features: [], asiOrFeat: true, spellsKnown: 3 },
      5: { features: [
        { name: 'Extra Attack', description: 'You can attack twice when you take the Attack action.' },
      ], extraAttack: true, spellsKnown: 4 },
      6: { features: [
        { name: 'Favored Enemy Improvement', description: 'Choose an additional favored enemy type and learn an associated language.' },
        { name: 'Natural Explorer Improvement', description: 'Choose an additional favored terrain.' },
      ], spellsKnown: 4 },
      7: { features: [
        { name: 'Conclave Feature', description: 'Subclass feature from your Ranger Conclave.' },
      ], subclassFeature: true, spellsKnown: 5 },
      8: { features: [
        { name: 'Land\'s Stride', description: 'Moving through nonmagical difficult terrain costs no extra movement. You can pass through nonmagical plants without being slowed or taking damage.' },
      ], asiOrFeat: true, spellsKnown: 5 },
      9: { features: [], spellsKnown: 6 },
      10: { features: [
        { name: 'Hide in Plain Sight', description: 'Spend 1 minute camouflaging yourself. Gain +10 to Stealth checks as long as you remain still and take no actions.' },
        { name: 'Natural Explorer Improvement', description: 'Choose an additional favored terrain.' },
      ], spellsKnown: 6 },
      11: { features: [
        { name: 'Conclave Feature', description: 'Subclass feature from your Ranger Conclave.' },
      ], subclassFeature: true, spellsKnown: 7 },
      12: { features: [], asiOrFeat: true, spellsKnown: 7 },
      13: { features: [], spellsKnown: 8 },
      14: { features: [
        { name: 'Favored Enemy Improvement', description: 'Choose an additional favored enemy type.' },
        { name: 'Vanish', description: 'You can use Hide as a bonus action. You also cannot be tracked by nonmagical means unless you choose to leave a trail.' },
      ], spellsKnown: 8 },
      15: { features: [
        { name: 'Conclave Feature', description: 'Subclass feature from your Ranger Conclave.' },
      ], subclassFeature: true, spellsKnown: 9 },
      16: { features: [], asiOrFeat: true, spellsKnown: 9 },
      17: { features: [], spellsKnown: 10 },
      18: { features: [
        { name: 'Feral Senses', description: 'You have blindsight out to 30 ft when not blinded or deafened. You are aware of invisible creatures within 30 ft.' },
      ], spellsKnown: 10 },
      19: { features: [], asiOrFeat: true, spellsKnown: 11 },
      20: { features: [
        { name: 'Foe Slayer', description: 'Once per turn, add your WIS modifier to the attack roll or damage roll against one of your favored enemies.' },
      ], spellsKnown: 11 },
    },
  },

  // ==================== ROGUE ====================
  'Rogue': {
    name: 'Rogue',
    hitDie: 8,
    primaryAbility: 'Dexterity',
    savingThrows: ['dex', 'int'],
    subclassName: 'Roguish Archetype',
    subclassLevel: 3,
    casterType: 'none',
    levels: {
      1: { features: [
        { name: 'Expertise (2 skills)', description: 'Choose 2 skill proficiencies or one skill and Thieves\' Tools. Your proficiency bonus is doubled for those.' },
        { name: 'Sneak Attack (1d6)', description: 'Once per turn, deal extra 1d6 damage when you hit with a finesse or ranged weapon and have advantage, or an ally is within 5 ft of the target.' },
        { name: 'Thieves\' Cant', description: 'You know Thieves\' Cant, a secret language of rogues.' },
      ]},
      2: { features: [
        { name: 'Cunning Action', description: 'Use a bonus action to Dash, Disengage, or Hide.' },
      ]},
      3: { features: [
        { name: 'Roguish Archetype', description: 'Choose your Roguish Archetype subclass (e.g., Thief, Assassin, Arcane Trickster, Swashbuckler, Mastermind, Scout, Phantom, Soulknife).' },
        { name: 'Sneak Attack (2d6)', description: 'Sneak Attack damage increases to 2d6.' },
      ], subclassFeature: true },
      4: { features: [], asiOrFeat: true },
      5: { features: [
        { name: 'Uncanny Dodge', description: 'When an attacker you can see hits you, use your reaction to halve the damage.' },
        { name: 'Sneak Attack (3d6)', description: 'Sneak Attack damage increases to 3d6.' },
      ]},
      6: { features: [
        { name: 'Expertise (2 more)', description: 'Choose 2 more skill proficiencies for Expertise.' },
      ]},
      7: { features: [
        { name: 'Evasion', description: 'When subjected to a DEX save for half damage, take no damage on success and half on failure.' },
        { name: 'Sneak Attack (4d6)', description: 'Sneak Attack damage increases to 4d6.' },
      ]},
      8: { features: [], asiOrFeat: true },
      9: { features: [
        { name: 'Archetype Feature', description: 'Subclass feature from your Roguish Archetype.' },
        { name: 'Sneak Attack (5d6)', description: 'Sneak Attack damage increases to 5d6.' },
      ], subclassFeature: true },
      10: { features: [], asiOrFeat: true },
      11: { features: [
        { name: 'Reliable Talent', description: 'When you make an ability check with a skill you are proficient in, treat any d20 roll of 9 or lower as a 10.' },
        { name: 'Sneak Attack (6d6)', description: 'Sneak Attack damage increases to 6d6.' },
      ]},
      12: { features: [], asiOrFeat: true },
      13: { features: [
        { name: 'Archetype Feature', description: 'Subclass feature from your Roguish Archetype.' },
        { name: 'Sneak Attack (7d6)', description: 'Sneak Attack damage increases to 7d6.' },
      ], subclassFeature: true },
      14: { features: [
        { name: 'Blindsense', description: 'If you can hear, you are aware of the location of any hidden or invisible creature within 10 ft.' },
      ]},
      15: { features: [
        { name: 'Slippery Mind', description: 'You gain proficiency in WIS saving throws.' },
        { name: 'Sneak Attack (8d6)', description: 'Sneak Attack damage increases to 8d6.' },
      ]},
      16: { features: [], asiOrFeat: true },
      17: { features: [
        { name: 'Archetype Feature', description: 'Subclass feature from your Roguish Archetype.' },
        { name: 'Sneak Attack (9d6)', description: 'Sneak Attack damage increases to 9d6.' },
      ], subclassFeature: true },
      18: { features: [
        { name: 'Elusive', description: 'No attack roll has advantage against you as long as you are not incapacitated.' },
      ]},
      19: { features: [
        { name: 'Sneak Attack (10d6)', description: 'Sneak Attack damage increases to 10d6.' },
      ], asiOrFeat: true },
      20: { features: [
        { name: 'Stroke of Luck', description: 'Once per short/long rest, turn a miss into a hit or treat a failed ability check as a 20.' },
      ]},
    },
  },

  // ==================== SORCERER ====================
  'Sorcerer': {
    name: 'Sorcerer',
    hitDie: 6,
    primaryAbility: 'Charisma',
    savingThrows: ['con', 'cha'],
    subclassName: 'Sorcerous Origin',
    subclassLevel: 1,
    casterType: 'full',
    spellcastingAbility: 'cha',
    spellSlots: fullCasterSlots,
    levels: {
      1: { features: [
        { name: 'Spellcasting', description: 'CHA-based full caster. You know 4 cantrips and 2 spells from the sorcerer spell list.' },
        { name: 'Sorcerous Origin', description: 'Choose your Sorcerous Origin subclass (e.g., Draconic Bloodline, Wild Magic, Divine Soul, Shadow Magic, Aberrant Mind, Clockwork Soul, Lunar Sorcery).' },
      ], subclassFeature: true, cantripsKnown: 4, spellsKnown: 2 },
      2: { features: [
        { name: 'Font of Magic', description: 'You have 2 sorcery points. You can convert spell slots to sorcery points and vice versa.' },
      ], spellsKnown: 3 },
      3: { features: [
        { name: 'Metamagic (2 options)', description: 'Choose 2 Metamagic options (e.g., Twinned Spell, Quickened Spell, Subtle Spell, Empowered Spell, Heightened Spell, etc.).' },
        { name: 'Sorcery Points: 3', description: 'Sorcery points increase to 3.' },
      ], spellsKnown: 4 },
      4: { features: [
        { name: 'Sorcery Points: 4', description: 'Sorcery points increase to 4.' },
      ], asiOrFeat: true, cantripsKnown: 5, spellsKnown: 5 },
      5: { features: [
        { name: 'Sorcery Points: 5', description: 'Sorcery points increase to 5.' },
      ], spellsKnown: 6 },
      6: { features: [
        { name: 'Origin Feature', description: 'Subclass feature from your Sorcerous Origin.' },
        { name: 'Sorcery Points: 6', description: 'Sorcery points increase to 6.' },
      ], subclassFeature: true, spellsKnown: 7 },
      7: { features: [
        { name: 'Sorcery Points: 7', description: 'Sorcery points increase to 7.' },
      ], spellsKnown: 8 },
      8: { features: [
        { name: 'Sorcery Points: 8', description: 'Sorcery points increase to 8.' },
      ], asiOrFeat: true, spellsKnown: 9 },
      9: { features: [
        { name: 'Sorcery Points: 9', description: 'Sorcery points increase to 9.' },
      ], spellsKnown: 10 },
      10: { features: [
        { name: 'Metamagic (3rd option)', description: 'Choose one additional Metamagic option.' },
        { name: 'Sorcery Points: 10', description: 'Sorcery points increase to 10.' },
      ], cantripsKnown: 6, spellsKnown: 11 },
      11: { features: [
        { name: 'Sorcery Points: 11', description: 'Sorcery points increase to 11.' },
      ], spellsKnown: 12 },
      12: { features: [
        { name: 'Sorcery Points: 12', description: 'Sorcery points increase to 12.' },
      ], asiOrFeat: true, spellsKnown: 12 },
      13: { features: [
        { name: 'Sorcery Points: 13', description: 'Sorcery points increase to 13.' },
      ], spellsKnown: 13 },
      14: { features: [
        { name: 'Origin Feature', description: 'Subclass feature from your Sorcerous Origin.' },
        { name: 'Sorcery Points: 14', description: 'Sorcery points increase to 14.' },
      ], subclassFeature: true, spellsKnown: 13 },
      15: { features: [
        { name: 'Sorcery Points: 15', description: 'Sorcery points increase to 15.' },
      ], spellsKnown: 14 },
      16: { features: [
        { name: 'Sorcery Points: 16', description: 'Sorcery points increase to 16.' },
      ], asiOrFeat: true, spellsKnown: 14 },
      17: { features: [
        { name: 'Metamagic (4th option)', description: 'Choose one additional Metamagic option.' },
        { name: 'Sorcery Points: 17', description: 'Sorcery points increase to 17.' },
      ], spellsKnown: 15 },
      18: { features: [
        { name: 'Origin Feature', description: 'Subclass feature from your Sorcerous Origin.' },
        { name: 'Sorcery Points: 18', description: 'Sorcery points increase to 18.' },
      ], subclassFeature: true, spellsKnown: 15 },
      19: { features: [
        { name: 'Sorcery Points: 19', description: 'Sorcery points increase to 19.' },
      ], asiOrFeat: true, spellsKnown: 15 },
      20: { features: [
        { name: 'Sorcerous Restoration', description: 'On a short rest, regain 4 sorcery points.' },
        { name: 'Sorcery Points: 20', description: 'Sorcery points increase to 20.' },
      ], spellsKnown: 15 },
    },
  },

  // ==================== WARLOCK ====================
  'Warlock': {
    name: 'Warlock',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['wis', 'cha'],
    subclassName: 'Otherworldly Patron',
    subclassLevel: 1,
    casterType: 'pact',
    spellcastingAbility: 'cha',
    spellSlots: pactSlots,
    levels: {
      1: { features: [
        { name: 'Otherworldly Patron', description: 'Choose your patron subclass (e.g., Archfey, Fiend, Great Old One, Celestial, Hexblade, Fathomless, Genie, Undead).' },
        { name: 'Pact Magic', description: 'CHA-based caster with Pact Magic. 1 spell slot (1st level), recovers on short rest. You know 2 cantrips and 2 spells.' },
      ], subclassFeature: true, cantripsKnown: 2, spellsKnown: 2 },
      2: { features: [
        { name: 'Eldritch Invocations (2)', description: 'Choose 2 Eldritch Invocations (e.g., Agonizing Blast, Devil\'s Sight, Mask of Many Faces, Repelling Blast, etc.).' },
      ], spellsKnown: 3 },
      3: { features: [
        { name: 'Pact Boon', description: 'Choose a Pact Boon: Pact of the Chain (familiar), Pact of the Blade (weapon), Pact of the Tome (cantrips), or Pact of the Talisman.' },
      ], spellsKnown: 4 },
      4: { features: [
        { name: 'Eldritch Invocations: 3 known', description: 'Invocations known increases to 3.' },
      ], asiOrFeat: true, cantripsKnown: 3, spellsKnown: 5 },
      5: { features: [
        { name: 'Eldritch Invocations: 4 known', description: 'Invocations known increases to 4.' },
      ], spellsKnown: 6 },
      6: { features: [
        { name: 'Patron Feature', description: 'Subclass feature from your Otherworldly Patron.' },
      ], subclassFeature: true, spellsKnown: 7 },
      7: { features: [
        { name: 'Eldritch Invocations: 5 known', description: 'Invocations known increases to 5.' },
      ], spellsKnown: 8 },
      8: { features: [
        { name: 'Eldritch Invocations: 6 known', description: 'Invocations known increases to 6.' },
      ], asiOrFeat: true, spellsKnown: 9 },
      9: { features: [], spellsKnown: 10 },
      10: { features: [
        { name: 'Patron Feature', description: 'Subclass feature from your Otherworldly Patron.' },
      ], subclassFeature: true, cantripsKnown: 4, spellsKnown: 10 },
      11: { features: [
        { name: 'Mystic Arcanum (6th)', description: 'Choose one 6th-level spell from the warlock list. You can cast it once per long rest without using a spell slot.' },
      ], spellsKnown: 11 },
      12: { features: [
        { name: 'Eldritch Invocations: 7 known', description: 'Invocations known increases to 7.' },
      ], asiOrFeat: true, spellsKnown: 11 },
      13: { features: [
        { name: 'Mystic Arcanum (7th)', description: 'Choose one 7th-level spell from the warlock list (once per long rest).' },
      ], spellsKnown: 12 },
      14: { features: [
        { name: 'Patron Feature', description: 'Subclass feature from your Otherworldly Patron.' },
      ], subclassFeature: true, spellsKnown: 12 },
      15: { features: [
        { name: 'Mystic Arcanum (8th)', description: 'Choose one 8th-level spell from the warlock list (once per long rest).' },
        { name: 'Eldritch Invocations: 8 known', description: 'Invocations known increases to 8.' },
      ], spellsKnown: 13 },
      16: { features: [], asiOrFeat: true, spellsKnown: 13 },
      17: { features: [
        { name: 'Mystic Arcanum (9th)', description: 'Choose one 9th-level spell from the warlock list (once per long rest).' },
      ], spellsKnown: 14 },
      18: { features: [], spellsKnown: 14 },
      19: { features: [], asiOrFeat: true, spellsKnown: 15 },
      20: { features: [
        { name: 'Eldritch Master', description: 'Once per long rest, spend 1 minute entreating your patron to regain all expended Pact Magic spell slots.' },
      ], spellsKnown: 15 },
    },
  },

  // ==================== WIZARD ====================
  'Wizard': {
    name: 'Wizard',
    hitDie: 6,
    primaryAbility: 'Intelligence',
    savingThrows: ['int', 'wis'],
    subclassName: 'Arcane Tradition',
    subclassLevel: 2,
    casterType: 'full',
    spellcastingAbility: 'int',
    spellSlots: fullCasterSlots,
    levels: {
      1: { features: [
        { name: 'Spellcasting', description: 'INT-based full caster. Start with a spellbook containing 6 1st-level wizard spells. You know 3 cantrips.' },
        { name: 'Arcane Recovery', description: 'Once per day after a short rest, recover spell slots with a combined level equal to half your wizard level (rounded up). No 6th-level or higher slots.' },
      ], cantripsKnown: 3 },
      2: { features: [
        { name: 'Arcane Tradition', description: 'Choose your Arcane Tradition subclass (e.g., School of Evocation, Abjuration, Divination, Illusion, Conjuration, Necromancy, Transmutation, War Magic, Bladesinging, Chronurgy, Graviturgy).' },
      ], subclassFeature: true },
      3: { features: [] },
      4: { features: [], asiOrFeat: true, cantripsKnown: 4 },
      5: { features: [] },
      6: { features: [
        { name: 'Tradition Feature', description: 'Subclass feature from your Arcane Tradition.' },
      ], subclassFeature: true },
      7: { features: [] },
      8: { features: [], asiOrFeat: true },
      9: { features: [] },
      10: { features: [
        { name: 'Tradition Feature', description: 'Subclass feature from your Arcane Tradition.' },
      ], subclassFeature: true, cantripsKnown: 5 },
      11: { features: [] },
      12: { features: [], asiOrFeat: true },
      13: { features: [] },
      14: { features: [
        { name: 'Tradition Feature', description: 'Subclass feature from your Arcane Tradition.' },
      ], subclassFeature: true },
      15: { features: [] },
      16: { features: [], asiOrFeat: true },
      17: { features: [] },
      18: { features: [
        { name: 'Spell Mastery', description: 'Choose a 1st-level and a 2nd-level wizard spell. You can cast them at their lowest level without expending a spell slot.' },
      ]},
      19: { features: [], asiOrFeat: true },
      20: { features: [
        { name: 'Signature Spells', description: 'Choose two 3rd-level wizard spells. You always have them prepared and can cast each once per short/long rest without expending a spell slot.' },
      ]},
    },
  },

  // ==================== ARTIFICER ====================
  'Artificer': {
    name: 'Artificer',
    hitDie: 8,
    primaryAbility: 'Intelligence',
    savingThrows: ['con', 'int'],
    subclassName: 'Artificer Specialist',
    subclassLevel: 3,
    casterType: 'artificer',
    spellcastingAbility: 'int',
    spellSlots: artificerSlots,
    levels: {
      1: { features: [
        { name: 'Magical Tinkering', description: 'Invest a spark of magic into mundane objects: light, sound, odor, visual effect, or text message. Up to INT mod objects at once.' },
        { name: 'Spellcasting', description: 'INT-based caster (rounds up for slot progression). Prepare spells from the artificer list. You know 2 cantrips. Requires tools as a spellcasting focus.' },
      ], cantripsKnown: 2 },
      2: { features: [
        { name: 'Infuse Item', description: 'Choose 4 infusion recipes. At the end of a long rest, infuse up to 2 nonmagical items to make them magical. Learn more infusions as you level.' },
      ]},
      3: { features: [
        { name: 'Artificer Specialist', description: 'Choose your subclass (Alchemist, Armorer, Artillerist, or Battle Smith). Gain specialist spells and features.' },
        { name: 'The Right Tool for the Job', description: 'Spend 1 hour to create one set of artisan\'s tools in an unoccupied space.' },
      ], subclassFeature: true },
      4: { features: [], asiOrFeat: true },
      5: { features: [
        { name: 'Artificer Specialist Feature', description: 'Subclass feature from your Artificer Specialist.' },
      ], subclassFeature: true },
      6: { features: [
        { name: 'Tool Expertise', description: 'Your proficiency bonus is doubled for any ability check you make that uses proficiency with a tool.' },
        { name: 'Infusions Known: 6', description: 'You know 6 infusion recipes and can infuse up to 3 items.' },
      ]},
      7: { features: [
        { name: 'Flash of Genius', description: 'When you or a creature you can see within 30 ft makes an ability check or saving throw, use your reaction to add your INT modifier to the roll. INT mod uses per long rest.' },
      ]},
      8: { features: [], asiOrFeat: true },
      9: { features: [
        { name: 'Artificer Specialist Feature', description: 'Subclass feature from your Artificer Specialist.' },
      ], subclassFeature: true },
      10: { features: [
        { name: 'Magic Item Adept', description: 'Crafting common/uncommon magic items takes 1/4 time and half gold. You can attune to 4 magic items at once.' },
        { name: 'Infusions Known: 8', description: 'You know 8 infusion recipes and can infuse up to 4 items.' },
      ], cantripsKnown: 3 },
      11: { features: [
        { name: 'Spell-Storing Item', description: 'Store a 1st or 2nd-level artificer spell in an item. Creature holding it can cast the spell INT mod x 2 times.' },
      ]},
      12: { features: [], asiOrFeat: true },
      13: { features: [] },
      14: { features: [
        { name: 'Magic Item Savant', description: 'You can attune to 5 magic items. You ignore all class, race, spell, and level requirements for using/attuning to magic items.' },
        { name: 'Infusions Known: 10', description: 'You know 10 infusion recipes and can infuse up to 5 items.' },
        { name: 'Artificer Specialist Feature', description: 'Subclass feature from your Artificer Specialist.' },
      ], subclassFeature: true },
      15: { features: [] },
      16: { features: [], asiOrFeat: true },
      17: { features: [] },
      18: { features: [
        { name: 'Magic Item Master', description: 'You can attune to 6 magic items at once.' },
        { name: 'Infusions Known: 12', description: 'You know 12 infusion recipes and can infuse up to 6 items.' },
      ]},
      19: { features: [], asiOrFeat: true },
      20: { features: [
        { name: 'Soul of Artifice', description: 'You gain +1 to all saving throws per magic item you are attuned to. If reduced to 0 HP, end one infusion to drop to 1 HP instead.' },
      ]},
    },
  },
};

// Also map "Lunar Sorcerer" to the Sorcerer class data
classes['Lunar Sorcerer'] = classes['Sorcerer'];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Get class data (handles subclass name variants like "Lunar Sorcerer")
export function getClassData(className: string): ClassData | undefined {
  if (classes[className]) return classes[className];
  // Try to match base class from subclass name
  for (const key of Object.keys(classes)) {
    if (className.toLowerCase().includes(key.toLowerCase())) return classes[key];
  }
  return undefined;
}

// Get features gained at a specific level for a class
export function getFeaturesAtLevel(className: string, level: number): ClassLevelData | undefined {
  const cd = getClassData(className);
  if (!cd) return undefined;
  return cd.levels[level];
}

// Get the "what's next" preview for a character's next level
export function getNextLevelPreview(className: string, currentLevel: number): {
  level: number;
  profBonus: number;
  features: ClassFeature[];
  asiOrFeat: boolean;
  subclassFeature: boolean;
  extraAttack: boolean;
  newSpellSlots?: SpellSlotProgression;
  hitDie: number;
  xpRequired: number;
} | null {
  if (currentLevel >= 20) return null;
  const nextLevel = currentLevel + 1;
  const cd = getClassData(className);
  if (!cd) return null;
  const levelData = cd.levels[nextLevel] || { features: [] };

  return {
    level: nextLevel,
    profBonus: proficiencyBonus(nextLevel),
    features: levelData.features,
    asiOrFeat: levelData.asiOrFeat || false,
    subclassFeature: levelData.subclassFeature || false,
    extraAttack: levelData.extraAttack || false,
    newSpellSlots: cd.spellSlots?.[nextLevel],
    hitDie: cd.hitDie,
    xpRequired: xpThresholds[nextLevel],
  };
}

// Get all spell slot changes between current and next level
export function getSpellSlotChanges(className: string, currentLevel: number): {
  current: SpellSlotProgression;
  next: SpellSlotProgression;
  changes: string[];
} | null {
  const cd = getClassData(className);
  if (!cd || !cd.spellSlots || currentLevel >= 20) return null;

  const nextLevel = currentLevel + 1;
  const currentSlots = cd.spellSlots[currentLevel] || {};
  const nextSlots = cd.spellSlots[nextLevel] || {};

  const changes: string[] = [];
  const allLevels = new Set([...Object.keys(currentSlots), ...Object.keys(nextSlots)].map(Number));

  for (const sl of [...allLevels].sort((a, b) => a - b)) {
    const cur = currentSlots[sl] || 0;
    const nxt = nextSlots[sl] || 0;
    if (nxt > cur) {
      if (cur === 0) {
        changes.push(`Gain ${nxt} ${ordinal(sl)}-level spell slot${nxt > 1 ? 's' : ''}`);
      } else {
        changes.push(`${ordinal(sl)}-level slots: ${cur} → ${nxt}`);
      }
    }
  }

  return { current: currentSlots, next: nextSlots, changes };
}

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
