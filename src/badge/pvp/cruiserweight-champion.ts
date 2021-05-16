import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CruiserweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "cruiserweight-champion",
    setTitleId: 227,
    names: [
        {value: "Cruiserweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have achieved the status of Champion in the Cruiserweight division by winning your first " +
                "match in this division."
        }
    ],
    acquisition: "Win an Arena event in the Cruiserweight division",
    links: [
        {title: "Cruiserweight Champion Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Cruiserweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cruiserweight-champion.png"}
    ],
};
