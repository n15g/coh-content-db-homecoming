import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Uncompromising: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "uncompromising",
    setTitleId: 1603,
    names: [
        {value: "Uncompromising"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You stand up for those who cannot stand up for themselves without compromise. You have attained eighty-one Veteran levels.`},
        {type: Alternate.V, value: `Believe it or not, there are still some people out there that don't know not to mess with you. You have attained eighty-one Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 81",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-81.png"}]
};
