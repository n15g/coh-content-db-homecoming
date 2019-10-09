import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Staunch: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "staunch",
    names: [
        {value: "Staunch"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 18",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-18.png"}]
};
