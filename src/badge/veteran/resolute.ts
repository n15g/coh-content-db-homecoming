import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Resolute: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "resolute",
    setTitleId: 1437,
    names: [
        {value: "Resolute"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `Against all odds, you've withstood the challenges that have been thrown your way and come out on top. You have attained seventy-five Veteran levels.`}],
    acquisition: "Reach Veteran level 75",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-75.png"}]
};
