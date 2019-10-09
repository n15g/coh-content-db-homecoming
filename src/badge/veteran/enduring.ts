import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Enduring: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "enduring",
    names: [
        {value: "Enduring"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 66",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-66.png"}]
};
