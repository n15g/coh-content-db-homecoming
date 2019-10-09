import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Zealous: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "zealous",
    names: [
        {value: "Zealous"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 15",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-15.png"}]
};
