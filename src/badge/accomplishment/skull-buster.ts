import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const SkullBuster: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "skull-buster",
    setTitleId: 2316,
    names: [
        {value: "Skull Buster"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You formed the New Regulators and put a stop to the Skulls' Superadine Ring in Kings Row. You " +
                "destroyed their lab and put one of The Petrovic Brothers behind bars, leaving the Skulls " +
                "scattered and weakened."
        }
    ],
    acquisition: "Complete the story arc from Eagle Eye",
    links: [
        {title: "Skull Buster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Skull_Buster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/skull-buster.png"}
    ],
};
