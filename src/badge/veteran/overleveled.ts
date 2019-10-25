import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Overleveled: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "overleveled",
    setTitleId: 624,
    names: [
        {value: "Overleveled"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have come to understand that your experience and prowess do not peak at the highest Security Level. You have attained three Veteran levels.`},
        {type: Alternate.V, value: `You have come to understand that your experience and prowess do not peak at the highest Threat Level. You have attained three Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 3",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-3.png"}]
};
