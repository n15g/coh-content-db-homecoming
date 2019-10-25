import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Adventurous: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "adventurous",
    setTitleId: 871,
    names: [
        {value: "Adventurous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 20 and 24 while under a constant Debuff.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 20 and 24 while under a constant Debuff.`}
    ],
    acquisition: "Complete a level 20-24 Flashback story arc while debuffed.",
    links: [
        {title: "Adventurous Badge", href: "https://paragonwiki.com/wiki/Adventurous_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/adventurous.png"}]
};
