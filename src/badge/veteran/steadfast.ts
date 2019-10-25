import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Steadfast: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "steadfast",
    setTitleId: 630,
    names: [
        {value: "Steadfast"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `All this crimefighting has people calling you Steadfast. You have attained twenty-one Veteran levels.`},
        {type: Alternate.V, value: `You have a reputation for always being there, and always being bad. You have attained twenty-one Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 21",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-21.png"}]
};
