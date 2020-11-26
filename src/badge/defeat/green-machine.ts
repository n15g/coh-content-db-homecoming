import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GreenMachine: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "green-machine",
    names: [
        {value: "Green Machine"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Defeat 100 Nemesis Warhulks."
};
