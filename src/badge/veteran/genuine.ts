import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Genuine: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "genuine",
    names: [
        {value: "Genuine"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 69",
    imageKeys: [{value: "core.veteran.veteran-69"}]
};
