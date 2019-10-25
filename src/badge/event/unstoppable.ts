import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unstoppable: IBadgeData = {
    type: BadgeType.EVENT,
    key: "unstoppable",
    setTitleId: 2334,
    names: [
        {value: "Unstoppable"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have helped celebrate the 10th anniversary of City of Heroes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unstoppable.png"}],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
