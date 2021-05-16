import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Arachnoid: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "arachnoid",
    setTitleId: 440,
    names: [
        {value: "Arachnoid"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "These hideous creatures obey you."}
    ],
    acquisition: "Earn the [badge:sewer-dweller] Badge (Arachnoids)",
    links: [
        {title: "Arachnoid Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Arachnoid_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
