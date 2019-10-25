import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const WatchYourBack: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "watch-your-back",
    setTitleId: 2425,
    names: [{value: "Watch Your Back"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `This tunnel leads directly to the Arachnos base. Freedom Corps used it as a staging area for surprise attacks until they were finally driven off and the tunnel entrance closed.`}],
    mapKey: ReclusesVictory.key,
    location: [-1343.7, -41.7, -1539.7],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
