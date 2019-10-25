import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Excelsior: IBadgeData = {
    type: BadgeType.EVENT,
    key: "excelsior",
    setTitleId: 2396,
    names: [
        {value: "Excelsior!"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have helped celebrate the 15th anniversary of City of Heroes.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/excelsior.png"}],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May."
};
