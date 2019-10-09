import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Steadfast: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "steadfast",
    names: [
        {value: "Steadfast"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 21",
    icons: [{value: "core.veteran.veteran-21"}]
};
