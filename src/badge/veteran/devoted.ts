import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Devoted: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "devoted",
    names: [
        {value: "Devoted"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 24",
    imageKeys: [{value: "core.veteran.veteran-24"}]
};
