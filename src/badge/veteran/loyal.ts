import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Loyal: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "loyal",
    names: [
        {value: "Loyal"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 12",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-12.png"}]
};
