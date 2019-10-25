import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Indomitable: IBadgeData = {
    type: BadgeType.EVENT,
    key: "indomitable",
    setTitleId: 2340,
    names: [
        {value: "Indomitable"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have helped celebrate the 12th anniversary of City of Heroes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/indomitable.png"}],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
