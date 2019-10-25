import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Eternal: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "eternal",
    setTitleId: 968,
    names: [
        {value: "Eternal"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `No one can keep you down. It's no wonder some of your peers consider you 'Eternal'. You have attained forty-five Veteran levels.`}],
    acquisition: "Reach Veteran level 45",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-45.png"}]
};
