import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Uppercut: IBadgeData = {
    type: BadgeType.PVP,
    key: "uppercut",
    setTitleId: 579,
    names: [
        {value: "Uppercut"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have helped defeat Back Alley Brawler in Recluse's Victory."}
    ],
    acquisition: "Defeat Back Alley Brawler in Recluse's Victory",
    links: [
        {title: "Uppercut Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Uppercut_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/uppercut.png"}
    ],
};
