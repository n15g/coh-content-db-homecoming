import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Overleveled: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "overleveled",
    names: [
        {value: "Overleveled"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 3",
    icons: [{value: "core.veteran.veteran-3"}]
};
