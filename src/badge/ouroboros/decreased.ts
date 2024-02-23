import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Decreased: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "decreased",
    setTitleId: 930,
    names: [
        {value: "Decreased"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 35 and 39 while not gaining bonuses from slotted Enhancements.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 35 and 39 while not gaining bonuses from slotted Enhancements.`}
    ],
    acquisition: "Complete a level 36-40 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Decreased Badge", href: "https://homecoming.wiki/wiki/Decreased_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/decreased.png"}]
};
