import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Radiant: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "radiant",
    names: [
        {value: "Radiant"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 84",
    imageKeys: [{value: "core.veteran.veteran-84"}]
};
