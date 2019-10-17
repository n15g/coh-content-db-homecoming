import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const DeadEye: IBadgeData = {
    type: BadgeType.PVP,
    key: "dead-eye",
    names: [
        {value: "Dead-eye"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have helped defeat Manticore in Recluse's Victory."}
    ],
    acquisition: "Defeat Manticore in Recluse's Victory",
    links: [
        {title: "Dead-eye Badge", href: "https://paragonwiki.com/wiki/Dead-eye_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/dead-eye.png"}
    ],
};