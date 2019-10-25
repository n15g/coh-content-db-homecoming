import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Tenacious: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "tenacious",
    setTitleId: 1608,
    names: [
        {value: "Tenacious"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `When you are focused on your goal, nothing can get in your way. You have attained eighty-seven Veteran levels.`}],
    acquisition: "Reach Veteran level 87",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-87.png"}]
};
