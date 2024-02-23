import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Anemic: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "anemic",
    setTitleId: 927,
    names: [
        {value: "Anemic"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 20 and 24 while not gaining bonuses from slotted Enhancements.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 20 and 24 while not gaining bonuses from slotted Enhancements.`}
    ],
    acquisition: "Complete a level 21-25 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Anemic Badge", href: "https://homecoming.wiki/wiki/Anemic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/anemic.png"}]
};
