import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TournamentVictor: IBadgeData = {
    type: BadgeType.PVP,
    key: "tournament-victor",
    setTitleId: 1346,
    names: [
        {value: "Tournament Victor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've won your first Swiss Draw match, you're considered a Tournament Victor."}
    ],
    acquisition: "Win a rated or unrated Swiss Draw match in the Arena",
    links: [
        {title: "Tournament Victor Badge", href: "https://paragonwiki.com/wiki/Tournament_Victor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/tournament-victor.png"}
    ],
};