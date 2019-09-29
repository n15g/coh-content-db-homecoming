import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Torchbearer: IBadgeData = {
    type: BadgeType.EVENT,
    key: "torchbearer",
    names: [
        {value: "Torchbearer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 9th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
