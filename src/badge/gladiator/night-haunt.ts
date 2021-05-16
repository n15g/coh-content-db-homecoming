import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const NightHaunt: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "night-haunt",
    setTitleId: 448,
    names: [
        {value: "Night Haunt"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "These tormented souls are bound to you."}
    ],
    acquisition: "Earn the [badge:pirate] Badge (Spectral Pirates)",
    links: [
        {title: "Night Haunt Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Night_Haunt_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
