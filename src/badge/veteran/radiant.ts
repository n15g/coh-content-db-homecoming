import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Radiant: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "radiant",
    setTitleId: 1606,
    names: [
        {value: "Radiant"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your power is palpable and your very presence is inspiring to others. You have attained eighty-four Veteran levels.`},
        {type: Alternate.V, value: `Your power is palpable and lesser beings tremble in your wake. You have attained eighty-four Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 84",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-84.png"}]
};
