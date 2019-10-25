import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Committed: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "committed",
    setTitleId: 633,
    names: [
        {value: "Committed"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `There's no stopping your campaign to end crime and tyranny wherever it appears. You have attained thirty Veteran levels.`},
        {type: Alternate.V, value: `There's no stopping your campaign to instill fear into the hearts of your lessers. You have attained thirty Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 30",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-30.png"}]
};
