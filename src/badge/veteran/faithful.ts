import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Faithful: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "faithful",
    names: [
        {value: "Faithful"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 6",
    icons: [{value: "core.veteran.veteran-6"}]
};
