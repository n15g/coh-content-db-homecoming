import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Deflated: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "deflated",
    setTitleId: 929,
    names: [
        {value: "Deflated"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 30 and 34 while not gaining bonuses from slotted Enhancements.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 30 and 34 while not gaining bonuses from slotted Enhancements.`}
    ],
    acquisition: "Complete a level 31-35 Flashback story arc using no enhancements. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Deflated Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Deflated_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/deflated.png"}]
};
