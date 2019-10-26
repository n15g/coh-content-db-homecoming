import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Professional: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "professional",
    setTitleId: 889,
    names: [
        {value: "Professional"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 20 and 24 while only using your Primary and Secondary powersets.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 20 and 24 while only using your Primary and Secondary powersets.`}
    ],
    acquisition: "Complete a level 21-25 Flashback story arc using no pool powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Professional Badge", href: "https://paragonwiki.com/wiki/Professional_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/professional.png"}]
};
