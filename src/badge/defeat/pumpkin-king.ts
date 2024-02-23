import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PumpkinKing: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "pumpkin-king",
    setTitleId: 429,
    names: [
        {type: Alternate.M, value: "Pumpkin King"},
        {type: Alternate.F, value: "Pumpkin Queen"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The king is dead. Long live the king!"}
    ],
    acquisition: "Defeat Eochai, a monster that spawns in Croatoa",
    links: [
        {title: "Pumpkin King Badge", href: "https://homecoming.wiki/wiki/Pumpkin_King_Badge"},
        {title: "Pumpkin Queen Badge", href: "https://homecoming.wiki/wiki/Pumpkin_Queen_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/pumpkin-king.png"}
    ],
};
