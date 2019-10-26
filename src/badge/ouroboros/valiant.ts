import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Valiant: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "valiant",
    names: [
        {value: "Valiant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 30 and 34 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 31-35 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Valiant Badge", href: "https://paragonwiki.com/wiki/Valiant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/valiant.png"}]
};
