import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Encouraged: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "encouraged",
    names: [
        {value: "Encouraged"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 51",
    icons: [{value: "core.veteran.veteran-51"}]
};
