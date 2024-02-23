import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Arachnophobic: IBadgeData = {
    type: BadgeType.PVP,
    key: "arachnophobic",
    setTitleId: 580,
    names: [
        {value: "Arachnophobic"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have helped defeat Lord Recluse in Recluse's Victory."}
    ],
    acquisition: "Defeat Lord Recluse in Recluse's Victory",
    links: [
        {title: "Arachnophobic Badge", href: "https://homecoming.wiki/wiki/Arachnophobic_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatrecluse.png"}
    ],
};
