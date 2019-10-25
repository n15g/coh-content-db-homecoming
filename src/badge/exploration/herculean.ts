import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const Herculean: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "herculean",
    setTitleId: 2428,
    names: [{value: "Herculean"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `From this vantage point you can observe Malta's Hercules Titans as they prepare for deployment.`}],
    mapKey: Warburg.key,
    location: [1955.0, 120.0, -338.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
