import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Daredevil: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "daredevil",
    setTitleId: 872,
    names: [
        {value: "Daredevil"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 25 and 29 while under a constant Debuff.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 25 and 29 while under a constant Debuff.`}
    ],
    acquisition: "Complete a level 25-29 Flashback story arc while debuffed.",
    links: [
        {title: "Daredevil Badge", href: "https://paragonwiki.com/wiki/Daredevil_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/daredevil.png"}]
};
