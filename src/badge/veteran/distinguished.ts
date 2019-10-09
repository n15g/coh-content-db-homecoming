import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Distinguished: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "distinguished",
    names: [
        {value: "Distinguished"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 72",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-72.png"}]
};
