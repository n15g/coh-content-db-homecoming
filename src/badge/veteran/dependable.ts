import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Dependable: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "dependable",
    names: [
        {value: "Dependable"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 9",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-9.png"}]
};
