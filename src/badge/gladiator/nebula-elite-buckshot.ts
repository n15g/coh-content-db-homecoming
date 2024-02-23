import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const NebulaEliteBuckshot: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "nebula-elite-buckshot",
    setTitleId: 491,
    names: [
        {value: "Nebula Elite Buckshot"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "These Council will make good gladiators."}
    ],
    acquisition: "Earn the [badge:protector-of-innocents] Badge (Council)",
    links: [
        {title: "Nebula Elite Buckshot Badge", href: "https://homecoming.wiki/wiki/Nebula_Elite_Buckshot_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
