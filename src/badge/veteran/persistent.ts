import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Persistent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "persistent",
    names: [
        {value: "Persistent"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 96"
};
