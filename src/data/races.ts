// ── D&D 5e Playable Races Reference ──────────────────────────
// PHB + Dragonlance races for character creation and reference pages
// Used by Character Creation page and race browse pages

export interface RacialTrait {
  name: string;
  description: string;
}

export interface Subrace {
  name: string;
  slug: string;
  abilityScoreIncrease: string;
  traits: RacialTrait[];
}

export interface Race {
  name: string;
  slug: string;
  abilityScoreIncrease: string;
  size: string;
  speed: number;
  languages: string;
  traits: RacialTrait[];
  subraces: Subrace[];
  description: string;
  source: string;
}

export const races: Race[] = [
  // ── PHB Core Races ──
  {
    name: 'Dwarf',
    slug: 'dwarf',
    abilityScoreIncrease: '+2 Constitution',
    size: 'Medium',
    speed: 25,
    languages: 'Common, Dwarvish',
    description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. They stand between 4 and 5 feet tall, are broad and compact, and live for centuries.',
    source: 'PHB',
    traits: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.' },
      { name: 'Dwarven Resilience', description: 'Advantage on saving throws against poison, and resistance against poison damage.' },
      { name: 'Dwarven Combat Training', description: 'Proficiency with battleaxe, handaxe, light hammer, and warhammer.' },
      { name: 'Tool Proficiency', description: 'Proficiency with one of: smith\'s tools, brewer\'s supplies, or mason\'s tools.' },
      { name: 'Stonecunning', description: 'Whenever you make an Intelligence (History) check related to stonework, add double your proficiency bonus.' },
    ],
    subraces: [
      {
        name: 'Hill Dwarf',
        slug: 'hill-dwarf',
        abilityScoreIncrease: '+1 Wisdom',
        traits: [
          { name: 'Dwarven Toughness', description: 'Your hit point maximum increases by 1, and increases by 1 again each time you gain a level.' },
        ],
      },
      {
        name: 'Mountain Dwarf',
        slug: 'mountain-dwarf',
        abilityScoreIncrease: '+2 Strength',
        traits: [
          { name: 'Dwarven Armor Training', description: 'Proficiency with light and medium armor.' },
        ],
      },
      {
        name: 'Dark Dwarf (Krynn)',
        slug: 'dark-dwarf-krynn',
        abilityScoreIncrease: '+1 Intelligence, +1 Dexterity',
        traits: [
          { name: 'Stalker', description: 'You have advantage on Dexterity (Stealth) checks.' },
          { name: 'Sunlight Sensitivity', description: 'You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you or your target is in direct sunlight.' },
          { name: 'Superior Darkvision', description: 'Your darkvision has a radius of 120 feet.' },
        ],
      },
      {
        name: 'Gully Dwarf (Krynn)',
        slug: 'gully-dwarf-krynn',
        abilityScoreIncrease: '+1 Dexterity',
        traits: [
          { name: 'Survival Instinct', description: 'You have advantage on Dexterity (Stealth) and Wisdom (Survival) checks.' },
          { name: 'Pitiable', description: 'You have advantage on Charisma (Persuasion) checks used to convince an enemy not to harm you.' },
          { name: 'Cowardly', description: 'You have disadvantage on Wisdom saving throws against being frightened or other fear effects.' },
        ],
      },
    ],
  },
  {
    name: 'Elf',
    slug: 'elf',
    abilityScoreIncrease: '+2 Dexterity',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Elvish',
    description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They love nature and magic, art and artistry, music and poetry, and the good things of the world.',
    source: 'PHB',
    traits: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.' },
      { name: 'Keen Senses', description: 'Proficiency in the Perception skill.' },
      { name: 'Fey Ancestry', description: 'Advantage on saving throws against being charmed, and magic can\'t put you to sleep.' },
      { name: 'Trance', description: 'Elves don\'t need to sleep. Instead, they meditate deeply for 4 hours a day, gaining the same benefit as 8 hours of sleep.' },
    ],
    subraces: [
      {
        name: 'High Elf',
        slug: 'high-elf',
        abilityScoreIncrease: '+1 Intelligence',
        traits: [
          { name: 'Elf Weapon Training', description: 'Proficiency with longsword, shortsword, shortbow, and longbow.' },
          { name: 'Cantrip', description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.' },
          { name: 'Extra Language', description: 'You can speak, read, and write one extra language of your choice.' },
        ],
      },
      {
        name: 'Wood Elf',
        slug: 'wood-elf',
        abilityScoreIncrease: '+1 Wisdom',
        traits: [
          { name: 'Elf Weapon Training', description: 'Proficiency with longsword, shortsword, shortbow, and longbow.' },
          { name: 'Fleet of Foot', description: 'Your base walking speed increases to 35 feet.' },
          { name: 'Mask of the Wild', description: 'You can attempt to hide even when only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.' },
        ],
      },
      {
        name: 'Dark Elf (Drow)',
        slug: 'dark-elf-drow',
        abilityScoreIncrease: '+1 Charisma',
        traits: [
          { name: 'Superior Darkvision', description: 'Your darkvision has a radius of 120 feet.' },
          { name: 'Sunlight Sensitivity', description: 'Disadvantage on attack rolls and Perception checks that rely on sight when you or your target is in direct sunlight.' },
          { name: 'Drow Magic', description: 'You know the Dancing Lights cantrip. At 3rd level, cast Faerie Fire once per long rest. At 5th level, cast Darkness once per long rest. Charisma is your spellcasting ability.' },
          { name: 'Drow Weapon Training', description: 'Proficiency with rapiers, shortswords, and hand crossbows.' },
        ],
      },
    ],
  },
  {
    name: 'Halfling',
    slug: 'halfling',
    abilityScoreIncrease: '+2 Dexterity',
    size: 'Small',
    speed: 25,
    languages: 'Common, Halfling',
    description: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. They are practical and down-to-earth, standing about 3 feet tall.',
    source: 'PHB',
    traits: [
      { name: 'Lucky', description: 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll and must use the new roll.' },
      { name: 'Brave', description: 'Advantage on saving throws against being frightened.' },
      { name: 'Halfling Nimbleness', description: 'You can move through the space of any creature that is of a size larger than yours.' },
    ],
    subraces: [
      {
        name: 'Lightfoot',
        slug: 'lightfoot',
        abilityScoreIncrease: '+1 Charisma',
        traits: [
          { name: 'Naturally Stealthy', description: 'You can attempt to hide even when obscured only by a creature that is at least one size larger than you.' },
        ],
      },
      {
        name: 'Stout',
        slug: 'stout',
        abilityScoreIncrease: '+1 Constitution',
        traits: [
          { name: 'Stout Resilience', description: 'Advantage on saving throws against poison, and resistance against poison damage.' },
        ],
      },
    ],
  },
  {
    name: 'Human',
    slug: 'human',
    abilityScoreIncrease: '+1 to all ability scores',
    size: 'Medium',
    speed: 30,
    languages: 'Common, one extra language of your choice',
    description: 'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
    source: 'PHB',
    traits: [
      { name: 'Versatile', description: 'Humans gain +1 to all six ability scores, reflecting their adaptability and diverse talents.' },
    ],
    subraces: [
      {
        name: 'Variant Human',
        slug: 'variant-human',
        abilityScoreIncrease: '+1 to two different ability scores',
        traits: [
          { name: 'Skills', description: 'Gain proficiency in one skill of your choice.' },
          { name: 'Feat', description: 'You gain one feat of your choice.' },
        ],
      },
    ],
  },
  {
    name: 'Dragonborn',
    slug: 'dragonborn',
    abilityScoreIncrease: '+2 Strength, +1 Charisma',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Draconic',
    description: 'Born of dragons, dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods, they originally hatched from dragon eggs as a unique race.',
    source: 'PHB',
    traits: [
      { name: 'Draconic Ancestry', description: 'Choose one type of dragon from the table. Your breath weapon and damage resistance are determined by the dragon type.' },
      { name: 'Breath Weapon', description: 'You can use your action to exhale destructive energy. DC = 8 + CON mod + proficiency bonus. Damage: 2d6, increasing at 6th (3d6), 11th (4d6), 16th (5d6). Recharges on short or long rest.' },
      { name: 'Damage Resistance', description: 'You have resistance to the damage type associated with your draconic ancestry.' },
    ],
    subraces: [],
  },
  {
    name: 'Gnome',
    slug: 'gnome',
    abilityScoreIncrease: '+2 Intelligence',
    size: 'Small',
    speed: 25,
    languages: 'Common, Gnomish',
    description: 'A gnome\'s energy and enthusiasm for living shines through every inch of their tiny bodies. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds.',
    source: 'PHB',
    traits: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.' },
      { name: 'Gnome Cunning', description: 'Advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.' },
    ],
    subraces: [
      {
        name: 'Forest Gnome',
        slug: 'forest-gnome',
        abilityScoreIncrease: '+1 Dexterity',
        traits: [
          { name: 'Natural Illusionist', description: 'You know the Minor Illusion cantrip. Intelligence is your spellcasting ability for it.' },
          { name: 'Speak with Small Beasts', description: 'You can communicate simple ideas with Small or smaller beasts through sounds and gestures.' },
        ],
      },
      {
        name: 'Rock Gnome',
        slug: 'rock-gnome',
        abilityScoreIncrease: '+1 Constitution',
        traits: [
          { name: 'Artificer\'s Lore', description: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, add double your proficiency bonus.' },
          { name: 'Tinker', description: 'Proficiency with artisan\'s tools (tinker\'s tools). You can spend 1 hour and 10 gp to construct a Tiny clockwork device (AC 5, 1 hp) that functions for 24 hours.' },
        ],
      },
    ],
  },
  {
    name: 'Half-Elf',
    slug: 'half-elf',
    abilityScoreIncrease: '+2 Charisma, +1 to two other ability scores',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Elvish, one extra language of your choice',
    description: 'Half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.',
    source: 'PHB',
    traits: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.' },
      { name: 'Fey Ancestry', description: 'Advantage on saving throws against being charmed, and magic can\'t put you to sleep.' },
      { name: 'Skill Versatility', description: 'Gain proficiency in two skills of your choice.' },
    ],
    subraces: [],
  },
  {
    name: 'Half-Orc',
    slug: 'half-orc',
    abilityScoreIncrease: '+2 Strength, +1 Constitution',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Orc',
    description: 'Half-orcs exhibit a blend of orcish and human characteristics, and their appearance varies widely. Some half-orcs are proud of their orc heritage, while others try to blend into human society.',
    source: 'PHB',
    traits: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.' },
      { name: 'Menacing', description: 'Proficiency in the Intimidation skill.' },
      { name: 'Relentless Endurance', description: 'When you are reduced to 0 HP but not killed outright, you can drop to 1 HP instead. Once per long rest.' },
      { name: 'Savage Attacks', description: 'When you score a critical hit with a melee weapon attack, you can roll one additional damage die and add it to the extra damage.' },
    ],
    subraces: [],
  },
  {
    name: 'Tiefling',
    slug: 'tiefling',
    abilityScoreIncrease: '+2 Charisma, +1 Intelligence',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Infernal',
    description: 'Tieflings are derived from human bloodlines touched by the power of the Nine Hells. They have large horns, a thick tail, solid-colored eyes, and skin tones including shades of red.',
    source: 'PHB',
    traits: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.' },
      { name: 'Hellish Resistance', description: 'Resistance to fire damage.' },
      { name: 'Infernal Legacy', description: 'You know the Thaumaturgy cantrip. At 3rd level, cast Hellish Rebuke as a 2nd-level spell once per long rest. At 5th level, cast Darkness once per long rest. Charisma is your spellcasting ability.' },
    ],
    subraces: [],
  },

  // ── Dragonlance Setting Races ──
  {
    name: 'Kender',
    slug: 'kender',
    abilityScoreIncrease: '+2 Dexterity, +1 Charisma',
    size: 'Small',
    speed: 25,
    languages: 'Common, Kenderspeak',
    description: 'Kender are a small, curious people native to Krynn. They average about 3 to 4 feet tall and weigh about 40 pounds. Known for their fearlessness, insatiable curiosity, and a habit of picking things up and pocketing them.',
    source: 'DL',
    traits: [
      { name: 'Lucky', description: 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.' },
      { name: 'Keen Senses', description: 'You have proficiency in the Perception skill.' },
      { name: 'Kender Pockets', description: 'Kender constantly pick things up and pocket them. If you need a piece of nonmagical equipment, roll a d4. On a 4, you find the item in your pockets. Otherwise, you can\'t search for the same item until you\'ve spent at least one day in a town or city. Searching takes 1 minute.' },
    ],
    subraces: [
      {
        name: 'True Kender',
        slug: 'true-kender',
        abilityScoreIncrease: '(included in base)',
        traits: [
          { name: 'Fearless', description: 'You have advantage on saving throws against being frightened.' },
          { name: 'Taunt', description: 'You have advantage on Charisma (Performance) checks to taunt a creature and make it lose its temper. A creature might turn hostile against you.' },
          { name: 'Lack of Focus', description: 'You have disadvantage on Intelligence (Investigation) checks and Constitution checks to maintain concentration.' },
        ],
      },
      {
        name: 'Afflicted Kender',
        slug: 'afflicted-kender',
        abilityScoreIncrease: '(included in base)',
        traits: [
          { name: 'Pitiable', description: 'You have advantage on Charisma (Persuasion) checks used to convince an enemy not to harm you.' },
        ],
      },
    ],
  },
  {
    name: 'Draconian',
    slug: 'draconian',
    abilityScoreIncrease: '+2 Constitution',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Nerakan',
    description: 'Draconians are dragon-like humanoids created through dark rituals that corrupt metallic dragon eggs. They have scaly skin, clawed hands, and bat-like wings. On Krynn, most draconians served the forces of the Dragon Highlords, but some have broken free to forge their own path.',
    source: 'DL',
    traits: [
      { name: 'Death Throes', description: 'When you die, your body undergoes a dramatic death effect based on your draconian subrace.' },
    ],
    subraces: [
      {
        name: 'Baaz Draconian',
        slug: 'baaz-draconian',
        abilityScoreIncrease: '(base +2 CON only)',
        traits: [
          { name: 'Wings (Glide)', description: 'You have bat-like wings. You can\'t fly, but you negate any falling damage and can travel horizontally up to four times the vertical distance descended.' },
          { name: 'Damage Resistance', description: 'You have resistance to fire and lightning damage.' },
          { name: 'Surprisingly Tough', description: 'You have advantage on saving throws against sleeping effects.' },
          { name: 'Death Throes (Petrification)', description: 'When you die, you turn to stone. Attackers must make a DC 13 DEX save or their weapon gets stuck. Your body crumbles to dust after 1d4 turns.' },
        ],
      },
      {
        name: 'Kapak Draconian',
        slug: 'kapak-draconian',
        abilityScoreIncrease: '+1 Dexterity',
        traits: [
          { name: 'Wings (Glide)', description: 'You have bat-like wings. You can\'t fly, but you negate any falling damage and can travel horizontally up to four times the vertical distance descended.' },
          { name: 'Damage Resistance', description: 'You have resistance to acid and poison damage.' },
          { name: 'Dragon Army Spy', description: 'You have proficiency in the Stealth skill.' },
          { name: 'Death Throes (Acid Pool)', description: 'When you die, your body dissolves into a 5-foot radius pool of acid. Creatures starting their turn in it take 1d6 acid damage. The acid evaporates in 1d6 rounds.' },
        ],
      },
      {
        name: 'Bozak Draconian',
        slug: 'bozak-draconian',
        abilityScoreIncrease: '+1 Strength',
        traits: [
          { name: 'Wings (Glide)', description: 'You have bat-like wings. You can\'t fly, but you negate any falling damage and can travel horizontally up to four times the vertical distance descended.' },
          { name: 'Damage Resistance', description: 'You have resistance to lightning damage.' },
          { name: 'Draconian Magic', description: 'You know the True Strike cantrip. At 3rd level, cast Burning Hands once per long rest. Intelligence is your spellcasting ability.' },
          { name: 'Death Throes (Explosive Bones)', description: 'When you die, your bones explode. Creatures within 10 feet must make a DC 14 DEX save, taking 2d6 bludgeoning damage on a failure, half on success.' },
        ],
      },
      {
        name: 'Sivak Draconian',
        slug: 'sivak-draconian',
        abilityScoreIncrease: '+1 Strength',
        traits: [
          { name: 'Flight', description: 'You have a flying speed of 30 feet.' },
          { name: 'Damage Resistance', description: 'You have resistance to cold damage.' },
          { name: 'Steal Appearance', description: 'When you slay a Medium humanoid, you can take their form. Your voice and appearance match exactly, but you gain no memories or abilities. You may change back but cannot polymorph again without another victim.' },
          { name: 'Death Throes (Death Face)', description: 'When you die, your body assumes the form of your killer for three days then decomposes to black soot. If killed by a Large+ creature or non-humanoid, your body bursts into flame (DC 17 DEX, 2d6 fire, 10 ft).' },
        ],
      },
      {
        name: 'Aurak Draconian',
        slug: 'aurak-draconian',
        abilityScoreIncrease: '+2 Intelligence',
        traits: [
          { name: 'Damage Resistance', description: 'You have resistance to fire damage.' },
          { name: 'Draconian Magic', description: 'You know Fire Bolt and Mage Hand cantrips. At 3rd level, cast Hold Person once per long rest. At 5th level, cast Lightning Bolt once per long rest. Intelligence is your spellcasting ability.' },
          { name: 'Death Throes (Burning Frenzy)', description: 'When you die, your body explodes in magical energy. Creatures within 5 feet must make a DC 16 DEX save, taking 4d6 force damage on a failure, half on success.' },
        ],
      },
    ],
  },
  {
    name: 'Minotaur (Krynn)',
    slug: 'minotaur-krynn',
    abilityScoreIncrease: '+2 Strength, +1 Constitution',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Minotaur',
    description: 'The minotaurs of Krynn are a proud, seafaring race of warriors and sailors. Unlike the savage minotaurs of other worlds, Krynn\'s minotaurs have built an empire founded on strength, honor, and naval dominance.',
    source: 'DL',
    traits: [
      { name: 'Horns', description: 'Your horns are natural melee weapons dealing 1d6 + STR modifier piercing damage.' },
      { name: 'Goring Rush', description: 'When you use the Dash action and move at least 20 feet, you can make a melee attack with your horns as a bonus action.' },
      { name: 'Hammering Horns', description: 'When you hit with a melee attack on your turn, you can use a bonus action to shove the target with your horns. The target must succeed on a STR save (DC = 8 + prof + STR mod) or be pushed 10 feet.' },
      { name: 'Imposing Presence', description: 'You have proficiency in one of the following: Intimidation or Persuasion.' },
    ],
    subraces: [],
  },
  {
    name: 'Half-Ogre (Krynn)',
    slug: 'half-ogre-krynn',
    abilityScoreIncrease: '+2 Strength, +1 Constitution',
    size: 'Medium',
    speed: 30,
    languages: 'Common, Orc',
    description: 'Half-ogres on Krynn are the offspring of humans and ogres. They are large, powerful, and often shunned by both parent races. On Krynn, they use the same traits as Half-Orcs, reskinned for the setting.',
    source: 'DL',
    traits: [
      { name: 'Darkvision', description: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.' },
      { name: 'Menacing', description: 'Proficiency in the Intimidation skill.' },
      { name: 'Relentless Endurance', description: 'When you are reduced to 0 HP but not killed outright, you can drop to 1 HP instead. Once per long rest.' },
      { name: 'Savage Attacks', description: 'When you score a critical hit with a melee weapon attack, you can roll one additional damage die and add it to the extra damage.' },
    ],
    subraces: [],
  },
];

// ── Helper Functions ──
export function getRaceBySlug(slug: string): Race | undefined {
  return races.find(r => r.slug === slug);
}

export function getRaceByName(name: string): Race | undefined {
  return races.find(r => r.name.toLowerCase() === name.toLowerCase());
}

export function getSubraceBySlug(raceSlug: string, subraceSlug: string): Subrace | undefined {
  const race = getRaceBySlug(raceSlug);
  return race?.subraces.find(sr => sr.slug === subraceSlug);
}

export function getRacesBySource(source: string): Race[] {
  return races.filter(r => r.source === source);
}

export const raceSources = [...new Set(races.map(r => r.source))].sort();
