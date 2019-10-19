import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Headstrong: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "headstrong",
    names: [
        {value: "Headstrong"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 15 and 19 while under a constant Debuff."},
    ],
    acquisition: "Complete a level 16-19 Flashback story arc while debuffed.",
    links: [
        {title: "Headstrong Badge", href: "https://paragonwiki.com/wiki/Headstrong_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/headstrong.png"}]
};
