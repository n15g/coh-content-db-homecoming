import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Reckless: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "reckless",
    setTitleId: 875,
    names: [
        {value: "Reckless"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 40 and 45 while under a constant Debuff.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 40 and 45 while under a constant Debuff.`}
    ],
    acquisition: "Complete a level 41-45 Flashback story arc while debuffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Reckless Badge", href: "https://homecoming.wiki/wiki/Reckless_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/reckless.png"}]
};
