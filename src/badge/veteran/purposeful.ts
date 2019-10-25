import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Purposeful: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "purposeful",
    setTitleId: 1601,
    names: [
        {value: "Purposeful"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your drive and purpose is what keeps you going and standing up for what you believe in. You have attained seventy-eight Veteran levels.`},
        {type: Alternate.V, value: `Your drive and purpose is what keeps you going and crushing your foes beneath your heel. You have attained seventy-eight Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 78",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-78.png"}]
};
