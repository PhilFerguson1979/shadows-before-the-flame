// ── D&D 5e Skills Reference ──────────────────────────────────
// All 18 standard skills grouped by ability score
// Used by SkillsPanel, skill browse pages, and encounter tools

export type AbilityKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export interface Skill {
  name: string;
  slug: string;
  ability: AbilityKey;
  description: string;
  examples: string[];  // Example uses / common checks
}

export const skills: Skill[] = [
  // ── Strength ──
  {
    name: 'Athletics',
    slug: 'athletics',
    ability: 'str',
    description: 'Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming. Examples include trying to climb a sheer or slippery cliff, avoid hazards while scaling a wall, cling to a surface while something is trying to knock you off, jump an unusually long distance, or stay afloat in treacherous currents.',
    examples: [
      'Climbing a sheer cliff face',
      'Swimming against a strong current',
      'Long jump or high jump beyond normal limits',
      'Grappling or shoving a creature',
      'Holding on during an earthquake or storm',
    ],
  },

  // ── Dexterity ──
  {
    name: 'Acrobatics',
    slug: 'acrobatics',
    ability: 'dex',
    description: 'Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you\'re trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship\'s deck. The DM might also call for an Acrobatics check to see whether you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.',
    examples: [
      'Balancing on a tightrope or narrow ledge',
      'Landing safely from a fall or acrobatic maneuver',
      'Running across a slippery surface',
      'Escaping from restraints or a grapple',
      'Performing acrobatic stunts',
    ],
  },
  {
    name: 'Sleight of Hand',
    slug: 'sleight-of-hand',
    ability: 'dex',
    description: 'Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The DM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person\'s pocket.',
    examples: [
      'Picking a pocket without being noticed',
      'Concealing an object on your person',
      'Planting evidence on someone',
      'Performing a card trick or shell game',
      'Slipping something into a drink unnoticed',
    ],
  },
  {
    name: 'Stealth',
    slug: 'stealth',
    ability: 'dex',
    description: 'Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.',
    examples: [
      'Sneaking past guards or sentries',
      'Hiding in shadows or behind cover',
      'Moving silently through a dungeon',
      'Tailing someone through a crowd',
      'Setting up an ambush',
    ],
  },

  // ── Constitution ──
  // (No standard skills, but included as note)

  // ── Intelligence ──
  {
    name: 'Arcana',
    slug: 'arcana',
    ability: 'int',
    description: 'Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.',
    examples: [
      'Identifying a spell being cast',
      'Recalling lore about a magical tradition',
      'Recognizing an enchanted item',
      'Understanding arcane symbols or runes',
      'Knowing about extraplanar creatures',
    ],
  },
  {
    name: 'History',
    slug: 'history',
    ability: 'int',
    description: 'Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.',
    examples: [
      'Recalling the history of Krynn and the Cataclysm',
      'Identifying a historical artifact',
      'Knowing about a legendary hero or villain',
      'Understanding the politics of an ancient kingdom',
      'Recognizing a coat of arms or sigil',
    ],
  },
  {
    name: 'Investigation',
    slug: 'investigation',
    ability: 'int',
    description: 'When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse.',
    examples: [
      'Searching a room for hidden compartments',
      'Deducing a puzzle or riddle solution',
      'Determining the cause of a strange event',
      'Finding traps through deduction',
      'Analyzing a crime scene for clues',
    ],
  },
  {
    name: 'Nature',
    slug: 'nature',
    ability: 'int',
    description: 'Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.',
    examples: [
      'Identifying a plant or animal species',
      'Recalling information about terrain or weather patterns',
      'Knowing which berries are safe to eat',
      'Understanding natural phenomena',
      'Recalling facts about the natural world',
    ],
  },
  {
    name: 'Religion',
    slug: 'religion',
    ability: 'int',
    description: 'Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.',
    examples: [
      'Identifying a deity or religious symbol',
      'Recalling the tenets of a faith',
      'Recognizing undead or fiendish influence',
      'Understanding religious ceremonies',
      'Knowing about the Gods of Krynn',
    ],
  },

  // ── Wisdom ──
  {
    name: 'Animal Handling',
    slug: 'animal-handling',
    ability: 'wis',
    description: 'When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal\'s intentions, the DM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.',
    examples: [
      'Calming a frightened horse',
      'Training a pet or companion',
      'Intuiting whether an animal is dangerous',
      'Controlling a mount in combat',
      'Befriending a wild animal',
    ],
  },
  {
    name: 'Insight',
    slug: 'insight',
    ability: 'wis',
    description: 'Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone\'s next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.',
    examples: [
      'Detecting if someone is lying',
      'Reading body language during negotiations',
      'Sensing hidden motives',
      'Predicting what someone will do next',
      'Determining if someone is under magical influence',
    ],
  },
  {
    name: 'Medicine',
    slug: 'medicine',
    ability: 'wis',
    description: 'A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.',
    examples: [
      'Stabilizing a dying creature (DC 10)',
      'Diagnosing a disease or poison',
      'Determining the cause of death',
      'Providing first aid for injuries',
      'Identifying the effects of a toxin',
    ],
  },
  {
    name: 'Perception',
    slug: 'perception',
    ability: 'wis',
    description: 'Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses.',
    examples: [
      'Spotting a hidden creature or trap',
      'Hearing approaching enemies',
      'Noticing a secret door',
      'Detecting a faint smell or taste',
      'Keeping watch during a rest',
    ],
  },
  {
    name: 'Survival',
    slug: 'survival',
    ability: 'wis',
    description: 'The DM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.',
    examples: [
      'Tracking creatures through the wilderness',
      'Foraging for food and water',
      'Navigating without a map',
      'Predicting the weather',
      'Building a shelter in the wild',
    ],
  },

  // ── Charisma ──
  {
    name: 'Deception',
    slug: 'deception',
    ability: 'cha',
    description: 'Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies.',
    examples: [
      'Telling a convincing lie',
      'Disguising your true intentions',
      'Creating a diversion or distraction',
      'Fast-talking a guard',
      'Maintaining a false identity',
    ],
  },
  {
    name: 'Intimidation',
    slug: 'intimidation',
    ability: 'cha',
    description: 'When you attempt to influence someone through overt threats, hostile actions, and physical violence, the DM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.',
    examples: [
      'Threatening a prisoner for information',
      'Convincing thugs to back down',
      'Staring down an opponent',
      'Using physical presence to cow someone',
      'Making a dramatic display of power',
    ],
  },
  {
    name: 'Performance',
    slug: 'performance',
    ability: 'cha',
    description: 'Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.',
    examples: [
      'Playing a musical instrument',
      'Singing or telling a story to a crowd',
      'Acting in a play or disguise',
      'Dancing at a formal event',
      'Giving a rousing speech',
    ],
  },
  {
    name: 'Persuasion',
    slug: 'persuasion',
    ability: 'cha',
    description: 'When you attempt to influence someone or a group of people with tact, social graces, or good nature, the DM might ask you to make a Charisma (Persuasion) check. Typically, you use Persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette.',
    examples: [
      'Convincing a merchant to lower a price',
      'Negotiating a peace treaty',
      'Making a diplomatic request',
      'Rallying allies to a cause',
      'Charming a noble at court',
    ],
  },
];

