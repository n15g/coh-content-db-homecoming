import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Abiding: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "abiding",
    setTitleId: 1057,
    names: [
        {value: "Abiding"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You're still around fighting the good fight after all this time. If one thing could be said about you, it's that you're consistent. You have attained fifty-seven Veteran levels.`},
        {type: Alternate.V, value: `You're still around crushing your foes and taking what is rightfully yours after all this time. If one thing could be said about you it's that you're persistent. You have attained fifty-seven Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 57",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-57.png"}]
};
