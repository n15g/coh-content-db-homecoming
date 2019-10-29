import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const WastedResources: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "wasted-resources",
    setTitleId: 2415,
    names: [{value: "Wasted Resources"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `These rigs stand derelict still, waiting for the area to be secured and the great War Walls to be repaired.`}],
    mapKey: SirensCall.key,
    location: [-324.0, 71.0, 1227.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "5"
};
