import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Lessened: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "lessened",
    setTitleId: 924,
    names: [
        {value: "Lessened"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 1 and 15 while not gaining bonuses from slotted Enhancements.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 1 and 15 while not gaining bonuses from slotted Enhancements.`}
    ],
    acquisition: "Complete a level 1-15 Flashback story arc using no enhancements.",
    links: [
        {title: "Lessened Badge", href: "https://homecoming.wiki/wiki/Lessened_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/lessened.png"}]
};
