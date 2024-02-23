import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const SharkHunter: IBadgeData = {
    type: BadgeType.PVP,
    key: "shark-hunter",
    setTitleId: 584,
    names: [
        {value: "Shark Hunter"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have helped defeat Captain Mako in Recluse's Victory."}
    ],
    acquisition: "Defeat Captain Mako in Recluse's Victory",
    links: [
        {title: "Shark Hunter Badge", href: "https://homecoming.wiki/wiki/Shark_Hunter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/shark-hunter.png"}
    ],
};
