import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SilverMedalist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "silver-medalist",
    names: [
        {value: "Silver Medalist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback within the Silver time allowed."},
    ],
    acquisition: "Complete a Flashback arc in under 60 minutes.",
    links: [
        {title: "Silver Medalist Badge", href: "https://paragonwiki.com/wiki/Silver_Medalist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/silver-medalist.png"}]
};
