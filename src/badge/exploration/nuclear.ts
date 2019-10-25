import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const Nuclear: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nuclear",
    setTitleId: 2429,
    names: [{value: "Nuclear"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Warburg ceased manufacturing nuclear warheads when the treaty was signed in 1982, but not before producing an enormous stockpile.`}],
    mapKey: Warburg.key,
    location: [363.0, -57.0, -335.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
