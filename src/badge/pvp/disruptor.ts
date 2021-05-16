import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Disruptor: IBadgeData = {
    type: BadgeType.PVP,
    key: "disruptor",
    setTitleId: 366,
    names: [
        {value: "Disruptor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You've taken down 50 villains in PvP."},
        {type: Alternate.V, value: "You've taken down 50 heroes in PvP."}
    ],
    acquisition: "Defeat 50 player characters in a PvP zone by your own hand",
    links: [
        {title: "Disruptor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Disruptor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png"}
    ],
};
