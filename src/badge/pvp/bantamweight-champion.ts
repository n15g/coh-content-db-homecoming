import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BantamweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "bantamweight-champion",
    setTitleId: 222,
    names: [
        {value: "Bantamweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have achieved the status of Champion in the Bantamweight division by winning your first " +
        "match in this division."}
    ],
    acquisition: "Win an Arena event in the Bantamweight division",
    links: [
        {title: "Bantamweight Champion Badge", href: "https://paragonwiki.com/wiki/Bantamweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/bantamweight-champion.png"}
    ],
};