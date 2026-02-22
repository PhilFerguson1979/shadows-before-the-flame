// ── D&D 5e Classes & Subclasses Reference ─────────────────────
// All 13 classes with features, proficiencies, and subclasses
// Sources: PHB, XGtE, TCoE, Dragonlance supplements
// Used by ClassesPanel, character creation, and reference pages

// ── Types ──────────────────────────────────────────────────────

export interface ClassFeature {
  name: string;
  level: number;
  description: string;
}

export interface SubclassFeature {
  name: string;
  level: number;
  description: string;
}

export interface Subclass {
  name: string;
  slug: string;
  className: string;
  source: string;
  subclassLevel: number;
  description: string;
  features: SubclassFeature[];
}

export interface ClassInfo {
  name: string;
  slug: string;
  hitDie: number;
  primaryAbility: string;
  savingThrows: string;
  armorProficiencies: string;
  weaponProficiencies: string;
  toolProficiencies: string;
  skillChoices: string;
  description: string;
  source: string;
  subclassLabel: string;
  subclassLevel: number;
  krynnNotes?: string;
  roleplayTip?: string;
  features: ClassFeature[];
  subclasses: Subclass[];
}

// Backward-compat alias
export type DndClass = ClassInfo;

// ── Helpers ────────────────────────────────────────────────────

export function getClassBySlug(slug: string): ClassInfo | undefined {
  return classesData.find(c => c.slug === slug);
}

export function getSubclassesByClass(className: string): Subclass[] {
  const cls = classesData.find(c => c.name === className);
  return cls?.subclasses ?? [];
}

export function getSubclassBySlug(classSlug: string, subclassSlug: string): Subclass | undefined {
  const cls = getClassBySlug(classSlug);
  return cls?.subclasses.find(s => s.slug === subclassSlug);
}

// ── Class Data ─────────────────────────────────────────────────

