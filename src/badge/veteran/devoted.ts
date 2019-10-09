import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Devoted: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "devoted",
    names: [
        {value: "Devoted"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 24",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-24.png"}]
};
