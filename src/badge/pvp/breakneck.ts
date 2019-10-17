import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Breakneck: IBadgeData = {
    type: BadgeType.PVP,
    key: "breakneck",
    names: [
        {value: "Breakneck"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have helped defeat Synapse in Recluse's Victory."}
    ],
    acquisition: "Defeat Synapse in Recluse's Victory",
    links: [
        {title: "Breakneck Badge", href: "https://paragonwiki.com/wiki/Breakneck_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/breakneck.png"}
    ],
};