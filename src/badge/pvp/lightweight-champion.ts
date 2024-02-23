import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LightweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "lightweight-champion",
    setTitleId: 224,
    names: [
        {value: "Lightweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have achieved the status of Champion in the Lightweight division by winning your first " +
                "match in this division."
        }
    ],
    acquisition: "Win an Arena event in the Lightweight division",
    links: [
        {title: "Lightweight Champion Badge", href: "https://homecoming.wiki/wiki/Lightweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/lightweight-champion.png"}
    ],
};
