import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Abiding: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "abiding",
    names: [
        {value: "Abiding"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 57",
    imageKeys: [{value: "core.veteran.veteran-57"}]
};
