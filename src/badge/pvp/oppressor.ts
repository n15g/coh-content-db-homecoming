import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Oppressor: IBadgeData = {
    type: BadgeType.PVP,
    key: "oppressor",
    setTitleId: 574,
    names: [
        {value: "Oppressor"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have helped defeat Ms. Liberty in Recluse's Victory."}
    ],
    acquisition: "Defeat Ms. Liberty in Recluse's Victory",
    links: [
        {title: "Oppressor Badge", href: "https://paragonwiki.com/wiki/Oppressor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatstatesman.png"}
    ],
};