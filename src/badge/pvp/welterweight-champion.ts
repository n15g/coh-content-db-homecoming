import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WelterweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "welterweight-champion",
    setTitleId: 225,
    names: [
        {value: "Welterweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have achieved the status of Champion in the Welterweight division by winning your first " +
                "match in this division."
        }
    ],
    acquisition: "Win an Arena event in the Welterweight division",
    links: [
        {title: "Welterweight Champion Badge", href: "https://homecoming.wiki/wiki/Welterweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/welterweight-champion.png"}
    ],
};
