import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const Volatile: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "volatile",
    setTitleId: 2418,
    names: [{value: "Volatile"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `This refinery was already under investigation for its poor handling of explosive gases when the shockwave from the Sunburst incident created a chain reaction that leveled the entire complex.`}],
    mapKey: SirensCall.key,
    location: [-634.0, -132.0, 300.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "8"
};
