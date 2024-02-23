import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SuperHeavyweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "super-heavyweight-champion",
    setTitleId: 229,
    names: [
        {value: "Super Heavyweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have achieved the status of Champion in the Super Heavyweight division by winning your " +
                "first match in this division."
        }
    ],
    acquisition: "Win an Arena event in the Super Heavyweight division",
    links: [
        {title: "Super Heavyweight Champion Badge", href: "https://homecoming.wiki/wiki/Super_Heavyweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/super-heavyweight-champion.png"}
    ],
};
