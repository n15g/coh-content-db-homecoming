import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FlyweightChampion: IBadgeData = {
    type: BadgeType.PVP,
    key: "flyweight-champion",
    setTitleId: 221,
    names: [
        {value: "Flyweight Champion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have achieved the status of Champion in the Flyweight division by winning your first match " +
                "in this division."
        }
    ],
    acquisition: "Win an Arena event in the Flyweight division",
    links: [
        {title: "Flyweight Champion Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Flyweight_Champion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/flyweight-champion.png"}
    ],
};
