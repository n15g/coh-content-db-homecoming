import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Addicted: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "addicted",
    names: [
        {value: "Addicted"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 36",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-36.png"}]
};
