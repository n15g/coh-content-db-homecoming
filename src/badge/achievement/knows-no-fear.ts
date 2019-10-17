import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const KnowsNoFear: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "knows-no-fear",
    names: [
        {value: "Knows No Fear"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You chose to fight against Romulus and his army of Talons by yourself, showing that you know " +
        "no fear."}
    ],
    acquisition: "Refuse help from the Cimerorans in the final mission from Sister Solaris",
    links: [
        {title: "Knows No Fear Badge", href: "https://paragonwiki.com/wiki/Knows_No_Fear_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png"}
    ],
};