import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Loyal: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "loyal",
    setTitleId: 627,
    names: [
        {value: "Loyal"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your diligent service is recognized by the government of Paragon City. You have attained twelve Veteran levels.`},
        {type: Alternate.V, value: `Loyalty amongst thieves is such a rare occurrence these days, but you're certainly on track to shake things up a bit. You have attained twelve Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 12",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-12.png"}]
};
