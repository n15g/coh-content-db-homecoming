import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const GameOver: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "game-over",
    setTitleId: 2430,
    names: [{value: "Game Over"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `This bunker was where the Council made their final stand against Arachnos. The battle for the bunker lasted two weeks, until Lord Recluse was forced to personally lead the final assault.`}],
    mapKey: Warburg.key,
    location: [-1178.0, 98.0, -724.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
