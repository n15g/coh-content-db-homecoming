import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Flat: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "flat",
    names: [
        {value: "Flat"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while not using Inspirations."},
    ],
    acquisition: "Complete a level 21-25 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Flat Badge", href: "https://paragonwiki.com/wiki/Flat_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/flat.png"}]
};
