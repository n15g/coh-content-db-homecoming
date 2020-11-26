import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BrassHunter: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "brass-hunter",
    names: [
        {value: "Brass Hunter"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Defeat 1000 Nemesis Jaegers."
};
