import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Distinguished: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "distinguished",
    setTitleId: 1285,
    names: [
        {value: "Distinguished"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `With a selfless history as long as yours, you gain respect wherever you go from heroes and villains alike. You have attained seventy-two Veteran levels.`},
        {type: Alternate.V, value: `With a villainous history as long as yours, you gain respect wherever you go from heroes and villains alike. You have attained seventy-two Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 72",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-72.png"}]
};
