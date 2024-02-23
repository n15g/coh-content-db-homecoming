import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Weatherman: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "weatherman",
    setTitleId: 48,
    names: [
        {type: Alternate.M, value: "Weatherman"},
        {type: Alternate.F, value: "Weathergirl"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have calmed the storm by ridding the streets of the Outcasts' leaders."}
    ],
    acquisition: "Defeat 100 Outcasts bosses",
    links: [
        {title: "Weatherman Badge", href: "https://homecoming.wiki/wiki/Weatherman_Badge"},
        {title: "Weathergirl Badge", href: "https://homecoming.wiki/wiki/Weathergirl_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/weatherman.png"}
    ],
};
