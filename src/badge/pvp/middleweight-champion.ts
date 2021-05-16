import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MiddleweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "middleweight-champion",
    setTitleId: 226,
    names: [
        {value: "Middleweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have achieved the status of Champion in the Middleweight division by winning your first " +
                "match in this division."
        }
    ],
    acquisition: "Win an Arena event in the Middleweight division",
    links: [
        {title: "Middleweight Champion Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Middleweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/middleweight-champion.png"}
    ],
};
