import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SirensCall} from "../../map/sirens-call";

export const StillStanding: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "still-standing",
    setTitleId: 2417,
    names: [{value: "Still Standing"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `This building was shaken to its foundations, but it is still standing... and so are you.`}],
    mapKey: SirensCall.key,
    location: [105.0, 190.8, -324.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "7"
};
