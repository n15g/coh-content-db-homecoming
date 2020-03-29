import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const GuardianOfForever: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "guardian-of-forever",
    setTitleId: 2390,
    names: [
        {value: "Guardian of Forever"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You used the Pillar of Ice and Flame to cheat death and recruit a new member for Ouroboros.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/guardian-of-forever.png"}],
    acquisition: "Recruit a new member into Ouroboros.",
    notes: `SPOILER WARNING: The notes below contain story spoilers.

Complete the 'Collateral Damage' story arc, available either via Laura Lockhart in [map:${SteelCanyon.key}] or Ouroboros, level 20-24, mission 22.01 'Collateral Damage'
 - Be sure to defeat all the enemies at the end of the second mission in less than 3 minutes to earn the Steel Savior badge

Repeat the story arc via Ouroboros
 - In the first mission, find a glowing crate and read the clue contained within
 - Following the first mission, speak to Laura Lockhart but DO NOT enter the second mission
 - Before entering the second mission, travel to Ouroboros and speak to Mender Valen
 - Agree to rescue Laura according to Mender Valen's instructions, and if successful, the Guardian of Forever badge will be awarded during the fifth mission`,
    links: [
        {title: "Guardian of Forever Badge", href: "https://paragonwiki.com/wiki/Guardian_of_Forever_Badge"}
    ],
};
