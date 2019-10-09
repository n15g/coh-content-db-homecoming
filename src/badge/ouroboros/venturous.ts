import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Venturous: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "venturous",
    names: [
        {value: "Venturous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 1 and 15 while under a constant Debuff."},
    ],
    acquisition: "Finish a level 1-15 Flashback story arc while debuffed.",
    links: [
        {title: "Venturous Badge", href: "https://paragonwiki.com/wiki/Venturous_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturous.png"}]
};
