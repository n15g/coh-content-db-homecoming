import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Dependable: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "dependable",
    setTitleId: 626,
    names: [
        {value: "Dependable"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've achieved nine Veteran levels. Paragon City can depend on you to be there.`},
        {type: Alternate.V, value: `You've achieved nine Veteran levels and your powers are still growing.`}
    ],
    acquisition: "Reach Veteran level 9",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-9.png"}]
};
