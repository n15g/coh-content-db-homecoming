import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Sandblasted: IBadgeData = {
    type: BadgeType.PVP,
    key: "sandblasted",
    setTitleId: 583,
    names: [
        {value: "Sandblasted"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have helped defeat Scirocco in Recluse's Victory."}
    ],
    acquisition: "Defeat Scirocco in Recluse's Victory",
    links: [
        {title: "Sandblasted Badge", href: "https://homecoming.wiki/wiki/Sandblasted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/sandblasted.png"}
    ],
};