export const classesData: ClassInfo[] = [

// ══════════════════════════════════════════════════════════════
// ARTIFICER
// ══════════════════════════════════════════════════════════════
{
  name: "Artificer",
  slug: "artificer",
  hitDie: 8,
  primaryAbility: "Intelligence",
  savingThrows: "Constitution, Intelligence",
  armorProficiencies: "Light armor, Medium armor, Shields",
  weaponProficiencies: "Simple weapons",
  toolProficiencies: "Thieves' tools, Tinker's tools, One artisan's tools of your choice",
  skillChoices: "Choose 2 from Arcana, History, Investigation, Medicine, Nature, Perception, Sleight of Hand",
  description: "Masters of invention who use ingenuity and magic to unlock extraordinary capabilities in objects, crafting magical items and infusing mundane gear with arcane power.",
  source: "TCoE",
  subclassLabel: "Artificer Specialist",
  subclassLevel: 3,
  features: [
    { name: "Magical Tinkering", level: 1, description: "You can invest a spark of magic into mundane objects, giving them minor magical properties such as light, sound, odor, or a static visual effect." },
    { name: "Spellcasting", level: 1, description: "You can cast artificer spells using Intelligence as your spellcasting ability. You use tools as a spellcasting focus and prepare spells from the artificer list." },
    { name: "Infuse Item", level: 2, description: "You gain the ability to imbue mundane items with magical infusions, turning them into magic items. You learn 4 infusions and can have 2 active at once, scaling with level." },
    { name: "The Right Tool for the Job", level: 3, description: "You can produce any set of artisan's tools with 1 hour of work using thieves' or tinker's tools." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Tool Expertise", level: 6, description: "Your proficiency bonus is doubled for any ability check using a tool you are proficient with." },
    { name: "Flash of Genius", level: 7, description: "When you or a creature within 30 feet fails an ability check or saving throw, you can add your Intelligence modifier to the roll as a reaction. Uses equal to Int modifier per long rest." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Magic Item Adept", level: 10, description: "You can attune to up to 4 magic items. Crafting common and uncommon magic items takes a quarter of the normal time and half the gold." },
    { name: "Spell-Storing Item", level: 11, description: "You can store a 1st or 2nd level artificer spell in an object. A creature holding the object can cast the spell using your spellcasting ability. The item holds charges equal to 2× your Int modifier." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Magic Item Savant", level: 14, description: "You can attune to up to 5 magic items. You ignore all class, race, spell, and level requirements on attuning to or using magic items." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Magic Item Master", level: 18, description: "You can attune to up to 6 magic items at once." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Soul of Artifice", level: 20, description: "You gain +1 to all saving throws per magic item you are attuned to. If reduced to 0 HP, you can end one infusion to drop to 1 HP instead." },
  ],
  subclasses: [
    {
      name: "Alchemist", slug: "alchemist", className: "Artificer", source: "TCoE", subclassLevel: 3,
      description: "Artificers who combine reagents to produce mystical effects, crafting experimental elixirs that heal, transform, and empower allies.",
      features: [
        { name: "Tool Proficiency", level: 3, description: "You gain proficiency with alchemist's supplies." },
        { name: "Alchemist Spells", level: 3, description: "You always have certain spells prepared: Healing Word, Ray of Sickness (3rd), Flaming Sphere, Melf's Acid Arrow (5th), Gaseous Form, Mass Healing Word (9th), Blight, Death Ward (13th), Cloudkill, Raise Dead (17th)." },
        { name: "Experimental Elixir", level: 3, description: "When you finish a long rest, you can produce experimental elixirs equal to your Intelligence modifier. Each has a random or chosen effect: healing, swiftness, resilience, boldness, flight, or transformation." },
        { name: "Alchemical Savant", level: 5, description: "When you cast a spell using alchemist's supplies as your focus, you gain a bonus equal to your Intelligence modifier to one roll of healing or acid, fire, necrotic, or poison damage." },
        { name: "Restorative Reagents", level: 9, description: "You can cast Lesser Restoration without a spell slot (Int modifier times per long rest). Your experimental elixirs also grant 2d6 + Int modifier temp HP." },
        { name: "Chemical Mastery", level: 15, description: "You gain resistance to acid and poison damage and immunity to the poisoned condition. You can cast Greater Restoration and Heal once each per long rest without a spell slot." },
      ],
    },
    {
      name: "Armorer", slug: "armorer", className: "Artificer", source: "TCoE", subclassLevel: 3,
      description: "Artificers who specialize in magical armor, transforming a suit into a second skin powered by arcane technology.",
      features: [
        { name: "Tools of the Trade", level: 3, description: "You gain proficiency with heavy armor and smith's tools." },
        { name: "Armorer Spells", level: 3, description: "You always have certain spells prepared: Magic Missile, Thunderwave (3rd), Mirror Image, Shatter (5th), Hypnotic Pattern, Lightning Bolt (9th), Fire Shield, Greater Invisibility (13th), Passwall, Wall of Force (17th)." },
        { name: "Arcane Armor", level: 3, description: "You turn a suit of armor into Arcane Armor that covers your body, replaces missing limbs, can't be removed against your will, and serves as a spellcasting focus with no Str requirement." },
        { name: "Armor Model", level: 3, description: "Choose Guardian (thunder gauntlets imposing disadvantage on attacks against others, defensive field granting temp HP) or Infiltrator (lightning launcher ranged attacks, +5 ft speed, advantage on Stealth)." },
        { name: "Extra Attack", level: 5, description: "You can attack twice when you take the Attack action." },
        { name: "Armor Modifications", level: 9, description: "Your Arcane Armor gains additional infusion slots: chest, boots, helmet, and weapon. Each counts as a separate item for infusions." },
        { name: "Perfected Armor", level: 15, description: "Guardian: pull creatures within 30 feet and deal thunder damage as a reaction. Infiltrator: lightning attacks cause targets to glimmer, granting advantage and extra damage on next attack." },
      ],
    },
    {
      name: "Artillerist", slug: "artillerist", className: "Artificer", source: "TCoE", subclassLevel: 3,
      description: "Artificers who specialize in creating magical cannons and using explosive force, blending arcane power with destructive firepower.",
      features: [
        { name: "Tool Proficiency", level: 3, description: "You gain proficiency with woodcarver's tools." },
        { name: "Artillerist Spells", level: 3, description: "You always have certain spells prepared: Shield, Thunderwave (3rd), Scorching Ray, Shatter (5th), Fireball, Wind Wall (9th), Ice Storm, Wall of Fire (13th), Cone of Cold, Wall of Force (17th)." },
        { name: "Eldritch Cannon", level: 3, description: "You can create a Small or Tiny magical cannon. Choose Flamethrower (15-foot cone fire), Force Ballista (ranged force damage and push), or Protector (grants temp HP in 10 feet). Lasts 1 hour." },
        { name: "Arcane Firearm", level: 5, description: "You turn a wand, staff, or rod into an arcane firearm. When you cast an artificer spell through it, roll a d8 and add it to one damage roll." },
        { name: "Explosive Cannon", level: 9, description: "Your Eldritch Cannon's damage increases by 1d8. You can detonate it as an action for 3d8 force damage in a 20-foot radius." },
        { name: "Fortified Position", level: 15, description: "You can have two Eldritch Cannons active at once. You and allies within 10 feet of either cannon gain half cover." },
      ],
    },
    {
      name: "Battle Smith", slug: "battle-smith", className: "Artificer", source: "TCoE", subclassLevel: 3,
      description: "Artificers who are experts at defending others and repairing both material and personnel, fighting alongside a steel defender companion.",
      features: [
        { name: "Tool Proficiency", level: 3, description: "You gain proficiency with smith's tools." },
        { name: "Battle Smith Spells", level: 3, description: "You always have certain spells prepared: Heroism, Shield (3rd), Branding Smite, Warding Bond (5th), Aura of Vitality, Conjure Barrage (9th), Aura of Purity, Fire Shield (13th), Banishing Smite, Mass Cure Wounds (17th)." },
        { name: "Battle Ready", level: 3, description: "You gain proficiency with martial weapons. You can use Intelligence instead of Strength or Dexterity for attack and damage rolls with magic weapons." },
        { name: "Steel Defender", level: 3, description: "You build a Steel Defender companion that obeys your commands. It can Dodge on its own or use your bonus action for other actions. Its Deflect Attack reaction imposes disadvantage on attacks against allies." },
        { name: "Extra Attack", level: 5, description: "You can attack twice when you take the Attack action." },
        { name: "Arcane Jolt", level: 9, description: "When you or your Steel Defender hits with a magic weapon, deal an extra 2d6 force damage or heal an ally within 30 feet for 2d6 HP. Uses equal to Int modifier per long rest." },
        { name: "Improved Defender", level: 15, description: "Arcane Jolt increases to 4d6. Your Steel Defender gains +2 AC and its Deflect Attack deals force damage." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// BARBARIAN
// ══════════════════════════════════════════════════════════════
{
  name: "Barbarian",
  slug: "barbarian",
  hitDie: 12,
  primaryAbility: "Strength",
  savingThrows: "Strength, Constitution",
  armorProficiencies: "Light armor, Medium armor, Shields",
  weaponProficiencies: "Simple weapons, Martial weapons",
  toolProficiencies: "None",
  skillChoices: "Choose 2 from Animal Handling, Athletics, Intimidation, Nature, Perception, Survival",
  description: "Fierce warriors of primitive background who can enter a battle rage, channeling primal ferocity to become unstoppable forces on the battlefield.",
  source: "PHB",
  subclassLabel: "Primal Path",
  subclassLevel: 3,
  features: [
    { name: "Rage", level: 1, description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain advantage on Strength checks and saves, bonus rage damage on melee attacks, and resistance to bludgeoning, piercing, and slashing damage." },
    { name: "Unarmored Defense", level: 1, description: "While not wearing armor, your AC equals 10 + Dexterity modifier + Constitution modifier. You can use a shield and still gain this benefit." },
    { name: "Reckless Attack", level: 2, description: "You can throw aside all concern for defense to attack with fierce desperation. Your first attack each turn gains advantage, but attack rolls against you have advantage until your next turn." },
    { name: "Danger Sense", level: 2, description: "You gain advantage on Dexterity saving throws against effects you can see, such as traps and spells. You must not be blinded, deafened, or incapacitated." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Extra Attack", level: 5, description: "You can attack twice, instead of once, whenever you take the Attack action on your turn." },
    { name: "Fast Movement", level: 5, description: "Your speed increases by 10 feet while you aren't wearing heavy armor." },
    { name: "Feral Instinct", level: 7, description: "You have advantage on initiative rolls. Additionally, if you are surprised but not incapacitated, you can act normally on your first turn if you enter your rage." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Brutal Critical", level: 9, description: "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. Increases to 2 dice at 13th and 3 dice at 17th level." },
    { name: "Relentless Rage", level: 11, description: "Your rage can keep you fighting despite grievous wounds. If you drop to 0 HP while raging, you can make a DC 10 Constitution save to drop to 1 HP instead. Each use increases the DC by 5." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Persistent Rage", level: 15, description: "Your rage is so fierce that it ends early only if you fall unconscious or choose to end it." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Indomitable Might", level: 18, description: "If your total for a Strength check is less than your Strength score, you can use that score in place of the total." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Primal Champion", level: 20, description: "You embody the power of the wilds. Your Strength and Constitution scores each increase by 4, to a maximum of 24." },
  ],
  subclasses: [
    // PHB
    {
      name: "Path of the Berserker", slug: "path-of-the-berserker", className: "Barbarian", source: "PHB", subclassLevel: 3,
      description: "Barbarians who thrive in the chaos of battle, entering a mindless fury that makes them unstoppable killing machines.",
      features: [
        { name: "Frenzy", level: 3, description: "You can go into a frenzy when you rage. While frenzied, you can make a single melee weapon attack as a bonus action on each turn. When the rage ends, you suffer one level of exhaustion." },
        { name: "Mindless Rage", level: 6, description: "You can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration." },
        { name: "Intimidating Presence", level: 10, description: "You can use your action to frighten someone with your menacing presence. One creature within 30 feet must make a Wisdom saving throw (DC 8 + proficiency + Cha mod) or be frightened until end of your next turn." },
        { name: "Retaliation", level: 14, description: "When you take damage from a creature within 5 feet, you can use your reaction to make a melee weapon attack against that creature." },
      ],
    },
    {
      name: "Path of the Totem Warrior", slug: "path-of-the-totem-warrior", className: "Barbarian", source: "PHB", subclassLevel: 3,
      description: "Barbarians on a spiritual journey who accept a spirit animal as guide, protector, and inspiration, gaining supernatural powers tied to their totem.",
      features: [
        { name: "Spirit Seeker", level: 3, description: "You can cast Beast Sense and Speak with Animals as rituals." },
        { name: "Totem Spirit", level: 3, description: "Choose Bear (resistance to all damage except psychic while raging), Eagle (opportunity attacks against you have disadvantage, Dash as bonus action), or Wolf (allies have advantage on melee attacks against hostile creatures within 5 feet of you while raging)." },
        { name: "Aspect of the Beast", level: 6, description: "Choose Bear (carrying capacity doubled, advantage on Str checks for pushing/pulling/lifting), Eagle (see up to 1 mile with no difficulty, dim light doesn't impose disadvantage on Perception), or Wolf (track creatures at fast pace, move stealthily at normal pace)." },
        { name: "Spirit Walker", level: 10, description: "You can cast Commune with Nature as a ritual. The spell's information comes from your totem spirit." },
        { name: "Totemic Attunement", level: 14, description: "Choose Bear (while raging, hostile creatures within 5 feet have disadvantage on attacks against allies), Eagle (gain flying speed equal to walking speed while raging), or Wolf (while raging, use bonus action to knock a Large or smaller creature prone when you hit it)." },
      ],
    },
    // XGtE
    {
      name: "Path of the Ancestral Guardian", slug: "path-of-the-ancestral-guardian", className: "Barbarian", source: "XGtE", subclassLevel: 3,
      description: "Barbarians who draw on the spirits of their ancestors to shield allies and punish foes who dare strike others.",
      features: [
        { name: "Ancestral Protectors", level: 3, description: "While raging, the first creature you hit on your turn has disadvantage on attacks against targets other than you, and targets other than you have resistance to that creature's damage." },
        { name: "Spirit Shield", level: 6, description: "As a reaction while raging, when a creature within 30 feet takes damage, reduce it by 2d6. Increases to 3d6 at 10th and 4d6 at 14th." },
        { name: "Consult the Spirits", level: 10, description: "You can cast Augury or Clairvoyance as rituals without material components, using Wisdom." },
        { name: "Vengeful Ancestors", level: 14, description: "When you use Spirit Shield, the attacker takes force damage equal to the damage prevented." },
      ],
    },
    {
      name: "Path of the Storm Herald", slug: "path-of-the-storm-herald", className: "Barbarian", source: "XGtE", subclassLevel: 3,
      description: "Barbarians who channel primal magic of storms, gaining an aura of elemental power that affects the battlefield around them.",
      features: [
        { name: "Storm Aura", level: 3, description: "While raging, you emanate a 10-foot aura. Choose desert (fire damage), sea (lightning damage), or tundra (temp HP). Activates as a bonus action each turn." },
        { name: "Storm Soul", level: 6, description: "Gain passive benefits based on environment: desert (fire resistance, ignite objects), sea (lightning resistance, breathe underwater), or tundra (cold resistance, freeze water)." },
        { name: "Shielding Storm", level: 10, description: "Creatures of your choice in your Storm Aura gain resistance to your aura's damage type." },
        { name: "Raging Storm", level: 14, description: "Your storm aura gains a powerful effect: desert (Dex save or fire damage), sea (Str save or knocked prone), tundra (reduce speed to 0)." },
      ],
    },
    {
      name: "Path of the Zealot", slug: "path-of-the-zealot", className: "Barbarian", source: "XGtE", subclassLevel: 3,
      description: "Warriors fueled by divine fury who channel the power of the gods into devastating attacks and can fight beyond the brink of death.",
      features: [
        { name: "Divine Fury", level: 3, description: "While raging, the first creature you hit each turn takes an extra 1d6 + half barbarian level necrotic or radiant damage." },
        { name: "Warrior of the Gods", level: 3, description: "Spells that restore you to life (not Wish) require no material components." },
        { name: "Fanatical Focus", level: 6, description: "If you fail a saving throw while raging, you can reroll it. Once per rage." },
        { name: "Zealous Presence", level: 10, description: "As a bonus action, up to 10 creatures within 60 feet gain advantage on attack rolls and saving throws until your next turn. Once per long rest." },
        { name: "Rage Beyond Death", level: 14, description: "While raging, dropping to 0 HP doesn't knock you unconscious. You still make death saves and only die if your rage ends at 0 HP." },
      ],
    },
    // TCoE
    {
      name: "Path of the Beast", slug: "path-of-the-beast", className: "Barbarian", source: "TCoE", subclassLevel: 3,
      description: "Barbarians who draw rage from a bestial spark, physically transforming with natural weapons when they rage.",
      features: [
        { name: "Form of the Beast", level: 3, description: "When you rage, manifest a natural weapon: Bite (1d8, heals if below half HP), Claws (1d6, extra claw attack), or Tail (1d8, reach, reaction +1d8 AC)." },
        { name: "Bestial Soul", level: 6, description: "Natural weapons count as magical. After a rest, choose swimming + water breathing, climbing speed, or enhanced jumping." },
        { name: "Infectious Fury", level: 10, description: "When you hit with natural weapons while raging, target makes Wis save or attacks another creature of your choice, or takes 2d12 psychic damage. Proficiency bonus uses per long rest." },
        { name: "Call the Hunt", level: 14, description: "When you rage, choose willing creatures within 30 feet (up to Con mod). Gain 5 temp HP per creature; they add 1d6 damage once per turn. Proficiency bonus uses per long rest." },
      ],
    },
    {
      name: "Path of Wild Magic", slug: "path-of-wild-magic", className: "Barbarian", source: "TCoE", subclassLevel: 3,
      description: "Barbarians suffused with magic from the Feywild or other supernatural realms, producing unpredictable magical effects when they rage.",
      features: [
        { name: "Magic Awareness", level: 3, description: "As an action, detect spells and magic items within 60 feet, learning their school. Proficiency bonus uses per long rest." },
        { name: "Wild Surge", level: 3, description: "When you rage, roll on the Wild Magic table for a random effect: necrotic tendrils, teleportation, spirit explosion, force weapon, retaliatory damage, protective lights, difficult terrain, or radiant bolt." },
        { name: "Bolstering Magic", level: 6, description: "As an action, grant a creature +1d3 to attack rolls and checks for 10 minutes, or recover a spell slot of 1d3 level or lower. Proficiency bonus uses per long rest." },
        { name: "Unstable Backlash", level: 10, description: "When you take damage or fail a save while raging, use your reaction to reroll on the Wild Magic table, replacing your current effect." },
        { name: "Controlled Surge", level: 14, description: "Roll twice on the Wild Magic table and choose which effect to use. Same number lets you choose any effect." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// BARD
// ══════════════════════════════════════════════════════════════
{
  name: "Bard",
  slug: "bard",
  hitDie: 8,
  primaryAbility: "Charisma",
  savingThrows: "Dexterity, Charisma",
  armorProficiencies: "Light armor",
  weaponProficiencies: "Simple weapons, Hand crossbows, Longswords, Rapiers, Shortswords",
  toolProficiencies: "Three musical instruments of your choice",
  skillChoices: "Choose 3 from Acrobatics, Animal Handling, Arcana, Athletics, Deception, History, Insight, Intimidation, Investigation, Medicine, Nature, Perception, Performance, Persuasion, Religion, Sleight of Hand, Stealth, Survival",
  description: "Inspiring magicians whose power echoes the music of creation, weaving spells through words, music, and performance to heal allies and confound foes.",
  source: "PHB",
  subclassLabel: "Bard College",
  subclassLevel: 3,
  features: [
    { name: "Spellcasting", level: 1, description: "You can cast bard spells using Charisma as your spellcasting ability. You know a set number of spells and can use a musical instrument as a spellcasting focus." },
    { name: "Bardic Inspiration", level: 1, description: "You can inspire others through stirring words or music. A creature within 60 feet gains a Bardic Inspiration die (d6) to add to one ability check, attack roll, or saving throw. Uses equal to Cha modifier per long rest (short rest at 5th)." },
    { name: "Jack of All Trades", level: 2, description: "You can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus." },
    { name: "Song of Rest", level: 2, description: "You can use soothing music or oration during a short rest to help revitalize wounded allies. Creatures that regain HP via Hit Dice gain an extra 1d6 HP (scales at higher levels)." },
    { name: "Expertise", level: 3, description: "Choose two skill proficiencies. Your proficiency bonus is doubled for any ability check you make with those skills. Choose two more at 10th level." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Font of Inspiration", level: 5, description: "You regain all expended uses of Bardic Inspiration when you finish a short or long rest." },
    { name: "Countercharm", level: 6, description: "You can use musical performance to counter mind-influencing effects. You and friendly creatures within 30 feet gain advantage on saving throws against being frightened or charmed while you perform." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Magical Secrets", level: 10, description: "Choose two spells from any class's spell list. They count as bard spells for you and don't count against your bard spells known. You gain two more at 14th and 18th level." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Superior Inspiration", level: 20, description: "When you roll initiative and have no uses of Bardic Inspiration left, you regain one use." },
  ],
  subclasses: [
    // PHB
    {
      name: "College of Lore", slug: "college-of-lore", className: "Bard", source: "PHB", subclassLevel: 3,
      description: "Bards who collect knowledge from all sources, using their wits and magic to unravel mysteries and master a wide variety of skills.",
      features: [
        { name: "Bonus Proficiencies", level: 3, description: "You gain proficiency with three skills of your choice." },
        { name: "Cutting Words", level: 3, description: "When a creature you can see within 60 feet makes an attack roll, ability check, or damage roll, you can expend a Bardic Inspiration die and subtract the result from the creature's roll." },
        { name: "Additional Magical Secrets", level: 6, description: "You learn two spells from any class's spell list. They count as bard spells for you." },
        { name: "Peerless Skill", level: 14, description: "When you make an ability check, you can expend a Bardic Inspiration die and add it to the result. You can do this after rolling but before knowing if it succeeds." },
      ],
    },
    {
      name: "College of Valor", slug: "college-of-valor", className: "Bard", source: "PHB", subclassLevel: 3,
      description: "Bards who gather in mead halls to sing of the deeds of the mighty, inspiring others to heroic feats while joining the battle themselves.",
      features: [
        { name: "Bonus Proficiencies", level: 3, description: "You gain proficiency with medium armor, shields, and martial weapons." },
        { name: "Combat Inspiration", level: 3, description: "A creature that has a Bardic Inspiration die can add it to a weapon damage roll or to AC against one attack (using a reaction after seeing the roll)." },
        { name: "Extra Attack", level: 6, description: "You can attack twice when you take the Attack action on your turn." },
        { name: "Battle Magic", level: 14, description: "When you use your action to cast a bard spell, you can make one weapon attack as a bonus action." },
      ],
    },
    // XGtE
    {
      name: "College of Glamour", slug: "college-of-glamour", className: "Bard", source: "XGtE", subclassLevel: 3,
      description: "Bards who learned their craft in the Feywild or under a fey tutor, weaving magic of charm and beauty to captivate audiences.",
      features: [
        { name: "Mantle of Inspiration", level: 3, description: "As a bonus action, expend a Bardic Inspiration to grant up to 5 creatures 5 + bard level temp HP. Each can use a reaction to move without provoking opportunity attacks." },
        { name: "Enthralling Performance", level: 3, description: "After performing for 1 minute, charm up to your Cha modifier in humanoids for 1 hour. They idolize you and hinder opponents." },
        { name: "Mantle of Majesty", level: 6, description: "As a bonus action, cast Command without a slot for 1 minute (concentration). Charmed creatures auto-fail the save." },
        { name: "Unbreakable Majesty", level: 14, description: "As a bonus action, gain majestic presence for 1 minute. Attackers must make a Cha save or choose a new target." },
      ],
    },
    {
      name: "College of Swords", slug: "college-of-swords", className: "Bard", source: "XGtE", subclassLevel: 3,
      description: "Bards who entertain through daring feats of weapon prowess, using blades as both instruments and weapons.",
      features: [
        { name: "Bonus Proficiencies", level: 3, description: "You gain proficiency with medium armor and scimitars. You can use a weapon as a spellcasting focus." },
        { name: "Fighting Style", level: 3, description: "You adopt Dueling or Two-Weapon Fighting." },
        { name: "Blade Flourish", level: 3, description: "When you Attack, speed increases by 10 feet. Expend a Bardic Inspiration die for Defensive, Slashing, or Mobile Flourish, adding the die to damage with a secondary effect." },
        { name: "Extra Attack", level: 6, description: "You can attack twice when you take the Attack action." },
        { name: "Master's Flourish", level: 14, description: "When you Blade Flourish, you can roll a d6 instead of expending a Bardic Inspiration die." },
      ],
    },
    {
      name: "College of Whispers", slug: "college-of-whispers", className: "Bard", source: "XGtE", subclassLevel: 3,
      description: "Bards who use knowledge as weapons, gathering secrets and striking fear with psychic blades.",
      features: [
        { name: "Psychic Blades", level: 3, description: "On a weapon hit, expend a Bardic Inspiration die for extra psychic damage (2d6 at 3rd, scaling to 8d6 at 15th). Once per turn." },
        { name: "Words of Terror", level: 3, description: "After speaking privately with a humanoid for 1 minute, it must make a Wis save or be frightened of a creature you choose for 1 hour." },
        { name: "Mantle of Whispers", level: 6, description: "When a humanoid dies within 30 feet, capture its shadow. Don the shadow to disguise as that person for 1 hour, gaining basic knowledge others expect." },
        { name: "Shadow Lore", level: 14, description: "Whisper a phrase to charm a creature for 8 hours. It believes you know its deepest secret. Once per long rest." },
      ],
    },
    // TCoE
    {
      name: "College of Creation", slug: "college-of-creation", className: "Bard", source: "TCoE", subclassLevel: 3,
      description: "Bards who draw on the primeval Song of Creation, wielding cosmic harmonies to create objects and animate items.",
      features: [
        { name: "Mote of Potential", level: 3, description: "When you grant Bardic Inspiration, a mote orbits the creature. On ability checks it rerolls the die; on attacks it deals thunder damage; on saves it grants temp HP." },
        { name: "Performance of Creation", level: 3, description: "As an action, create a nonmagical item worth up to 20× bard level gp that lasts proficiency bonus hours. Once per long rest or via spell slot." },
        { name: "Animating Performance", level: 6, description: "As an action, animate a Large or smaller nonmagical item for 1 hour using the Dancing Item stat block." },
        { name: "Creative Crescendo", level: 14, description: "Performance of Creation can produce multiple items (up to Cha modifier) with no gp limit. Only one can be max size." },
      ],
    },
    {
      name: "College of Eloquence", slug: "college-of-eloquence", className: "Bard", source: "TCoE", subclassLevel: 3,
      description: "Bards who master oratory, wielding logic and theatrical wordplay to win over skeptics and inspire allies.",
      features: [
        { name: "Silver Tongue", level: 3, description: "On Persuasion or Deception checks, treat a d20 roll of 9 or lower as a 10." },
        { name: "Unsettling Words", level: 3, description: "As a bonus action, expend a Bardic Inspiration die. A creature within 60 feet subtracts the die from its next saving throw." },
        { name: "Unfailing Inspiration", level: 6, description: "When a creature uses your Bardic Inspiration and fails, it keeps the die." },
        { name: "Universal Speech", level: 6, description: "As an action, choose up to Cha modifier creatures within 60 feet. They understand you for 1 hour regardless of language. Once per long rest or via slot." },
        { name: "Infectious Inspiration", level: 14, description: "When a creature succeeds using your Bardic Inspiration, use your reaction to give another creature a die without expending a use. Cha modifier times per long rest." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// CLERIC
// ══════════════════════════════════════════════════════════════
{
  name: "Cleric",
  slug: "cleric",
  hitDie: 8,
  primaryAbility: "Wisdom",
  savingThrows: "Wisdom, Charisma",
  armorProficiencies: "Light armor, Medium armor, Shields",
  weaponProficiencies: "Simple weapons",
  toolProficiencies: "None",
  skillChoices: "Choose 2 from History, Insight, Medicine, Persuasion, Religion",
  description: "Priestly champions who wield divine magic in service of a higher power, channeling the might of their deity to heal wounds, smite enemies, and protect the faithful.",
  source: "PHB",
  subclassLabel: "Divine Domain",
  subclassLevel: 1,
  features: [
    { name: "Spellcasting", level: 1, description: "You can cast cleric spells using Wisdom as your spellcasting ability. You prepare spells from the full cleric list each day and use a holy symbol as your spellcasting focus." },
    { name: "Channel Divinity", level: 2, description: "You gain the ability to channel divine energy directly from your deity. You start with Turn Undead and gain additional Channel Divinity options from your domain. One use per short/long rest (two at 6th, three at 18th)." },
    { name: "Channel Divinity: Turn Undead", level: 2, description: "As an action, each undead within 30 feet must make a Wisdom save or be turned for 1 minute, fleeing from you." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Destroy Undead", level: 5, description: "When an undead fails its save against Turn Undead and has CR 1/2 or lower, it is instantly destroyed. CR threshold increases at 8th (CR 1), 11th (CR 2), 14th (CR 3), and 17th (CR 4)." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Divine Intervention", level: 10, description: "You can call on your deity for aid. Roll percentile dice; if you roll equal to or less than your cleric level, your deity intervenes. Usable once per 7 days." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Improved Divine Intervention", level: 20, description: "Your Divine Intervention feature succeeds automatically, no roll required." },
  ],
  subclasses: [
    // PHB
    {
      name: "Knowledge Domain", slug: "knowledge-domain", className: "Cleric", source: "PHB", subclassLevel: 1,
      description: "Clerics who value learning and understanding above all, serving deities of knowledge and using divine magic to uncover secrets.",
      features: [
        { name: "Blessings of Knowledge", level: 1, description: "You learn two languages and gain proficiency and expertise in two of: Arcana, History, Nature, or Religion." },
        { name: "Channel Divinity: Knowledge of the Ages", level: 2, description: "As an action, gain proficiency with one skill or tool for 10 minutes." },
        { name: "Channel Divinity: Read Thoughts", level: 6, description: "As an action, read a creature's thoughts within 60 feet (Wis save). On a failure, you can also cast Suggestion on it without a slot." },
        { name: "Potent Spellcasting", level: 8, description: "Add your Wisdom modifier to cleric cantrip damage." },
        { name: "Visions of the Past", level: 17, description: "Meditate to receive visions related to an object you hold or your immediate surroundings, learning about past events." },
      ],
    },
    {
      name: "Life Domain", slug: "life-domain", className: "Cleric", source: "PHB", subclassLevel: 1,
      description: "Clerics who focus on the vibrant positive energy of life, healing the sick and wounded and driving away the forces of death.",
      features: [
        { name: "Bonus Proficiency", level: 1, description: "You gain proficiency with heavy armor." },
        { name: "Disciple of Life", level: 1, description: "When you cast a healing spell of 1st level or higher, the creature regains additional HP equal to 2 + the spell's level." },
        { name: "Channel Divinity: Preserve Life", level: 2, description: "As an action, restore HP equal to 5× cleric level, divided among creatures within 30 feet. Can't restore a creature above half its HP max." },
        { name: "Blessed Healer", level: 6, description: "When you cast a healing spell on another creature, you also regain HP equal to 2 + the spell's level." },
        { name: "Divine Strike", level: 8, description: "Once per turn, deal an extra 1d8 radiant damage with a weapon attack (2d8 at 14th)." },
        { name: "Supreme Healing", level: 17, description: "When you roll dice to restore HP with a healing spell, treat any die roll as its maximum value." },
      ],
    },
    // XGtE
    {
      name: "Forge Domain", slug: "forge-domain", className: "Cleric", source: "XGtE", subclassLevel: 1,
      description: "Clerics of the forge who are masters of creation, blessed with the ability to craft magical items and channel divine fire.",
      features: [
        { name: "Bonus Proficiencies", level: 1, description: "You gain proficiency with heavy armor and smith's tools." },
        { name: "Blessing of the Forge", level: 1, description: "At the end of a long rest, enchant one nonmagical weapon or armor with a +1 bonus until your next long rest." },
        { name: "Channel Divinity: Artisan's Blessing", level: 2, description: "Conduct a 1-hour ritual to create a nonmagical metal item worth no more than 100 gp." },
        { name: "Soul of the Forge", level: 6, description: "Gain resistance to fire damage. While wearing heavy armor, gain +1 to AC." },
        { name: "Divine Strike", level: 8, description: "Once per turn, deal an extra 1d8 fire damage with a weapon attack (2d8 at 14th)." },
        { name: "Saint of Forge and Fire", level: 17, description: "Gain immunity to fire damage. Resistance to bludgeoning, piercing, and slashing from nonmagical attacks while wearing heavy armor." },
      ],
    },
    {
      name: "Grave Domain", slug: "grave-domain", className: "Cleric", source: "XGtE", subclassLevel: 1,
      description: "Clerics who walk the line between life and death, ensuring the natural cycle is respected and undeath is destroyed.",
      features: [
        { name: "Circle of Mortality", level: 1, description: "When you heal a creature at 0 HP, treat healing dice as maximum value. Spare the Dying becomes a bonus action with 30-foot range." },
        { name: "Eyes of the Grave", level: 1, description: "Detect undead within 60 feet not behind total cover. Wis modifier uses per long rest." },
        { name: "Channel Divinity: Path to the Grave", level: 2, description: "Curse a creature within 30 feet. The next time it takes damage, it has vulnerability to all of that damage." },
        { name: "Sentinel at Death's Door", level: 6, description: "As a reaction, turn a critical hit against you or an ally within 30 feet into a normal hit. Wis modifier uses per long rest." },
        { name: "Potent Spellcasting", level: 8, description: "Add your Wisdom modifier to cleric cantrip damage." },
        { name: "Keeper of Souls", level: 17, description: "When an enemy within 60 feet dies, you or an ally within 60 feet regains HP equal to the creature's Hit Dice." },
      ],
    },
    // TCoE
    {
      name: "Order Domain", slug: "order-domain", className: "Cleric", source: "TCoE", subclassLevel: 1,
      description: "Clerics devoted to discipline and laws governing society, empowering allies and compelling obedience from foes.",
      features: [
        { name: "Bonus Proficiencies", level: 1, description: "You gain proficiency with heavy armor and Intimidation or Persuasion." },
        { name: "Voice of Authority", level: 1, description: "When you cast a spell with a slot targeting an ally, that ally can use a reaction to make one weapon attack." },
        { name: "Channel Divinity: Order's Demand", level: 2, description: "Each creature of your choice within 30 feet must make a Wis save or be charmed until end of your next turn. You can also force them to drop items." },
        { name: "Embodiment of the Law", level: 6, description: "Cast enchantment spells of 1st level or higher as a bonus action. Wis modifier uses per long rest." },
        { name: "Divine Strike", level: 8, description: "Once per turn, deal an extra 1d8 psychic damage with a weapon attack (2d8 at 14th)." },
        { name: "Order's Wrath", level: 17, description: "When you deal Divine Strike damage, curse the target. The next ally hit deals an extra 2d8 psychic damage." },
      ],
    },
    {
      name: "Peace Domain", slug: "peace-domain", className: "Cleric", source: "TCoE", subclassLevel: 1,
      description: "Clerics who forge empowering bonds between allies, drawing people together to shoulder one another's burdens.",
      features: [
        { name: "Implement of Peace", level: 1, description: "Gain proficiency in Insight, Performance, or Persuasion." },
        { name: "Emboldening Bond", level: 1, description: "Bond a number of willing creatures equal to proficiency bonus for 10 minutes. While within 30 feet, a bonded creature adds 1d4 to an attack, check, or save once per turn." },
        { name: "Channel Divinity: Balm of Peace", level: 2, description: "Move up to your speed without provoking. When you move within 5 feet of a creature, heal it for 2d6 + Wis modifier." },
        { name: "Protective Bond", level: 6, description: "A bonded creature can use its reaction to teleport within 30 feet and take all damage meant for another bonded creature." },
        { name: "Potent Spellcasting", level: 8, description: "Add your Wisdom modifier to cleric cantrip damage." },
        { name: "Expansive Bond", level: 17, description: "Bond and Protective Bond work at 60 feet. Creature taking damage via Protective Bond has resistance." },
      ],
    },
    {
      name: "Twilight Domain", slug: "twilight-domain", className: "Cleric", source: "TCoE", subclassLevel: 1,
      description: "Clerics who guard the transition from light into darkness, protecting those who seek rest from the terrors of the night.",
      features: [
        { name: "Bonus Proficiencies", level: 1, description: "You gain proficiency with martial weapons and heavy armor." },
        { name: "Eyes of Night", level: 1, description: "You gain 300-foot darkvision. Share it with willing creatures within 10 feet for 1 hour. Once per long rest or via spell slot." },
        { name: "Vigilant Blessing", level: 1, description: "As an action, give one creature advantage on its next initiative roll." },
        { name: "Channel Divinity: Twilight Sanctuary", level: 2, description: "Create a 30-foot sphere of dim light for 1 minute. At the end of each creature's turn, grant 1d6 + cleric level temp HP or end a charmed/frightened effect." },
        { name: "Steps of Night", level: 6, description: "In dim light or darkness, gain fly speed equal to walking speed for 1 minute. Proficiency bonus uses per long rest." },
        { name: "Divine Strike", level: 8, description: "Once per turn, deal an extra 1d8 radiant damage with a weapon attack (2d8 at 14th)." },
        { name: "Twilight Shroud", level: 17, description: "You and allies have half cover while in your Twilight Sanctuary." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// DRUID
// ══════════════════════════════════════════════════════════════
{
  name: "Druid",
  slug: "druid",
  hitDie: 8,
  primaryAbility: "Wisdom",
  savingThrows: "Intelligence, Wisdom",
  armorProficiencies: "Light armor, Medium armor, Shields (druids will not wear armor or use shields made of metal)",
  weaponProficiencies: "Clubs, Daggers, Darts, Javelins, Maces, Quarterstaffs, Scimitars, Sickles, Slings, Spears",
  toolProficiencies: "Herbalism kit",
  skillChoices: "Choose 2 from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, Survival",
  description: "Priests of the Old Faith who wield the powers of nature — moonlight and plant growth, fire and lightning — and adopt animal forms to guard the wilderness.",
  source: "PHB",
  subclassLabel: "Druid Circle",
  subclassLevel: 2,
  features: [
    { name: "Druidic", level: 1, description: "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages." },
    { name: "Spellcasting", level: 1, description: "You can cast druid spells using Wisdom as your spellcasting ability. You prepare spells from the full druid list each day and can use a druidic focus." },
    { name: "Wild Shape", level: 2, description: "You can magically assume the shape of a beast you have seen before. You can use this feature twice per short rest. Max CR and limitations improve with level." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Timeless Body", level: 18, description: "The primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year." },
    { name: "Beast Spells", level: 18, description: "You can cast many of your druid spells in any shape you assume using Wild Shape. You can perform somatic and verbal components while in beast form." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Archdruid", level: 20, description: "You can use Wild Shape an unlimited number of times. You can ignore verbal, somatic, and material components (without cost) for druid spells." },
  ],
  subclasses: [
    // PHB
    {
      name: "Circle of the Land", slug: "circle-of-the-land", className: "Druid", source: "PHB", subclassLevel: 2,
      description: "Druids who are mystic keepers of ancient knowledge tied to the land, gaining additional spells based on their chosen terrain.",
      features: [
        { name: "Bonus Cantrip", level: 2, description: "You learn one additional druid cantrip of your choice." },
        { name: "Natural Recovery", level: 2, description: "During a short rest, you can recover expended spell slots with combined level equal to half your druid level (rounded up), none higher than 5th level. Once per long rest." },
        { name: "Circle Spells", level: 3, description: "Choose a land type (Arctic, Coast, Desert, Forest, Grassland, Mountain, Swamp, or Underdark). You gain access to specific spells at 3rd, 5th, 7th, and 9th level that are always prepared." },
        { name: "Land's Stride", level: 6, description: "Moving through nonmagical difficult terrain costs no extra movement. You can pass through nonmagical plants without being slowed or damaged, and have advantage on saves against magically created plants." },
        { name: "Nature's Ward", level: 10, description: "You can't be charmed or frightened by elementals or fey, and you are immune to poison and disease." },
        { name: "Nature's Sanctuary", level: 14, description: "Creatures of the natural world sense your connection. Beasts and plants must make a Wis save to attack you; on failure, they must choose a new target." },
      ],
    },
    {
      name: "Circle of the Moon", slug: "circle-of-the-moon", className: "Druid", source: "PHB", subclassLevel: 2,
      description: "Druids who embrace the primal power of the moon, mastering Wild Shape to transform into powerful combat forms.",
      features: [
        { name: "Combat Wild Shape", level: 2, description: "You can use Wild Shape as a bonus action. While in beast form, you can expend a spell slot to regain 1d8 HP per slot level." },
        { name: "Circle Forms", level: 2, description: "You can transform into beasts with a higher CR. At 2nd level, CR 1 (no flying/swimming). At 6th, CR equal to druid level ÷ 3." },
        { name: "Primal Strike", level: 6, description: "Your attacks in beast form count as magical for overcoming resistance and immunity." },
        { name: "Elemental Wild Shape", level: 10, description: "You can expend two uses of Wild Shape to transform into an air, earth, fire, or water elemental." },
        { name: "Thousand Forms", level: 14, description: "You can cast Alter Self at will." },
      ],
    },
    // XGtE
    {
      name: "Circle of Dreams", slug: "circle-of-dreams", className: "Druid", source: "XGtE", subclassLevel: 2,
      description: "Druids with strong ties to the Feywild who mend wounds with fey magic and walk between the material and dream worlds.",
      features: [
        { name: "Balm of the Summer Court", level: 2, description: "You have a pool of d6s equal to your druid level. As a bonus action, spend dice (up to half druid level) to heal a creature within 120 feet and grant temp HP." },
        { name: "Hearth of Moonlight and Shadow", level: 6, description: "During a rest, create a 30-foot sphere granting +5 to Stealth and Perception and concealing the area from divination." },
        { name: "Hidden Paths", level: 10, description: "As a bonus action, teleport up to 60 feet or teleport a willing creature within 30 feet up to 30 feet. Wis modifier uses per long rest." },
        { name: "Walker in Dreams", level: 14, description: "After a short rest, cast Dream, Scrying, or Teleportation Circle (to last long rest location) without a slot. Once per long rest." },
      ],
    },
    {
      name: "Circle of the Shepherd", slug: "circle-of-the-shepherd", className: "Druid", source: "XGtE", subclassLevel: 2,
      description: "Druids who commune with nature spirits to protect animals and fey, summoning spirit totems and empowering conjured creatures.",
      features: [
        { name: "Speech of the Woods", level: 2, description: "You learn Sylvan and can communicate simple ideas to beasts." },
        { name: "Spirit Totem", level: 2, description: "As a bonus action, summon a 30-foot aura spirit: Bear (temp HP), Hawk (advantage on Perception and attacks against aura creatures), or Unicorn (heal allies when you cast healing spells). Lasts 1 minute." },
        { name: "Mighty Summoner", level: 6, description: "Beasts and fey you conjure gain +2 HP per Hit Die and their natural weapons count as magical." },
        { name: "Guardian Spirit", level: 10, description: "Beasts and fey you conjure that end their turn in your Spirit Totem aura regain HP equal to half your druid level." },
        { name: "Faithful Summons", level: 14, description: "When you drop to 0 HP or are incapacitated, immediately conjure four CR 2 or lower beasts within 20 feet that defend you. Once per long rest." },
      ],
    },
    // TCoE
    {
      name: "Circle of Spores", slug: "circle-of-spores", className: "Druid", source: "TCoE", subclassLevel: 2,
      description: "Druids who find beauty in decay, wielding necrotic spores and fungi to animate corpses and defend against threats.",
      features: [
        { name: "Circle Spells", level: 2, description: "You learn Chill Touch. Gain Blindness/Deafness (3rd), Animate Dead (5th), Blight (7th), Cloudkill (9th)." },
        { name: "Halo of Spores", level: 2, description: "When a creature moves within 10 feet, use a reaction to deal necrotic damage (1d4, scaling to 1d10 at 14th) unless it passes a Con save." },
        { name: "Symbiotic Entity", level: 2, description: "Expend a Wild Shape use to gain 4 temp HP per druid level, double Halo of Spores dice, and +1d6 necrotic on melee attacks. Lasts 10 minutes." },
        { name: "Fungal Infestation", level: 6, description: "When a Small or Medium beast/humanoid dies within 10 feet, animate it as a 1 HP zombie for 1 hour. Wis modifier uses per long rest." },
        { name: "Spreading Spores", level: 10, description: "As a bonus action while Symbiotic Entity is active, hurl spores to create a 10-foot cube that deals Halo of Spores damage." },
        { name: "Fungal Body", level: 14, description: "You can't be blinded, deafened, frightened, or poisoned. Critical hits count as normal hits unless incapacitated." },
      ],
    },
    {
      name: "Circle of Stars", slug: "circle-of-stars", className: "Druid", source: "TCoE", subclassLevel: 2,
      description: "Druids who draw on the power of starlight, using celestial constellations to guide their magic.",
      features: [
        { name: "Star Map", level: 2, description: "Create a star chart focus. Know Guidance, always have Guiding Bolt prepared, cast it free proficiency bonus times per long rest." },
        { name: "Starry Form", level: 2, description: "Expend Wild Shape for a luminous form. Choose Archer (bonus action 1d8+Wis radiant attack), Chalice (1d8+Wis extra healing), or Dragon (treat rolls of 9 or lower as 10 on Int/Wis checks and concentration)." },
        { name: "Cosmic Omen", level: 6, description: "After a long rest, roll a die. Gain a reaction: Weal (even, +1d6) or Woe (odd, -1d6). Proficiency bonus uses per long rest." },
        { name: "Twinkling Constellations", level: 10, description: "Archer and Chalice improve to 2d8. Dragon grants 20-foot fly speed. You can change constellation at start of each turn." },
        { name: "Full of Stars", level: 14, description: "While in Starry Form, gain resistance to bludgeoning, piercing, and slashing damage." },
      ],
    },
    {
      name: "Circle of Wildfire", slug: "circle-of-wildfire", className: "Druid", source: "TCoE", subclassLevel: 2,
      description: "Druids who understand that destruction is sometimes the precursor of creation, bonding with a primal wildfire spirit.",
      features: [
        { name: "Circle Spells", level: 2, description: "Gain Burning Hands, Cure Wounds (2nd), Flaming Sphere (3rd), Revivify (5th), Fire Shield (7th), Flame Strike (9th)." },
        { name: "Summon Wildfire Spirit", level: 2, description: "Expend a Wild Shape use to summon a wildfire spirit. Creatures within 10 feet take 2d6 fire (Dex save). Spirit uses Flame Seed and Fiery Teleportation. Lasts 1 hour." },
        { name: "Enhanced Bond", level: 6, description: "When casting fire damage or healing spells with your spirit summoned, add 1d8 to one roll. Spells can originate from you or the spirit." },
        { name: "Cauterizing Flames", level: 10, description: "When a Small+ creature dies within 30 feet, use a reaction to heal or deal fire damage equal to 2d10 + Wis modifier. Proficiency bonus uses per long rest." },
        { name: "Blazing Revival", level: 14, description: "When you drop to 0 HP within 120 feet of your spirit, it drops to 0 and you regain half max HP. Once per long rest." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// FIGHTER
// ══════════════════════════════════════════════════════════════
{
  name: "Fighter",
  slug: "fighter",
  hitDie: 10,
  primaryAbility: "Strength or Dexterity",
  savingThrows: "Strength, Constitution",
  armorProficiencies: "All armor, Shields",
  weaponProficiencies: "Simple weapons, Martial weapons",
  toolProficiencies: "None",
  skillChoices: "Choose 2 from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, Survival",
  description: "Masters of martial combat, skilled with a variety of weapons and armor. They are well-acquainted with death and meet it head-on with unmatched fighting prowess.",
  source: "PHB",
  subclassLabel: "Martial Archetype",
  subclassLevel: 3,
  features: [
    { name: "Fighting Style", level: 1, description: "You adopt a particular style of fighting as your specialty. Choose from Archery, Defense, Dueling, Great Weapon Fighting, Protection, or Two-Weapon Fighting." },
    { name: "Second Wind", level: 1, description: "You have a limited well of stamina that you can draw on. On your turn, you can use a bonus action to regain HP equal to 1d10 + your fighter level. Once per short rest." },
    { name: "Action Surge", level: 2, description: "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action. Once per short rest (twice at 17th level)." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Extra Attack", level: 5, description: "You can attack twice when you take the Attack action. Increases to three times at 11th level and four times at 20th level." },
    { name: "Ability Score Improvement", level: 6, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Indomitable", level: 9, description: "You can reroll a saving throw that you fail. If you do so, you must use the new roll. Once per long rest (twice at 13th, three times at 17th)." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 14, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
  ],
  subclasses: [
    // PHB
    {
      name: "Battle Master", slug: "battle-master", className: "Fighter", source: "PHB", subclassLevel: 3,
      description: "Fighters who employ martial techniques passed down through generations, using tactical maneuvers to gain superiority in combat.",
      features: [
        { name: "Combat Superiority", level: 3, description: "You learn three maneuvers and gain four superiority dice (d8). Spend a die to use a maneuver, adding it to damage or other effects. Regain all on short/long rest. Learn more maneuvers and dice scale at higher levels." },
        { name: "Student of War", level: 3, description: "You gain proficiency with one type of artisan's tools." },
        { name: "Know Your Enemy", level: 7, description: "After observing a creature outside combat for 1 minute, learn if it is your equal, superior, or inferior in two characteristics of your choice." },
        { name: "Improved Combat Superiority", level: 10, description: "Your superiority dice become d10s (d12 at 18th level)." },
        { name: "Relentless", level: 15, description: "When you roll initiative and have no superiority dice remaining, you regain one." },
      ],
    },
    {
      name: "Champion", slug: "champion", className: "Fighter", source: "PHB", subclassLevel: 3,
      description: "Fighters who hone raw physical power to deadly perfection, combining broad combat skill with critical hit mastery.",
      features: [
        { name: "Improved Critical", level: 3, description: "Your weapon attacks score a critical hit on a roll of 19 or 20." },
        { name: "Remarkable Athlete", level: 7, description: "Add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check that doesn't already use your proficiency bonus. Your running long jump distance increases by your Str modifier in feet." },
        { name: "Additional Fighting Style", level: 10, description: "You can choose a second option from the Fighting Style class feature." },
        { name: "Superior Critical", level: 15, description: "Your weapon attacks score a critical hit on a roll of 18-20." },
        { name: "Survivor", level: 18, description: "At the start of each of your turns, you regain HP equal to 5 + Constitution modifier if you have no more than half your HP and at least 1 HP." },
      ],
    },
    {
      name: "Eldritch Knight", slug: "eldritch-knight", className: "Fighter", source: "PHB", subclassLevel: 3,
      description: "Fighters who combine martial skill with arcane magic, primarily focusing on abjuration and evocation spells from the wizard list.",
      features: [
        { name: "Spellcasting", level: 3, description: "You learn wizard cantrips and spells (primarily abjuration and evocation), using Intelligence as your spellcasting ability. You learn 3 cantrips and gain spell slots as a 1/3 caster." },
        { name: "Weapon Bond", level: 3, description: "You bond with up to two weapons. A bonded weapon can't be disarmed and can be summoned to your hand as a bonus action." },
        { name: "War Magic", level: 7, description: "When you use your action to cast a cantrip, you can make one weapon attack as a bonus action." },
        { name: "Eldritch Strike", level: 10, description: "When you hit a creature with a weapon attack, that creature has disadvantage on its next saving throw against a spell you cast before the end of your next turn." },
        { name: "Arcane Charge", level: 15, description: "When you use Action Surge, you can teleport up to 30 feet to an unoccupied space before or after the additional action." },
        { name: "Improved War Magic", level: 18, description: "When you use your action to cast a spell, you can make one weapon attack as a bonus action." },
      ],
    },
    // XGtE
    {
      name: "Arcane Archer", slug: "arcane-archer", className: "Fighter", source: "XGtE", subclassLevel: 3,
      description: "Fighters who infuse arrows with arcane magic, learning ancient elven techniques to create devastating magical shots.",
      features: [
        { name: "Arcane Archer Lore", level: 3, description: "Learn Prestidigitation or Druidcraft cantrip, and gain proficiency in Arcana or Nature." },
        { name: "Arcane Shot", level: 3, description: "Learn two Arcane Shot options. Twice per short rest, apply an option when firing a nonmagical arrow for effects like banishing, beguiling, or grasping arrows." },
        { name: "Magic Arrow", level: 7, description: "Your nonmagical arrows become magical for overcoming resistance." },
        { name: "Curving Shot", level: 7, description: "When you miss with a magic arrow, redirect it at a new target within 60 feet as a bonus action." },
        { name: "Ever-Ready Shot", level: 15, description: "If you roll initiative with no Arcane Shot uses, you regain one." },
      ],
    },
    {
      name: "Cavalier", slug: "cavalier", className: "Fighter", source: "XGtE", subclassLevel: 3,
      description: "Fighters who excel at mounted combat and protecting allies, using imposing presence to mark enemies and control the battlefield.",
      features: [
        { name: "Bonus Proficiency", level: 3, description: "Gain proficiency in Animal Handling, History, Insight, Performance, or Persuasion, or learn one language." },
        { name: "Born to the Saddle", level: 3, description: "Mounting/dismounting costs 5 feet. Advantage on saves vs. falling off mount. Land on feet if you fall." },
        { name: "Unwavering Mark", level: 3, description: "When you hit a creature, mark it. If it damages anyone else, you can make a bonus action attack with extra damage equal to half fighter level." },
        { name: "Warding Maneuver", level: 7, description: "When you or adjacent creature is hit, add 1d8 to AC as a reaction. If still hit, target has resistance. Con modifier uses per long rest." },
        { name: "Hold the Line", level: 10, description: "Creatures provoke opportunity attacks when moving 5+ feet in your reach. Hits reduce speed to 0." },
        { name: "Vigilant Defender", level: 18, description: "Make an opportunity attack on every creature's turn, not just yours." },
      ],
    },
    {
      name: "Samurai", slug: "samurai", className: "Fighter", source: "XGtE", subclassLevel: 3,
      description: "Fighters with unbreakable fighting spirit who push through adversity with sheer willpower and devastating precision.",
      features: [
        { name: "Bonus Proficiency", level: 3, description: "Gain proficiency in History, Insight, Performance, or Persuasion, or learn one language." },
        { name: "Fighting Spirit", level: 3, description: "As a bonus action, gain advantage on all attacks and 5 temp HP until end of turn. Three times per long rest. Temp HP scales to 10 (10th) and 15 (15th)." },
        { name: "Elegant Courtier", level: 7, description: "Add Wis modifier to Persuasion checks. Gain proficiency in Wis saves (or Int/Cha if already proficient)." },
        { name: "Tireless Spirit", level: 10, description: "If you roll initiative with no Fighting Spirit uses, regain one." },
        { name: "Rapid Strike", level: 15, description: "If you have advantage, you can forgo it to make an extra attack. Once per turn." },
        { name: "Strength Before Death", level: 18, description: "When reduced to 0 HP, take an entire extra turn immediately. Once per long rest." },
      ],
    },
    // TCoE
    {
      name: "Psi Warrior", slug: "psi-warrior", className: "Fighter", source: "TCoE", subclassLevel: 3,
      description: "Fighters who augment physical might with psi-infused strikes, telekinetic lashes, and barriers of mental force.",
      features: [
        { name: "Psionic Power", level: 3, description: "Gain Psionic Energy dice (d6, scaling). Use for Protective Field (reduce damage), Psionic Strike (extra force damage), and Telekinetic Movement (move objects 30 feet)." },
        { name: "Telekinetic Adept", level: 7, description: "Psi-Powered Leap grants flying speed as a bonus action. Telekinetic Thrust knocks prone or pushes 10 feet on Psionic Strike." },
        { name: "Guarded Mind", level: 10, description: "Resistance to psychic damage. Spend a die to end charmed or frightened on yourself." },
        { name: "Bulwark of Force", level: 15, description: "As a bonus action, give up to Int modifier creatures half cover for 1 minute. Once per long rest or via die." },
        { name: "Telekinetic Master", level: 18, description: "Cast Telekinesis without components. While concentrating, make one bonus action weapon attack. Once per long rest or via die." },
      ],
    },
    {
      name: "Rune Knight", slug: "rune-knight", className: "Fighter", source: "TCoE", subclassLevel: 3,
      description: "Fighters who enhance martial prowess with the supernatural power of giant runes, growing in size and might.",
      features: [
        { name: "Bonus Proficiencies", level: 3, description: "Gain proficiency with smith's tools. Learn to speak, read, and write Giant." },
        { name: "Rune Carver", level: 3, description: "Learn 2 runes (scaling to 5). Options include Cloud, Fire (+2d6 fire + restrain), Frost, Stone, Hill, and Storm. Each has passive benefits and an invocable effect." },
        { name: "Giant's Might", level: 3, description: "As a bonus action, become Large for 1 minute. Advantage on Str checks/saves and +1d6 damage once per turn. Proficiency bonus uses per long rest." },
        { name: "Runic Shield", level: 7, description: "When an ally within 60 feet is hit, force the attacker to reroll. Proficiency bonus uses per long rest." },
        { name: "Great Stature", level: 10, description: "Grow 3d4 inches permanently. Giant's Might extra damage becomes 1d8." },
        { name: "Master of Runes", level: 15, description: "Invoke each rune twice per short or long rest." },
        { name: "Runic Juggernaut", level: 18, description: "Giant's Might damage becomes 1d10. Grow to Huge with +5 feet reach." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// MONK
// ══════════════════════════════════════════════════════════════
{
  name: "Monk",
  slug: "monk",
  hitDie: 8,
  primaryAbility: "Dexterity & Wisdom",
  savingThrows: "Strength, Dexterity",
  armorProficiencies: "None",
  weaponProficiencies: "Simple weapons, Shortswords",
  toolProficiencies: "One artisan's tools or one musical instrument",
  skillChoices: "Choose 2 from Acrobatics, Athletics, History, Insight, Religion, Stealth",
  description: "Masters of martial arts who harness the power of the body in pursuit of physical and spiritual perfection, channeling ki energy through disciplined training.",
  source: "PHB",
  subclassLabel: "Monastic Tradition",
  subclassLevel: 3,
  features: [
    { name: "Unarmored Defense", level: 1, description: "While wearing no armor and not wielding a shield, your AC equals 10 + Dexterity modifier + Wisdom modifier." },
    { name: "Martial Arts", level: 1, description: "You gain benefits while unarmed or wielding monk weapons and wearing no armor: use Dex for attacks, roll a d4 for damage (scales with level), and make a bonus action unarmed strike after attacking." },
    { name: "Ki", level: 2, description: "You can harness the mystic energy of ki. You have ki points equal to your monk level, spent on Flurry of Blows, Patient Defense, and Step of the Wind. Regained on short rest." },
    { name: "Unarmored Movement", level: 2, description: "Your speed increases by 10 feet while you are not wearing armor or wielding a shield. Scales to +30 feet at 18th level." },
    { name: "Deflect Missiles", level: 3, description: "You can use your reaction to deflect or catch a missile. Reduce damage by 1d10 + Dex mod + monk level. If reduced to 0, you can catch and throw it back for 1 ki point." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Slow Fall", level: 4, description: "You can use your reaction to reduce falling damage by an amount equal to five times your monk level." },
    { name: "Extra Attack", level: 5, description: "You can attack twice when you take the Attack action on your turn." },
    { name: "Stunning Strike", level: 5, description: "When you hit a creature with a melee weapon attack, you can spend 1 ki point. The target must succeed on a Constitution save or be stunned until the end of your next turn." },
    { name: "Ki-Empowered Strikes", level: 6, description: "Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks." },
    { name: "Evasion", level: 7, description: "When you are subjected to an effect that allows a Dexterity save for half damage, you instead take no damage on a success and half damage on a failure." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Stillness of Mind", level: 7, description: "You can use your action to end one effect on yourself that is causing you to be charmed or frightened." },
    { name: "Purity of Body", level: 10, description: "You are immune to disease and poison." },
    { name: "Tongue of the Sun and Moon", level: 13, description: "You learn to touch the ki of other minds so that you understand all spoken languages and any creature that can understand a language can understand what you say." },
    { name: "Diamond Soul", level: 14, description: "You gain proficiency in all saving throws. You can spend 1 ki point to reroll a failed save." },
    { name: "Timeless Body", level: 15, description: "Your ki sustains you so that you suffer none of the frailty of old age and can't be aged magically. You still die of old age. You no longer need food or water." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Empty Body", level: 18, description: "You can spend 4 ki points to become invisible for 1 minute, gaining resistance to all damage except force. You can spend 8 ki points to cast Astral Projection without material components." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Perfect Self", level: 20, description: "When you roll initiative and have no ki points remaining, you regain 4 ki points." },
  ],
  subclasses: [
    // PHB
    {
      name: "Way of the Open Hand", slug: "way-of-the-open-hand", className: "Monk", source: "PHB", subclassLevel: 3,
      description: "Monks who are ultimate masters of martial arts combat, using precise strikes and defensive techniques to dominate in melee.",
      features: [
        { name: "Open Hand Technique", level: 3, description: "When you hit with a Flurry of Blows attack, you can impose one effect: knock prone (Dex save), push 15 feet (Str save), or prevent reactions until end of your next turn." },
        { name: "Wholeness of Body", level: 6, description: "As an action, regain HP equal to three times your monk level. Once per long rest." },
        { name: "Tranquility", level: 11, description: "At the end of a long rest, you gain the effect of a Sanctuary spell until the start of your next long rest (Wis save DC)." },
        { name: "Quivering Palm", level: 17, description: "When you hit with an unarmed strike, spend 3 ki points to set up lethal vibrations. Before your monk level in days, use an action to end them: Con save or drop to 0 HP, or take 10d10 necrotic on success." },
      ],
    },
    {
      name: "Way of Shadow", slug: "way-of-shadow", className: "Monk", source: "PHB", subclassLevel: 3,
      description: "Monks who follow a tradition that values stealth and subterfuge, using ki to duplicate effects of certain spells and strike from darkness.",
      features: [
        { name: "Shadow Arts", level: 3, description: "Spend 2 ki points to cast Darkness, Darkvision, Pass Without Trace, or Silence. You also learn Minor Illusion if you don't already know it." },
        { name: "Shadow Step", level: 6, description: "When in dim light or darkness, you can teleport up to 60 feet to another dim/dark space as a bonus action. You have advantage on the first melee attack you make before the end of your turn." },
        { name: "Cloak of Shadows", level: 11, description: "When in an area of dim light or darkness, you can use your action to become invisible until you make an attack, cast a spell, or enter bright light." },
        { name: "Opportunist", level: 17, description: "When a creature within 5 feet of you is hit by an attack made by another creature, you can use your reaction to make a melee attack against it." },
      ],
    },
    {
      name: "Way of the Four Elements", slug: "way-of-the-four-elements", className: "Monk", source: "PHB", subclassLevel: 3,
      description: "Monks who channel ki into elemental magic, bending the forces of nature to their will through disciplined training.",
      features: [
        { name: "Disciple of the Elements", level: 3, description: "You learn elemental disciplines that let you spend ki points to cast spells or create elemental effects. You learn Elemental Attunement and one other discipline, gaining more at 6th, 11th, and 17th level." },
        { name: "Elemental Attunement", level: 3, description: "You can use your action to briefly control elemental forces: create harmless sensory effects, light/snuff flames, chill/warm material, or shape earth/stone/water/fire in a 1-foot cube." },
      ],
    },
    // XGtE
    {
      name: "Way of the Drunken Master", slug: "way-of-the-drunken-master", className: "Monk", source: "XGtE", subclassLevel: 3,
      description: "Monks who use swaying, unpredictable movements of a drunkard to turn a stumble into a devastating strike.",
      features: [
        { name: "Bonus Proficiencies", level: 3, description: "Gain proficiency with Performance and brewer's supplies." },
        { name: "Drunken Technique", level: 3, description: "When you use Flurry of Blows, gain the Disengage action and +10 feet speed for the turn." },
        { name: "Tipsy Sway", level: 6, description: "Stand from prone for 5 feet. When missed by melee, redirect the attack to another creature within 5 feet (reaction + 1 ki)." },
        { name: "Drunkard's Luck", level: 11, description: "Spend 2 ki to cancel disadvantage on an ability check, attack, or save." },
        { name: "Intoxicated Frenzy", level: 17, description: "Flurry of Blows grants up to 3 additional attacks (5 total), each targeting a different creature." },
      ],
    },
    {
      name: "Way of the Kensei", slug: "way-of-the-kensei", className: "Monk", source: "XGtE", subclassLevel: 3,
      description: "Monks who extend ki into their weapons, treating them as extensions of their body with masterful precision.",
      features: [
        { name: "Path of the Kensei", level: 3, description: "Choose 2 kensei weapons. Gain +2 AC when attacking with melee kensei + unarmed strikes. Bonus action 1d4+Dex damage with ranged kensei weapons." },
        { name: "One with the Blade", level: 6, description: "Kensei weapons count as magical. Spend 1 ki on a hit for extra Martial Arts die damage (Deft Strike)." },
        { name: "Sharpen the Blade", level: 11, description: "Spend 1-3 ki to grant a nonmagical kensei weapon an equal attack/damage bonus for 1 minute." },
        { name: "Unerring Accuracy", level: 17, description: "Once per turn, reroll a missed monk weapon attack." },
      ],
    },
    {
      name: "Way of the Sun Soul", slug: "way-of-the-sun-soul", className: "Monk", source: "XGtE", subclassLevel: 3,
      description: "Monks who channel ki into searing bolts of radiant energy, becoming beacons of light.",
      features: [
        { name: "Radiant Sun Bolt", level: 3, description: "Make 30-foot ranged spell attacks dealing Martial Arts die + Dex radiant damage. Spend 1 ki for two bonus action bolts." },
        { name: "Searing Arc Strike", level: 6, description: "After an Attack action, spend 2+ ki to cast Burning Hands as a bonus action. Extra ki increases spell level." },
        { name: "Searing Sunburst", level: 11, description: "Create a 20-foot sphere of radiant light at 150 feet. Con save or 2d6 radiant damage. Spend 1-3 ki for +2d6 each." },
        { name: "Sun Shield", level: 17, description: "Shed 30-foot bright light. Melee attackers take 5 + Wis modifier radiant damage." },
      ],
    },
    // TCoE
    {
      name: "Way of Mercy", slug: "way-of-mercy", className: "Monk", source: "TCoE", subclassLevel: 3,
      description: "Monks who manipulate life force to bring aid or deliver a swift, merciful end, often wearing distinctive masks.",
      features: [
        { name: "Implements of Mercy", level: 3, description: "Gain proficiency in Insight, Medicine, and herbalism kit. Gain a special mask." },
        { name: "Hand of Healing", level: 3, description: "Spend 1 ki to heal Martial Arts die + Wis modifier. Free during Flurry of Blows (replaces one strike)." },
        { name: "Hand of Harm", level: 3, description: "On an unarmed hit, spend 1 ki for extra Martial Arts die + Wis modifier necrotic damage. Once per turn." },
        { name: "Physician's Touch", level: 6, description: "Hand of Healing can end a disease or condition. Hand of Harm can impose poisoned." },
        { name: "Flurry of Healing and Harm", level: 11, description: "During Flurry, replace strikes with free Hand of Healing. Use Hand of Harm without ki cost during Flurry." },
        { name: "Hand of Ultimate Mercy", level: 17, description: "Touch a corpse (died within 24 hours), spend 5 ki to return it to life with 4d10 + Wis HP. Once per long rest." },
      ],
    },
    {
      name: "Way of the Astral Self", slug: "way-of-the-astral-self", className: "Monk", source: "TCoE", subclassLevel: 3,
      description: "Monks who manifest their true form as a spectral astral self of pure ki energy.",
      features: [
        { name: "Arms of the Astral Self", level: 3, description: "Spend 1 ki as bonus action to summon spectral arms for 10 minutes. Use Wis for Str checks, unarmed strikes with 5 extra feet reach, and Wis for attack/damage (force)." },
        { name: "Visage of the Astral Self", level: 6, description: "Spend 1 ki for 120-foot darkvision (including magical darkness), advantage on Insight and Intimidation, and voice projection." },
        { name: "Body of the Astral Self", level: 11, description: "When Arms and Visage are active, gain Deflect Energy (reduce energy damage as reaction), Empowered Arms (+1 Martial Arts die once per turn), and +2 AC." },
        { name: "Awakened Astral Self", level: 17, description: "Spend 5 ki for full astral self for 10 minutes. Gain +2 AC and three attacks with Extra Attack using astral arms." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// PALADIN
// ══════════════════════════════════════════════════════════════
{
  name: "Paladin",
  slug: "paladin",
  hitDie: 10,
  primaryAbility: "Strength & Charisma",
  savingThrows: "Wisdom, Charisma",
  armorProficiencies: "All armor, Shields",
  weaponProficiencies: "Simple weapons, Martial weapons",
  toolProficiencies: "None",
  skillChoices: "Choose 2 from Athletics, Insight, Intimidation, Medicine, Persuasion, Religion",
  description: "Holy warriors bound to a sacred oath, combining martial prowess with divine magic to smite evil and protect the innocent.",
  source: "PHB",
  subclassLabel: "Sacred Oath",
  subclassLevel: 3,
  features: [
    { name: "Divine Sense", level: 1, description: "You can detect the presence of any celestial, fiend, or undead within 60 feet, and consecrated or desecrated ground. Uses equal to 1 + Cha modifier per long rest." },
    { name: "Lay on Hands", level: 1, description: "You have a pool of healing power equal to 5 × paladin level. As an action, touch a creature to restore HP or spend 5 points to cure a disease or neutralize a poison." },
    { name: "Fighting Style", level: 2, description: "You adopt a fighting style. Choose from Defense, Dueling, Great Weapon Fighting, or Protection." },
    { name: "Spellcasting", level: 2, description: "You can cast paladin spells using Charisma as your spellcasting ability. You prepare spells from the paladin list and use a holy symbol as a focus." },
    { name: "Divine Smite", level: 2, description: "When you hit a creature with a melee weapon attack, you can expend a spell slot to deal 2d8 radiant damage plus 1d8 per slot level above 1st (max 5d8). Extra 1d8 against undead or fiends." },
    { name: "Divine Health", level: 3, description: "The divine magic flowing through you makes you immune to disease." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Extra Attack", level: 5, description: "You can attack twice when you take the Attack action on your turn." },
    { name: "Aura of Protection", level: 6, description: "Whenever you or a friendly creature within 10 feet must make a saving throw, the creature gains a bonus equal to your Charisma modifier. Increases to 30 feet at 18th level." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Aura of Courage", level: 10, description: "You and friendly creatures within 10 feet can't be frightened while you are conscious. Increases to 30 feet at 18th level." },
    { name: "Improved Divine Smite", level: 11, description: "Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Cleansing Touch", level: 14, description: "You can use your action to end one spell on yourself or one willing creature you touch. Uses equal to Cha modifier per long rest." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
  ],
  subclasses: [
    // PHB
    {
      name: "Oath of Devotion", slug: "oath-of-devotion", className: "Paladin", source: "PHB", subclassLevel: 3,
      description: "Paladins who hold themselves to the highest standards of conduct, protecting the weak and punishing those who threaten them.",
      features: [
        { name: "Oath Spells", level: 3, description: "Protection from Evil and Good, Sanctuary (3rd), Lesser Restoration, Zone of Truth (5th), Beacon of Hope, Dispel Magic (9th), Freedom of Movement, Guardian of Faith (13th), Commune, Flame Strike (17th)." },
        { name: "Channel Divinity: Sacred Weapon", level: 3, description: "As an action, imbue a weapon with positive energy for 1 minute. Add your Cha modifier to attack rolls, and the weapon emits bright light in a 20-foot radius." },
        { name: "Channel Divinity: Turn the Unholy", level: 3, description: "Each fiend and undead within 30 feet must make a Wis save or be turned for 1 minute." },
        { name: "Aura of Devotion", level: 7, description: "You and friendly creatures within 10 feet (30 feet at 18th) can't be charmed while you are conscious." },
        { name: "Purity of Spirit", level: 15, description: "You are always under the effects of Protection from Evil and Good." },
        { name: "Holy Nimbus", level: 20, description: "As an action, emanate a 30-foot aura of sunlight for 1 minute. Enemies starting their turn in it take 10 radiant damage. You have advantage on saves against fiend and undead spells. Once per long rest." },
      ],
    },
    {
      name: "Oath of the Ancients", slug: "oath-of-the-ancients", className: "Paladin", source: "PHB", subclassLevel: 3,
      description: "Paladins who swear an ancient oath to stand against the forces of darkness and preserve light and life in the world.",
      features: [
        { name: "Oath Spells", level: 3, description: "Ensnaring Strike, Speak with Animals (3rd), Moonbeam, Misty Step (5th), Plant Growth, Protection from Energy (9th), Ice Storm, Stoneskin (13th), Commune with Nature, Tree Stride (17th)." },
        { name: "Channel Divinity: Nature's Wrath", level: 3, description: "Spectral vines restrain a creature within 10 feet. It must make a Str or Dex save or be restrained. Repeats save each turn." },
        { name: "Channel Divinity: Turn the Faithless", level: 3, description: "Each fey and fiend within 30 feet must make a Wis save or be turned for 1 minute." },
        { name: "Aura of Warding", level: 7, description: "You and friendly creatures within 10 feet (30 feet at 18th) have resistance to damage from spells." },
        { name: "Undying Sentinel", level: 15, description: "When reduced to 0 HP without being killed outright, drop to 1 HP instead. Once per long rest. You also suffer none of the drawbacks of old age." },
        { name: "Elder Champion", level: 20, description: "Transform for 1 minute: regain 10 HP at start of each turn, cast paladin spells as bonus action, enemies within 10 feet have disadvantage on saves vs. your spells. Once per long rest." },
      ],
    },
    // XGtE
    {
      name: "Oath of Conquest", slug: "oath-of-conquest", className: "Paladin", source: "XGtE", subclassLevel: 3,
      description: "Paladins who seek glory in battle and the subjugation of their enemies, ruling through strength.",
      features: [
        { name: "Oath Spells", level: 3, description: "Armor of Agathys, Command (3rd), Hold Person, Spiritual Weapon (5th), Bestow Curse, Fear (9th), Dominate Beast, Stoneskin (13th), Cloudkill, Dominate Person (17th)." },
        { name: "Channel Divinity: Conquering Presence", level: 3, description: "Each creature of your choice within 30 feet makes a Wis save or is frightened for 1 minute." },
        { name: "Channel Divinity: Guided Strike", level: 3, description: "Gain +10 to an attack roll." },
        { name: "Aura of Conquest", level: 7, description: "Creatures frightened of you within 10 feet (30 at 18th) have speed 0 and take psychic damage equal to half your paladin level." },
        { name: "Scornful Rebuke", level: 15, description: "When a creature hits you, it takes psychic damage equal to your Cha modifier." },
        { name: "Invincible Conqueror", level: 20, description: "For 1 minute: resistance to all damage, extra attack, crits on 19-20. Once per long rest." },
      ],
    },
    {
      name: "Oath of Redemption", slug: "oath-of-redemption", className: "Paladin", source: "XGtE", subclassLevel: 3,
      description: "Paladins dedicated to peace and nonviolence who seek to redeem the wicked, using themselves as shields.",
      features: [
        { name: "Oath Spells", level: 3, description: "Sanctuary, Sleep (3rd), Calm Emotions, Hold Person (5th), Counterspell, Hypnotic Pattern (9th), Otiluke's Resilient Sphere, Stoneskin (13th), Hold Monster, Wall of Force (17th)." },
        { name: "Channel Divinity: Emissary of Peace", level: 3, description: "Gain +5 to Persuasion checks for 10 minutes." },
        { name: "Channel Divinity: Rebuke the Violent", level: 3, description: "When a creature deals damage within 30 feet, force it to make a Wis save or take equal radiant damage (half on success)." },
        { name: "Aura of the Guardian", level: 7, description: "When a creature within 10 feet (30 at 18th) takes damage, take that damage instead as a reaction." },
        { name: "Protective Spirit", level: 15, description: "At end of your turn, if below half HP, regain 1d6 + half paladin level HP." },
        { name: "Emissary of Redemption", level: 20, description: "Resistance to all damage from other creatures. When damaged, attacker takes radiant damage equal to half. Both end against creatures you attack." },
      ],
    },
    // TCoE
    {
      name: "Oath of Glory", slug: "oath-of-glory", className: "Paladin", source: "TCoE", subclassLevel: 3,
      description: "Paladins destined to achieve glory through deeds of heroism, training diligently for destiny's call.",
      features: [
        { name: "Oath Spells", level: 3, description: "Guiding Bolt, Heroism (3rd), Enhance Ability, Magic Weapon (5th), Haste, Protection from Energy (9th), Compulsion, Freedom of Movement (13th), Commune, Flame Strike (17th)." },
        { name: "Channel Divinity: Peerless Athlete", level: 3, description: "For 10 minutes: advantage on Athletics and Acrobatics, double carry weight, +10 feet jump distance." },
        { name: "Channel Divinity: Inspiring Smite", level: 3, description: "After Divine Smite damage, distribute 2d8 + paladin level temp HP among creatures within 30 feet." },
        { name: "Aura of Alacrity", level: 7, description: "Your speed +10 feet. Allies within 5 feet (10 at 18th) gain +10 feet speed on their turn." },
        { name: "Glorious Defense", level: 15, description: "When you or a creature within 10 feet is hit, add Cha modifier to AC as reaction. If it misses, make an attack. Cha modifier uses per long rest." },
        { name: "Living Legend", level: 20, description: "For 1 minute: advantage on Cha checks, missed attacks can hit (once per turn), reroll failed saves. Once per long rest or via 5th-level slot." },
      ],
    },
    {
      name: "Oath of the Watchers", slug: "oath-of-the-watchers", className: "Paladin", source: "TCoE", subclassLevel: 3,
      description: "Paladins sworn to protect mortal realms from extraplanar creatures, ever vigilant against otherworldly threats.",
      features: [
        { name: "Oath Spells", level: 3, description: "Alarm, Detect Magic (3rd), Moonbeam, See Invisibility (5th), Counterspell, Nondetection (9th), Aura of Purity, Banishment (13th), Hold Monster, Scrying (17th)." },
        { name: "Channel Divinity: Watcher's Will", level: 3, description: "Choose up to Cha modifier creatures within 30 feet. For 1 minute, all gain advantage on Int, Wis, and Cha saves." },
        { name: "Channel Divinity: Abjure the Extraplanar", level: 3, description: "Each aberration, celestial, elemental, fey, or fiend within 30 feet makes a Wis save or is turned for 1 minute." },
        { name: "Aura of the Sentinel", level: 7, description: "You and creatures of your choice within 10 feet (30 at 18th) gain proficiency bonus to initiative." },
        { name: "Vigilant Rebuke", level: 15, description: "When you or a creature within 30 feet succeeds on an Int/Wis/Cha save, deal 2d8 + Cha force damage to the caster as a reaction." },
        { name: "Mortal Bulwark", level: 20, description: "For 1 minute: 120-foot truesight, advantage on attacks vs. aberrations/celestials/elementals/fey/fiends, banish on hit (Cha save). Once per long rest or via 5th-level slot." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// RANGER
// ══════════════════════════════════════════════════════════════
{
  name: "Ranger",
  slug: "ranger",
  hitDie: 10,
  primaryAbility: "Dexterity & Wisdom",
  savingThrows: "Strength, Dexterity",
  armorProficiencies: "Light armor, Medium armor, Shields",
  weaponProficiencies: "Simple weapons, Martial weapons",
  toolProficiencies: "None",
  skillChoices: "Choose 3 from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, Survival",
  description: "Warriors of the wilderness who use martial prowess and nature magic to combat threats on the edges of civilization, tracking foes and navigating the wild.",
  source: "PHB",
  subclassLabel: "Ranger Archetype",
  subclassLevel: 3,
  features: [
    { name: "Favored Enemy", level: 1, description: "You have advantage on Survival checks to track your favored enemies, and on Intelligence checks to recall information about them. You learn one language spoken by them." },
    { name: "Natural Explorer", level: 1, description: "You are adept at traveling and surviving in a favored terrain. While traveling in that terrain, you gain benefits including doubled proficiency for Int/Wis checks, no penalties from difficult terrain, and more food from foraging." },
    { name: "Fighting Style", level: 2, description: "You adopt a fighting style. Choose from Archery, Defense, Dueling, or Two-Weapon Fighting." },
    { name: "Spellcasting", level: 2, description: "You can cast ranger spells using Wisdom as your spellcasting ability. You know a set number of spells from the ranger list." },
    { name: "Primeval Awareness", level: 3, description: "You can expend a ranger spell slot to sense the presence of aberrations, celestials, dragons, elementals, fey, fiends, and undead within 1 mile (6 miles in favored terrain)." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Extra Attack", level: 5, description: "You can attack twice when you take the Attack action on your turn." },
    { name: "Land's Stride", level: 8, description: "Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed or taking damage." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Hide in Plain Sight", level: 10, description: "You can spend 1 minute creating camouflage. While camouflaged and remaining still, you gain +10 to Dexterity (Stealth) checks." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Vanish", level: 14, description: "You can use the Hide action as a bonus action on your turn. You also can't be tracked by nonmagical means unless you choose to leave a trail." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Feral Senses", level: 18, description: "You gain preternatural senses. You don't have disadvantage on attacks against creatures you can't see, and you are aware of invisible creatures within 30 feet." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Foe Slayer", level: 20, description: "Once on each of your turns, you can add your Wisdom modifier to the attack roll or damage roll of an attack against one of your favored enemies." },
  ],
  subclasses: [
    // PHB
    {
      name: "Hunter", slug: "hunter", className: "Ranger", source: "PHB", subclassLevel: 3,
      description: "Rangers who accept their place as a bulwark between civilization and the terrors of the wilderness, hunting deadly monsters.",
      features: [
        { name: "Hunter's Prey", level: 3, description: "Choose Colossus Slayer (+1d8 damage to wounded creatures once per turn), Giant Killer (reaction attack when Large+ creature misses within 5 feet), or Horde Breaker (attack a second creature within 5 feet of the first)." },
        { name: "Defensive Tactics", level: 7, description: "Choose Escape the Horde (disadvantage on opportunity attacks against you), Multiattack Defense (+4 AC after being hit), or Steel Will (advantage on saves vs. frightened)." },
        { name: "Multiattack", level: 11, description: "Choose Volley (ranged attack against each creature within 10 feet of a point in range) or Whirlwind Attack (melee attack against each creature within 5 feet)." },
        { name: "Superior Hunter's Defense", level: 15, description: "Choose Evasion, Stand Against the Tide (redirect a missed melee attack to another creature), or Uncanny Dodge." },
      ],
    },
    {
      name: "Beast Master", slug: "beast-master", className: "Ranger", source: "PHB", subclassLevel: 3,
      description: "Rangers who form a mystical bond with a beast companion, fighting alongside it as a coordinated team.",
      features: [
        { name: "Ranger's Companion", level: 3, description: "Gain a beast companion (CR 1/4 or lower) that obeys your commands. It acts on your initiative, and you can command it to Attack, Dash, Disengage, Dodge, or Help using your action." },
        { name: "Exceptional Training", level: 7, description: "Your companion can Dash, Disengage, Dodge, or Help as a bonus action. Its attacks count as magical for overcoming resistance." },
        { name: "Bestial Fury", level: 11, description: "Your companion can make two attacks when you command it to Attack, or it can attack once if you take the Attack action." },
        { name: "Share Spells", level: 15, description: "When you cast a spell targeting yourself, you can also affect your companion if it is within 30 feet." },
      ],
    },
    // XGtE
    {
      name: "Gloom Stalker", slug: "gloom-stalker", className: "Ranger", source: "XGtE", subclassLevel: 3,
      description: "Rangers who strike from the shadows, gaining powers in darkness and ambushing foes with devastating first strikes.",
      features: [
        { name: "Dread Ambusher", level: 3, description: "Add Wis modifier to initiative. First turn: +10 feet speed and one extra attack dealing an extra 1d8 damage." },
        { name: "Umbral Sight", level: 3, description: "Gain 60-foot darkvision (or +30 feet). You are invisible to creatures relying on darkvision to see you in darkness." },
        { name: "Iron Mind", level: 7, description: "Gain proficiency in Wis saves (or Int/Cha if already proficient)." },
        { name: "Stalker's Flurry", level: 11, description: "Once per turn, when you miss a weapon attack, make another." },
        { name: "Shadowy Dodge", level: 15, description: "When attacked without advantage, use your reaction to impose disadvantage." },
      ],
    },
    {
      name: "Horizon Walker", slug: "horizon-walker", className: "Ranger", source: "XGtE", subclassLevel: 3,
      description: "Rangers who guard the world against threats from other planes, gaining the ability to slip between dimensions.",
      features: [
        { name: "Detect Portal", level: 3, description: "Detect the closest planar portal within 1 mile. Once per short rest." },
        { name: "Planar Warrior", level: 3, description: "As a bonus action, target a creature within 30 feet. Next hit converts all damage to force and adds 1d8 (2d8 at 11th)." },
        { name: "Ethereal Step", level: 7, description: "Cast Etherealness until end of current turn as a bonus action. Once per short rest." },
        { name: "Distant Strike", level: 11, description: "Teleport 10 feet before each attack. If you attack two different creatures, make an extra attack against a third." },
        { name: "Spectral Defense", level: 15, description: "When you take damage, halve it as a reaction by briefly becoming ethereal." },
      ],
    },
    {
      name: "Monster Slayer", slug: "monster-slayer", className: "Ranger", source: "XGtE", subclassLevel: 3,
      description: "Rangers trained in supernatural techniques to overcome terrible threats, specializing in hunting aberrations, fiends, and undead.",
      features: [
        { name: "Hunter's Sense", level: 3, description: "Learn a creature's immunities, resistances, and vulnerabilities within 60 feet. Wis modifier uses per long rest." },
        { name: "Slayer's Prey", level: 3, description: "Designate a creature. First hit each turn deals extra 1d6 damage." },
        { name: "Supernatural Defense", level: 7, description: "When your Slayer's Prey forces a save or grapple check, add 1d6." },
        { name: "Magic-User's Nemesis", level: 11, description: "When a creature within 60 feet casts a spell or teleports, force a Wis save or it fails." },
        { name: "Slayer's Counter", level: 15, description: "When your Slayer's Prey forces a save, use your reaction to attack. If it hits, your save automatically succeeds." },
      ],
    },
    // TCoE
    {
      name: "Fey Wanderer", slug: "fey-wanderer", className: "Ranger", source: "TCoE", subclassLevel: 3,
      description: "Rangers who represent both mortal and fey realms, wielding psychic magic from the Feywild to brighten hearts and terrify foes.",
      features: [
        { name: "Dreadful Strikes", level: 3, description: "On a weapon hit, deal extra 1d4 psychic damage (1d6 at 11th). Once per turn per creature." },
        { name: "Otherworldly Glamour", level: 3, description: "Add Wis modifier to Cha checks. Gain proficiency in Deception, Performance, or Persuasion." },
        { name: "Beguiling Twist", level: 7, description: "Advantage on charm/fright saves. When you or a visible creature succeeds such a save, force another creature to make a Wis save or be charmed/frightened." },
        { name: "Fey Reinforcements", level: 11, description: "Learn Summon Fey. Cast once without a slot per long rest. Can modify for no concentration (1-minute duration)." },
        { name: "Misty Wanderer", level: 15, description: "Cast Misty Step without a slot Wis modifier times per long rest. Bring one willing creature within 5 feet along." },
      ],
    },
    {
      name: "Swarmkeeper", slug: "swarmkeeper", className: "Ranger", source: "TCoE", subclassLevel: 3,
      description: "Rangers bonded with a swarm of nature spirits that assists in battle.",
      features: [
        { name: "Gathered Swarm", level: 3, description: "Once per turn after hitting, the swarm: deals 1d6 piercing, forces Str save or moves target 15 feet, or moves you 5 feet." },
        { name: "Swarmkeeper Magic", level: 3, description: "Learn Mage Hand (appears as swarm). Gain Faerie Fire (3rd), Web (5th), Gaseous Form (9th), Arcane Eye (13th), Insect Plague (17th)." },
        { name: "Writhing Tide", level: 7, description: "Gain 10-foot flying speed with hover for 1 minute. Proficiency bonus uses per long rest." },
        { name: "Mighty Swarm", level: 11, description: "Gathered Swarm damage becomes 1d8. Movement can knock prone. When swarm moves you, gain half cover." },
        { name: "Swarming Dispersal", level: 15, description: "When you take damage, gain resistance and teleport up to 30 feet. Proficiency bonus uses per long rest." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// ROGUE
// ══════════════════════════════════════════════════════════════
{
  name: "Rogue",
  slug: "rogue",
  hitDie: 8,
  primaryAbility: "Dexterity",
  savingThrows: "Dexterity, Intelligence",
  armorProficiencies: "Light armor",
  weaponProficiencies: "Simple weapons, Hand crossbows, Longswords, Rapiers, Shortswords",
  toolProficiencies: "Thieves' tools",
  skillChoices: "Choose 4 from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, Stealth",
  description: "Scoundrels who use stealth and trickery to overcome obstacles and enemies, striking from the shadows with deadly precision.",
  source: "PHB",
  subclassLabel: "Roguish Archetype",
  subclassLevel: 3,
  features: [
    { name: "Expertise", level: 1, description: "Choose two skill proficiencies or one skill and thieves' tools. Your proficiency bonus is doubled for those. Choose two more at 6th level." },
    { name: "Sneak Attack", level: 1, description: "Once per turn, you can deal extra 1d6 damage when you hit with a finesse or ranged weapon if you have advantage or an ally is within 5 feet of the target. Scales with level." },
    { name: "Thieves' Cant", level: 1, description: "You know thieves' cant, a secret mix of dialect, jargon, and code. It takes 4 times longer to convey a message than speaking plainly." },
    { name: "Cunning Action", level: 2, description: "You can take a bonus action on each of your turns to Dash, Disengage, or Hide." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Uncanny Dodge", level: 5, description: "When an attacker you can see hits you with an attack, you can use your reaction to halve the attack's damage against you." },
    { name: "Evasion", level: 7, description: "When you are subjected to an effect that allows a Dexterity save for half damage, you instead take no damage on a success and half damage on a failure." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Reliable Talent", level: 11, description: "Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10." },
    { name: "Ability Score Improvement", level: 10, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Blindsense", level: 14, description: "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you." },
    { name: "Slippery Mind", level: 15, description: "You gain proficiency in Wisdom saving throws." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Elusive", level: 18, description: "No attack roll has advantage against you while you aren't incapacitated." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Stroke of Luck", level: 20, description: "If your attack misses a target in range, you can turn the miss into a hit. Or if you fail an ability check, treat the d20 roll as a 20. Once per short rest." },
  ],
  subclasses: [
    // PHB
    {
      name: "Thief", slug: "thief", className: "Rogue", source: "PHB", subclassLevel: 3,
      description: "Rogues who hone skills in larceny, nimble fingers, and quick thinking to become accomplished burglars and dungeon delvers.",
      features: [
        { name: "Fast Hands", level: 3, description: "You can use Cunning Action to make a Sleight of Hand check, use thieves' tools to disarm a trap or open a lock, or take the Use an Object action." },
        { name: "Second-Story Work", level: 3, description: "Climbing no longer costs extra movement. Your running jump distance increases by a number of feet equal to your Dexterity modifier." },
        { name: "Supreme Sneak", level: 9, description: "You have advantage on Dexterity (Stealth) checks if you move no more than half your speed on the same turn." },
        { name: "Use Magic Device", level: 13, description: "You can ignore all class, race, and level requirements on the use of magic items." },
        { name: "Thief's Reflexes", level: 17, description: "You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10." },
      ],
    },
    {
      name: "Assassin", slug: "assassin", className: "Rogue", source: "PHB", subclassLevel: 3,
      description: "Rogues who specialize in the art of dealing death, using stealth, poison, and disguise to eliminate targets with lethal efficiency.",
      features: [
        { name: "Bonus Proficiencies", level: 3, description: "You gain proficiency with the disguise kit and the poisoner's kit." },
        { name: "Assassinate", level: 3, description: "You have advantage on attack rolls against any creature that hasn't taken a turn in combat yet. Any hit you score against a surprised creature is a critical hit." },
        { name: "Infiltration Expertise", level: 9, description: "You can create a false identity over 7 days, complete with documentation and established acquaintances." },
        { name: "Impostor", level: 13, description: "You can unerringly mimic another person's speech, writing, and behavior after studying them for at least 3 hours." },
        { name: "Death Strike", level: 17, description: "When you hit a surprised creature, it must make a Constitution save (DC 8 + Dex mod + proficiency) or take double damage from the attack." },
      ],
    },
    {
      name: "Arcane Trickster", slug: "arcane-trickster", className: "Rogue", source: "PHB", subclassLevel: 3,
      description: "Rogues who enhance their skills with enchantment and illusion magic, using spells to supplement their natural cunning.",
      features: [
        { name: "Spellcasting", level: 3, description: "You learn wizard cantrips (including Mage Hand) and spells (primarily enchantment and illusion), using Intelligence as your spellcasting ability. 1/3 caster progression." },
        { name: "Mage Hand Legerdemain", level: 3, description: "Your Mage Hand can be invisible. You can stow or retrieve objects, pick locks, and disarm traps with it. Use Sleight of Hand with the hand as a bonus action." },
        { name: "Magical Ambush", level: 9, description: "If you are hidden when you cast a spell, the target has disadvantage on its saving throw." },
        { name: "Versatile Trickster", level: 13, description: "As a bonus action, designate a creature within 5 feet of your Mage Hand. You have advantage on attack rolls against that creature until end of your turn." },
        { name: "Spell Thief", level: 17, description: "After a creature casts a spell targeting you or including you in its area, you can force a save. On failure, you negate the spell's effect and steal the spell for 8 hours. Once per long rest." },
      ],
    },
    // XGtE
    {
      name: "Inquisitive", slug: "inquisitive", className: "Rogue", source: "XGtE", subclassLevel: 3,
      description: "Rogues who excel at uncovering secrets, using keen observation to find weaknesses in combat.",
      features: [
        { name: "Ear for Deceit", level: 3, description: "Treat Insight rolls of 7 or lower as an 8 when detecting lies." },
        { name: "Eye for Detail", level: 3, description: "Use a bonus action for Perception or Investigation checks." },
        { name: "Insightful Fighting", level: 3, description: "Bonus action Insight vs. target's Deception. On success, Sneak Attack without advantage for 1 minute." },
        { name: "Steady Eye", level: 9, description: "Advantage on Perception and Investigation if you move no more than half speed." },
        { name: "Unerring Eye", level: 13, description: "Detect the presence of illusions, shapechangers, and deceptions within 30 feet. Wis modifier uses per long rest." },
        { name: "Eye for Weakness", level: 17, description: "While Insightful Fighting is active, Sneak Attack deals an extra 3d6." },
      ],
    },
    {
      name: "Mastermind", slug: "mastermind", className: "Rogue", source: "XGtE", subclassLevel: 3,
      description: "Rogues who focus on manipulation and intrigue, commanding others in battle and staying several steps ahead.",
      features: [
        { name: "Master of Intrigue", level: 3, description: "Gain proficiency with disguise kit, forgery kit, one gaming set. Learn two languages and can mimic accents." },
        { name: "Master of Tactics", level: 3, description: "Help as a bonus action. Help targets a creature within 30 feet instead of 5 feet." },
        { name: "Insightful Manipulator", level: 9, description: "After observing a creature for 1 minute, learn if it is your equal/superior/inferior in two stats." },
        { name: "Misdirection", level: 13, description: "When targeted by an attack while a creature provides cover, redirect the attack to hit that creature." },
        { name: "Soul of Deceit", level: 17, description: "Immune to thought reading. Can present false thoughts. Can't be compelled to tell the truth or detected as lying by magic." },
      ],
    },
    {
      name: "Scout", slug: "scout", className: "Rogue", source: "XGtE", subclassLevel: 3,
      description: "Rogues skilled in woodcraft and exploration, ranging far ahead to scout dangers and ambush enemies.",
      features: [
        { name: "Skirmisher", level: 3, description: "When an enemy ends its turn within 5 feet, move half your speed as a reaction without provoking." },
        { name: "Survivalist", level: 3, description: "Gain proficiency and expertise in Nature and Survival." },
        { name: "Superior Mobility", level: 9, description: "Walking speed +10 feet. Climbing and swimming speed also +10 feet if you have them." },
        { name: "Ambush Master", level: 13, description: "Advantage on initiative. First creature you hit in round 1 grants advantage to all allies' attacks against it until your next turn." },
        { name: "Sudden Strike", level: 17, description: "Bonus action extra attack. Can use Sneak Attack on both attacks if targeting different creatures." },
      ],
    },
    {
      name: "Swashbuckler", slug: "swashbuckler", className: "Rogue", source: "XGtE", subclassLevel: 3,
      description: "Rogues who combine agility, charm, and panache, excelling in one-on-one duels and daring escapes.",
      features: [
        { name: "Fancy Footwork", level: 3, description: "When you melee attack a creature, it can't make opportunity attacks against you for the rest of your turn." },
        { name: "Rakish Audacity", level: 3, description: "Add Cha modifier to initiative. Sneak Attack without advantage if within 5 feet of target and no other creature is within 5 feet of you." },
        { name: "Panache", level: 9, description: "Persuasion vs. Insight: hostile target has disadvantage on attacks against anyone but you; nonhostile target is charmed." },
        { name: "Elegant Maneuver", level: 13, description: "Bonus action for advantage on next Acrobatics or Athletics check this turn." },
        { name: "Master Duelist", level: 17, description: "When you miss, reroll with advantage. Once per short rest." },
      ],
    },
    // TCoE
    {
      name: "Phantom", slug: "phantom", className: "Rogue", source: "TCoE", subclassLevel: 3,
      description: "Rogues who walk the line between life and death, channeling necrotic power from departed souls.",
      features: [
        { name: "Whispers of the Dead", level: 3, description: "After a rest, gain one skill or tool proficiency from a ghostly presence. Lasts until used again." },
        { name: "Wails from the Grave", level: 3, description: "After Sneak Attack, a second creature within 30 feet takes necrotic damage equal to half your Sneak Attack dice. Proficiency bonus uses per long rest." },
        { name: "Tokens of the Departed", level: 9, description: "Capture soul trinkets when creatures die within 30 feet. Gain advantage on death/Con saves while carrying one. Destroy one for free Wails or to ask the spirit a question." },
        { name: "Ghost Walk", level: 13, description: "Become spectral for 10 minutes: 10-foot fly speed, attacks have disadvantage against you, move through creatures. Once per long rest or via trinket." },
        { name: "Death's Friend", level: 17, description: "Wails from the Grave damages both targets. A trinket appears after long rest if you have none." },
      ],
    },
    {
      name: "Soulknife", slug: "soulknife", className: "Rogue", source: "TCoE", subclassLevel: 3,
      description: "Rogues who manifest psionic power as shimmering blades of psychic energy, cutting through physical and psychic barriers.",
      features: [
        { name: "Psionic Power", level: 3, description: "Gain Psionic Energy dice (d6, scaling). Psi-Bolstered Knack adds a die to failed proficient checks. Psychic Whispers establishes telepathy." },
        { name: "Psychic Blades", level: 3, description: "Manifest psychic blades (1d6 psychic, finesse, thrown 60 ft). Bonus action second blade attack (1d4 die)." },
        { name: "Soul Blades", level: 9, description: "Homing Strikes: add a die to missed Psychic Blade attacks. Psychic Teleportation: throw a blade and teleport to it." },
        { name: "Psychic Veil", level: 13, description: "Become invisible for 1 hour or until you deal damage or force a save. Once per long rest or via die." },
        { name: "Rend Mind", level: 17, description: "On Sneak Attack with Psychic Blades, force a Wis save or stun for 1 minute. Once per long rest or via 3 dice." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// SORCERER
// ══════════════════════════════════════════════════════════════
{
  name: "Sorcerer",
  slug: "sorcerer",
  hitDie: 6,
  primaryAbility: "Charisma",
  savingThrows: "Constitution, Charisma",
  armorProficiencies: "None",
  weaponProficiencies: "Daggers, Darts, Slings, Quarterstaffs, Light crossbows",
  toolProficiencies: "None",
  skillChoices: "Choose 2 from Arcana, Deception, Insight, Intimidation, Persuasion, Religion",
  description: "Spellcasters who draw on inherent magic from a gift or bloodline, wielding raw magical power that they shape through force of will rather than study.",
  source: "PHB",
  subclassLabel: "Sorcerous Origin",
  subclassLevel: 1,
  features: [
    { name: "Spellcasting", level: 1, description: "You can cast sorcerer spells using Charisma as your spellcasting ability. You know a set number of spells and can use an arcane focus." },
    { name: "Font of Magic", level: 2, description: "You have sorcery points equal to your sorcerer level. You can convert sorcery points into spell slots and vice versa as a bonus action." },
    { name: "Metamagic", level: 3, description: "You gain the ability to twist your spells to suit your needs. You learn two Metamagic options (more at 10th and 17th): Careful, Distant, Empowered, Extended, Heightened, Quickened, Subtle, or Twinned Spell." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Sorcerous Restoration", level: 20, description: "You regain 4 expended sorcery points whenever you finish a short rest." },
  ],
  subclasses: [
    // PHB
    {
      name: "Draconic Bloodline", slug: "draconic-bloodline", className: "Sorcerer", source: "PHB", subclassLevel: 1,
      description: "Sorcerers whose magic comes from draconic ancestry, gaining scales, wings, and the elemental power of dragons.",
      features: [
        { name: "Dragon Ancestor", level: 1, description: "Choose a dragon type. You learn Draconic and gain double proficiency bonus on Charisma checks with dragons. Your choice determines the damage type for later features." },
        { name: "Draconic Resilience", level: 1, description: "Your HP maximum increases by 1 per sorcerer level. When not wearing armor, your AC equals 13 + Dexterity modifier." },
        { name: "Elemental Affinity", level: 6, description: "When you cast a spell that deals your dragon ancestor's damage type, add your Charisma modifier to one damage roll. You can also spend 1 sorcery point to gain resistance to that damage type for 1 hour." },
        { name: "Dragon Wings", level: 14, description: "As a bonus action, you sprout dragon wings gaining a flying speed equal to your current speed. They last until dismissed." },
        { name: "Draconic Presence", level: 18, description: "As an action, spend 5 sorcery points to create a 60-foot aura of awe or fear for 1 minute (concentration). Creatures must Wis save or be charmed/frightened." },
      ],
    },
    {
      name: "Wild Magic", slug: "wild-magic", className: "Sorcerer", source: "PHB", subclassLevel: 1,
      description: "Sorcerers whose innate magic comes from the forces of chaos, producing unpredictable and sometimes dangerous magical effects.",
      features: [
        { name: "Wild Magic Surge", level: 1, description: "After you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. On a 1, roll on the Wild Magic Surge table for a random magical effect." },
        { name: "Tides of Chaos", level: 1, description: "You can gain advantage on one attack roll, ability check, or saving throw. Once used, the DM can trigger a Wild Magic Surge to regain the use." },
        { name: "Bend Luck", level: 6, description: "When a creature you can see makes an attack roll, ability check, or saving throw, you can spend 2 sorcery points to add or subtract 1d4 from the roll as a reaction." },
        { name: "Controlled Chaos", level: 14, description: "When you roll on the Wild Magic Surge table, you can roll twice and use either result." },
        { name: "Spell Bombardment", level: 18, description: "When you roll damage for a spell and get the maximum on any die, reroll that die and add the result. Once per turn." },
      ],
    },
    // XGtE
    {
      name: "Divine Soul", slug: "divine-soul", className: "Sorcerer", source: "XGtE", subclassLevel: 1,
      description: "Sorcerers whose innate magic comes from a divine source, granting access to cleric spells and celestial blessings.",
      features: [
        { name: "Divine Magic", level: 1, description: "Choose spells from the cleric list in addition to sorcerer. Learn an additional spell based on your affinity (Good, Evil, Law, Chaos, or Neutrality)." },
        { name: "Favored by the Gods", level: 1, description: "When you fail a save or miss an attack, add 2d4 to the total. Once per short rest." },
        { name: "Empowered Healing", level: 6, description: "When you or an ally within 5 feet rolls healing dice, spend 1 sorcery point to reroll any of those dice once." },
        { name: "Otherworldly Wings", level: 14, description: "As a bonus action, manifest spectral wings for a 30-foot flying speed." },
        { name: "Unearthly Recovery", level: 18, description: "When below half HP, regain HP equal to half your max as a bonus action. Once per long rest." },
      ],
    },
    {
      name: "Shadow Magic", slug: "shadow-magic", className: "Sorcerer", source: "XGtE", subclassLevel: 1,
      description: "Sorcerers who draw power from the Shadowfell, wielding darkness and shadow to confuse and terrify enemies.",
      features: [
        { name: "Eyes of the Dark", level: 1, description: "Gain 120-foot darkvision. At 3rd level, cast Darkness for 2 sorcery points and see through it." },
        { name: "Strength of the Grave", level: 1, description: "When reduced to 0 HP, Cha save (DC 5 + damage) to drop to 1 HP instead. Not against radiant or crits." },
        { name: "Hound of Ill Omen", level: 6, description: "Spend 3 sorcery points to summon a dire wolf-like hound that pursues a target. Target has disadvantage on saves against your spells while hound is within 5 feet." },
        { name: "Shadow Walk", level: 14, description: "In dim light or darkness, teleport up to 120 feet to another dim/dark space as a bonus action." },
        { name: "Umbral Form", level: 18, description: "Spend 6 sorcery points to become a shadow for 1 minute. Resistance to all damage except force and radiant; move through creatures and objects." },
      ],
    },
    {
      name: "Storm Sorcery", slug: "storm-sorcery", className: "Sorcerer", source: "XGtE", subclassLevel: 1,
      description: "Sorcerers infused with elemental storm power, wielding lightning and thunder and riding the winds.",
      features: [
        { name: "Wind Speaker", level: 1, description: "Speak, read, and write Primordial and its dialects (Aquan, Auran, Ignan, Terran)." },
        { name: "Tempestuous Magic", level: 1, description: "Before or after casting a 1st+ level spell, fly up to 10 feet without provoking." },
        { name: "Heart of the Storm", level: 6, description: "Resistance to lightning and thunder. When you cast a 1st+ spell dealing those types, creatures of your choice within 10 feet take half your sorcerer level in damage." },
        { name: "Storm's Fury", level: 14, description: "When hit by melee, deal lightning damage equal to sorcerer level and push 20 feet (Str save) as a reaction." },
        { name: "Wind Soul", level: 18, description: "Immunity to lightning and thunder. Permanent 60-foot fly speed. As an action, share 30-foot fly speed with up to 3 + Cha modifier creatures for 1 hour." },
      ],
    },
    // TCoE
    {
      name: "Aberrant Mind", slug: "aberrant-mind", className: "Sorcerer", source: "TCoE", subclassLevel: 1,
      description: "Sorcerers touched by alien influence, wielding psionic power from an otherworldly source.",
      features: [
        { name: "Psionic Spells", level: 1, description: "Learn extra spells: Arms of Hadar, Dissonant Whispers, Mind Sliver (1st), Calm Emotions, Detect Thoughts (3rd), and more at higher levels. Replaceable with divination/enchantment spells." },
        { name: "Telepathic Speech", level: 1, description: "As a bonus action, form a telepathic link with a creature within 30 feet for minutes equal to your sorcerer level." },
        { name: "Psionic Sorcery", level: 6, description: "Cast Psionic Spells using sorcery points instead of slots. When cast this way, no V, S, or non-consumed M components." },
        { name: "Psychic Defenses", level: 6, description: "Resistance to psychic damage and advantage on saves vs. charmed/frightened." },
        { name: "Revelation in Flesh", level: 14, description: "Spend sorcery points to transform for 10 minutes. Each point grants: see invisible, fly speed, swim + breathe underwater, or squeeze through 1-inch spaces." },
        { name: "Warping Implosion", level: 18, description: "Teleport up to 120 feet. Creatures within 30 feet of departure make Str save or take 3d10 force and are pulled to where you left. Once per long rest or 5 sorcery points." },
      ],
    },
    {
      name: "Clockwork Soul", slug: "clockwork-soul", className: "Sorcerer", source: "TCoE", subclassLevel: 1,
      description: "Sorcerers suffused with cosmic order from Mechanus, wielding magic of balance, precision, and clockwork efficiency.",
      features: [
        { name: "Clockwork Magic", level: 1, description: "Learn extra spells: Alarm, Protection from Evil and Good (1st), Aid (3rd), Dispel Magic (5th), Freedom of Movement (7th), Wall of Force (9th). Replaceable with abjuration/transmutation." },
        { name: "Restore Balance", level: 1, description: "When a creature within 60 feet rolls with advantage/disadvantage, cancel it as a reaction. Proficiency bonus uses per long rest." },
        { name: "Bastion of Law", level: 6, description: "Spend 1-5 sorcery points to create a ward with equal d8s. The creature can roll them to reduce damage." },
        { name: "Trance of Order", level: 14, description: "For 1 minute: no advantage on attacks against you, treat d20 rolls of 9 or lower as 10. Once per long rest or 5 sorcery points." },
        { name: "Clockwork Cavalcade", level: 18, description: "Summon spirits in a 30-foot cube to restore up to 100 HP, repair objects, and end spells of 6th level or lower. Once per long rest or 7 sorcery points." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// WARLOCK
// ══════════════════════════════════════════════════════════════
{
  name: "Warlock",
  slug: "warlock",
  hitDie: 8,
  primaryAbility: "Charisma",
  savingThrows: "Wisdom, Charisma",
  armorProficiencies: "Light armor",
  weaponProficiencies: "Simple weapons",
  toolProficiencies: "None",
  skillChoices: "Choose 2 from Arcana, Deception, History, Intimidation, Investigation, Nature, Religion",
  description: "Wielders of magic that is derived from a bargain with an extraplanar entity, casting spells powered by eldritch invocations and a mysterious pact.",
  source: "PHB",
  subclassLabel: "Otherworldly Patron",
  subclassLevel: 1,
  features: [
    { name: "Pact Magic", level: 1, description: "You can cast warlock spells using Charisma. You have a limited number of spell slots that recharge on a short rest. All slots are the same level, scaling with your warlock level." },
    { name: "Eldritch Invocations", level: 2, description: "In your study of occult lore, you have unearthed eldritch invocations. You learn two invocations and gain more as you level. Some have prerequisites." },
    { name: "Pact Boon", level: 3, description: "Your patron bestows a gift. Choose Pact of the Chain (familiar), Pact of the Blade (summon weapon), or Pact of the Tome (Book of Shadows cantrips). TCoE adds Pact of the Talisman." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Mystic Arcanum (6th)", level: 11, description: "Your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level warlock spell. You can cast it once per long rest without a slot." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Mystic Arcanum (7th)", level: 13, description: "Choose one 7th-level warlock spell as an arcanum. You can cast it once per long rest without a slot." },
    { name: "Mystic Arcanum (8th)", level: 15, description: "Choose one 8th-level warlock spell as an arcanum. You can cast it once per long rest without a slot." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Mystic Arcanum (9th)", level: 17, description: "Choose one 9th-level warlock spell as an arcanum. You can cast it once per long rest without a slot." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Eldritch Master", level: 20, description: "You can spend 1 minute entreating your patron to regain all your expended spell slots. Once per long rest." },
  ],
  subclasses: [
    // PHB
    {
      name: "The Archfey", slug: "the-archfey", className: "Warlock", source: "PHB", subclassLevel: 1,
      description: "Warlocks who have struck a bargain with a lord or lady of the fey, gaining powers of enchantment, illusion, and the wild magic of the Feywild.",
      features: [
        { name: "Fey Presence", level: 1, description: "As an action, each creature in a 10-foot cube originating from you must make a Wisdom save or be charmed or frightened (your choice) until the end of your next turn. Once per short rest." },
        { name: "Misty Escape", level: 6, description: "When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet. You remain invisible until the start of your next turn. Once per short rest." },
        { name: "Beguiling Defenses", level: 10, description: "You can't be charmed. When a creature tries to charm you, you can use your reaction to attempt to turn the charm back on them (Wis save)." },
        { name: "Dark Delirium", level: 14, description: "As an action, charm or frighten a creature for 1 minute (Wis save). The target perceives itself as lost in a misty realm. Concentration. Once per short rest." },
      ],
    },
    {
      name: "The Fiend", slug: "the-fiend", className: "Warlock", source: "PHB", subclassLevel: 1,
      description: "Warlocks who have made a pact with a fiend from the lower planes, gaining powers of fire, darkness, and infernal resilience.",
      features: [
        { name: "Dark One's Blessing", level: 1, description: "When you reduce a hostile creature to 0 HP, you gain temporary HP equal to your Charisma modifier + your warlock level." },
        { name: "Dark One's Own Luck", level: 6, description: "When you make an ability check or saving throw, you can add a d10 to the roll. Once per short rest." },
        { name: "Fiendish Resilience", level: 10, description: "After a short or long rest, choose one damage type. You gain resistance to that type until you choose another." },
        { name: "Hurl Through Hell", level: 14, description: "When you hit a creature with an attack, you can send it through the lower planes. It disappears and takes 10d10 psychic damage at the end of your next turn as it returns. Once per long rest." },
      ],
    },
    {
      name: "The Great Old One", slug: "the-great-old-one", className: "Warlock", source: "PHB", subclassLevel: 1,
      description: "Warlocks bound to an ancient entity from the Far Realm, gaining psychic abilities and alien insights that twist the minds of others.",
      features: [
        { name: "Awakened Mind", level: 1, description: "You can telepathically speak to any creature you can see within 30 feet. The creature doesn't need to share a language but must understand at least one." },
        { name: "Entropic Ward", level: 6, description: "When a creature makes an attack roll against you, you can impose disadvantage as a reaction. If the attack misses, your next attack against it has advantage. Once per short rest." },
        { name: "Thought Shield", level: 10, description: "Your thoughts can't be read by telepathy unless you allow it. You gain resistance to psychic damage, and when a creature deals psychic damage to you, it takes the same amount." },
        { name: "Create Thrall", level: 14, description: "You can touch an incapacitated humanoid to charm it until Remove Curse is cast. You can communicate telepathically with the charmed creature regardless of distance." },
      ],
    },
    // XGtE
    {
      name: "The Celestial", slug: "the-celestial", className: "Warlock", source: "XGtE", subclassLevel: 1,
      description: "Warlocks bound to a celestial being, gaining access to radiant and healing magic alongside eldritch powers.",
      features: [
        { name: "Bonus Cantrips", level: 1, description: "Learn Light and Sacred Flame as warlock cantrips (don't count against cantrips known)." },
        { name: "Healing Light", level: 1, description: "Pool of d6s equal to 1 + warlock level. Bonus action to heal a creature within 60 feet, spending up to Cha modifier dice." },
        { name: "Radiant Soul", level: 6, description: "Resistance to radiant damage. When you deal fire or radiant damage with a spell, add Cha modifier to one roll." },
        { name: "Celestial Resilience", level: 10, description: "You and up to 5 creatures gain temp HP on a rest. You: warlock level + Cha mod. Others: half warlock level + Cha mod." },
        { name: "Searing Vengeance", level: 14, description: "When making a death save at start of turn, spring up, regain half max HP, and deal 2d8 + Cha radiant damage and blind creatures within 30 feet. Once per long rest." },
      ],
    },
    {
      name: "The Hexblade", slug: "the-hexblade", className: "Warlock", source: "XGtE", subclassLevel: 1,
      description: "Warlocks who forge a pact with a mysterious Shadowfell entity, wielding cursed weapons and shadow magic.",
      features: [
        { name: "Hexblade's Curse", level: 1, description: "Curse a creature within 30 feet. Bonus to damage equal to proficiency bonus, crit on 19-20, regain HP equal to warlock level + Cha mod if it dies. Lasts 1 minute." },
        { name: "Hex Warrior", level: 1, description: "Gain proficiency with medium armor, shields, and martial weapons. Use Charisma for attack/damage with one weapon (or Pact Weapon)." },
        { name: "Accursed Specter", level: 6, description: "When you slay a humanoid, raise its specter with temp HP equal to half warlock level. It adds Cha modifier to attacks. Lasts until next long rest." },
        { name: "Armor of Hexes", level: 10, description: "When your cursed target hits you, roll a d6. On 4+, the attack misses regardless of the roll." },
        { name: "Master of Hexes", level: 14, description: "When a cursed creature dies, apply the curse to a different creature within 30 feet without using another use." },
      ],
    },
    // TCoE
    {
      name: "The Fathomless", slug: "the-fathomless", className: "Warlock", source: "TCoE", subclassLevel: 1,
      description: "Warlocks bound to an entity of the ocean depths, wielding tentacles of dark water and commanding the power of the deep sea.",
      features: [
        { name: "Tentacle of the Deeps", level: 1, description: "As a bonus action, create a spectral tentacle within 60 feet. Melee spell attack for 1d8 cold (2d8 at 10th) and reduce speed by 10 feet. Proficiency bonus uses per long rest." },
        { name: "Gift of the Sea", level: 1, description: "Gain 40-foot swimming speed and breathe underwater." },
        { name: "Oceanic Soul", level: 6, description: "Resistance to cold damage. While submerged, understand and be understood by all submerged creatures." },
        { name: "Guardian Coil", level: 6, description: "When you or a creature within 10 feet of your tentacle takes damage, reduce it by 1d8 (2d8 at 10th) as a reaction." },
        { name: "Grasping Tentacles", level: 10, description: "Learn Evard's Black Tentacles. Cast once free per long rest. Gain temp HP equal to warlock level and can't lose concentration on it." },
        { name: "Fathomless Plunge", level: 14, description: "Teleport yourself and up to 5 willing creatures within 30 feet to a body of water within 1 mile. Once per short rest." },
      ],
    },
    {
      name: "The Genie", slug: "the-genie", className: "Warlock", source: "TCoE", subclassLevel: 1,
      description: "Warlocks who have made a pact with a noble genie, gaining elemental magic and a magical vessel to retreat into.",
      features: [
        { name: "Genie's Vessel", level: 1, description: "Receive a Tiny vessel as focus. Bottled Respite lets you enter it for hours equal to 2× proficiency bonus. Genie's Wrath adds proficiency bonus to one damage roll per turn (type based on genie kind)." },
        { name: "Elemental Gift", level: 6, description: "Resistance to a damage type based on genie kind. As a bonus action, gain 30-foot fly speed with hover for 10 minutes. Proficiency bonus uses per long rest." },
        { name: "Sanctuary Vessel", level: 10, description: "Bring up to 5 willing creatures into your vessel. Anyone resting inside for 10 minutes gains a short rest and adds proficiency bonus to Hit Dice healing." },
        { name: "Limited Wish", level: 14, description: "Request any 6th-level or lower spell effect from any class list, ignoring material components. Once per 1d4 long rests." },
      ],
    },
  ],
},

// ══════════════════════════════════════════════════════════════
// WIZARD
// ══════════════════════════════════════════════════════════════
{
  name: "Wizard",
  slug: "wizard",
  hitDie: 6,
  primaryAbility: "Intelligence",
  savingThrows: "Intelligence, Wisdom",
  armorProficiencies: "None",
  weaponProficiencies: "Daggers, Darts, Slings, Quarterstaffs, Light crossbows",
  toolProficiencies: "None",
  skillChoices: "Choose 2 from Arcana, History, Insight, Investigation, Medicine, Religion",
  description: "Scholarly magic-users who study the underlying mechanics of magic, mastering spells through careful research and recording their findings in spellbooks.",
  source: "PHB",
  subclassLabel: "Arcane Tradition",
  subclassLevel: 2,
  features: [
    { name: "Spellcasting", level: 1, description: "You can cast wizard spells using Intelligence as your spellcasting ability. You prepare spells from your spellbook each day and can use an arcane focus or component pouch." },
    { name: "Arcane Recovery", level: 1, description: "Once per day when you finish a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher." },
    { name: "Ability Score Improvement", level: 4, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 8, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 12, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Ability Score Improvement", level: 16, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Spell Mastery", level: 18, description: "Choose a 1st-level and a 2nd-level wizard spell in your spellbook. You can cast them at their lowest level without expending a spell slot. You can change them with 8 hours of study." },
    { name: "Ability Score Improvement", level: 19, description: "Increase one ability score by 2, or two ability scores by 1 each (max 20)." },
    { name: "Signature Spells", level: 20, description: "Choose two 3rd-level wizard spells in your spellbook as signature spells. You always have them prepared, and you can cast each once at 3rd level without a slot per short rest." },
  ],
  subclasses: [
    // PHB — All 8 Arcane Traditions
    {
      name: "School of Abjuration", slug: "school-of-abjuration", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who emphasize magic that blocks, banishes, or protects, creating mystical wards and barriers.",
      features: [
        { name: "Abjuration Savant", level: 2, description: "Gold and time to copy abjuration spells into your spellbook is halved." },
        { name: "Arcane Ward", level: 2, description: "When you cast an abjuration spell of 1st level or higher, a magical ward surrounds you with HP equal to twice your wizard level + Int modifier. It absorbs damage before you do." },
        { name: "Projected Ward", level: 6, description: "When a creature you can see within 30 feet takes damage, you can use your reaction to have your Arcane Ward absorb the damage instead." },
        { name: "Improved Abjuration", level: 10, description: "When you cast an abjuration spell that requires an ability check (like Counterspell or Dispel Magic), add your proficiency bonus to that check." },
        { name: "Spell Resistance", level: 14, description: "You have advantage on saving throws against spells. You also have resistance to damage from spells." },
      ],
    },
    {
      name: "School of Conjuration", slug: "school-of-conjuration", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who favor spells that produce objects and creatures out of thin air or teleport themselves across vast distances.",
      features: [
        { name: "Conjuration Savant", level: 2, description: "Gold and time to copy conjuration spells is halved." },
        { name: "Minor Conjuration", level: 2, description: "As an action, conjure an inanimate object (up to 3 feet, 10 lbs) that lasts 1 hour. It emits dim light in a 5-foot radius." },
        { name: "Benign Transposition", level: 6, description: "As an action, teleport up to 30 feet to a visible unoccupied space, or swap places with a willing Small or Medium creature. Once per long rest or when you cast a conjuration spell." },
        { name: "Focused Conjuration", level: 10, description: "While concentrating on a conjuration spell, your concentration can't be broken by taking damage." },
        { name: "Durable Summons", level: 14, description: "Creatures you summon or create with conjuration spells gain 30 temporary HP." },
      ],
    },
    {
      name: "School of Divination", slug: "school-of-divination", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who strive to part the veils of space, time, and consciousness to see and know the unseen.",
      features: [
        { name: "Divination Savant", level: 2, description: "Gold and time to copy divination spells is halved." },
        { name: "Portent", level: 2, description: "After a long rest, roll two d20s and record the numbers. You can replace any attack roll, saving throw, or ability check made by you or a creature you can see with one of these rolls. Three rolls at 14th level." },
        { name: "Expert Divination", level: 6, description: "When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot of a level lower than the one you used (max 5th level)." },
        { name: "The Third Eye", level: 10, description: "As an action, gain one benefit until your next rest: darkvision 60 ft, ethereal sight 60 ft, read any language, or see invisible creatures within 10 feet." },
        { name: "Greater Portent", level: 14, description: "You roll three d20s for Portent instead of two." },
      ],
    },
    {
      name: "School of Enchantment", slug: "school-of-enchantment", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who have honed their ability to magically entrance and beguile other people and monsters.",
      features: [
        { name: "Enchantment Savant", level: 2, description: "Gold and time to copy enchantment spells is halved." },
        { name: "Hypnotic Gaze", level: 2, description: "As an action, choose one creature within 5 feet. It must make a Wis save or be charmed and incapacitated (speed 0). Lasts until end of your next turn; you can use your action to maintain it each turn." },
        { name: "Instinctive Charm", level: 6, description: "When a creature within 30 feet attacks you, redirect the attack to a different creature (Wis save). Once per long rest." },
        { name: "Split Enchantment", level: 10, description: "When you cast an enchantment spell of 1st level or higher targeting one creature, you can target a second creature." },
        { name: "Alter Memories", level: 14, description: "When you cast an enchantment that charms, you can make one creature unaware of being charmed. You can also erase up to 1 + Cha modifier hours of memories." },
      ],
    },
    {
      name: "School of Evocation", slug: "school-of-evocation", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who focus on creating powerful elemental effects such as bitter cold, searing flame, rolling thunder, and crackling lightning.",
      features: [
        { name: "Evocation Savant", level: 2, description: "Gold and time to copy evocation spells is halved." },
        { name: "Sculpt Spells", level: 2, description: "When you cast an evocation spell that affects other creatures, you can choose a number of them equal to 1 + the spell's level. They automatically succeed on their saving throw and take no damage." },
        { name: "Potent Cantrip", level: 6, description: "When a creature succeeds on a saving throw against your cantrip, it still takes half the cantrip's damage (if any) but suffers no additional effect." },
        { name: "Empowered Evocation", level: 10, description: "You can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast." },
        { name: "Overchannel", level: 14, description: "When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage. Using this again before a long rest deals 2d12 necrotic damage per spell level to yourself (increases each additional use)." },
      ],
    },
    {
      name: "School of Illusion", slug: "school-of-illusion", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who focus on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk.",
      features: [
        { name: "Illusion Savant", level: 2, description: "Gold and time to copy illusion spells is halved." },
        { name: "Improved Minor Illusion", level: 2, description: "You learn the Minor Illusion cantrip. When you cast it, you can create both a sound and an image with a single casting." },
        { name: "Malleable Illusions", level: 6, description: "When you cast an illusion spell with a duration of 1 minute or longer, you can use your action to change the nature of that illusion." },
        { name: "Illusory Self", level: 10, description: "When a creature makes an attack roll against you, you can create an illusory duplicate that causes the attack to miss. Once per short rest." },
        { name: "Illusory Reality", level: 14, description: "When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object in the illusion and make it real for 1 minute." },
      ],
    },
    {
      name: "School of Necromancy", slug: "school-of-necromancy", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who explore the cosmic forces of life, death, and undeath, bending the boundary between life and death to their will.",
      features: [
        { name: "Necromancy Savant", level: 2, description: "Gold and time to copy necromancy spells is halved." },
        { name: "Grim Harvest", level: 2, description: "When you kill a creature with a spell of 1st level or higher, you regain HP equal to twice the spell's level (three times for necromancy spells). Not from constructs or undead." },
        { name: "Undead Thralls", level: 6, description: "When you cast Animate Dead, you can target one additional corpse or pile of bones. Undead you create have extra HP equal to your wizard level and add your proficiency bonus to damage." },
        { name: "Inured to Undeath", level: 10, description: "You have resistance to necrotic damage. Your HP maximum can't be reduced." },
        { name: "Command Undead", level: 14, description: "As an action, target one undead. It makes a Cha save or becomes permanently under your control. Intelligent undead (Int 8+) get a new save every hour." },
      ],
    },
    {
      name: "School of Transmutation", slug: "school-of-transmutation", className: "Wizard", source: "PHB", subclassLevel: 2,
      description: "Wizards who study spells that modify energy and matter, transforming the physical world to their will.",
      features: [
        { name: "Transmutation Savant", level: 2, description: "Gold and time to copy transmutation spells is halved." },
        { name: "Minor Alchemy", level: 2, description: "You can temporarily alter the physical properties of one nonmagical object, transforming it from one substance to another (wood to stone, etc.). Lasts 1 hour or until you lose concentration." },
        { name: "Transmuter's Stone", level: 6, description: "Spend 8 hours to create a transmuter's stone granting one of: darkvision 60 ft, +10 speed, Constitution save proficiency, or resistance to one elemental damage type. You can change the benefit when you cast a transmutation spell." },
        { name: "Shapechanger", level: 10, description: "You can cast Polymorph without a spell slot once per short rest. When targeting yourself, you can turn into any beast with CR equal to your wizard level or lower." },
        { name: "Master Transmuter", level: 14, description: "As an action, consume your transmuter's stone to: transmute a 5-foot cube of material, remove curses/diseases/poisons, cast Raise Dead without a slot, or restore youth by 3d10 years." },
      ],
    },
    // XGtE
    {
      name: "War Magic", slug: "war-magic", className: "Wizard", source: "XGtE", subclassLevel: 2,
      description: "Wizards trained in battle magic, blending offensive spells with defensive techniques for tactical superiority.",
      features: [
        { name: "Arcane Deflection", level: 2, description: "When hit or you fail a save, use reaction for +2 AC or +4 to the save. Until next turn, can only cast cantrips." },
        { name: "Tactical Wit", level: 2, description: "Add your Intelligence modifier to initiative rolls." },
        { name: "Power Surge", level: 6, description: "Store energy from counterspell/dispel. Spend a surge on wizard spell damage for extra force damage equal to half wizard level." },
        { name: "Durable Magic", level: 10, description: "While concentrating on a spell, gain +2 to AC and all saves." },
        { name: "Deflecting Shroud", level: 14, description: "When you use Arcane Deflection, up to 3 creatures within 60 feet take force damage equal to half wizard level." },
      ],
    },
    // TCoE
    {
      name: "Bladesinging", slug: "bladesinging", className: "Wizard", source: "TCoE", subclassLevel: 2,
      description: "Wizards who master an elven tradition of swordplay and dance, channeling magic through elegant martial maneuvers.",
      features: [
        { name: "Training in War and Song", level: 2, description: "Gain proficiency with light armor, one one-handed melee weapon, and Performance." },
        { name: "Bladesong", level: 2, description: "As a bonus action, start Bladesong for 1 minute: +Int to AC, +10 feet speed, advantage on Acrobatics, +Int to concentration saves. Proficiency bonus uses per long rest." },
        { name: "Extra Attack", level: 6, description: "Attack twice on the Attack action. Replace one attack with casting a cantrip." },
        { name: "Song of Defense", level: 10, description: "While Bladesong is active, expend a slot as reaction to reduce damage by 5× slot level." },
        { name: "Song of Victory", level: 14, description: "While Bladesong is active, add Int modifier to melee weapon damage." },
      ],
    },
    {
      name: "Order of Scribes", slug: "order-of-scribes", className: "Wizard", source: "TCoE", subclassLevel: 2,
      description: "Wizards devoted to recording magical discoveries, awakening their spellbooks into sentient companions.",
      features: [
        { name: "Wizardly Quill", level: 2, description: "Create a magic quill that copies spells in 2 minutes per level and can erase your writing." },
        { name: "Awakened Spellbook", level: 2, description: "Spellbook is a focus. Swap spell damage types with same-level spells in your book. Cast one ritual at normal casting time per long rest." },
        { name: "Manifest Mind", level: 6, description: "Conjure a Tiny spectral mind from your spellbook within 60 feet. See/hear through it. Cast spells from its position proficiency bonus times per long rest." },
        { name: "Master Scrivener", level: 10, description: "After a long rest, create a spell scroll of 1st or 2nd level (casts one level higher). Lasts until next long rest. Half cost/time for other scrolls." },
        { name: "One with the Word", level: 14, description: "Advantage on Arcana checks. Dismiss Manifest Mind to prevent all damage from one source, but lose spells from your book equal to 3d6 combined levels." },
      ],
    },
  ],
},

]; // end classesData array

// Alias for backward compatibility
export const classes = classesData;
