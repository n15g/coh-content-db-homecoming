import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Headstrong: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "headstrong",
    setTitleId: 870,
    names: [
        {value: "Headstrong"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 15 and 19 while under a constant Debuff.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 15 and 19 while under a constant Debuff.`}
    ],
    acquisition: "Complete a level 16-20 Flashback story arc while debuffed.",
    links: [
        {title: "Headstrong Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Headstrong_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/headstrong.png"}]
};
