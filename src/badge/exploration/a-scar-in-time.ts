import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const AScarInTime: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "a-scar-in-time",
    names: [{value: "A Scar in Time"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [552.3, 74.3, -1415.9],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
