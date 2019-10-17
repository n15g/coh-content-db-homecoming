import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Surging: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "surging",
    setTitleId: 519,
    names: [
        {value: "Surging"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have helped defeat Deathsurge."}
    ],
    acquisition: "Defeat Deathsurge, a monster that spawns in Cap au Diable",
    links: [
        {title: "Surging Badge", href: "https://paragonwiki.com/wiki/Surging_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/surging.png"}
    ],
};