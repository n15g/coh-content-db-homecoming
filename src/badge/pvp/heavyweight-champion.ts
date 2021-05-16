import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HeavyweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "heavyweight-champion",
    setTitleId: 228,
    names: [
        {value: "Heavyweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have achieved the status of Champion in the Heavyweight division by winning your first " +
                "match in this division."
        }
    ],
    acquisition: "Win an Arena event in the Heavyweight division",
    links: [
        {title: "Heavyweight Champion Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Heavyweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/heavyweight-champion.png"}
    ],
};
