import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Collector: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "collector",
    names: [
        {type: Alternate.H, value: "Collector"},
        {type: Alternate.V, value: "Native"},
        {type: Alternate.P, value: "Extractor of Secrets"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have earned 25 badges."},
        {type: Alternate.V, value: "You've earned enough badges to be called a Native."},
        {type: Alternate.P, value: "25 badges later, it's clear now nothing will keep you from uncovering the secrets of Praetoria and beyond."}
    ],
    acquisition: "Earn this badge by earning 25 badges.",
    links: [
        {title: "Collector Badge", href: "https://paragonwiki.com/wiki/Collector_Badge"},
        {title: "Native Badge", href: "https://paragonwiki.com/wiki/Native_Badge"},
        {title: "Extractor of Secrets Badge", href: "https://paragonwiki.com/wiki/Extractor_of_Secrets_Badge"},
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/badge-count-25-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/badge-count-25-v.png"}
    ]
};
