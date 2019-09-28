import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Ardent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "ardent",
    names: [
        {value: "Ardent"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 39",
    imageKeys: [{value: "core.veteran.veteran-39"}]
};
