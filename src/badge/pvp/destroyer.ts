import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Destroyer: IBadgeData = {
    type: BadgeType.PVP,
    key: "destroyer",
    names: [
        {value: "Destroyer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have helped defeat Positron in Recluse's Victory."}
    ],
    acquisition: "Defeat Positron in Recluse's Victory",
    links: [
        {title: "Destroyer Badge", href: "https://paragonwiki.com/wiki/Destroyer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/destroyer.png"}
    ],
};