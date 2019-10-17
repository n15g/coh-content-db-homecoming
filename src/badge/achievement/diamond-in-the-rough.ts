import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const DiamondInTheRough: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "diamond-in-the-rough",
    names: [
        {value: "Diamond in the Rough"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Finding the Florentine Diamond was not as quick or simple as it first seemed."}
    ],
    acquisition: "Complete the story arc Gone in a Flash from Bobby Curtin (Level 25-29, Arc 26.02 in Ouro, Rogue)",
    links: [
        {title: "Diamond in the Rough Badge", href: "https://paragonwiki.com/wiki/Diamond_in_the_Rough_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/rogue-align.png"}
    ],
};
