import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Resolute: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "resolute",
    names: [
        {value: "Resolute"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 75",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-75.png"}]
};
