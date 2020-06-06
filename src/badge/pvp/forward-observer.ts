import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ForwardObserver: IBadgeData = {
    type: BadgeType.PVP,
    key: "forward-observer",
    setTitleId: 365,
    names: [
        {value: "Forward Observer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You've taken down 10 Villains in PvP."},
        {type: Alternate.V, value: "You've taken down 10 Heroes in PvP."}
    ],
    acquisition: "Achieve 10 kills in a PvP zone",
    links: [
        {title: "Forward Observer Badge", href: "https://paragonwiki.com/wiki/Forward_Observer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png"}
    ],
};
