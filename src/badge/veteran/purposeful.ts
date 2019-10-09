import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Purposeful: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "purposeful",
    names: [
        {value: "Purposeful"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 78",
    icons: [{value: "core.veteran.veteran-78"}]
};
