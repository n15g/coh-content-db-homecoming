import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Boulder: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "boulder",
    setTitleId: 488,
    names: [
        {value: "Boulder"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have might over nature itself."}
    ],
    acquisition: "Earn the [badge:liberator] Badge (Devouring Earth)",
    links: [
        {title: "Boulder Badge", href: "https://paragonwiki.com/wiki/Boulder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
