import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const TrueNeutral: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "true-neutral",
    setTitleId: 2423,
    names: [{value: "True Neutral"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Vanguard abandoned its Atlas Park outpost in this timeline, not willing to take sides between Freedom Corps and Arachnos. They continue to recruit metahumans of all alignments in their fight against alien threats.`}],
    mapKey: ReclusesVictory.key,
    location: [-0.3, 16.3, 511.9],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "6"
};
