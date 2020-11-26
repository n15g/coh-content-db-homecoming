import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const HotDog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hot-dog",
    setTitleId: 2416,
    names: [{value: "Hot Dog"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Although Nick has since set up shop at a new location on Talos Island, many former residents of Siren's Call still miss the atmosphere of the old stand.`}],
    mapKey: SirensCall.key,
    location: [149.0, 0.0, 1473.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "6"
};
