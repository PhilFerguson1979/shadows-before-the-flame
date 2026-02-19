import { defineCollection, z } from 'astro:content';

const itemSchema = z.object({
  name: z.string(),
  type: z.string(),               // armor, weapon, shield, ring, cloak, etc.
  slot: z.string().optional(),    // which equipment slot it occupies
  acBase: z.number().optional(),  // base AC if armor
  acBonus: z.number().optional(), // bonus AC (shield, ring of protection, etc.)
  dmg: z.string().optional(),     // damage dice e.g. "1d6"
  dmgType: z.string().optional(), // piercing, slashing, etc.
  weight: z.string().optional(),  // light, medium, heavy (armor category)
  properties: z.array(z.string()).optional(), // finesse, thrown, versatile, etc.
  notes: z.string().optional(),
  quantity: z.number().optional().default(1),
  magical: z.boolean().optional().default(false),
});

const characters = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    player: z.string().optional(),
    race: z.string().optional(),
    class: z.string().optional(),
    subclass: z.string().optional(),
    level: z.number().optional(),
    hp: z.number().optional(),
    maxHp: z.number().optional(),
    ac: z.number().optional(),
    speed: z.number().optional().default(30),
    initiative: z.number().optional(),
    profBonus: z.number().optional().default(2),
    status: z.string().optional().default('active'),
    portrait: z.string().optional(),
    // Ability scores
    str: z.number().optional(),
    dex: z.number().optional(),
    con: z.number().optional(),
    int: z.number().optional(),
    wis: z.number().optional(),
    cha: z.number().optional(),
    // Currency
    currency: z.object({
      pp: z.number().optional().default(0),
      gp: z.number().optional().default(0),
      ep: z.number().optional().default(0),
      sp: z.number().optional().default(0),
      cp: z.number().optional().default(0),
    }).optional(),
    // Inventory: all items the character owns
    inventory: z.array(itemSchema).optional(),
    // Currently equipped items by slot name
    equipped: z.record(z.string()).optional(),
    // Level-up history
    levelHistory: z.array(z.object({
      level: z.number(),
      sessionNumber: z.number().optional(),
      date: z.string().optional(),
      hpGained: z.number().optional(),
      features: z.array(z.string()).optional(),
      notes: z.string().optional(),
    })).optional(),
    // Active conditions (poisoned, frightened, etc.)
    conditions: z.array(z.string()).optional(),
    // Spells known / prepared
    spells: z.array(z.object({
      name: z.string(),
      level: z.number(),                          // 0 = cantrip
      school: z.string().optional(),               // evocation, abjuration, etc.
      prepared: z.boolean().optional().default(true),
      concentration: z.boolean().optional().default(false),
      ritual: z.boolean().optional().default(false),
      notes: z.string().optional(),
    })).optional(),
    // Spell slot tracking
    spellSlots: z.array(z.object({
      level: z.number(),
      total: z.number(),
      used: z.number().optional().default(0),
    })).optional(),
    // Spellcasting type and ability (optional — inferred from class if not set)
    spellcastingAbility: z.enum(['str', 'dex', 'con', 'int', 'wis', 'cha']).optional(),
    casterType: z.enum(['prepared', 'known', 'none']).optional(),
    // Experience points
    xp: z.number().optional().default(0),
  }),
});
const sessions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sessionNumber: z.number(),
    date: z.string().optional(),
    location: z.string().optional(),
    level: z.number().optional(),
    summary: z.string().optional(),
    mvp: z.string().optional(),                          // character name of session MVP
    casualties: z.array(z.string()).optional(),          // characters who went down
    totalKills: z.number().optional(),
    highlights: z.array(z.object({
      who: z.string(),
      what: z.string(),
      type: z.enum(['epic', 'fail', 'kill', 'social', 'loot', 'death']).optional(),
    })).optional(),
    loot: z.array(z.object({
      item: z.string(),
      who: z.string(),
      notes: z.string().optional(),
    })).optional(),
    xp: z.number().optional(),
    nextSession: z.string().optional(),                  // teaser/cliffhanger line
  }),
});

const npcs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    disposition: z.string().optional(),
    location: z.string().optional(),
    firstSeen: z.string().optional(),
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    region: z.string().optional(),
    status: z.string().optional(),
    firstVisited: z.string().optional(),
  }),
});

const lore = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
  }),
});

const inventory = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { characters, sessions, npcs, locations, lore, inventory };
