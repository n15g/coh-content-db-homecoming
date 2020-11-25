import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const Burgermeister: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "burgermeister",
    setTitleId: 2412,
    names: [
        {type: Alternate.M, value: "Burgermeister"},
        {type: Alternate.F, value: "Burgermeisterin"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Hero Burgers was once the best fast-food restaurant in Oceanview, before the island was evacuated and abandoned.`}],
    mapKey: BloodyBay.key,
    location: [1948.0, -15.0, 1806.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "6"
};
