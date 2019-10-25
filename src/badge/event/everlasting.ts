import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Everlasting: IBadgeData = {
    type: BadgeType.EVENT,
    key: "everlasting",
    setTitleId: 2384,
    names: [
        {value: "Everlasting"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have helped celebrate the 14th anniversary of City of Heroes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/everlasting.png"}],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
