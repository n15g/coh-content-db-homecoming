import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Genuine: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "genuine",
    setTitleId: 1283,
    names: [
        {value: "Genuine"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You're true to what you believe in; your peers consider you 'Genuine'. You have attained sixty-nine Veteran levels.`},
        {type: Alternate.V, value: `You're true to what you believe in: kicking butt and striking fear into everyone you face. Your peers consider you 'Genuine'. You have attained sixty-nine Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 69",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-69.png"}]
};
