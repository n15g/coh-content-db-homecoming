import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Loyal: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "loyal",
    names: [
        {value: "Loyal"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 12",
    imageKeys: [{value: "core.veteran.veteran-12"}]
};
