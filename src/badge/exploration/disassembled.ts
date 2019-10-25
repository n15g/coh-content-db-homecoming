import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const Disassembled: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "disassembled",
    setTitleId: 2426,
    names: [{value: "Disassembled"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Whether intended or not, the structure in front of you looks like a 1980s novelty toy that has seen better days.`}],
    mapKey: Warburg.key,
    location: [-812.0, 18.0, -489.0],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
