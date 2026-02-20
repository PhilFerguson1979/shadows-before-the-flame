// monsters.ts — Complete D&D 5e SRD + Dragonlance Monster Database

export interface Monster {
  name: string;
  slug: string;
  size: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
  type: string;
  alignment: string;
  ac: number;
  acType?: string;
  hp: number;
  hitDice: string;
  speed: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  cr: string;
  xp: number;
  source: string;
  traits?: string[];
  actions?: string[];
  legendary?: boolean;
  category?: string;
}

export const crXpTable: Record<string, number> = {
  '0': 10, '1/8': 25, '1/4': 50, '1/2': 100,
  '1': 200, '2': 450, '3': 700, '4': 1100, '5': 1800,
  '6': 2300, '7': 2900, '8': 3900, '9': 5000, '10': 5900,
  '11': 7200, '12': 8400, '13': 10000, '14': 11500, '15': 13000,
  '16': 15000, '17': 18000, '18': 20000, '19': 22000, '20': 25000,
  '21': 33000, '22': 41000, '23': 50000, '24': 62000, '25': 75000,
  '26': 90000, '27': 105000, '28': 120000, '29': 135000, '30': 155000,
};

export const encounterThresholds: Record<number, { easy: number; medium: number; hard: number; deadly: number }> = {
  1: { easy: 25, medium: 50, hard: 75, deadly: 100 },
  2: { easy: 50, medium: 100, hard: 150, deadly: 200 },
  3: { easy: 75, medium: 150, hard: 225, deadly: 400 },
  4: { easy: 125, medium: 250, hard: 375, deadly: 500 },
  5: { easy: 250, medium: 500, hard: 750, deadly: 1100 },
  6: { easy: 300, medium: 600, hard: 900, deadly: 1400 },
  7: { easy: 350, medium: 750, hard: 1100, deadly: 1700 },
  8: { easy: 450, medium: 900, hard: 1400, deadly: 2100 },
  9: { easy: 550, medium: 1100, hard: 1600, deadly: 2400 },
  10: { easy: 600, medium: 1200, hard: 1900, deadly: 2800 },
  11: { easy: 800, medium: 1600, hard: 2400, deadly: 3600 },
  12: { easy: 1000, medium: 2000, hard: 3000, deadly: 4500 },
  13: { easy: 1100, medium: 2200, hard: 3400, deadly: 5100 },
  14: { easy: 1250, medium: 2500, hard: 3800, deadly: 5700 },
  15: { easy: 1400, medium: 2800, hard: 4300, deadly: 6400 },
  16: { easy: 1600, medium: 3200, hard: 4800, deadly: 7200 },
  17: { easy: 2000, medium: 3900, hard: 5900, deadly: 8800 },
  18: { easy: 2100, medium: 4200, hard: 6300, deadly: 9500 },
  19: { easy: 2400, medium: 4900, hard: 7300, deadly: 10900 },
  20: { easy: 2800, medium: 5700, hard: 8500, deadly: 12700 },
};

export function getEncounterMultiplier(monsterCount: number): number {
  if (monsterCount <= 1) return 1;
  if (monsterCount === 2) return 1.5;
  if (monsterCount <= 6) return 2;
  if (monsterCount <= 10) return 2.5;
  if (monsterCount <= 14) return 3;
  return 4;
}

function m(name: string, size: Monster['size'], type: string, alignment: string, ac: number, hp: number, hitDice: string, speed: string, str: number, dex: number, con: number, int: number, wis: number, cha: number, cr: string, source: string, opts?: { acType?: string; traits?: string[]; actions?: string[]; legendary?: boolean; category?: string }): Monster {
  return {
    name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    size, type, alignment, ac, hp, hitDice, speed, str, dex, con, int, wis, cha,
    cr, xp: crXpTable[cr] ?? 0, source,
    acType: opts?.acType, traits: opts?.traits, actions: opts?.actions,
    legendary: opts?.legendary, category: opts?.category ?? type,
  };
}

