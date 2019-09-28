import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Uncompromising: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "uncompromising",
    names: [
        {value: "Uncompromising"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 81",
    imageKeys: [{value: "core.veteran.veteran-81"}]
};
