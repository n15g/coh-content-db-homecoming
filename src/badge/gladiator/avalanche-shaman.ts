import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AvalancheShaman: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "avalanche-shaman",
    setTitleId: 489,
    names: [
        {value: "Avalanche Shaman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "These shamans acknowledge your might."}
    ],
    acquisition: "Earn the [badge:banisher] Badge (Banished Pantheon)",
    links: [
        {title: "Avalanche Shaman Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Avalanche_Shaman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
