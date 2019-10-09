import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Dependable: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "dependable",
    names: [
        {value: "Dependable"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 9",
    icons: [{value: "core.veteran.veteran-9"}]
};
