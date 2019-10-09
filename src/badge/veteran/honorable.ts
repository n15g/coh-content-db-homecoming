import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Honorable: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "honorable",
    names: [
        {value: "Honorable"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 63",
    icons: [{value: "core.veteran.veteran-63"}]
};
