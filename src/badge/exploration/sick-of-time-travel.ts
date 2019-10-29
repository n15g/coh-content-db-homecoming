import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const SickOfTimeTravel: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sick-of-time-travel",
    setTitleId: 2424,
    names: [{value: "Sick of Time Travel"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Several investigations into food poisoning at this restaurant found no problem with the food. It was eventually discovered that the frequent dimensional reversions caused by the nearby Temporal Anchor were to blame.`}],
    mapKey: ReclusesVictory.key,
    location: [-653.2, 0.3, 63.7],
    links: [
        {title: "New PvP Exploration Badge List", href: "https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "7"
};