// ── Saving Throws (the 6 abilities) ──
export const savingThrows: { name: string; ability: AbilityKey }[] = [
  { name: 'Strength', ability: 'str' },
  { name: 'Dexterity', ability: 'dex' },
  { name: 'Constitution', ability: 'con' },
  { name: 'Intelligence', ability: 'int' },
  { name: 'Wisdom', ability: 'wis' },
  { name: 'Charisma', ability: 'cha' },
];

// ── Ability Labels ──
export const abilityLabels: Record<AbilityKey, string> = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
};

// ── Helper Functions ──
export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find(s => s.slug === slug);
}

export function getSkillByName(name: string): Skill | undefined {
  return skills.find(s => s.name.toLowerCase() === name.toLowerCase());
}

export function getSkillsByAbility(ability: AbilityKey): Skill[] {
  return skills.filter(s => s.ability === ability);
}

export function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function modString(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function calcSkillMod(
  abilityScore: number,
  profBonus: number,
  isProficient: boolean,
  hasExpertise: boolean,
): number {
  const base = abilityMod(abilityScore);
  if (hasExpertise) return base + profBonus * 2;
  if (isProficient) return base + profBonus;
  return base;
}

export function calcPassiveScore(
  abilityScore: number,
  profBonus: number,
  isProficient: boolean,
  hasExpertise: boolean,
): number {
  return 10 + calcSkillMod(abilityScore, profBonus, isProficient, hasExpertise);
}
