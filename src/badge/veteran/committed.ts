import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Committed: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "committed",
    names: [
        {value: "Committed"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 30",
    imageKeys: [{value: "core.veteran.veteran-30"}]
};
