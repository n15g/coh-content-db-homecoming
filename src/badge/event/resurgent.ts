import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Resurgent: IBadgeData = {
    type: BadgeType.EVENT,
    key: "resurgent",
    setTitleId: 2432,
    names: [
        {value: "Resurgent"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have helped celebrate the 16th anniversary of City of Heroes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/resurgent.png"}],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
