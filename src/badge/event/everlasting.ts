import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Everlasting: IBadgeData = {
    type: BadgeType.EVENT,
    key: "everlasting",
    names: [
        {value: "Everlasting"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 14th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
