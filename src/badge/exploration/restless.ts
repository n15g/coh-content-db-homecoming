import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const Restless: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "restless",
    setTitleId: 2414,
    names: [{value: "Restless"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Graveyards litter the Bay, but Shivans and Banished Pantheon alike keep mourners from visiting their passed loved ones.`}],
    mapKey: BloodyBay.key,
    location: [-792.0, 2.0, 459.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "8"
};
