import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Eternal: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "eternal",
    names: [
        {value: "Eternal"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 45",
    imageKeys: [{value: "core.veteran.veteran-45"}]
};
