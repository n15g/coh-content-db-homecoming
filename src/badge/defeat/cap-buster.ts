import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CapBuster: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "cap-buster",
    setTitleId: 431,
    names: [
        {value: "Cap Buster"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have shown the Red Caps you are not to be toyed with."}
    ],
    acquisition: "Defeat 333 Red Caps",
    links: [
        {title: "Cap Buster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Cap_Buster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cap-buster.png"}
    ],
};
