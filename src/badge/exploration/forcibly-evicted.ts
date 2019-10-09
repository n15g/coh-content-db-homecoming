import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const ForciblyEvicted: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "forcibly-evicted",
    names: [{value: "Forcibly Evicted"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Warburg.key,
    location: [4.0, -64.0, -436.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
