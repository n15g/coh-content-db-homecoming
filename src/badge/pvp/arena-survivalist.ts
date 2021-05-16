import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArenaSurvivalist: IBadgeData = {
    type: BadgeType.PVP,
    key: "arena-survivalist",
    setTitleId: 1351,
    names: [
        {value: "Arena Survivalist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've won your first Free for All match, you're considered an Arena Survivalist."}
    ],
    acquisition: "Win a rated or unrated Battle Royale match in the Arena",
    links: [
        {title: "Arena Survivalist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Arena_Survivalist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-survivalist.png"}
    ],
};
