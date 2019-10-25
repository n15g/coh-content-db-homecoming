import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Persistent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "persistent",
    setTitleId: 1613,
    names: [
        {value: "Persistent"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Villains have practically given up trying to face you. Your persistence to your goals is utterly unmatched. You have attained ninety-six Veteran levels.`},
        {type: Alternate.V, value: `Heroes have practically given up trying to take back your turf. Your persistence towards taking what you want is utterly unmatched. You have attained ninety-six Veteran levels.`}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/persistent.png"}],
    acquisition: "Reach Veteran level 96"
};
