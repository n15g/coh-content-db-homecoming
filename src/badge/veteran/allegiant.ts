import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Allegiant: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "allegiant",
    names: [
        {value: "Allegiant"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 54",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-54.png"}]
};
