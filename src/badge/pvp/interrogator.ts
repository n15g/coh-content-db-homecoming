import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Interrogator: IBadgeData = {
    type: BadgeType.PVP,
    key: "interrogator",
    setTitleId: 577,
    names: [
        {value: "Interrogator"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have helped defeat Penelope Yin in Recluse's Victory."}
    ],
    acquisition: "Defeat Penelope Yin in Recluse's Victory",
    links: [
        {title: "Interrogator Badge", href: "https://homecoming.wiki/wiki/Interrogator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/interrogator.png"}
    ],
};
