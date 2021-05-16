import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Bound: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "bound",
    setTitleId: 910,
    names: [
        {value: "Bound"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 35 and 39 while not using any Temporary Powers.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 35 and 39 while not using any Temporary Powers.`}
    ],
    acquisition: "Complete a level 36-40 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Bound Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bound_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bound.png"}]
};
