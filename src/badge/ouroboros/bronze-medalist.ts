import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BronzeMedalist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "bronze-medalist",
    names: [
        {value: "Bronze Medalist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback within the Bronze time allowed."},
    ],
    acquisition: "Complete a Flashback arc in under 120 minutes.",
    links: [
        {title: "Bronze Medalist Badge", href: "https://paragonwiki.com/wiki/Bronze_Medalist_Badge"}
    ],
    icons: [{value: "core.ouroboros.bronze-medalist"}]
};
