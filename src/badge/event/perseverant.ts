import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Perseverant: IBadgeData = {
    type: BadgeType.EVENT,
    key: "perseverant",
    setTitleId: 2339,
    names: [
        {value: "Perseverant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have helped celebrate the 11th anniversary of City of Heroes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/perseverant.png"}],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
