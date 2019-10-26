import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Inhibited: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "inhibited",
    names: [
        {value: "Inhibited"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 25 and 29 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 26-30 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Inhibited Badge", href: "https://paragonwiki.com/wiki/Inhibited_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/inhibited.png"}]
};
