import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ForwardObserver: IBadgeData = {
    type: BadgeType.PVP,
    key: "forward-observer",
    setTitleId: 365,
    names: [
        {value: "Forward Observer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've achieved a PvP Reputation of 100"}
    ],
    acquisition: "Achieve 20 kills in a PvP zone",
    links: [
        {title: "Forward Observer Badge", href: "https://paragonwiki.com/wiki/Forward_Observer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/pvp-defeats.png"}
    ],
};