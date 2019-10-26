import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Demarcated: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "demarcated",
    names: [
        {value: "Demarcated"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 46-50 Flashback story arc using no temp powers.",
    links: [
        {title: "Demarcated Badge", href: "https://paragonwiki.com/wiki/Demarcated_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/demarcated.png"}]
};
