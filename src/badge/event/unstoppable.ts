import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unstoppable: IBadgeData = {
    type: BadgeType.EVENT,
    key: "unstoppable",
    names: [
        {value: "Unstoppable"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 10th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
