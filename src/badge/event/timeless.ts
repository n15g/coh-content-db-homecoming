import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Timeless: IBadgeData = {
    type: BadgeType.EVENT,
    key: "timeless",
    setTitleId: 2341,
    names: [
        {value: "Timeless"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have helped celebrate the 13th anniversary of City of Heroes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/timeless.png"}],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
