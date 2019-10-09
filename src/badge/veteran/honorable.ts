import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Honorable: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "honorable",
    names: [
        {value: "Honorable"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 63",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-63.png"}]
};
