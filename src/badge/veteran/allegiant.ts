import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Allegiant: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "allegiant",
    setTitleId: 1011,
    names: [
        {value: "Allegiant"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've shown the world that your allegiance is to the people and those in need. You have attained fifty-four Veteran levels.`},
        {type: Alternate.V, value: `You've shown the world that the only one you serve is yourself. In fact, the way you see it, the world should be serving you. You have attained fifty-four Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 54",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-54.png"}]
};
