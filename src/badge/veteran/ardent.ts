import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Ardent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "ardent",
    names: [
        {value: "Ardent"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 39",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-39.png"}]
};
