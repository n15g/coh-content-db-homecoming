import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const MostlyHarmless: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "mostly-harmless",
    setTitleId: 2413,
    names: [{value: "Mostly Harmless"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `The Shiva fragments that crashed here created little collateral damage. This refinery is completely intact around the impact zone.`}],
    mapKey: BloodyBay.key,
    location: [-192.0, 96.0, 2064.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
