import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Distinguished: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "distinguished",
    names: [
        {value: "Distinguished"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 72",
    icons: [{value: "core.veteran.veteran-72"}]
};
