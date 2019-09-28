import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Staunch: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "staunch",
    names: [
        {value: "Staunch"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 18",
    imageKeys: [{value: "core.veteran.veteran-18"}]
};
