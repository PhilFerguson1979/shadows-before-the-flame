// ── D&D 5e Backgrounds Reference ──────────────────────────────
// PHB + Dragonlance backgrounds for character creation and reference
// Used by Character Creation page and background browse pages

export interface BackgroundFeature {
  name: string;
  description: string;
}

export interface Background {
  name: string;
  slug: string;
  skillProficiencies: string;
  toolProficiencies: string;
  languages: string;
  equipment: string;
  feature: BackgroundFeature;
  description: string;
  source: string;
}

export const backgrounds: Background[] = [
  // ── PHB Backgrounds ──
  {
    name: 'Acolyte',
    slug: 'acolyte',
    skillProficiencies: 'Insight, Religion',
    toolProficiencies: 'None',
    languages: 'Two of your choice',
    equipment: 'A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, a pouch containing 15 gp',
    feature: {
      name: 'Shelter of the Faithful',
      description: 'You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith. Those who share your religion will support you at a modest lifestyle. You also have ties to the temple where you used to serve.',
    },
    description: 'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world.',
    source: 'PHB',
  },
  {
    name: 'Charlatan',
    slug: 'charlatan',
    skillProficiencies: 'Deception, Sleight of Hand',
    toolProficiencies: 'Disguise kit, Forgery kit',
    languages: 'None',
    equipment: 'A set of fine clothes, a disguise kit, tools of the con (bottles, weighted dice, marked cards, or a signet ring of an imaginary duke), a pouch containing 15 gp',
    feature: {
      name: 'False Identity',
      description: 'You have created a second identity that includes documentation, established acquaintances, and disguises. You can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or handwriting you are trying to copy.',
    },
    description: 'You have always had a way with people. You know what makes them tick and can tease out their desires after a few minutes of conversation.',
    source: 'PHB',
  },
  {
    name: 'Criminal',
    slug: 'criminal',
    skillProficiencies: 'Deception, Stealth',
    toolProficiencies: "One type of gaming set, Thieves' tools",
    languages: 'None',
    equipment: "A crowbar, a set of dark common clothes including a hood, a pouch containing 15 gp",
    feature: {
      name: 'Criminal Contact',
      description: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances.',
    },
    description: 'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld.',
    source: 'PHB',
  },
  {
    name: 'Entertainer',
    slug: 'entertainer',
    skillProficiencies: 'Acrobatics, Performance',
    toolProficiencies: 'Disguise kit, One type of musical instrument',
    languages: 'None',
    equipment: 'A musical instrument of your choice, the favor of an admirer (love letter, lock of hair, or trinket), a costume, a pouch containing 15 gp',
    feature: {
      name: 'By Popular Demand',
      description: 'You can always find a place to perform, usually in an inn or tavern. At such a place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night. Your performance also makes you something of a local figure.',
    },
    description: 'You thrive in front of an audience. You know how to entrance them, entertain them, and inspire them. Your poetics can stir the hearts of those who hear you.',
    source: 'PHB',
  },
  {
    name: 'Folk Hero',
    slug: 'folk-hero',
    skillProficiencies: 'Animal Handling, Survival',
    toolProficiencies: "One type of artisan's tools, Vehicles (land)",
    languages: 'None',
    equipment: "A set of artisan's tools (your choice), a shovel, an iron pot, a set of common clothes, a pouch containing 10 gp",
    feature: {
      name: 'Rustic Hospitality',
      description: 'Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among commoners, unless you have shown yourself to be a danger to them.',
    },
    description: 'You come from a humble social rank, but you are destined for so much more. The people of your home village regard you as their champion.',
    source: 'PHB',
  },
  {
    name: 'Guild Artisan',
    slug: 'guild-artisan',
    skillProficiencies: 'Insight, Persuasion',
    toolProficiencies: "One type of artisan's tools",
    languages: 'One of your choice',
    equipment: "A set of artisan's tools (your choice), a letter of introduction from your guild, a set of traveler's clothes, a pouch containing 15 gp",
    feature: {
      name: 'Guild Membership',
      description: 'Your guild offers you lodging and food if necessary, pays for your funeral, and provides a meeting hall. If accused of a crime, your guild will support you if a good case can be made. You can gain access to powerful political figures through the guild.',
    },
    description: 'You are a member of an artisan guild, skilled in a particular field and closely associated with other artisans. You are well-established in the world of trade.',
    source: 'PHB',
  },
  {
    name: 'Hermit',
    slug: 'hermit',
    skillProficiencies: 'Medicine, Religion',
    toolProficiencies: 'Herbalism kit',
    languages: 'One of your choice',
    equipment: 'A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, 5 gp',
    feature: {
      name: 'Discovery',
      description: 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. It might be a great truth about the cosmos, the deities, the natural world, or the nature of the self. Work with your DM to determine the details of your discovery.',
    },
    description: 'You lived in seclusion — either in a sheltered community such as a monastery, or entirely alone — for a formative period of your life.',
    source: 'PHB',
  },
  {
    name: 'Noble',
    slug: 'noble',
    skillProficiencies: 'History, Persuasion',
    toolProficiencies: 'One type of gaming set',
    languages: 'One of your choice',
    equipment: 'A set of fine clothes, a signet ring, a scroll of pedigree, a purse containing 25 gp',
    feature: {
      name: 'Position of Privilege',
      description: 'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and commoners make every effort to accommodate you. You can secure an audience with a local noble if you need to.',
    },
    description: 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.',
    source: 'PHB',
  },
  {
    name: 'Outlander',
    slug: 'outlander',
    skillProficiencies: 'Athletics, Survival',
    toolProficiencies: 'One type of musical instrument',
    languages: 'One of your choice',
    equipment: "A staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, a pouch containing 10 gp",
    feature: {
      name: 'Wanderer',
      description: 'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. You can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.',
    },
    description: 'You grew up in the wilds, far from civilization and the comforts of town and technology. You witnessed the migration of herds larger than forests and survived weather more extreme than any city-dweller could comprehend.',
    source: 'PHB',
  },
  {
    name: 'Sage',
    slug: 'sage',
    skillProficiencies: 'Arcana, History',
    toolProficiencies: 'None',
    languages: 'Two of your choice',
    equipment: 'A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, a pouch containing 10 gp',
    feature: {
      name: 'Researcher',
      description: 'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this comes from a library, scriptorium, university, or a sage or other learned person or creature.',
    },
    description: 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you.',
    source: 'PHB',
  },
  {
    name: 'Sailor',
    slug: 'sailor',
    skillProficiencies: 'Athletics, Perception',
    toolProficiencies: "Navigator's tools, Vehicles (water)",
    languages: 'None',
    equipment: "A belaying pin (club), 50 feet of silk rope, a lucky charm, a set of common clothes, a pouch containing 10 gp",
    feature: {
      name: 'Ship\'s Passage',
      description: 'When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or on another ship you have good relations with.',
    },
    description: 'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths.',
    source: 'PHB',
  },
  {
    name: 'Soldier',
    slug: 'soldier',
    skillProficiencies: 'Athletics, Intimidation',
    toolProficiencies: 'One type of gaming set, Vehicles (land)',
    languages: 'None',
    equipment: 'An insignia of rank, a trophy taken from a fallen enemy, a set of bone dice or deck of cards, a set of common clothes, a pouch containing 10 gp',
    feature: {
      name: 'Military Rank',
      description: 'You have a military rank from your career as a soldier. Soldiers still loyal to your former military organization recognize your authority and defer to you. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use.',
    },
    description: 'War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, and learned basic survival techniques.',
    source: 'PHB',
  },
  {
    name: 'Urchin',
    slug: 'urchin',
    skillProficiencies: 'Sleight of Hand, Stealth',
    toolProficiencies: "Disguise kit, Thieves' tools",
    languages: 'None',
    equipment: 'A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, a pouch containing 10 gp',
    feature: {
      name: 'City Secrets',
      description: 'You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.',
    },
    description: 'You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself.',
    source: 'PHB',
  },

  // ── Dragonlance Backgrounds ──
  {
    name: 'Knight of Solamnia',
    slug: 'knight-of-solamnia',
    skillProficiencies: 'Athletics, Persuasion',
    toolProficiencies: 'None',
    languages: 'Two of your choice (typically Solamnic and one other)',
    equipment: 'An insignia of the Knights of Solamnia, a set of traveler\'s clothes, a pouch containing 10 gp',
    feature: {
      name: 'Squire of Solamnia',
      description: 'You have trained as a squire in the Knights of Solamnia. You are recognized by members of the knighthood and can receive shelter and aid from fellow knights and their supporters across Ansalon.',
    },
    description: 'You have trained among the Knights of Solamnia, an order dedicated to the ideals of honor, courage, and justice on the world of Krynn.',
    source: 'DL',
  },
  {
    name: 'Mage of High Sorcery',
    slug: 'mage-of-high-sorcery',
    skillProficiencies: 'Arcana, History',
    toolProficiencies: 'None',
    languages: 'Two of your choice',
    equipment: 'A set of robes identifying your order (white, red, or black), a spellbook, a set of common clothes, a pouch containing 15 gp',
    feature: {
      name: 'Initiate of High Sorcery',
      description: 'You have been tested and accepted into one of the three orders of High Sorcery. Members of your order recognize you and will offer you assistance, though the nature of that help varies by order (White Robes heal, Red Robes share knowledge, Black Robes bargain for favors).',
    },
    description: 'You have been tested by the Conclave of Wizards and accepted into one of the three orders of High Sorcery on Krynn: the White Robes, Red Robes, or Black Robes.',
    source: 'DL',
  },
];

// ── Helper Functions ──
export function getBackgroundBySlug(slug: string): Background | undefined {
  return backgrounds.find(b => b.slug === slug);
}

export function getBackgroundByName(name: string): Background | undefined {
  return backgrounds.find(b => b.name.toLowerCase() === name.toLowerCase());
}

export function getBackgroundsBySource(source: string): Background[] {
  return backgrounds.filter(b => b.source === source);
}

export const backgroundSources = [...new Set(backgrounds.map(b => b.source))].sort();
