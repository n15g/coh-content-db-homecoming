import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Timeless: IBadgeData = {
    type: BadgeType.EVENT,
    key: "timeless",
    names: [
        {value: "Timeless"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 13th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
