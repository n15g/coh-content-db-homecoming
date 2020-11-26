import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BruteForced: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "brute-forced",
    names: [
        {value: "Brute Forced"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Defeat 500 Points worth of Rularuu Brutes (Boss = 5, Others = 1)."
};
