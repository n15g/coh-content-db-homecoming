import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const KnightErrant: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "knight-errant",
    setTitleId: 200,
    names: [
        {type: Alternate.H, value: "Knight Errant"},
        {type: Alternate.V, value: "Black Knight"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have helped defeat the Clockwork Paladin, a diabolical invention of the Clockwork King."}
    ],
    acquisition: "Stop a Paladin Construction",
    links: [
        {title: "Knight Errant Badge", href: "https://homecoming.wiki/wiki/Knight_Errant_Badge"},
        {title: "Black Knight Badge", href: "https://homecoming.wiki/wiki/Black_Knight_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/knight-errant.png"}
    ],
};
