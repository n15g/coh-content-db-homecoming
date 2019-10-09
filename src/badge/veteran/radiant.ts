import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Radiant: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "radiant",
    names: [
        {value: "Radiant"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 84",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-84.png"}]
};
