import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const RunningOnEmpty: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "running-on-empty",
    names: [
        {value: "Running on Empty"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Defeat 200 Malta Sappers."
};
