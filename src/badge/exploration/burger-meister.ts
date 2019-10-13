import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const BurgerMeister: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "burger-meister",
    names: [{value: "Burger Meister"}],
    alignment: ALIGNMENT_ANY,
    mapKey: BloodyBay.key,
    location: [1948.0, -15.0, 1806.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
