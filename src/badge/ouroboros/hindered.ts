import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hindered: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "hindered",
    names: [
        {value: "Hindered"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 30 and 34 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 31-35 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Hindered Badge", href: "https://paragonwiki.com/wiki/Hindered_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/hindered.png"}]
};
