import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Perseverant: IBadgeData = {
    type: BadgeType.EVENT,
    key: "perseverant",
    names: [
        {value: "Perseverant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 11th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
