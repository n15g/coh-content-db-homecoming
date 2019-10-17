import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Reformed: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "reformed",
    setTitleId: 311,
    names: [
        {type: Alternate.H, value: "Reformed"},
        {type: Alternate.V, value: "Villain"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Once you were considered a villain, but now you walk the path of the straight and narrow."},
        {type: Alternate.V, value: "Longbow now officially considers you a Villain."}
    ],
    acquisition: "Defeat 1000 Longbow",
    links: [
        {title: "Reformed Badge", href: "https://paragonwiki.com/wiki/Reformed_Badge"},
        {title: "Villain Badge", href: "https://paragonwiki.com/wiki/Villain_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/reformed.png"}
    ],
};