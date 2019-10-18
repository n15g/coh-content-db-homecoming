import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Tenacious: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "tenacious",
    names: [
        {value: "Tenacious"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 87",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-87.png"}]
};