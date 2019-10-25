import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Diligent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "diligent",
    setTitleId: 1611,
    names: [
        {value: "Diligent"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `It's safe to say Paragon City would not be the same if it weren't for your tireless efforts. You have attained ninety-three Veteran levels.`},
        {type: Alternate.V, value: `It is safe to say the world would be a far different place if it weren't for you. You have attained ninety-three Veteran levels.`}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/diligent.png"}],
    acquisition: "Reach Veteran level 93"
};
