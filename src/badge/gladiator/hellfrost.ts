import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hellfrost: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "hellfrost",
    setTitleId: 462,
    names: [
        {value: "Hellfrost"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "This demon is amused to serve you."}
    ],
    acquisition: "Earn the [badge:coldblooded] Badge (Circle of Thorns)",
    links: [
        {title: "Hellfrost Badge", href: "https://paragonwiki.com/wiki/Hellfrost_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
