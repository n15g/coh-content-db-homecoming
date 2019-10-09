import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Dedicated: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "dedicated",
    names: [
        {value: "Dedicated"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 27",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-27.png"}]
};
