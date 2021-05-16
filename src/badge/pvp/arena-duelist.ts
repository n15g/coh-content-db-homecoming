import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArenaDuelist: IBadgeData = {
    type: BadgeType.PVP,
    key: "arena-duelist",
    setTitleId: 1341,
    names: [
        {value: "Arena Duelist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've won your first Arena Duel match, you're considered an Arena Duelist."}
    ],
    acquisition: "Win a rated or unrated Duel match in the Arena",
    links: [
        {title: "Arena Duelist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Arena_Duelist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/arena-duelist.png"}
    ],
};
