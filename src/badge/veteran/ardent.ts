import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Ardent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "ardent",
    setTitleId: 830,
    names: [
        {value: "Ardent"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Non-stop crime fighting has earned you the respect you deserve. You have attained thirty-nine Veteran levels.`},
        {type: Alternate.V, value: `You take what you want, when you want it and you'll crush anyone who stands in your way. You have attained thirty-nine Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 39",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-39.png"}]
};
