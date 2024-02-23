import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Uninspired: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "uninspired",
    setTitleId: 923,
    names: [
        {value: "Uninspired"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 46 and 50 while not using Inspirations.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using Inspirations.`}
    ],
    acquisition: "Complete a level 46-50 Flashback story arc using no inspirations.",
    links: [
        {title: "Uninspired Badge", href: "https://homecoming.wiki/wiki/Uninspired_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/uninspired.png"}]
};
