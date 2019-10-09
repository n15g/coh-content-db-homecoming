import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const WhatLurksBeyond: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "what-lurks-beyond",
    names: [{value: "What Lurks Beyond"}],
    alignment: ALIGNMENT_ANY,
    mapKey: BloodyBay.key,
    location: [-1490.0, -23.0, -1883.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
