import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ArchMageOfAgony: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "arch-mage-of-agony",
    setTitleId: 509,
    names: [
        {value: "Arch-Mage of Agony"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You can command the spirits of another age!"}
    ],
    acquisition: "Earn the [badge:archmage] Badge (Circle of Thorns)",
    links: [
        {title: "Arch-Mage of Agony Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Arch-Mage_of_Agony_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
