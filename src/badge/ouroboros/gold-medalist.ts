import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GoldMedalist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "gold-medalist",
    names: [
        {value: "Gold Medalist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback within the Gold time allowed."},
    ],
    acquisition: "Complete a Flashback story arc in under 30 minutes.",
    links: [
        {title: "Gold Medalist Badge", href: "https://paragonwiki.com/wiki/Gold_Medalist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/gold-medalist.png"}]
};
