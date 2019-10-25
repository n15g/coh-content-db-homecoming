import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Sorcerer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "sorcerer",
    setTitleId: 470,
    names: [
        {value: "Sorcerer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The Tsoo are honored to serve you."}
    ],
    acquisition: "Earn the [badge:mage-hunter] Badge (Tsoo)",
    links: [
        {title: "Sorcerer Badge", href: "https://paragonwiki.com/wiki/Sorcerer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};