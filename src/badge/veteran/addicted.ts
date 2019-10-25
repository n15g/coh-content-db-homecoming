import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Addicted: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "addicted",
    setTitleId: 635,
    names: [
        {value: "Addicted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Despite your trials and long-standing experience, you are still around fighting the good fight. You have attained thirty-six Veteran levels.`},
        {type: Alternate.V, value: `You just won't stop after all this time. Even Lord Recluse is surprised you've lasted this long. You have attained thirty-six Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 36",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-36.png"}]
};
