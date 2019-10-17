import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FeatherweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "featherweight-champion",
    setTitleId: 223,
    names: [
        {value: "Featherweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have achieved the status of Champion in the Featherweight division by winning your first " +
        "match in this division."}
    ],
    acquisition: "Win an Arena event in the Featherweight division",
    links: [
        {title: "Featherweight Champion Badge", href: "https://paragonwiki.com/wiki/Featherweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/featherweight-champion.png"}
    ],
};