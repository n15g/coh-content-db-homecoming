import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const StrawweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "strawweight-champion",
    names: [
        {value: "Strawweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have achieved the status of Champion in the Strawweight division by winning your first " +
        "match in this division."}
    ],
    acquisition: "Win an Arena event in the Strawweight division",
    links: [
        {title: "Strawweight Champion Badge", href: "https://paragonwiki.com/wiki/Strawweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/strawweight-champion.png"}
    ],
};