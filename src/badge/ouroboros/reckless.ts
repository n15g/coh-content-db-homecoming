import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Reckless: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "reckless",
    names: [
        {value: "Reckless"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 45 while under a constant Debuff."},
    ],
    acquisition: "Complete a level 40-45 Flashback story arc while debuffed.",
    links: [
        {title: "Reckless Badge", href: "https://paragonwiki.com/wiki/Reckless_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/reckless.png"}]
};
