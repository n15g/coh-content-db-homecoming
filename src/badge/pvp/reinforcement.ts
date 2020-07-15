import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Reinforcement: IBadgeData = {
    type: BadgeType.PVP,
    key: "reinforcement",
    setTitleId: 364,
    names: [
        {value: "Reinforcement"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You've taken down 20 villains in PvP."},
        {type: Alternate.V, value: "You've taken down 20 heroes in PvP."}
    ],
    acquisition: "Defeat 20 player characters in a PvP zone by your own hand",
    links: [
        {title: "Reinforcement Badge", href: "https://paragonwiki.com/wiki/Reinforcement_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png"}
    ],
};
