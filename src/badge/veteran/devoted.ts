import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Devoted: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "devoted",
    setTitleId: 631,
    names: [
        {value: "Devoted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Nobody can tear you and Paragon City apart. You have attained twenty-four Veteran levels.`},
        {type: Alternate.V, value: `Nobody can come between you and that big vault o' riches. You have attained twenty-four Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 24",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-24.png"}]
};
