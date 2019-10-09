import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Zealous: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "zealous",
    names: [
        {value: "Zealous"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 15",
    icons: [{value: "core.veteran.veteran-15"}]
};
