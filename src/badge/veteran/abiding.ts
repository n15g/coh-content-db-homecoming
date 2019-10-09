import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Abiding: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "abiding",
    names: [
        {value: "Abiding"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 57",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-57.png"}]
};
