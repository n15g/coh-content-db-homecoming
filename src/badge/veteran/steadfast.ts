import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Steadfast: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "steadfast",
    names: [
        {value: "Steadfast"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 21",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-21.png"}]
};
