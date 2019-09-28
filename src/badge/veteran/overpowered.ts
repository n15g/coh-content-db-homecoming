import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Overpowered: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "overpowered",
    names: [
        {value: "Overpowered"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 99"
};
