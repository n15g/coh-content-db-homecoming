import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const WarHero: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "war-hero",
    setTitleId: 2098,
    names: [
        {value: "War Hero"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You stood in the middle of a war between the Council and the 5th Column, and emerged the " +
                "victor."
        }
    ],
    acquisition: "Complete the story arc from Laura Lockhart",
    links: [
        {title: "War Hero Badge", href: "https://homecoming.wiki/wiki/War_Hero_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/war-hero.png"}
    ],
};
