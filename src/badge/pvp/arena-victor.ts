import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArenaVictor: IBadgeData = {
    type: BadgeType.PVP,
    key: "arena-victor",
    setTitleId: 1336,
    names: [
        {value: "Arena Victor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've won your first Arena match, you're considered an Arena Victor"}
    ],
    acquisition: "Win any rated or unrated match in the Arena",
    links: [
        {title: "Arena Victor Badge", href: "https://paragonwiki.com/wiki/Arena_Victor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-victor.png"}
    ],
};