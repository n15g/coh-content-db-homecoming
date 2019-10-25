import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Zealous: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "zealous",
    setTitleId: 628,
    names: [
        {value: "Zealous"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've gained fifteen Veteran levels protecting Rhode Island's jewel, Paragon City.`},
        {type: Alternate.V, value: `You've gained fifteen Veteran levels chewing bubblegum and kicking butt. You ran out of gum a long time ago.`}
    ],
    acquisition: "Reach Veteran level 15",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-15.png"}]
};