export const monsters: Monster[] = [
  // ============ CR 0 (10 XP) ============
  m('Awakened Shrub','Small','Plant','unaligned',9,10,'3d6','20 ft',3,8,11,10,10,6,'0','SRD',{traits:['False Appearance']}),
  m('Baboon','Small','Beast','unaligned',12,3,'1d6','30 ft, climb 30 ft',8,14,11,4,12,5,'0','SRD',{traits:['Pack Tactics']}),
  m('Bat','Tiny','Beast','unaligned',12,1,'1d4-1','5 ft, fly 30 ft',2,15,8,2,12,4,'0','SRD',{traits:['Echolocation','Blindsight 60 ft']}),
  m('Cat','Tiny','Beast','unaligned',12,2,'1d4','40 ft, climb 30 ft',3,15,10,3,12,7,'0','SRD',{traits:['Keen Smell']}),
  m('Commoner','Medium','Humanoid','any',10,4,'1d8','30 ft',10,10,10,10,10,10,'0','SRD'),
  m('Crab','Tiny','Beast','unaligned',11,2,'1d4','20 ft, swim 20 ft',2,11,10,1,8,2,'0','SRD',{traits:['Amphibious']}),
  m('Deer','Medium','Beast','unaligned',13,4,'1d8','50 ft',11,16,11,2,14,5,'0','SRD'),
  m('Eagle','Small','Beast','unaligned',12,3,'1d6','10 ft, fly 60 ft',6,15,10,2,14,7,'0','SRD',{traits:['Keen Sight']}),
  m('Frog','Tiny','Beast','unaligned',11,1,'1d4-1','20 ft, swim 20 ft',1,13,8,1,8,3,'0','SRD',{traits:['Amphibious','Standing Leap']}),
  m('Hawk','Tiny','Beast','unaligned',13,1,'1d4-1','10 ft, fly 60 ft',5,16,8,2,14,6,'0','SRD',{traits:['Keen Sight']}),
  m('Hyena','Medium','Beast','unaligned',11,5,'1d8+1','50 ft',11,13,12,2,12,5,'0','SRD',{traits:['Pack Tactics']}),
  m('Jackal','Small','Beast','unaligned',12,3,'1d6','40 ft',8,15,11,3,13,6,'0','SRD',{traits:['Pack Tactics','Keen Hearing/Smell']}),
  m('Lizard','Tiny','Beast','unaligned',10,2,'1d4','20 ft, climb 20 ft',2,11,10,1,8,3,'0','SRD'),
  m('Owl','Tiny','Beast','unaligned',11,1,'1d4-1','5 ft, fly 60 ft',3,13,8,2,12,7,'0','SRD',{traits:['Flyby','Keen Hearing/Sight']}),
  m('Rat','Tiny','Beast','unaligned',10,1,'1d4-1','20 ft',2,11,9,2,10,4,'0','SRD',{traits:['Keen Smell']}),
  m('Raven','Tiny','Beast','unaligned',12,1,'1d4-1','10 ft, fly 50 ft',2,14,8,2,12,6,'0','SRD',{traits:['Mimicry']}),
  m('Scorpion','Tiny','Beast','unaligned',11,1,'1d4-1','10 ft',2,11,8,1,8,2,'0','SRD',{traits:['Blindsight 10 ft']}),
  m('Spider','Tiny','Beast','unaligned',12,1,'1d4-1','20 ft, climb 20 ft',2,14,8,1,10,2,'0','SRD',{traits:['Web Sense','Web Walker']}),
  m('Vulture','Medium','Beast','unaligned',10,5,'1d8+1','10 ft, fly 50 ft',7,10,13,2,12,4,'0','SRD',{traits:['Keen Sight/Smell','Pack Tactics']}),
  m('Weasel','Tiny','Beast','unaligned',13,1,'1d4-1','30 ft',3,16,8,2,12,3,'0','SRD',{traits:['Keen Hearing/Smell']}),

  // ============ CR 1/8 (25 XP) ============
  m('Bandit','Medium','Humanoid','any non-lawful',12,11,'2d8+2','30 ft',11,12,12,10,10,10,'1/8','SRD'),
  m('Blood Hawk','Small','Beast','unaligned',12,7,'2d6','10 ft, fly 60 ft',6,14,10,3,14,5,'1/8','SRD',{traits:['Pack Tactics','Keen Sight']}),
  m('Cultist','Medium','Humanoid','any non-good',12,9,'2d8','30 ft',11,12,10,10,11,10,'1/8','SRD',{traits:['Dark Devotion']}),
  m('Flying Snake','Tiny','Beast','unaligned',14,5,'2d4','30 ft, fly 60 ft',4,18,11,2,12,5,'1/8','SRD',{traits:['Flyby'],actions:['Bite: 3d4 poison']}),
  m('Giant Crab','Medium','Beast','unaligned',15,13,'3d8','30 ft, swim 30 ft',13,15,11,1,9,3,'1/8','SRD',{traits:['Amphibious'],actions:['Claw grapple']}),
  m('Giant Rat','Small','Beast','unaligned',12,7,'2d6','30 ft',7,15,11,2,10,4,'1/8','SRD',{traits:['Pack Tactics','Keen Smell']}),
  m('Giant Weasel','Medium','Beast','unaligned',13,9,'2d8','40 ft',11,16,10,4,12,5,'1/8','SRD',{traits:['Keen Hearing/Smell']}),
  m('Guard','Medium','Humanoid','any',16,11,'2d8+2','30 ft',13,12,12,10,11,10,'1/8','SRD',{acType:'chain shirt, shield'}),
  m('Kobold','Small','Humanoid','lawful evil',12,5,'2d6-2','30 ft',7,15,9,8,7,8,'1/8','SRD',{traits:['Pack Tactics','Sunlight Sensitivity']}),
  m('Mastiff','Medium','Beast','unaligned',12,5,'1d8+1','40 ft',13,14,12,3,12,7,'1/8','SRD',{traits:['Keen Hearing/Smell','Knockdown']}),
  m('Mule','Medium','Beast','unaligned',10,11,'2d8+2','40 ft',14,10,13,2,10,5,'1/8','SRD',{traits:['Beast of Burden','Sure-Footed']}),
  m('Noble','Medium','Humanoid','any',15,9,'2d8','30 ft',11,12,11,12,14,16,'1/8','SRD',{acType:'breastplate',actions:['Parry reaction']}),
  m('Poisonous Snake','Tiny','Beast','unaligned',13,2,'1d4','30 ft, swim 30 ft',2,16,11,1,10,3,'1/8','SRD',{actions:['Bite: 2d4 poison']}),
  m('Stirge','Tiny','Beast','unaligned',14,2,'1d4','10 ft, fly 40 ft',4,16,11,2,8,6,'1/8','SRD',{actions:['Blood Drain: attaches, 1d4+3/turn']}),
  m('Tribal Warrior','Medium','Humanoid','any',12,11,'2d8+2','30 ft',13,11,12,8,11,8,'1/8','SRD',{traits:['Pack Tactics']}),

  // ============ CR 1/4 (50 XP) ============
  m('Acolyte','Medium','Humanoid','any',10,9,'2d8','30 ft',10,10,10,10,14,11,'1/4','SRD',{traits:['Spellcasting (1st-level cleric)']}),
  m('Axe Beak','Large','Beast','unaligned',11,19,'3d10+3','50 ft',14,12,12,2,10,5,'1/4','SRD'),
  m('Blink Dog','Medium','Fey','lawful good',13,22,'4d8+4','40 ft',12,17,12,10,13,11,'1/4','SRD',{traits:['Teleport 40 ft']}),
  m('Boar','Medium','Beast','unaligned',11,11,'2d8+2','40 ft',13,11,12,2,9,5,'1/4','SRD',{traits:['Charge (+2d6, knock prone)','Relentless']}),
  m('Constrictor Snake','Large','Beast','unaligned',12,13,'2d10+2','30 ft, swim 30 ft',15,14,12,1,10,3,'1/4','SRD',{actions:['Constrict grapple']}),
  m('Draft Horse','Large','Beast','unaligned',10,19,'3d10+3','40 ft',18,10,12,2,11,7,'1/4','SRD'),
  m('Elk','Large','Beast','unaligned',10,13,'2d10+2','50 ft',16,10,12,2,10,6,'1/4','SRD',{traits:['Charge (+1d6, knock prone)']}),
  m('Giant Badger','Medium','Beast','unaligned',10,13,'2d8+4','30 ft, burrow 10 ft',13,10,15,2,12,5,'1/4','SRD',{traits:['Keen Smell'],actions:['Multiattack']}),
  m('Giant Bat','Large','Beast','unaligned',13,22,'4d10','60 ft fly',15,16,11,2,12,6,'1/4','SRD',{traits:['Echolocation','Blindsight 60 ft']}),
  m('Giant Centipede','Small','Beast','unaligned',13,4,'1d6+1','30 ft, climb 30 ft',5,14,12,1,7,3,'1/4','SRD',{actions:['Bite: 3d6 poison (DC 11 CON)']}),
  m('Giant Frog','Medium','Beast','unaligned',11,18,'4d8','30 ft, swim 30 ft',12,13,11,2,10,3,'1/4','SRD',{actions:['Swallow Small creatures']}),
  m('Giant Lizard','Large','Beast','unaligned',12,19,'3d10+3','30 ft, climb 30 ft',15,12,13,2,10,5,'1/4','SRD'),
  m('Giant Owl','Large','Beast','unaligned',12,19,'3d10+3','5 ft, fly 60 ft',13,15,12,8,13,10,'1/4','SRD',{traits:['Flyby','Keen Hearing/Sight']}),
  m('Giant Poisonous Snake','Medium','Beast','unaligned',14,11,'2d8+2','30 ft, swim 30 ft',10,18,13,2,10,3,'1/4','SRD',{actions:['Bite: 3d6 poison (DC 11 CON)']}),
  m('Giant Wolf Spider','Medium','Beast','unaligned',13,11,'2d8+2','40 ft, climb 40 ft',12,16,13,3,12,4,'1/4','SRD',{traits:['Web Walker'],actions:['Bite: 2d6 poison']}),
  m('Goblin','Small','Humanoid','neutral evil',15,7,'2d6','30 ft',8,14,10,10,8,8,'1/4','SRD',{acType:'leather, shield',traits:['Nimble Escape']}),
  m('Kenku','Medium','Humanoid','chaotic neutral',13,13,'3d8','30 ft',10,16,10,11,10,10,'1/4','SRD',{traits:['Ambusher','Mimicry']}),
  m('Mud Mephit','Small','Elemental','neutral evil',11,27,'6d6+6','20 ft, fly 20 ft, swim 20 ft',8,12,12,9,11,7,'1/4','SRD',{traits:['Death Burst'],actions:['Mud Breath (restrain)']}),
  m('Pseudodragon','Tiny','Dragon','neutral good',13,7,'2d4+2','15 ft, fly 60 ft',6,15,13,10,12,10,'1/4','SRD',{traits:['Magic Resistance','Telepathy 100 ft']}),
  m('Skeleton','Medium','Undead','lawful evil',13,13,'2d8+4','30 ft',10,14,15,6,8,5,'1/4','SRD',{acType:'armor scraps',traits:['Vulnerable to bludgeoning']}),
  m('Sprite','Tiny','Fey','neutral good',15,2,'1d4','10 ft, fly 40 ft',3,18,10,14,13,11,'1/4','SRD',{traits:['Invisibility','Heart Sight']}),
  m('Zombie','Medium','Undead','neutral evil',8,22,'3d8+9','20 ft',13,6,16,3,6,5,'1/4','SRD',{traits:['Undead Fortitude']}),

  // ============ CR 1/2 (100 XP) ============
  m('Ape','Medium','Beast','unaligned',12,19,'3d8+6','30 ft, climb 30 ft',16,14,14,6,12,7,'1/2','SRD',{actions:['Multiattack','Rock throw']}),
  m('Black Bear','Medium','Beast','unaligned',11,19,'3d8+6','40 ft, climb 30 ft',15,10,14,2,12,7,'1/2','SRD',{traits:['Keen Smell'],actions:['Multiattack']}),
  m('Cockatrice','Small','Monstrosity','unaligned',11,27,'6d6+6','20 ft, fly 40 ft',6,12,12,2,13,5,'1/2','SRD',{actions:['Petrifying bite (DC 11 CON)']}),
  m('Crocodile','Large','Beast','unaligned',12,19,'3d10+3','20 ft, swim 30 ft',15,10,13,2,10,5,'1/2','SRD',{traits:['Hold Breath'],actions:['Grapple bite']}),
  m('Darkmantle','Small','Monstrosity','unaligned',11,22,'5d6+5','10 ft, fly 30 ft',16,12,13,2,10,5,'1/2','SRD',{traits:['Darkness Aura 15 ft'],actions:['Crush']}),
  m('Dust Mephit','Small','Elemental','neutral evil',12,17,'5d6','30 ft, fly 30 ft',5,14,10,9,11,10,'1/2','SRD',{traits:['Death Burst (blind)'],actions:['Blinding Breath']}),
  m('Gas Spore','Large','Plant','unaligned',5,1,'1d10-4','0 ft, fly 10 ft (hover)',5,1,3,1,1,1,'1/2','SRD',{traits:['Death Burst (poison + infested)','Looks like a Beholder']}),
  m('Giant Goat','Large','Beast','unaligned',11,19,'3d10+3','40 ft',17,11,12,3,12,6,'1/2','SRD',{traits:['Charge (+2d4, knock prone)','Sure-Footed']}),
  m('Giant Sea Horse','Large','Beast','unaligned',13,16,'3d10','0 ft, swim 40 ft',12,15,11,2,12,5,'1/2','SRD',{traits:['Charge','Water Breathing']}),
  m('Giant Wasp','Medium','Beast','unaligned',12,13,'3d8','10 ft, fly 50 ft',10,14,10,1,10,3,'1/2','SRD',{actions:['Sting: 3d6 poison']}),
  m('Gray Ooze','Medium','Ooze','unaligned',8,22,'3d8+9','10 ft, climb 10 ft',12,6,16,1,6,2,'1/2','SRD',{traits:['Corrode Metal']}),
  m('Hobgoblin','Medium','Humanoid','lawful evil',18,11,'2d8+2','30 ft',13,12,12,10,10,9,'1/2','SRD',{acType:'chain mail, shield',traits:['Martial Advantage (+2d6)']}),
  m('Ice Mephit','Small','Elemental','neutral evil',11,21,'6d6','30 ft, fly 30 ft',7,13,10,9,11,12,'1/2','SRD',{traits:['Death Burst (cold)'],actions:['Frost Breath']}),
  m('Jackalwere','Medium','Shapechanger','chaotic evil',12,18,'4d8','40 ft',11,15,11,13,11,10,'1/2','SRD',{traits:['Sleep Gaze (DC 10 WIS)','Shapechanger']}),
  m('Lizardfolk','Medium','Humanoid','neutral',15,22,'4d8+4','30 ft, swim 30 ft',15,10,13,7,12,7,'1/2','SRD',{acType:'natural armor, shield',traits:['Hold Breath','Hungry Jaws']}),
  m('Magma Mephit','Small','Elemental','neutral evil',11,22,'5d6+5','30 ft, fly 30 ft',8,12,12,7,10,10,'1/2','SRD',{traits:['Death Burst (fire)'],actions:['Heat Metal at will']}),
  m('Orc','Medium','Humanoid','chaotic evil',13,15,'2d8+6','30 ft',16,12,16,7,11,10,'1/2','SRD',{acType:'hide armor',traits:['Aggressive']}),
  m('Rust Monster','Medium','Monstrosity','unaligned',14,27,'5d8+5','40 ft',13,12,13,2,13,6,'1/2','SRD',{traits:['Corrode metal']}),
  m('Sahuagin','Medium','Humanoid','lawful evil',12,22,'4d8+4','30 ft, swim 40 ft',13,11,12,12,13,9,'1/2','SRD',{traits:['Blood Frenzy','Shark Telepathy']}),
  m('Satyr','Medium','Fey','chaotic neutral',14,31,'7d8','40 ft',12,16,11,12,10,14,'1/2','SRD',{traits:['Magic Resistance']}),
  m('Scout','Medium','Humanoid','any',13,16,'3d8+3','30 ft',11,14,12,11,13,11,'1/2','SRD',{acType:'leather',traits:['Keen Hearing/Sight'],actions:['Multiattack']}),
  m('Shadow','Medium','Undead','chaotic evil',12,16,'3d8+3','40 ft',6,14,13,6,10,8,'1/2','SRD',{traits:['Amorphous','STR drain']}),
  m('Swarm of Insects','Medium','Beast','unaligned',12,22,'5d8','20 ft, climb 20 ft',3,13,10,1,7,1,'1/2','SRD',{traits:['Resistance B/P/S','Swarm']}),
  m('Swarm of Rats','Medium','Beast','unaligned',10,24,'7d8-7','30 ft',9,11,9,2,10,3,'1/2','SRD',{traits:['Keen Smell','Resistance B/P/S']}),
  m('Thug','Medium','Humanoid','any non-good',11,32,'5d8+10','30 ft',15,11,14,10,10,11,'1/2','SRD',{traits:['Pack Tactics'],actions:['Multiattack']}),
  m('Warhorse','Large','Beast','unaligned',11,19,'3d10+3','60 ft',18,12,13,2,12,7,'1/2','SRD',{traits:['Trampling Charge']}),
  m('Worg','Large','Monstrosity','neutral evil',13,26,'4d10+4','50 ft',16,13,13,7,11,8,'1/2','SRD',{traits:['Keen Hearing/Smell']}),
  m('Baaz Draconian','Medium','Dragon','chaotic evil',16,15,'2d8+6','30 ft',14,12,16,10,11,10,'1/2','DL',{acType:'chain shirt',traits:['Glide','Death Throes (Petrification)'],actions:['Multiattack (claw + spear)']}),

  // ============ CR 1 (200 XP) ============
  m('Animated Armor','Medium','Construct','unaligned',18,33,'6d8+6','25 ft',14,11,13,1,3,1,'1','SRD',{acType:'natural',traits:['Antimagic Susceptibility','False Appearance']}),
  m('Brown Bear','Large','Beast','unaligned',11,34,'4d10+12','40 ft, climb 30 ft',19,10,16,2,13,7,'1','SRD',{traits:['Keen Smell'],actions:['Multiattack']}),
  m('Bugbear','Medium','Humanoid','chaotic evil',16,27,'5d8+5','30 ft',15,14,13,8,11,9,'1','SRD',{acType:'hide armor, shield',traits:['Surprise Attack (+2d6)','Brute']}),
  m('Death Dog','Medium','Monstrosity','neutral evil',12,39,'6d8+12','40 ft',15,14,14,3,13,6,'1','SRD',{traits:['Two heads'],actions:['Disease bite']}),
  m('Dire Wolf','Large','Beast','unaligned',14,37,'5d10+10','50 ft',17,15,15,3,12,7,'1','SRD',{acType:'natural',traits:['Keen Hearing/Smell','Pack Tactics','Knockdown']}),
  m('Dryad','Medium','Fey','neutral',11,22,'5d8','30 ft',10,12,11,14,15,18,'1','SRD',{traits:['Magic Resistance','Tree Stride','Innate Spellcasting']}),
  m('Duergar','Medium','Humanoid','lawful evil',16,26,'4d8+8','25 ft',14,11,14,11,10,9,'1','SRD',{acType:'scale mail, shield',traits:['Enlarge','Invisibility','Sunlight Sensitivity']}),
  m('Fire Snake','Medium','Elemental','neutral evil',14,22,'5d6+5','30 ft',12,14,11,7,10,8,'1','SRD',{acType:'natural',traits:['Heated Body (1d6 fire)']}),
  m('Ghoul','Medium','Undead','chaotic evil',12,22,'5d8','30 ft',13,15,10,7,10,6,'1','SRD',{traits:['Paralyzing bite/claw (DC 10 CON, elves immune)']}),
  m('Giant Eagle','Large','Beast','neutral good',13,26,'4d10+4','10 ft, fly 80 ft',16,17,13,8,14,10,'1','SRD',{traits:['Keen Sight'],actions:['Multiattack']}),
  m('Giant Hyena','Large','Beast','unaligned',12,45,'6d10+12','50 ft',16,14,14,2,10,7,'1','SRD',{traits:['Rampage']}),
  m('Giant Spider','Large','Beast','unaligned',14,26,'4d10+4','30 ft, climb 30 ft',14,16,12,2,11,4,'1','SRD',{traits:['Web Sense','Web Walker'],actions:['Web (restrain)']}),
  m('Giant Toad','Large','Beast','unaligned',11,39,'6d8+12','20 ft, swim 40 ft',15,13,13,2,10,3,'1','SRD',{actions:['Swallow Medium or smaller']}),
  m('Giant Vulture','Large','Beast','neutral evil',10,22,'3d10+6','10 ft, fly 60 ft',15,10,15,6,12,7,'1','SRD',{traits:['Keen Sight/Smell','Pack Tactics']}),
  m('Goblin Boss','Small','Humanoid','neutral evil',17,21,'6d6','30 ft',10,14,10,10,8,10,'1','SRD',{acType:'chain shirt, shield',traits:['Redirect Attack']}),
  m('Half-Ogre','Large','Giant','chaotic evil',12,30,'4d10+8','30 ft',17,10,14,7,9,10,'1','SRD'),
  m('Hippogriff','Large','Monstrosity','unaligned',11,19,'3d10+3','40 ft, fly 60 ft',17,13,13,2,12,8,'1','SRD',{traits:['Keen Sight']}),
  m('Imp','Tiny','Fiend','lawful evil',13,10,'3d4+3','20 ft, fly 40 ft',6,17,13,11,12,14,'1','SRD',{traits:['Shapechanger','Devil\'s Sight 120 ft','Magic Resistance','Invisibility']}),
  m('Lion','Large','Beast','unaligned',12,26,'4d10+4','50 ft',17,15,13,3,12,8,'1','SRD',{traits:['Keen Smell','Pack Tactics','Pounce','Running Leap']}),
  m('Quasit','Tiny','Fiend','chaotic evil',13,7,'3d4','40 ft',5,17,10,7,10,10,'1','SRD',{traits:['Shapechanger','Magic Resistance','Scare','Invisibility']}),
  m('Scarecrow','Medium','Construct','chaotic evil',11,36,'8d8','30 ft',11,13,11,10,10,13,'1','SRD',{traits:['False Appearance','Terrifying Glare']}),
  m('Specter','Medium','Undead','chaotic evil',12,22,'5d8','0 ft, fly 50 ft (hover)',1,14,11,10,10,11,'1','SRD',{traits:['Incorporeal','Sunlight Sensitivity'],actions:['Life Drain (max HP reduction)']}),
  m('Spy','Medium','Humanoid','any',12,27,'6d8','30 ft',10,15,10,12,14,16,'1','SRD',{traits:['Cunning Action','Sneak Attack 2d6']}),
  m('Swarm of Quippers','Medium','Beast','unaligned',13,28,'8d8-8','0 ft, swim 40 ft',13,16,9,1,7,2,'1','SRD',{traits:['Blood Frenzy','Swarm']}),
  m('Tiger','Large','Beast','unaligned',12,37,'5d10+10','40 ft',17,15,14,3,12,8,'1','SRD',{traits:['Keen Smell','Pounce']}),
  m('Irda Seeker','Medium','Humanoid','neutral',13,22,'4d8+4','30 ft',10,14,12,14,13,16,'1','DL',{traits:['Shapeshifting','Disguise Self at will','Minor Illusion']}),
  m('Thanoi Hunter','Medium','Monstrosity','neutral evil',13,30,'4d8+12','30 ft, swim 30 ft',16,12,15,6,7,9,'1','DL',{traits:['Cold Resistance','Ice Camouflage'],actions:['Tusk gore','Harpoon']}),
  m('Kyrie','Medium','Humanoid','neutral good',13,22,'4d8+4','30 ft, fly 50 ft',12,16,12,10,14,11,'1','DL',{traits:['Flight','Keen Sight']}),
  m('Bozak Draconian','Medium','Dragon','lawful evil',15,84,'13d8+26','30 ft',15,16,14,16,12,10,'1','DL',{acType:'studded leather',traits:['Glide','Death Throes (Explosive Bones)','Spellcasting (4th-level wizard)'],actions:['Multiattack (shortsword + claw)']}),

  // ============ CR 2 (450 XP) ============
  m('Allosaurus','Large','Beast','unaligned',13,51,'6d10+18','60 ft',19,13,17,2,12,5,'2','SRD',{acType:'natural',traits:['Pounce']}),
  m('Awakened Tree','Huge','Plant','unaligned',13,59,'7d12+14','20 ft',19,6,15,10,10,7,'2','SRD',{acType:'natural',traits:['False Appearance','Vulnerable to fire']}),
  m('Bandit Captain','Medium','Humanoid','any non-lawful',15,65,'10d8+20','30 ft',15,16,14,14,11,14,'2','SRD',{acType:'studded leather',actions:['Multiattack (3 attacks)','Parry']}),
  m('Berserker','Medium','Humanoid','any chaotic',13,67,'9d8+27','30 ft',16,12,17,9,11,9,'2','SRD',{acType:'hide armor',traits:['Reckless']}),
  m('Druid NPC','Medium','Humanoid','any',11,27,'5d8+5','30 ft',10,12,13,12,15,11,'2','SRD',{traits:['Spellcasting (4th-level druid)']}),
  m('Ettercap','Medium','Monstrosity','neutral evil',13,44,'8d8+8','30 ft, climb 30 ft',14,15,13,7,12,8,'2','SRD',{acType:'natural',traits:['Spider Climb','Web Sense','Web Walker']}),
  m('Gargoyle','Medium','Elemental','chaotic evil',15,52,'7d8+21','30 ft, fly 60 ft',15,11,16,6,11,7,'2','SRD',{acType:'natural',traits:['Resistance nonmagical B/P/S','False Appearance']}),
  m('Gelatinous Cube','Large','Ooze','unaligned',6,84,'8d10+40','15 ft',14,3,20,1,6,1,'2','SRD',{traits:['Transparent!'],actions:['Engulf (DC 12 DEX, 3d6 acid/turn)']}),
  m('Ghast','Medium','Undead','chaotic evil',13,36,'8d8','30 ft',16,17,10,11,10,8,'2','SRD',{traits:['Stench (DC 10 CON)','Paralyzing claw']}),
  m('Giant Boar','Large','Beast','unaligned',12,42,'5d10+15','40 ft',17,10,16,2,7,5,'2','SRD',{acType:'natural',traits:['Charge (+2d6, prone)','Relentless']}),
  m('Giant Constrictor Snake','Huge','Beast','unaligned',12,60,'8d12+8','30 ft, swim 30 ft',19,14,12,1,10,3,'2','SRD',{actions:['Constrict grapple 2d8+4']}),
  m('Giant Elk','Huge','Beast','unaligned',14,42,'5d12+10','60 ft',19,16,14,7,14,10,'2','SRD',{acType:'natural',traits:['Charge (+2d6, prone)']}),
  m('Gibbering Mouther','Medium','Aberration','neutral',9,67,'9d8+27','10 ft, swim 10 ft',10,8,16,3,10,6,'2','SRD',{traits:['Gibbering (DC 10 WIS or confused)','Difficult terrain aura']}),
  m('Griffon','Large','Monstrosity','unaligned',12,59,'7d10+21','30 ft, fly 80 ft',18,15,16,2,13,8,'2','SRD',{traits:['Keen Sight']}),
  m('Hunter Shark','Large','Beast','unaligned',12,45,'6d10+12','0 ft, swim 40 ft',18,13,15,1,10,4,'2','SRD',{traits:['Blood Frenzy','Water Breathing']}),
  m('Intellect Devourer','Tiny','Aberration','lawful evil',12,21,'6d4+6','40 ft',6,14,13,12,11,10,'2','SRD',{actions:['Devour Intellect (3d6 psychic, stun)','Body Thief']}),
  m('Mimic','Medium','Monstrosity','neutral',12,58,'9d8+18','15 ft',17,12,15,5,13,8,'2','SRD',{traits:['Shapechanger','Adhesive'],actions:['Grapple bite']}),
  m('Minotaur Skeleton','Large','Undead','lawful evil',12,67,'9d10+18','40 ft',18,11,15,6,8,5,'2','SRD',{acType:'natural',actions:['Charge (+3d8, prone)']}),
  m('Ogre','Large','Giant','chaotic evil',11,59,'7d10+21','40 ft',19,8,16,5,7,7,'2','SRD',{acType:'hide armor'}),
  m('Pegasus','Large','Celestial','chaotic good',12,59,'7d10+21','60 ft, fly 90 ft',18,15,16,10,15,13,'2','SRD'),
  m('Plesiosaurus','Large','Beast','unaligned',13,68,'8d12+16','20 ft, swim 40 ft',18,15,16,2,12,5,'2','SRD',{acType:'natural',traits:['Hold Breath 1 hr']}),
  m('Polar Bear','Large','Beast','unaligned',12,42,'5d10+15','40 ft, swim 30 ft',20,10,16,2,13,7,'2','SRD',{acType:'natural',traits:['Keen Smell'],actions:['Multiattack']}),
  m('Priest','Medium','Humanoid','any',13,27,'5d8+5','30 ft',10,10,12,13,16,13,'2','SRD',{acType:'chain shirt',traits:['Spellcasting (5th-level cleric)'],actions:['Divine Eminence (+1d4 radiant)']}),
  m('Rhinoceros','Large','Beast','unaligned',11,45,'6d10+12','40 ft',21,8,15,2,12,6,'2','SRD',{acType:'natural',traits:['Charge (+2d8, prone)']}),
  m('Rug of Smothering','Large','Construct','unaligned',12,33,'6d10','10 ft',17,14,10,1,3,1,'2','SRD',{traits:['Antimagic Susceptibility'],actions:['Smother (grapple + restrain + blind)']}),
  m('Saber-Toothed Tiger','Large','Beast','unaligned',12,52,'7d10+14','40 ft',18,14,15,3,12,8,'2','SRD',{traits:['Keen Smell','Pounce']}),
  m('Swarm of Poisonous Snakes','Medium','Beast','unaligned',14,36,'8d8','30 ft, swim 30 ft',8,18,11,1,10,3,'2','SRD',{actions:['3d6 piercing + 4d6 poison']}),
  m('Wererat','Medium','Humanoid','lawful evil',12,33,'6d8+6','30 ft',10,15,12,11,10,8,'2','SRD',{traits:['Shapechanger','Immunity to nonmagical/nonsilvered B/P/S']}),
  m('Will-o\'-Wisp','Tiny','Undead','chaotic evil',19,22,'9d4','0 ft, fly 50 ft (hover)',1,28,10,13,14,11,'2','SRD',{traits:['Consume Life','Ephemeral','Invisibility'],actions:['Shock: 2d8 lightning']}),
  m('Nevermind Gnome Inventor','Small','Humanoid','chaotic neutral',14,27,'5d6+10','25 ft',8,16,14,18,10,12,'2','DL',{traits:['Unstable gadgets'],actions:['Invention attack (random effect)','Tools as weapons']}),
  m('Huldrefolk','Medium','Fey','neutral',13,26,'4d8+8','30 ft',12,16,14,11,14,16,'2','DL',{traits:['Illusory beauty','True form wooden/bark-like']}),
  m('Thanoi','Medium','Monstrosity','neutral evil',14,52,'8d8+16','30 ft, swim 30 ft',16,12,15,6,7,9,'2','DL',{acType:'natural armor',traits:['Cold Immunity','Fire Resistance','Hold Breath 30 min'],actions:['Multiattack (greatclub + tusks)']}),

  // ============ CR 3 (700 XP) ============
  m('Basilisk','Medium','Monstrosity','unaligned',15,52,'8d8+16','20 ft',16,8,15,2,8,7,'3','SRD',{acType:'natural',actions:['Petrifying Gaze (DC 12 CON)']}),
  m('Bearded Devil','Medium','Fiend','lawful evil',13,52,'8d8+16','30 ft',16,15,15,9,11,11,'3','SRD',{acType:'natural',traits:['Devil\'s Sight','Magic Resistance'],actions:['Beard (prevent HP regain)']}),
  m('Doppelganger','Medium','Monstrosity','neutral',14,52,'8d8+16','30 ft',11,18,14,11,12,14,'3','SRD',{traits:['Shapechanger','Read Thoughts','Ambusher']}),
  m('Giant Scorpion','Large','Beast','unaligned',15,52,'7d10+14','40 ft',15,13,15,1,9,3,'3','SRD',{acType:'natural',actions:['Multiattack (2 claws + sting)','4d10 poison']}),
  m('Green Hag','Medium','Fey','neutral evil',17,82,'11d8+33','30 ft',18,12,16,13,14,14,'3','SRD',{acType:'natural',traits:['Amphibious','Mimicry','Invisible Passage','Innate Spellcasting']}),
  m('Hell Hound','Medium','Fiend','lawful evil',15,45,'7d8+14','50 ft',17,12,14,6,13,6,'3','SRD',{acType:'natural',traits:['Keen Hearing/Smell','Pack Tactics'],actions:['Fire Breath (6d6, 15 ft cone)']}),
  m('Killer Whale','Huge','Beast','unaligned',12,90,'12d12+12','0 ft, swim 60 ft',19,10,13,3,12,7,'3','SRD',{acType:'natural',traits:['Echolocation','Hold Breath','Keen Sight']}),
  m('Knight','Medium','Humanoid','any',18,52,'8d8+16','30 ft',16,11,14,11,11,15,'3','SRD',{acType:'plate',traits:['Brave','Leadership']}),
  m('Manticore','Large','Monstrosity','lawful evil',14,68,'8d10+24','30 ft, fly 50 ft',17,16,17,7,12,8,'3','SRD',{acType:'natural',actions:['Tail Spikes (150/600 ft, 24 spikes)']}),
  m('Minotaur','Large','Monstrosity','chaotic evil',14,76,'9d10+27','40 ft',18,11,16,6,16,9,'3','SRD',{acType:'natural',traits:['Charge (+3d8, prone)','Labyrinthine Recall','Reckless']}),
  m('Mummy','Medium','Undead','lawful evil',11,58,'9d8+18','20 ft',16,8,15,6,10,12,'3','SRD',{acType:'natural',actions:['Dreadful Glare','Rotting Fist (curse: can\'t regain HP)']}),
  m('Nightmare','Large','Fiend','neutral evil',13,68,'8d10+24','60 ft, fly 90 ft',18,15,16,10,13,15,'3','SRD',{acType:'natural',traits:['Ethereal Stride','Illumination (fire)']}),
  m('Owlbear','Large','Monstrosity','unaligned',13,59,'7d10+21','40 ft',20,12,17,3,12,7,'3','SRD',{acType:'natural',traits:['Keen Sight/Smell'],actions:['Multiattack (beak + claws)']}),
  m('Phase Spider','Large','Monstrosity','unaligned',13,32,'5d10+5','30 ft, climb 30 ft',15,15,12,6,10,6,'3','SRD',{acType:'natural',traits:['Ethereal Jaunt'],actions:['Bite: 4d8 poison']}),
  m('Spectator','Medium','Aberration','lawful neutral',14,39,'6d8+12','0 ft, fly 30 ft (hover)',8,14,14,13,14,11,'3','SRD',{traits:['Eye Rays (4 types)','Spell Reflection']}),
  m('Veteran','Medium','Humanoid','any',17,58,'9d8+18','30 ft',16,13,14,10,11,10,'3','SRD',{acType:'splint',actions:['Multiattack (longsword x2 + shortsword)']}),
  m('Water Weird','Large','Elemental','neutral',13,58,'9d8+18','0 ft, swim 60 ft',17,16,13,11,10,10,'3','SRD',{traits:['Water Bound','Invisible in Water'],actions:['Constrict (grapple + prone)']}),
  m('Werewolf','Medium','Humanoid','chaotic evil',12,58,'9d8+18','30 ft (40 ft wolf)',15,13,14,10,11,10,'3','SRD',{traits:['Shapechanger','Immune to nonmagical/nonsilvered B/P/S']}),
  m('Wight','Medium','Undead','neutral evil',14,45,'6d8+18','30 ft',15,14,16,10,13,15,'3','SRD',{acType:'studded leather',traits:['Sunlight Sensitivity'],actions:['Life Drain (max HP reduction)','Create zombies']}),
  m('Winter Wolf','Large','Monstrosity','neutral evil',13,75,'10d10+20','50 ft',18,13,14,7,12,8,'3','SRD',{acType:'natural',traits:['Pack Tactics'],actions:['Cold Breath (4d8, 15 ft cone)']}),
  m('Shadowperson','Medium','Fey','neutral',14,45,'7d8+14','30 ft',10,18,14,14,16,12,'3','DL',{traits:['Phase through solid objects','Exist between material and ethereal planes']}),
  m('Kapak Draconian','Medium','Dragon','lawful evil',15,58,'9d8+18','30 ft',11,16,14,13,11,10,'3','DL',{acType:'studded leather',traits:['Assassinate','Evasion','Sneak Attack 2d6','Death Throes (Acid Pool)'],actions:['Multiattack (2 shortswords)','Poison (DC 15 CON, 3d6)']}),

  // ============ CR 4 (1,100 XP) ============
  m('Banshee','Medium','Undead','chaotic evil',12,58,'13d8','0 ft, fly 40 ft (hover)',1,14,10,12,11,17,'4','SRD',{traits:['Horrifying Visage'],actions:['Wail (DC 13 CON or drop to 0 HP, 30 ft)']}),
  m('Black Pudding','Large','Ooze','unaligned',7,85,'10d10+30','20 ft, climb 20 ft',16,5,16,1,6,1,'4','SRD',{traits:['Corrosive Form','Split (lightning/slashing)']}),
  m('Chuul','Large','Aberration','chaotic evil',16,93,'11d10+33','30 ft, swim 30 ft',19,10,16,5,11,5,'4','SRD',{acType:'natural',traits:['Detect Magic sense'],actions:['Paralyzing tentacles (DC 13 CON)']}),
  m('Couatl','Medium','Celestial','lawful good',19,97,'13d8+39','30 ft, fly 90 ft',16,20,17,18,20,18,'4','SRD',{traits:['Magic Resistance','Innate Spellcasting (7th level)','Shielded Mind']}),
  m('Elephant','Huge','Beast','unaligned',12,76,'8d12+24','40 ft',22,9,17,3,11,6,'4','SRD',{acType:'natural',traits:['Trampling Charge (+3d10, prone)']}),
  m('Ettin','Large','Giant','chaotic evil',12,85,'10d10+30','40 ft',21,8,17,6,10,8,'4','SRD',{acType:'natural',traits:['Two Heads','Wakeful']}),
  m('Ghost','Medium','Undead','any',11,45,'10d8','0 ft, fly 40 ft (hover)',7,13,10,10,12,17,'4','SRD',{traits:['Ethereal Sight','Incorporeal','Horrifying Visage','Possession'],actions:['Withering Touch (aging)']}),
  m('Lamia','Large','Monstrosity','chaotic evil',13,97,'13d10+26','30 ft',16,13,15,14,15,16,'4','SRD',{acType:'natural',traits:['Intoxicating Touch','Innate Spellcasting']}),
  m('Red Dragonspawn Veteran','Medium','Monstrosity','chaotic evil',18,65,'10d8+20','30 ft, fly 40 ft',16,13,14,10,11,14,'4','DL',{acType:'plate',traits:['Fire Resistance','Blindsight 10 ft','Death Throes (4d6 fire)'],actions:['Multiattack (2 longsword)','Fire Breath (Recharge 5-6, 7d6)']}),
  m('Fetch','Medium','Shapechanger','neutral evil',14,52,'8d8+16','30 ft',12,18,14,14,12,16,'4','DL',{traits:['Shapechanger','Perfect mimicry of specific person']}),
  m('Irda Veil Keeper','Medium','Humanoid','neutral',15,55,'10d8+10','30 ft',10,14,12,18,16,18,'4','DL',{traits:['Powerful shapeshifting','Greater Illusion','Invisibility']}),
  m('Spectral Minion','Medium','Undead','lawful evil',14,52,'8d8+16','0 ft, fly 40 ft (hover)',14,16,14,10,12,10,'4','DL',{traits:['Cannot leave haunt'],actions:['Strength drain touch']}),

  // ============ CR 5 (1,800 XP) ============
  m('Air Elemental','Large','Elemental','neutral',15,90,'12d10+24','0 ft, fly 90 ft (hover)',14,20,14,6,10,6,'5','SRD',{traits:['Air Form'],actions:['Whirlwind (DC 13 STR)']}),
  m('Barbed Devil','Medium','Fiend','lawful evil',15,110,'13d8+52','30 ft',16,17,18,12,14,14,'5','SRD',{acType:'natural',actions:['Hurl Flame (3d6 fire, 150 ft)','Barbed Hide (1d10 on grapple)']}),
  m('Beholder Zombie','Large','Undead','neutral evil',15,93,'11d10+33','0 ft, fly 20 ft (hover)',10,8,16,3,8,5,'5','SRD',{acType:'natural',traits:['Eye Rays (random)']}),
  m('Bulette','Large','Monstrosity','unaligned',17,94,'9d10+45','40 ft, burrow 40 ft',19,11,21,2,10,5,'5','SRD',{acType:'natural',traits:['Standing Leap 30 ft'],actions:['Deadly Leap (AoE on landing)']}),
  m('Earth Elemental','Large','Elemental','neutral',17,126,'12d10+60','30 ft, burrow 30 ft',20,8,20,5,10,5,'5','SRD',{acType:'natural',traits:['Earth Glide','Siege Monster']}),
  m('Fire Elemental','Large','Elemental','neutral',13,102,'12d10+36','50 ft',10,17,16,6,10,7,'5','SRD',{traits:['Fire Form','Water Susceptibility']}),
  m('Flesh Golem','Medium','Construct','neutral',9,93,'11d8+44','30 ft',19,9,18,6,10,5,'5','SRD',{traits:['Lightning heals it!','Berserk below half HP','Immune to nonmagical B/P/S']}),
  m('Giant Crocodile','Huge','Beast','unaligned',14,85,'9d12+27','30 ft, swim 50 ft',21,9,17,2,10,7,'5','SRD',{acType:'natural',actions:['Multiattack','Grapple bite']}),
  m('Gorgon','Large','Monstrosity','unaligned',19,114,'12d10+48','40 ft',20,11,18,2,12,7,'5','SRD',{acType:'natural',actions:['Petrifying Breath (DC 13 CON, 30 ft cone)']}),
  m('Half-Red Dragon Veteran','Medium','Humanoid','any',18,65,'10d8+20','30 ft',16,13,14,10,11,10,'5','SRD',{acType:'plate',traits:['Fire Resistance'],actions:['Fire Breath (6d6, 15 ft cone)']}),
  m('Hill Giant','Huge','Giant','chaotic evil',13,105,'10d12+40','40 ft',21,8,19,5,9,6,'5','SRD',{acType:'natural',actions:['Rock throw 60/240 ft']}),
  m('Otyugh','Large','Aberration','neutral',14,114,'12d10+48','30 ft',16,11,19,6,13,6,'5','SRD',{acType:'natural',actions:['Tentacle grapple','Disease bite (DC 15 CON)']}),
  m('Red Slaad','Large','Aberration','chaotic neutral',14,93,'11d8+44','30 ft',16,12,16,6,6,7,'5','SRD',{acType:'natural',traits:['Regenerate 10 HP/turn'],actions:['Claw implants egg']}),
  m('Revenant','Medium','Undead','neutral',13,136,'16d8+64','30 ft',18,14,18,13,16,18,'5','SRD',{traits:['Relentless','Vengeful Tracker']}),
  m('Shambling Mound','Large','Plant','unaligned',15,136,'16d10+48','20 ft, swim 20 ft',18,8,16,5,10,5,'5','SRD',{acType:'natural',traits:['Lightning Absorption'],actions:['Engulf']}),
  m('Troll','Large','Giant','chaotic evil',15,84,'8d10+40','30 ft',18,13,20,7,9,7,'5','SRD',{acType:'natural',traits:['Regeneration 10/turn (stopped by acid/fire)','Keen Smell']}),
  m('Unicorn','Large','Celestial','lawful good',12,67,'9d10+18','50 ft',18,14,15,11,17,16,'5','SRD',{traits:['Healing Touch 2d8+2 (3/day)','Teleport 1/day','Innate Spellcasting'],legendary:true}),
  m('Water Elemental','Large','Elemental','neutral',14,114,'12d10+48','30 ft, swim 90 ft',18,14,18,5,10,8,'5','SRD',{traits:['Water Form'],actions:['Whelm (grapple + suffocate)']}),
  m('Wraith','Medium','Undead','neutral evil',13,67,'9d8+27','0 ft, fly 60 ft (hover)',6,16,16,12,14,15,'5','SRD',{actions:['Life Drain (max HP reduction)','Create specters']}),
  m('Xorn','Medium','Elemental','neutral',19,73,'7d8+42','20 ft, burrow 20 ft',17,10,22,11,10,11,'5','SRD',{acType:'natural',traits:['Burrow through stone','Treasure Sense 60 ft']}),
  m('Nevermind Gnome Mastermind','Small','Humanoid','chaotic neutral',15,52,'10d6+20','25 ft',10,16,14,20,12,14,'5','DL',{traits:['Multiple gadgets','Clockwork constructs'],actions:['Explosive devices']}),
  m('Traag Draconian','Large','Dragon','chaotic evil',16,90,'10d10+35','30 ft',20,10,16,3,8,6,'5','DL',{acType:'natural armor',traits:['Failed draconian experiment','Berserk fury','Resistant to most damage']}),
  m('Tarmak','Medium','Humanoid','lawful evil',16,82,'11d8+33','30 ft',18,14,16,12,13,14,'5','DL',{acType:'breastplate',traits:['Blue-skinned warriors from eastern lands']}),
  m('Phaethon','Medium','Elemental','chaotic evil',14,75,'10d8+30','30 ft, fly 40 ft',14,18,16,8,12,10,'5','DL',{traits:['Fire-being from Lords of Doom','Fire Immunity']}),

  // ============ CR 6 (2,300 XP) ============
  m('Chimera','Large','Monstrosity','chaotic evil',14,114,'12d10+48','30 ft, fly 60 ft',19,11,19,3,14,10,'6','SRD',{acType:'natural',actions:['Fire Breath (8d8, 15 ft cone)','Multiattack (3 heads)']}),
  m('Drider','Large','Monstrosity','chaotic evil',19,123,'13d10+52','30 ft, climb 30 ft',16,16,18,13,14,12,'6','SRD',{acType:'natural',traits:['Innate Spellcasting','Spider Climb']}),
  m('Medusa','Medium','Monstrosity','lawful evil',15,127,'17d8+51','30 ft',10,15,16,12,13,15,'6','SRD',{acType:'natural',actions:['Petrifying Gaze (DC 14 CON)','Snake Hair (6d6 poison)']}),
  m('Wyvern','Large','Monstrosity','unaligned',13,110,'13d10+39','20 ft, fly 80 ft',19,10,16,5,12,6,'6','SRD',{acType:'natural',actions:['Multiattack (bite + claws + stinger: 2d6+4d6 poison)']}),
  m('Young White Dragon','Large','Dragon','chaotic evil',17,133,'14d10+56','30 ft, burrow 20 ft, fly 80 ft, swim 40 ft',18,10,18,6,11,12,'6','SRD',{acType:'natural',actions:['Cold Breath (10d8, 30 ft cone)'],traits:['Ice Walk']}),
  m('Foresworn','Medium','Undead','lawful evil',17,78,'12d8+24','30 ft',16,14,14,12,14,16,'6','DL',{traits:['Cursed Solamnic knights','Resistance to nonmagical weapons'],actions:['Multiattack with spectral longswords']}),
  m('Fireshadow','Medium','Undead','chaotic evil',14,71,'11d8+22','40 ft, fly 40 ft',6,18,14,12,14,16,'6','DL',{traits:['Born from a mage who died by fire','Only hit by magic or cold'],actions:['Fire touch']}),
  m('Tylor','Large','Monstrosity','unaligned',15,95,'10d10+40','40 ft',20,12,18,3,10,6,'6','DL',{acType:'natural',traits:['Giant dragonlike lizard','Used as draconian mounts']}),

  // ============ CR 7 (2,900 XP) ============
  m('Young Black Dragon','Large','Dragon','chaotic evil',18,127,'15d10+45','30 ft, fly 80 ft, swim 40 ft',19,14,17,12,11,15,'7','SRD',{acType:'natural',actions:['Acid Breath (11d8, 30 ft line)'],traits:['Amphibious']}),
  m('Shield Guardian','Large','Construct','unaligned',17,142,'15d10+60','30 ft',18,8,18,7,10,3,'7','SRD',{traits:['Bound creature','Shield reaction','Spell Storing','Regeneration 10/turn']}),
  m('Stone Giant','Huge','Giant','neutral',17,126,'11d12+55','40 ft',23,15,20,10,12,9,'7','SRD',{acType:'natural',actions:['Rock throw 60/240','Rock Catching']}),
  m('Dream Eater','Medium','Fiend','neutral evil',15,85,'10d8+40','30 ft, fly 40 ft',12,16,18,16,16,18,'7','DL',{traits:['Feeds on dreams'],actions:['Sleep aura (DC 15 WIS)','Dream invasion (psychic damage)']}),
  m('Noble Draconian','Medium','Dragon','lawful evil',17,105,'14d8+42','30 ft, fly 30 ft',16,14,16,16,14,16,'7','DL',{traits:['Spellcasting','Leadership abilities','Command lesser draconians']}),

  // ============ CR 8 (3,900 XP) ============
  m('Young Green Dragon','Large','Dragon','lawful evil',18,136,'16d10+48','40 ft, fly 80 ft, swim 40 ft',19,12,17,16,13,15,'8','SRD',{acType:'natural',actions:['Poison Breath (12d6, 30 ft cone)'],traits:['Amphibious']}),
  m('Frost Giant','Huge','Giant','neutral evil',15,138,'12d12+60','40 ft',23,9,21,9,10,12,'8','SRD',{acType:'patchwork armor',actions:['Rock throw 60/240']}),
  m('Hydra','Huge','Monstrosity','unaligned',15,172,'15d12+75','30 ft, swim 30 ft',20,12,20,2,10,7,'8','SRD',{acType:'natural',traits:['5 heads (regrow 2 unless fire)','Reactive Heads']}),
  m('Spirit Naga','Large','Monstrosity','chaotic evil',15,75,'10d10+20','40 ft',18,17,14,16,15,16,'8','SRD',{acType:'natural',traits:['Rejuvenation (1d6 days)','7th-level spellcasting']}),
  m('Forest Master','Large','Celestial','neutral good',16,105,'14d10+28','50 ft',18,14,14,16,20,20,'8','DL',{traits:['Powerful unicorn of Darken Wood','Telepathy 120 ft','Innate spellcasting (healing, teleportation)','Speak with all beasts']}),
  m('Skeletal Knight','Medium','Undead','lawful evil',18,97,'13d8+39','30 ft',18,12,16,12,14,16,'8','DL',{acType:'plate',traits:['Soth\'s retinue of 13 cursed knights'],actions:['Spectral flaming swords']}),

  // ============ CR 9 (5,000 XP) ============
  m('Young Blue Dragon','Large','Dragon','lawful evil',18,152,'16d10+64','30 ft, burrow 20 ft, fly 80 ft',21,10,19,14,13,17,'9','SRD',{acType:'natural',actions:['Lightning Breath (10d10, 60 ft line)']}),
  m('Aurak Draconian','Medium','Dragon','lawful evil',15,84,'13d8+26','30 ft',10,14,14,17,12,11,'9','DL',{traits:['Magic Resistance','13th-level wizard spellcasting','Death Throes (Burning Frenzy, 4d6 force)'],actions:['Dagger','Claw']}),
  m('Sivak Draconian','Medium','Dragon','lawful evil',18,143,'22d8+44','30 ft, fly 30 ft',20,15,14,10,14,12,'9','DL',{acType:'plate',traits:['Steal Appearance','Indomitable (2/day)','Second Wind (1/day)','Death Throes (Death Face)'],actions:['Multiattack (2 greatsword + tail)']}),

  // ============ CR 10 (5,900 XP) ============
  m('Young Red Dragon','Large','Dragon','chaotic evil',18,178,'17d10+85','40 ft, climb 40 ft, fly 80 ft',23,10,21,14,11,19,'10','SRD',{acType:'natural',actions:['Fire Breath (16d6, 30 ft cone)']}),
  m('Aboleth','Large','Aberration','lawful evil',17,135,'18d10+36','10 ft, swim 40 ft',21,9,15,18,15,18,'10','SRD',{acType:'natural',traits:['Mucous Cloud','Probing Telepathy'],actions:['Tentacle disease','Enslave (DC 14 WIS)']}),
  m('Deva','Medium','Celestial','lawful good',17,136,'16d8+64','30 ft, fly 90 ft',18,18,18,17,20,20,'10','SRD',{acType:'natural',traits:['Magic Resistance','Change Shape'],actions:['Healing Touch 4d8+2']}),
  m('Guardian Naga','Large','Monstrosity','lawful good',18,127,'15d10+45','40 ft',19,18,16,16,19,18,'10','SRD',{acType:'natural',traits:['Rejuvenation','11th-level spellcasting'],actions:['Spit poison 15 ft']}),
  m('Stone Golem','Large','Construct','unaligned',17,178,'17d10+85','30 ft',22,9,20,3,11,1,'10','SRD',{traits:['Slow (DC 17 WIS)','Immune to nonmagical B/P/S','Magic Resistance']}),
  m('Young Gold Dragon','Large','Dragon','lawful good',18,178,'17d10+85','40 ft, fly 80 ft, swim 40 ft',23,14,21,16,13,20,'10','SRD',{acType:'natural',actions:['Fire Breath (10d10, 30 ft cone)','Weakening Breath']}),

  // ============ CR 11 (7,200 XP) ============
  m('Behir','Huge','Monstrosity','neutral evil',17,168,'16d12+64','50 ft, climb 40 ft',23,16,18,7,14,12,'11','SRD',{acType:'natural',actions:['Lightning Breath (12d10, 20 ft line)','Constrict','Swallow']}),
  m('Dao','Large','Elemental','neutral evil',18,187,'15d10+105','30 ft, burrow 30 ft, fly 30 ft',23,12,24,12,13,14,'11','SRD',{acType:'natural',traits:['Sure-Footed','Innate Spellcasting','Earth Glide']}),
  m('Djinni','Large','Elemental','chaotic good',17,161,'14d10+84','30 ft, fly 90 ft',21,15,22,15,16,20,'11','SRD',{acType:'natural',traits:['Innate Spellcasting (plane shift, creation, conjure elemental)']}),
  m('Efreeti','Large','Elemental','lawful evil',17,200,'16d10+112','40 ft, fly 60 ft',22,12,24,16,15,16,'11','SRD',{acType:'natural',traits:['Innate Spellcasting (plane shift, wall of fire)']}),
  m('Gynosphinx','Large','Monstrosity','lawful neutral',17,136,'16d10+48','40 ft, fly 60 ft',18,15,16,18,18,18,'11','SRD',{traits:['Inscrutable','Magic Weapons','Innate Spellcasting'],legendary:true}),
  m('Horned Devil','Large','Fiend','lawful evil',18,178,'17d10+85','20 ft, fly 60 ft',22,17,21,12,16,17,'11','SRD',{acType:'natural',traits:['Devil\'s Sight','Magic Resistance'],actions:['Infernal wound (bleed 2d10/turn)']}),
  m('Remorhaz','Huge','Monstrosity','unaligned',17,195,'17d12+85','30 ft, burrow 20 ft',24,13,21,4,10,5,'11','SRD',{acType:'natural',traits:['Heated Body (3d6 fire)'],actions:['Swallow']}),
  m('Roc','Gargantuan','Monstrosity','unaligned',15,248,'16d20+80','20 ft, fly 120 ft',28,10,20,3,10,9,'11','SRD',{traits:['Keen Sight'],actions:['Grapple with talons']}),
  m('Ogre Titan','Large','Giant','neutral evil',18,189,'18d10+90','40 ft',20,16,20,16,15,19,'11','DL',{acType:'natural',traits:['Awe Presence (DC 17 WIS)','Magic Resistance','6th-level wizard spellcasting'],actions:['Multiattack (3 greatsword)']}),

  // ============ CR 13-14 (10,000-11,500 XP) ============
  m('Adult White Dragon','Huge','Dragon','chaotic evil',18,200,'16d12+96','30 ft, burrow 30 ft, fly 80 ft, swim 40 ft',22,10,22,8,12,12,'13','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Cold Breath (12d8, 60 ft cone)'],legendary:true}),
  m('Beholder','Large','Aberration','lawful evil',18,180,'19d10+76','0 ft, fly 20 ft (hover)',10,14,18,17,15,17,'13','SRD',{acType:'natural',traits:['Antimagic Cone (central eye)','10 Eye Rays'],actions:['Eye Rays'],legendary:true}),
  m('Vampire','Medium','Undead','lawful evil',16,144,'17d8+68','30 ft',18,18,18,17,15,18,'13','SRD',{acType:'natural',traits:['Shapechanger','Regeneration 20/turn','Children of the Night','Misty Escape'],actions:['Charm','Bite (necrotic + max HP drain)'],legendary:true}),
  m('Adult Black Dragon','Huge','Dragon','chaotic evil',19,195,'17d12+85','30 ft, fly 80 ft, swim 40 ft',23,14,21,14,13,17,'14','SRD',{acType:'natural',traits:['Frightful Presence','Amphibious'],actions:['Acid Breath (12d8, 60 ft line)'],legendary:true}),
  m('Onyx (Khisanth)','Huge','Dragon','chaotic evil',19,195,'17d12+85','30 ft, fly 80 ft, swim 40 ft',23,14,21,14,13,17,'14','DL',{acType:'natural',traits:['Adult Black Dragon','Guarded the Disks of Mishakal in Xak Tsaroth'],actions:['Acid Breath (12d8, 60 ft line)'],legendary:true}),

  // ============ CR 15-16 ============
  m('Adult Green Dragon','Huge','Dragon','lawful evil',19,207,'18d12+90','40 ft, fly 80 ft, swim 40 ft',23,12,21,18,15,17,'15','SRD',{acType:'natural',traits:['Frightful Presence','Amphibious'],actions:['Poison Breath (16d6, 60 ft cone)'],legendary:true}),
  m('Mummy Lord','Medium','Undead','lawful evil',17,97,'13d8+39','20 ft',18,10,17,11,18,16,'15','SRD',{traits:['Rejuvenation','10th-level spellcasting'],actions:['Dreadful Glare','Rotting Fist'],legendary:true}),
  m('Purple Worm','Gargantuan','Monstrosity','unaligned',18,247,'15d20+90','50 ft, burrow 30 ft',28,7,22,1,8,4,'15','SRD',{acType:'natural',actions:['Swallow (6d6 acid)','Tail Stinger (3d6+4d6 poison)']}),
  m('Adult Blue Dragon','Huge','Dragon','lawful evil',19,225,'18d12+108','40 ft, burrow 30 ft, fly 80 ft',25,10,23,16,15,19,'16','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Lightning Breath (12d10, 90 ft line)'],legendary:true}),
  m('Adult Silver Dragon','Huge','Dragon','lawful good',19,243,'18d12+126','40 ft, fly 80 ft',27,10,25,16,13,21,'16','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Cold Breath (13d8, 60 ft cone)','Paralyzing Breath'],legendary:true}),
  m('Iron Golem','Large','Construct','unaligned',20,210,'20d10+100','30 ft',24,9,20,3,11,1,'16','SRD',{traits:['Fire Absorption','Immune to nonmagical B/P/S'],actions:['Poison Breath']}),
  m('D\'Argent (Silvara)','Huge','Dragon','lawful good',19,243,'18d12+126','40 ft, fly 80 ft',27,10,25,16,13,21,'16','DL',{acType:'natural',traits:['Adult Silver Dragon','Disguised as elf woman','Helped heroes discover dragonlance secret'],actions:['Cold Breath (13d8)','Paralyzing Breath'],legendary:true}),

  // ============ CR 17 ============
  m('Adult Red Dragon','Huge','Dragon','chaotic evil',19,256,'19d12+133','40 ft, climb 40 ft, fly 80 ft',27,10,25,16,13,21,'17','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Fire Breath (18d6, 60 ft cone)'],legendary:true}),
  m('Adult Gold Dragon','Huge','Dragon','lawful good',19,256,'19d12+133','40 ft, fly 80 ft, swim 40 ft',27,14,25,16,15,24,'17','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Fire Breath (12d10, 60 ft cone)','Weakening Breath'],legendary:true}),
  m('Androsphinx','Large','Monstrosity','lawful neutral',17,199,'19d10+95','40 ft, fly 60 ft',22,10,20,16,18,23,'17','SRD',{traits:['12th-level spellcasting'],actions:['First Roar (frightened)','Second Roar (frightened+deafened)','Third Roar (6d8 thunder + prone)'],legendary:true}),
  m('Death Knight','Medium','Undead','chaotic evil',20,180,'19d8+95','30 ft',20,11,20,12,16,18,'17','SRD',{acType:'plate',traits:['19th-level spellcasting','Marshal Undead'],actions:['Hellfire Orb (10d6 fire + 10d6 necrotic, 20 ft sphere)']}),
  m('Dragon Turtle','Gargantuan','Monstrosity','neutral',20,341,'22d20+110','20 ft, swim 40 ft',25,10,20,10,12,12,'17','SRD',{acType:'natural',traits:['Amphibious'],actions:['Steam Breath (15d6, 60 ft cone)']}),
  m('Lord Verminaard','Medium','Humanoid','lawful evil',20,195,'22d8+88','30 ft',20,12,18,14,18,18,'17','DL',{acType:'plate',traits:['8th-level cleric spellcasting','Takhisis\'s chosen','Frightful Presence'],actions:['Nightbringer (mace)','Mounted combat on Ember']}),
  m('Lord Soth','Medium','Undead','lawful evil',20,180,'19d8+95','30 ft',20,11,20,13,16,18,'17','DL',{acType:'plate',traits:['Former Knight of the Rose','Magic Resistance','Marshal Undead'],actions:['Hellfire Orb (10d6 fire + 10d6 necrotic)','Dreadful Glare'],legendary:true}),

  // ============ CR 18+ ============
  m('Demilich','Tiny','Undead','neutral evil',20,80,'20d4','0 ft, fly 30 ft (hover)',1,20,10,20,17,20,'18','SRD',{traits:['Avoidance','Legendary Resistance'],actions:['Howl (drain soul)'],legendary:true}),
  m('Balor','Huge','Fiend','chaotic evil',19,262,'21d12+126','40 ft, fly 80 ft',26,15,22,20,16,22,'19','SRD',{traits:['Death Throes (20d6 fire, 30 ft)','Fire Aura'],actions:['Whip + longsword (lightning + fire)']}),
  m('Pit Fiend','Large','Fiend','lawful evil',19,300,'24d10+168','30 ft, fly 60 ft',26,14,24,22,18,24,'20','SRD',{acType:'natural',traits:['Fear Aura','Magic Resistance','Innate Spellcasting'],actions:['Multiattack (bite + mace + tail)']}),
  m('Ancient White Dragon','Gargantuan','Dragon','chaotic evil',20,333,'18d20+144','30 ft, burrow 40 ft, fly 80 ft, swim 40 ft',26,10,26,10,13,14,'20','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Cold Breath (16d8, 90 ft cone)'],legendary:true}),

  // ============ CR 21+ (Legendary) ============
  m('Ancient Black Dragon','Gargantuan','Dragon','chaotic evil',22,367,'21d20+147','40 ft, fly 80 ft, swim 40 ft',27,14,25,16,15,19,'21','SRD',{acType:'natural',traits:['Frightful Presence','Amphibious'],actions:['Acid Breath (15d8, 90 ft line)'],legendary:true}),
  m('Lich','Medium','Undead','any evil',17,135,'18d8+54','30 ft',11,16,16,20,14,16,'21','SRD',{acType:'natural',traits:['18th-level spellcasting','Phylactery rejuvenation'],actions:['Paralyzing Touch','Frightening Gaze'],legendary:true}),
  m('Cyan Bloodbane','Gargantuan','Dragon','lawful evil',21,385,'22d20+154','40 ft, fly 80 ft, swim 40 ft',25,12,23,18,17,19,'21','DL',{acType:'natural',traits:['Ancient Green Dragon','Corrupted Silvanesti through Lorac\'s Dragon Orb'],actions:['Poison Breath (22d6, 90 ft cone)'],legendary:true}),
  m('Ancient Green Dragon','Gargantuan','Dragon','lawful evil',21,385,'22d20+154','40 ft, fly 80 ft, swim 40 ft',27,12,25,20,17,19,'22','SRD',{acType:'natural',traits:['Frightful Presence','Amphibious'],actions:['Poison Breath (22d6, 90 ft cone)'],legendary:true}),
  m('Ember (Pyros)','Gargantuan','Dragon','chaotic evil',21,350,'20d20+140','40 ft, climb 40 ft, fly 80 ft',28,10,25,16,15,23,'22','DL',{acType:'natural',traits:['Verminaard\'s ancient red dragon mount','Legendary Resistance x3','Frightful Presence DC 21'],actions:['Fire Breath (24d6, 90 ft cone)'],legendary:true}),
  m('Ancient Blue Dragon','Gargantuan','Dragon','lawful evil',22,481,'26d20+208','40 ft, burrow 40 ft, fly 80 ft',29,10,27,18,17,21,'23','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Lightning Breath (16d10, 120 ft line)'],legendary:true}),
  m('Skie (Khellendros)','Gargantuan','Dragon','lawful evil',22,481,'26d20+208','40 ft, burrow 40 ft, fly 80 ft',29,10,27,18,17,21,'23','DL',{acType:'natural',traits:['Kitiara\'s ancient blue dragon mount','One of the most powerful blue dragons'],actions:['Lightning Breath (16d10, 120 ft line)'],legendary:true}),
  m('Ancient Red Dragon','Gargantuan','Dragon','chaotic evil',22,546,'28d20+252','40 ft, climb 40 ft, fly 80 ft',30,10,29,18,15,23,'24','SRD',{acType:'natural',traits:['Frightful Presence DC 21'],actions:['Fire Breath (26d6, 90 ft cone)'],legendary:true}),
  m('Ancient Gold Dragon','Gargantuan','Dragon','lawful good',22,546,'28d20+252','40 ft, fly 80 ft, swim 40 ft',30,14,29,18,17,28,'24','SRD',{acType:'natural',traits:['Frightful Presence'],actions:['Fire Breath (14d10, 90 ft cone)','Weakening Breath'],legendary:true}),
  m('Tarrasque','Gargantuan','Monstrosity','unaligned',25,676,'33d20+330','40 ft',30,11,30,3,11,11,'30','SRD',{acType:'natural',traits:['Reflective Carapace','Frightful Presence DC 17','Legendary Resistance x3','Immune to fire/poison/nonmagical B/P/S','Siege Monster'],actions:['Multiattack (5 attacks)','Swallow'],legendary:true}),
  // ============ SHADOW OF THE DRAGON QUEEN (SotDQ) ============
  m('Dragon Army Soldier','Medium','Humanoid','lawful evil',19,22,'4d8+4','30 ft',13,12,12,10,10,9,'1/2','SotDQ',{acType:'splint',traits:['Pack Tactics'],actions:['Longsword','Javelin']}),
  m('Dragon Army Officer','Medium','Humanoid','lawful evil',18,65,'10d8+20','30 ft',16,12,14,11,12,15,'3','SotDQ',{acType:'plate',traits:['Draconic Command'],actions:['Multiattack','Longsword','Shortbow']}),
  m('Dragon Army Marshal','Medium','Humanoid','lawful evil',18,95,'13d8+39','30 ft',18,14,16,13,14,16,'5','SotDQ',{acType:'plate',traits:['Draconic Command','Marshal Strike'],actions:['Multiattack','Halberd','Rallying Cry']}),
  m('Dragon Army Dragonnaire','Medium','Humanoid','lawful evil',17,57,'8d8+24','30 ft',16,14,16,10,11,14,'4','SotDQ',{acType:'half plate',traits:['Draconic Devotion'],actions:['Multiattack','Pike','Dragonnel Lance']}),
  m('Dragon Army Scout','Medium','Humanoid','lawful evil',14,33,'6d8+6','30 ft, climb 30 ft',11,16,12,12,14,10,'1','SotDQ',{acType:'leather',traits:['Keen Hearing and Sight','Sneak Attack'],actions:['Multiattack','Shortsword','Longbow']}),
  m('Dragon Army Engineer','Medium','Humanoid','lawful evil',16,52,'8d8+16','30 ft',14,12,14,16,12,10,'3','SotDQ',{acType:'chain mail',traits:['Siege Monster'],actions:['Multiattack','Warhammer','Fire Flask']}),
  m('Dragonnel','Large','Dragon','unaligned',13,58,'9d10+9','30 ft, fly 60 ft',16,15,12,8,13,10,'2','SotDQ',{acType:'natural armor',traits:['Flyby'],actions:['Multiattack','Bite','Claws']}),
  m('Wasteland Dragonnel','Large','Dragon','unaligned',14,76,'9d10+27','30 ft, fly 60 ft',18,14,16,6,12,8,'3','SotDQ',{acType:'natural armor',traits:['Flyby','Siege Monster'],actions:['Multiattack','Bite','Claws']}),
  m('Kansaldi Fire-Eyes','Medium','Humanoid','lawful evil',18,150,'20d8+60','30 ft',18,14,16,12,16,18,'9','SotDQ',{acType:'plate',traits:['Draconic Command','Innate Spellcasting','Legendary Resistance'],actions:['Multiattack','Flail of Takhisis','Fire-Eyes Glare'],legendary:true,category:'Dragon Highlord'}),
  m('Belephaion','Medium','Humanoid','chaotic evil',12,99,'18d8+18','30 ft',10,14,12,18,14,16,'7','SotDQ',{traits:['Spellcasting','War Magic'],actions:['Multiattack','Dagger','Lightning Bolt'],category:'Named NPC'}),
  m('Lohezet','Medium','Humanoid','neutral evil',12,82,'15d8+15','30 ft',10,14,12,18,13,14,'6','SotDQ',{traits:['Spellcasting','Dark Devotion'],actions:['Multiattack','Dagger','Necrotic Bolt'],category:'Named NPC'}),
  m('Caradoc','Medium','Undead','lawful evil',15,136,'16d8+64','0 ft, fly 40 ft (hover)',6,16,18,14,16,18,'8','SotDQ',{traits:['Incorporeal Movement','Possession'],actions:['Life Drain','Terrifying Visage'],category:'Named NPC'}),
  m('Draydan','Medium','Monstrosity','lawful evil',17,136,'16d8+64','30 ft',18,12,18,18,16,16,'9','SotDQ',{acType:'natural armor',traits:['Death Throes','Magic Resistance','Innate Spellcasting'],actions:['Multiattack','Claw','Disguise Self','Noxious Breath'],category:'Draconian'}),
  m('Virruza','Medium','Monstrosity','chaotic evil',16,110,'13d8+52','30 ft',16,14,18,15,14,12,'7','SotDQ',{acType:'natural armor',traits:['Death Throes','Magic Resistance','Obsessive Recklessness'],actions:['Multiattack','Claw','Lightning Breath'],category:'Draconian'}),
  m('Clystran','Medium','Monstrosity','neutral evil',15,91,'14d8+28','30 ft, swim 30 ft',14,16,14,10,14,10,'5','SotDQ',{acType:'natural armor',traits:['Death Throes','Amphibious','Gliding Wings'],actions:['Multiattack','Claw','Venomous Spit'],category:'Draconian'}),
  m('Lesser Death Dragon','Huge','Undead','chaotic evil',15,225,'18d12+108','40 ft, fly 80 ft',23,10,22,6,11,6,'14','SotDQ',{acType:'natural armor',traits:['Legendary Resistance','Undead Fortitude'],actions:['Multiattack','Bite','Claw','Necrotic Breath'],legendary:true}),
  m('Greater Death Dragon','Gargantuan','Undead','chaotic evil',18,350,'20d20+140','40 ft, fly 80 ft',27,10,24,6,11,6,'20','SotDQ',{acType:'natural armor',traits:['Legendary Resistance','Undead Fortitude','Frightful Presence'],actions:['Multiattack','Bite','Claw','Tail','Necrotic Breath'],legendary:true}),

  // ============ DRAGON HIGHLORDS & MAJOR VILLAINS ============
  m('Kitiara Uth Matar','Medium','Humanoid','lawful evil',20,170,'20d8+80','30 ft',18,16,18,14,14,18,'13','DL',{acType:'blue dragonscale plate',traits:['Blue Dragon Bond','Legendary Resistance','Frightful Presence','Innate Spellcasting'],actions:['Multiattack','Longsword','Command Dragon Army'],legendary:true,category:'Dragon Highlord'}),
  m('Emperor Ariakas','Medium','Humanoid','lawful evil',21,230,'20d8+140','30 ft',22,14,20,16,16,20,'17','DL',{acType:'Crown of Takhisis plate',traits:['Legendary Resistance','Dark Blessing','Innate Spellcasting','Magic Resistance'],actions:['Multiattack','Nightbringer Mace','Dark Command'],legendary:true,category:'Dragon Highlord'}),
  m('Feal-Thas','Medium','Humanoid','neutral evil',16,127,'17d8+51','30 ft',10,14,16,18,16,14,'10','DL',{traits:['Spellcasting','Ice Walk','Cold Absorption'],actions:['Staff','Ice Storm','Cone of Cold'],category:'Dragon Highlord'}),
  m('Lucien of Takar','Medium','Humanoid','lawful evil',18,144,'17d8+68','30 ft',18,12,18,14,16,16,'11','DL',{acType:'plate',traits:['Dark Devotion','Innate Spellcasting','Legendary Resistance'],actions:['Multiattack','Flail','Spiritual Weapon'],legendary:true,category:'Dragon Highlord'}),
  m('Salah-Khan','Medium','Humanoid','lawful evil',19,153,'18d8+72','30 ft',20,14,18,12,14,16,'12','DL',{acType:'green dragonscale plate',traits:['Action Surge','Legendary Resistance','Indomitable'],actions:['Multiattack','Greatsword','Second Wind'],legendary:true,category:'Dragon Highlord'}),
  m('Toede','Small','Humanoid','neutral evil',13,44,'8d6+16','25 ft',12,14,14,10,10,14,'2','DL',{traits:['Cunning Action','Hobgoblin Resilience'],actions:['Shortsword','Whip','Cowardly Retreat'],category:'Named NPC'}),
  m('Hederick the Theocrat','Medium','Humanoid','lawful evil',12,55,'10d8+10','30 ft',10,10,12,14,16,16,'3','DL',{traits:['Spellcasting','Fanatical Devotion','Turn Undead'],actions:['Mace','Sacred Flame','Command'],category:'Named NPC'}),

  // ============ FIZBAN'S TREASURY OF DRAGONS ============
  m('Draconian Foot Soldier','Medium','Monstrosity','any evil',14,22,'4d8+4','30 ft',13,11,13,8,8,10,'1/2','FToD',{acType:'natural armor',traits:['Controlled Fall','Death Throes'],actions:['Multiattack','Shortsword','Javelin']}),
  m('Draconian Infiltrator','Medium','Monstrosity','any evil',14,39,'6d8+12','30 ft, climb 30 ft',11,17,14,9,13,14,'3','FToD',{acType:'natural armor',traits:['Death Throes','Evasion','Shapechanger'],actions:['Multiattack','Shortsword','Acid Spit']}),
  m('Draconian Dreadnought','Large','Monstrosity','any evil',16,57,'6d10+24','30 ft',18,10,18,6,10,8,'4','FToD',{acType:'natural armor',traits:['Death Throes','Siege Monster'],actions:['Multiattack','Serrated Sword','Tail Smash']}),
  m('Draconian Mage','Medium','Monstrosity','any evil',15,40,'9d8','30 ft',14,10,11,11,10,14,'2','FToD',{acType:'natural armor',traits:['Death Throes','Spellcasting'],actions:['Multiattack','Trident','Spellcasting']}),
  m('Draconian Mastermind','Medium','Monstrosity','any evil',17,67,'9d8+27','30 ft',13,14,16,17,10,14,'6','FToD',{acType:'natural armor',traits:['Death Throes','Magic Resistance','War Magic'],actions:['Multiattack','Rend','Spellcasting'],legendary:true}),
  m('Dragonblood Ooze','Large','Ooze','unaligned',14,195,'17d10+102','20 ft, climb 20 ft',18,6,22,2,12,5,'8','FToD',{acType:'natural armor',traits:['Amorphous','Draconic Absorption'],actions:['Multiattack','Pseudopod','Breath Weapon']}),
  m('Dragonbone Golem','Large','Construct','unaligned',17,161,'14d10+84','40 ft',20,10,22,3,14,1,'11','FToD',{acType:'natural armor',traits:['Fear Aura','Magic Resistance','Immutable Form'],actions:['Multiattack','Destructive Force','Petrifying Breath']}),
  m('Dragonflesh Grafter','Medium','Monstrosity','neutral evil',14,52,'8d8+16','30 ft',16,11,14,12,12,8,'3','FToD',{acType:'natural armor',traits:['Draconic Grafts'],actions:['Multiattack','Claw','Breath Weapon']}),
  m('Elder Brain Dragon','Gargantuan','Aberration','lawful evil',17,350,'20d20+140','40 ft, fly 80 ft',27,13,25,21,19,21,'22','FToD',{acType:'natural armor',traits:['Legendary Resistance','Siege Monster','Telepathic Hub'],actions:['Multiattack','Bite','Claw','Tentacle','Tadpole Breath'],legendary:true}),
  m('Eyedrake','Large','Aberration','lawful evil',16,119,'14d10+42','30 ft, fly 60 ft',16,12,17,14,14,15,'8','FToD',{acType:'natural armor',traits:['Flyby','Unusual Nature'],actions:['Multiattack','Bite','Antimagic Cone','Eye Rays']}),
  m('Gem Stalker','Large','Monstrosity','typically neutral',17,67,'9d10+18','40 ft, climb 40 ft',17,15,14,15,10,6,'5','FToD',{acType:'natural armor',traits:['Psionic Perception','Spider Climb'],actions:['Multiattack','Claw','Psionic Bolt']}),
  m('Hoard Mimic','Large','Monstrosity','typically neutral',14,75,'10d10+20','30 ft',18,12,15,14,13,14,'4','FToD',{acType:'natural armor',traits:['Shapechanger','Adhesive','Grappler'],actions:['Multiattack','Pseudopod','Bite','Luring Gleam']}),
  m('Liondrake','Large','Monstrosity','typically neutral',16,119,'14d10+42','40 ft, fly 60 ft',19,15,17,6,12,12,'7','FToD',{acType:'natural armor',traits:['Flyby','Pack Tactics'],actions:['Multiattack','Bite','Claws']}),
  m('Hollow Dragon','Huge','Undead','any alignment',19,241,'21d12+105','40 ft, fly 80 ft',23,12,21,16,13,21,'18','FToD',{acType:'natural armor',traits:['Legendary Resistance','Reconstruction','Turn Immunity'],actions:['Multiattack','Bite','Claw','Radiant Breath'],legendary:true}),
  m('Dragon Blessed','Medium','Humanoid','any alignment',14,75,'10d8+30','30 ft',12,10,16,14,17,15,'5','FToD',{traits:['Draconic Spellcasting','Legendary Resistance'],actions:['Multiattack','Mace','Chromatic Bolt']}),
  m('Dragon Chosen','Medium','Humanoid','any alignment',17,97,'13d8+39','30 ft',18,14,16,10,14,14,'7','FToD',{acType:'half plate',traits:['Draconic Strike','Legendary Resistance'],actions:['Multiattack','Handaxe','Breath Weapon']}),
  m('Dragon Speaker','Medium','Humanoid','any alignment',13,52,'8d8+16','30 ft',12,12,14,17,14,16,'5','FToD',{traits:['Spellcasting','Dragon Companion'],actions:['Multiattack','Dagger','Chromatic Bolt']}),
  m('Dragonflesh Abomination','Large','Monstrosity','unaligned',15,127,'15d10+45','30 ft, fly 40 ft',18,6,16,3,10,1,'6','FToD',{acType:'natural armor',traits:['Siege Monster','Draconic Grafts'],actions:['Multiattack','Bite','Claw','Breath Weapon']}),

  // ============ ADDITIONAL KRYNN CREATURES ============
  m('Seeker Guard','Medium','Humanoid','lawful neutral',16,22,'4d8+4','30 ft',14,12,12,10,10,10,'1/2','DL',{acType:'chain mail',traits:['Pack Tactics'],actions:['Longsword','Light Crossbow'],category:'Solace NPC'}),
  m('Seeker Sergeant','Medium','Humanoid','lawful evil',17,45,'7d8+14','30 ft',16,12,14,11,12,13,'2','DL',{acType:'splint',traits:['Pack Tactics','Draconic Command'],actions:['Multiattack','Longsword','Command'],category:'Solace NPC'}),
  m('Seeker High Theocrat','Medium','Humanoid','lawful evil',14,71,'11d8+22','30 ft',12,10,14,16,18,16,'5','DL',{traits:['Spellcasting','Fanatical Devotion','Divine Eminence'],actions:['Multiattack','Mace','Sacred Flame','Spirit Guardians'],category:'Solace NPC'}),
  m('Gully Dwarf','Small','Humanoid','chaotic neutral',10,5,'2d6-2','25 ft',8,12,8,6,10,7,'0','DL',{traits:['Cowardly','Stench'],actions:['Club','Thrown Refuse'],category:'Krynn Race'}),
  m('Minotaur of Krynn','Large','Monstrosity','lawful evil',14,76,'9d10+27','40 ft',18,11,16,12,12,9,'3','DL',{acType:'natural armor',traits:['Charge','Labyrinthine Recall','Reckless'],actions:['Greataxe','Gore'],category:'Krynn Race'}),
  m('Kender','Small','Humanoid','chaotic good',13,7,'2d6','30 ft',8,16,10,12,12,14,'1/4','DL',{traits:['Fearless','Taunt','Kender Pockets'],actions:['Hoopak','Sling'],category:'Krynn Race'}),
  m('Irda','Medium','Humanoid','any alignment',13,55,'10d8+10','30 ft',10,16,12,18,14,16,'3','DL',{traits:['Fey Ancestry','Innate Spellcasting','Shapechange'],actions:['Quarterstaff','Psychic Blast'],category:'Krynn Race'}),
  m('Aghar Verminkeeper','Small','Humanoid','chaotic neutral',11,14,'4d6','25 ft',10,12,10,6,10,8,'1/4','DL',{traits:['Vermin Swarm','Stench'],actions:['Club','Summon Vermin'],category:'Krynn NPC'}),
  m('Thanoi Warrior','Large','Monstrosity','neutral',13,68,'8d10+24','30 ft, swim 40 ft',18,9,17,6,12,7,'3','DL',{acType:'natural armor',traits:['Hold Breath','Ice Walk'],actions:['Multiattack','Tusk','Ice Spear']}),
  m('Shadow Dragon Young','Large','Dragon','chaotic evil',15,127,'15d10+45','40 ft, fly 80 ft',18,14,17,12,11,15,'9','DL',{acType:'natural armor',traits:['Living Shadow','Shadow Stealth','Sunlight Sensitivity'],actions:['Multiattack','Bite','Claw','Shadow Breath']}),
  m('Red Dragon Wyrmling','Medium','Dragon','chaotic evil',17,75,'10d8+30','30 ft, fly 60 ft',19,10,17,12,11,15,'4','SRD',{acType:'natural armor',traits:['Fire Absorption'],actions:['Bite','Fire Breath']}),
  m('Blue Dragon Wyrmling','Medium','Dragon','lawful evil',17,52,'8d8+16','30 ft, fly 60 ft',17,10,15,12,11,15,'3','SRD',{acType:'natural armor',actions:['Bite','Lightning Breath']}),
  m('Green Dragon Wyrmling','Medium','Dragon','lawful evil',17,38,'7d8+7','30 ft, fly 60 ft, swim 30 ft',15,12,13,14,11,13,'2','SRD',{acType:'natural armor',traits:['Amphibious'],actions:['Bite','Poison Breath']}),
  m('Black Dragon Wyrmling','Medium','Dragon','chaotic evil',17,33,'6d8+6','30 ft, fly 60 ft, swim 30 ft',15,14,13,10,11,13,'2','SRD',{acType:'natural armor',traits:['Amphibious'],actions:['Bite','Acid Breath']}),
  m('White Dragon Wyrmling','Medium','Dragon','chaotic evil',16,32,'5d8+10','30 ft, fly 60 ft, swim 30 ft',14,10,14,5,10,11,'2','SRD',{acType:'natural armor',actions:['Bite','Cold Breath']}),
  m('Gold Dragon Wyrmling','Medium','Dragon','lawful good',17,60,'8d8+24','30 ft, fly 60 ft, swim 30 ft',19,14,17,14,11,16,'3','SRD',{acType:'natural armor',traits:['Amphibious'],actions:['Bite','Fire Breath','Weakening Breath']}),
  m('Silver Dragon Wyrmling','Medium','Dragon','lawful good',17,45,'6d8+18','30 ft, fly 60 ft',19,10,17,12,11,15,'2','SRD',{acType:'natural armor',actions:['Bite','Cold Breath','Paralyzing Breath']}),
  m('Bronze Dragon Wyrmling','Medium','Dragon','lawful good',17,32,'5d8+10','30 ft, fly 60 ft, swim 30 ft',17,10,15,12,11,15,'2','SRD',{acType:'natural armor',traits:['Amphibious'],actions:['Bite','Lightning Breath','Repulsion Breath']}),
  m('Copper Dragon Wyrmling','Medium','Dragon','chaotic good',16,22,'4d8+4','30 ft, fly 60 ft, climb 30 ft',15,12,13,14,11,13,'1','SRD',{acType:'natural armor',actions:['Bite','Acid Breath','Slowing Breath']}),
  m('Brass Dragon Wyrmling','Medium','Dragon','chaotic good',16,16,'3d8+3','30 ft, fly 60 ft, burrow 15 ft',15,10,13,10,11,13,'1','SRD',{acType:'natural armor',actions:['Bite','Fire Breath','Sleep Breath']}),

  // ============ MORDENKAINEN / VOLO'S EXPANDED ============
  m('Hobgoblin Warlord','Medium','Humanoid','lawful evil',20,97,'13d8+39','30 ft',16,14,16,14,11,15,'6','VGM',{acType:'plate',traits:['Martial Advantage'],actions:['Multiattack','Longsword','Shield Bash','Javelin'],category:'Goblinoid'}),
  m('Hobgoblin Devastator','Medium','Humanoid','lawful evil',13,45,'7d8+14','30 ft',13,12,14,16,13,11,'4','VGM',{acType:'studded leather',traits:['Arcane Advantage','Spellcasting'],actions:['Quarterstaff','Fireball'],category:'Goblinoid'}),
  m('Hobgoblin Iron Shadow','Medium','Humanoid','lawful evil',15,32,'5d8+10','40 ft',14,16,15,14,15,11,'2','VGM',{traits:['Spellcasting','Unarmored Defense'],actions:['Multiattack','Unarmed Strike','Shadow Jaunt'],category:'Goblinoid'}),
  m('Goblin Boss','Small','Humanoid','neutral evil',17,21,'6d6','30 ft',10,14,10,10,8,10,'1','SRD',{acType:'chain shirt',traits:['Nimble Escape','Redirect Attack'],actions:['Multiattack','Scimitar','Javelin']}),
  m('Bugbear Chief','Medium','Humanoid','chaotic evil',17,65,'10d8+20','30 ft',17,14,14,11,12,11,'3','SRD',{acType:'chain shirt',traits:['Brute','Surprise Attack','Heart of Hruggek'],actions:['Multiattack','Morningstar','Javelin']}),
  m('Orc War Chief','Medium','Humanoid','chaotic evil',16,93,'11d8+44','30 ft',18,12,18,11,11,16,'4','SRD',{acType:'chain mail',traits:['Aggressive','Gruumsh Fury'],actions:['Multiattack','Greataxe','Spear','Battle Cry']}),
  m('Orc Eye of Gruumsh','Medium','Humanoid','chaotic evil',16,45,'6d8+18','30 ft',16,12,17,9,13,12,'2','SRD',{acType:'ring mail',traits:['Aggressive','Gruumsh Fury','Spellcasting'],actions:['Morningstar','Spiritual Weapon']}),
  m('Ogre Bolt Launcher','Large','Giant','chaotic evil',13,59,'7d10+21','40 ft',19,8,16,5,7,7,'2','VGM',{acType:'hide armor',traits:['Aggressive'],actions:['Fist','Bolt Launcher']}),
  m('Ogre Howdah','Large','Giant','chaotic evil',15,59,'7d10+21','40 ft',19,8,16,5,7,7,'2','VGM',{acType:'plate',traits:['Howdah'],actions:['Fist','Mace']}),
  m('Orc Blade of Ilneval','Medium','Humanoid','chaotic evil',18,60,'8d8+24','30 ft',17,11,17,10,12,14,'4','VGM',{acType:'chain mail',traits:['Aggressive','Felling Blade'],actions:['Multiattack','Longsword','Whirlwind Attack'],category:'Orc'}),
  m('Orc Hand of Yurtrus','Medium','Humanoid','chaotic evil',12,30,'4d8+12','30 ft',12,11,16,11,14,9,'2','VGM',{traits:['Aggressive','Spellcasting'],actions:['Touch of the White Hand','Chill Touch'],category:'Orc'}),
  m('Orc Nurtured One of Yurtrus','Medium','Humanoid','chaotic evil',9,30,'4d8+12','30 ft',15,8,16,7,11,7,'1/2','VGM',{traits:['Aggressive','Corrupted Carrier'],actions:['Claws','Corrupted Vengeance'],category:'Orc'}),
  m('Shadow Mastiff','Medium','Monstrosity','neutral evil',12,33,'6d8+6','40 ft',16,14,13,5,12,5,'2','VGM',{traits:['Ethereal Awareness','Keen Hearing and Smell','Shadow Blend','Sunlight Weakness'],actions:['Bite']}),
  m('Shadow Mastiff Alpha','Medium','Monstrosity','neutral evil',12,44,'8d8+8','40 ft',16,14,13,6,12,5,'2','VGM',{traits:['Ethereal Awareness','Keen Hearing and Smell','Shadow Blend','Sunlight Weakness','Terrifying Howl'],actions:['Bite']}),
  m('Yuan-Ti Broodguard','Medium','Humanoid','neutral evil',14,45,'7d8+14','30 ft',15,14,14,6,11,4,'2','VGM',{acType:'natural armor',traits:['Mental Resistance','Reckless'],actions:['Multiattack','Bite','Claw']}),
  m('Yuan-Ti Mind Whisperer','Medium','Monstrosity','neutral evil',14,71,'13d8+13','30 ft',16,14,13,14,12,16,'4','VGM',{acType:'natural armor',traits:['Magic Resistance','Shapechanger','Spellcasting'],actions:['Multiattack','Scimitar','Shortbow']}),
  m('Yuan-Ti Nightmare Speaker','Medium','Monstrosity','neutral evil',14,71,'13d8+13','30 ft',16,14,13,14,12,16,'4','VGM',{acType:'natural armor',traits:['Magic Resistance','Shapechanger','Spellcasting'],actions:['Multiattack','Scimitar','Invoke Nightmare']}),
  m('War Priest','Medium','Humanoid','any alignment',18,117,'18d8+36','30 ft',16,10,14,11,17,13,'9','VGM',{acType:'plate',traits:['Spellcasting','War God Blessing'],actions:['Multiattack','Maul','Guided Strike']}),
  m('Swashbuckler','Medium','Humanoid','any non-lawful',17,66,'12d8+12','30 ft',12,18,12,14,11,15,'3','VGM',{acType:'leather armor',traits:['Lightfooted','Suave Defense'],actions:['Multiattack','Dagger']}),
  m('Master Thief','Medium','Humanoid','any alignment',16,84,'13d8+26','30 ft',11,18,14,11,11,12,'5','VGM',{acType:'studded leather',traits:['Cunning Action','Evasion','Sneak Attack'],actions:['Multiattack','Shortsword','Light Crossbow']}),
  m('Warlord','Medium','Humanoid','any alignment',18,229,'27d8+108','30 ft',20,16,18,12,12,18,'12','VGM',{acType:'plate',traits:['Indomitable','Survivor'],actions:['Multiattack','Greatsword','Shortbow'],legendary:true}),
  m('Champion','Medium','Humanoid','any alignment',18,143,'22d8+44','30 ft',20,15,14,10,14,12,'9','VGM',{acType:'plate',traits:['Indomitable','Remarkable Athlete'],actions:['Multiattack','Greatsword','Light Crossbow']}),
  m('Blackguard','Medium','Humanoid','any non-good',18,153,'18d8+72','30 ft',18,11,18,11,14,15,'8','VGM',{acType:'plate',traits:['Spellcasting','Dreadful Aspect'],actions:['Multiattack','Glaive','Smite']}),
  m('Abjurer','Medium','Humanoid','any alignment',12,84,'13d8+26','30 ft',9,14,14,18,12,11,'9','VGM',{traits:['Spellcasting','Arcane Ward'],actions:['Quarterstaff']}),
  m('Conjurer','Medium','Humanoid','any alignment',12,40,'9d8','30 ft',9,14,11,17,12,11,'6','VGM',{traits:['Spellcasting','Benign Transposition'],actions:['Dagger']}),
  m('Diviner','Medium','Humanoid','any alignment',12,67,'15d8','30 ft',9,14,11,18,12,11,'8','VGM',{traits:['Spellcasting','Portent'],actions:['Quarterstaff']}),
  m('Enchanter','Medium','Humanoid','any alignment',12,40,'9d8','30 ft',9,14,11,17,12,14,'5','VGM',{traits:['Spellcasting','Instinctive Charm'],actions:['Quarterstaff']}),
  m('Evoker','Medium','Humanoid','any alignment',12,66,'12d8+12','30 ft',9,14,12,17,12,11,'9','VGM',{traits:['Spellcasting','Sculpt Spells'],actions:['Quarterstaff']}),
  m('Illusionist','Medium','Humanoid','any alignment',12,44,'10d8','30 ft',9,14,11,17,12,11,'3','VGM',{traits:['Spellcasting','Displacement'],actions:['Quarterstaff']}),
  m('Necromancer','Medium','Humanoid','any alignment',12,66,'12d8+12','30 ft',9,14,12,17,12,11,'9','VGM',{traits:['Spellcasting','Grim Harvest'],actions:['Withering Touch']}),
  m('Transmuter','Medium','Humanoid','any alignment',12,40,'9d8','30 ft',9,14,11,17,12,11,'5','VGM',{traits:['Spellcasting','Transmuter Stone'],actions:['Quarterstaff']}),
  m('Archer','Medium','Humanoid','any alignment',16,75,'10d8+30','30 ft',11,18,16,11,13,10,'3','VGM',{acType:'studded leather',traits:['Steady Aim'],actions:['Multiattack','Shortsword','Longbow']}),
  m('Martial Arts Adept','Medium','Humanoid','any alignment',16,60,'11d8+11','40 ft',11,17,13,11,16,10,'3','VGM',{traits:['Unarmored Defense'],actions:['Multiattack','Unarmed Strike']}),
  m('Kraken Priest','Medium','Humanoid','any evil',10,75,'10d8+30','30 ft, swim 30 ft',12,10,16,10,15,14,'5','VGM',{traits:['Amphibious','Spellcasting'],actions:['Thunderous Touch','Voice of the Kraken']}),
  m('Warlock of the Great Old One','Medium','Humanoid','any alignment',12,91,'14d8+28','30 ft',9,14,15,12,12,18,'6','VGM',{traits:['Whispering Aura','Spellcasting'],actions:['Dagger']}),
  m('Warlock of the Fiend','Medium','Humanoid','any alignment',12,78,'12d8+24','30 ft',10,14,15,12,12,18,'7','VGM',{traits:['Dark One Blessing','Spellcasting'],actions:['Mace','Hellfire']}),
  m('Warlock of the Archfey','Medium','Humanoid','any alignment',11,49,'11d8','30 ft',9,16,11,11,12,18,'4','VGM',{traits:['Spellcasting','Misty Escape'],actions:['Dagger']}),

  // ============ MORE SRD CREATURES (Missing from original set) ============
  m('Aarakocra','Medium','Humanoid','neutral good',12,13,'3d8','20 ft, fly 50 ft',10,14,10,11,12,11,'1/4','SRD',{traits:['Dive Attack'],actions:['Talon','Javelin']}),
  m('Ankheg','Large','Monstrosity','unaligned',14,39,'6d10+6','30 ft, burrow 10 ft',17,11,13,1,13,6,'2','SRD',{acType:'natural armor',actions:['Bite','Acid Spray']}),
  m('Assassin','Medium','Humanoid','any non-good',15,78,'12d8+24','30 ft',11,16,14,13,11,10,'8','SRD',{acType:'studded leather',traits:['Assassinate','Evasion','Sneak Attack'],actions:['Multiattack','Shortsword','Light Crossbow']}),
  m('Beholder','Large','Aberration','lawful evil',18,180,'19d10+76','0 ft, fly 20 ft (hover)',10,14,18,17,15,17,'13','SRD',{acType:'natural armor',traits:['Antimagic Cone'],actions:['Bite','Eye Rays'],legendary:true}),
  m('Cambion','Medium','Fiend','any evil',19,82,'11d8+33','30 ft, fly 60 ft',18,18,16,14,12,16,'5','SRD',{acType:'scale mail',traits:['Fiendish Blessing','Innate Spellcasting'],actions:['Multiattack','Spear','Fire Ray']}),
  m('Cloaker','Large','Aberration','chaotic neutral',14,78,'12d10+12','10 ft, fly 40 ft',17,15,12,13,12,14,'8','SRD',{acType:'natural armor',traits:['Damage Transfer','False Appearance','Light Sensitivity'],actions:['Multiattack','Bite','Tail','Moan','Phantasms']}),
  m('Cyclops','Huge','Giant','chaotic neutral',14,138,'12d12+60','30 ft',22,11,20,8,6,10,'6','SRD',{acType:'natural armor',traits:['Poor Depth Perception'],actions:['Greatclub','Rock']}),
  m('Death Tyrant','Large','Undead','lawful evil',19,187,'25d10+50','0 ft, fly 20 ft (hover)',10,14,14,19,15,19,'14','SRD',{acType:'natural armor',traits:['Negative Energy Cone'],actions:['Bite','Eye Rays'],legendary:true}),
  m('Displacer Beast','Large','Monstrosity','lawful evil',13,85,'10d10+30','40 ft',18,15,16,6,12,8,'3','SRD',{acType:'natural armor',traits:['Avoidance','Displacement'],actions:['Multiattack','Tentacle']}),
  m('Drow Elite Warrior','Medium','Humanoid','neutral evil',18,71,'11d8+22','30 ft',13,18,14,11,13,12,'5','SRD',{acType:'studded leather',traits:['Fey Ancestry','Sunlight Sensitivity','Innate Spellcasting'],actions:['Multiattack','Shortsword','Hand Crossbow']}),
  m('Drow Mage','Medium','Humanoid','neutral evil',12,45,'10d8','30 ft',9,14,10,17,13,12,'7','SRD',{traits:['Fey Ancestry','Sunlight Sensitivity','Spellcasting','Innate Spellcasting'],actions:['Staff']}),
  m('Drow Priestess of Lolth','Medium','Humanoid','neutral evil',16,71,'13d8+13','30 ft',10,14,12,13,17,18,'8','SRD',{acType:'scale mail',traits:['Fey Ancestry','Sunlight Sensitivity','Spellcasting','Innate Spellcasting'],actions:['Multiattack','Scourge','Summon Demon']}),
  m('Flameskull','Tiny','Undead','neutral evil',13,40,'9d4+18','0 ft, fly 40 ft (hover)',1,17,14,16,10,11,'4','SRD',{traits:['Illumination','Magic Resistance','Rejuvenation','Spellcasting'],actions:['Multiattack','Fire Ray']}),
  m('Githyanki Knight','Medium','Humanoid','lawful evil',18,91,'14d8+28','30 ft',16,14,15,16,15,17,'8','SRD',{acType:'plate',traits:['Innate Spellcasting'],actions:['Multiattack','Silver Greatsword','Telekinetic Bolt']}),
  m('Githyanki Warrior','Medium','Humanoid','lawful evil',17,49,'9d8+9','30 ft',15,14,12,13,13,10,'3','SRD',{acType:'half plate',traits:['Innate Spellcasting'],actions:['Multiattack','Greatsword']}),
  m('Githzerai Monk','Medium','Humanoid','lawful neutral',14,38,'7d8+7','30 ft',12,15,12,13,14,10,'2','SRD',{traits:['Innate Spellcasting','Psychic Defense'],actions:['Multiattack','Unarmed Strike']}),
  m('Gnoll','Medium','Humanoid','chaotic evil',15,22,'5d8','30 ft',14,12,11,6,10,7,'1/2','SRD',{acType:'hide armor',traits:['Rampage'],actions:['Bite','Spear','Longbow']}),
  m('Gnoll Fang of Yeenoghu','Medium','Fiend','chaotic evil',14,65,'10d8+20','30 ft',17,15,15,10,11,13,'4','SRD',{acType:'hide armor',traits:['Rampage'],actions:['Multiattack','Claw','Bite']}),
  m('Gnoll Pack Lord','Medium','Humanoid','chaotic evil',15,49,'9d8+9','30 ft',16,14,13,8,11,9,'2','SRD',{acType:'chain shirt',traits:['Rampage'],actions:['Multiattack','Glaive','Longbow']}),
  m('Mind Flayer','Medium','Aberration','lawful evil',15,71,'13d8+13','30 ft',11,12,12,19,17,17,'7','SRD',{acType:'breastplate',traits:['Magic Resistance','Innate Spellcasting'],actions:['Tentacles','Extract Brain','Mind Blast']}),
  m('Mind Flayer Arcanist','Medium','Aberration','lawful evil',15,71,'13d8+13','30 ft',11,12,12,19,17,17,'8','SRD',{acType:'breastplate',traits:['Magic Resistance','Innate Spellcasting','Spellcasting'],actions:['Tentacles','Extract Brain','Mind Blast']}),
  m('Vampire Spawn','Medium','Undead','neutral evil',15,82,'11d8+33','30 ft',16,16,16,11,10,12,'5','SRD',{acType:'natural armor',traits:['Regeneration','Spider Climb','Vampire Weaknesses'],actions:['Multiattack','Claws','Bite']}),
  m('Wraith','Medium','Undead','neutral evil',13,67,'9d8+27','0 ft, fly 60 ft (hover)',6,16,16,12,14,15,'5','SRD',{traits:['Incorporeal Movement','Sunlight Sensitivity'],actions:['Life Drain','Create Specter']}),
  m('Mummy Lord','Medium','Undead','lawful evil',17,97,'13d8+39','20 ft',18,10,17,11,18,16,'15','SRD',{acType:'natural armor',traits:['Magic Resistance','Rejuvenation','Spellcasting'],actions:['Multiattack','Rotting Fist','Dreadful Glare'],legendary:true}),
];

// ============ Helper Functions ============

export function getMonsterBySlug(slug: string): Monster | undefined {
  return monsters.find(m => m.slug === slug);
}

export function getMonsterByName(name: string): Monster | undefined {
  return monsters.find(m => m.name.toLowerCase() === name.toLowerCase());
}

export function getMonstersByCR(cr: string): Monster[] {
  return monsters.filter(m => m.cr === cr);
}

export function getMonstersByType(type: string): Monster[] {
  return monsters.filter(m => m.type.toLowerCase() === type.toLowerCase());
}

export function getMonstersBySource(source: string): Monster[] {
  return monsters.filter(m => m.source === source);
}

// Sort helper for CR values
function crToNumber(cr: string): number {
  if (cr === '1/8') return 0.125;
  if (cr === '1/4') return 0.25;
  if (cr === '1/2') return 0.5;
  return parseFloat(cr);
}

export const monsterTypes: string[] = [...new Set(monsters.map(m => m.type))].sort();
export const monsterCRs: string[] = [...new Set(monsters.map(m => m.cr))].sort((a, b) => crToNumber(a) - crToNumber(b));
export const monsterSources: string[] = [...new Set(monsters.map(m => m.source))].sort();
