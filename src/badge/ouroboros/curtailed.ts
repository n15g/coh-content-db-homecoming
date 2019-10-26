import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Curtailed: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "curtailed",
    names: [
        {value: "Curtailed"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 15 and 19 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 16-20 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Curtailed Badge", href: "https://paragonwiki.com/wiki/Curtailed_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/curtailed.png"}]
};
