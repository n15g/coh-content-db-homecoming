import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AssaultAndBattery: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "assault-and-battery",
    names: [
        {value: "Assault and Battery"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Defeat 50 Freakshow Super Stunners."
};
