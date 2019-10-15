import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BehemothOverlord: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "behemoth-overlord",
    setTitleId: 503,
    names: [
        {value: "Behemoth Overlord"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Even demons obey your will."}
    ],
    acquisition: "Earn the [badge:demon-slayer] Badge (Circle of Thorns)",
    links: [
        {title: "Behemoth Overlord Badge", href: "https://paragonwiki.com/wiki/Behemoth_Overlord_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
