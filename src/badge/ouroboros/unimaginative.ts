import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unimaginative: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "unimaginative",
    names: [
        {value: "Unimaginative"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 15 and 19 while not using Inspirations."},
    ],
    acquisition: "Complete a level 16-19 Flashback arc using no inspirations.",
    links: [
        {title: "Unimaginative Badge", href: "https://paragonwiki.com/wiki/Unimaginative_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/unimaginative.png"}]
};
