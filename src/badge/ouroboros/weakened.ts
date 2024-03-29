import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Weakened: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "weakened",
    setTitleId: 928,
    names: [
        {value: "Weakened"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 25 and 29 while not gaining bonuses from slotted Enhancements.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 25 and 29 while not gaining bonuses from slotted Enhancements.`}
    ],
    acquisition: "Complete a level 26-30 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Weakened Badge", href: "https://homecoming.wiki/wiki/Weakened_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/weakened.png"}]
};
