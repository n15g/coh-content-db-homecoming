import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Motivated: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "motivated",
    names: [
        {value: "Motivated"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 48",
    imageKeys: [{value: "core.veteran.veteran-48"}]
};
