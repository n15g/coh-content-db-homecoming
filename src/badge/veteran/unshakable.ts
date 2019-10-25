import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Unshakable: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "unshakable",
    setTitleId: 1609,
    names: [
        {value: "Unshakable"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Nothing can keep a hero like you down. Try as villains might, you're just unshakable. You have attained ninety Veteran levels.`},
        {type: Alternate.V, value: `Nothing can keep a villain like you down. Try as heroes might, you're just unshakable. You have attained ninety Veteran levels.`}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/unshakable.png"}],
    acquisition: "Reach Veteran level 90"
};
