import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Venturous: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "venturous",
    setTitleId: 868,
    names: [
        {value: "Venturous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 1 and 15 while under a constant Debuff.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 1 and 15 while under a constant Debuff.`}
    ],
    acquisition: "Complete a level 1-15 Flashback story arc while debuffed.",
    links: [
        {title: "Venturous Badge", href: "https://paragonwiki.com/wiki/Venturous_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/venturous.png"}]
};
