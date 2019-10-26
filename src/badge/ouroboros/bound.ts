import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bound: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "bound",
    names: [
        {value: "Bound"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 35 and 39 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 36-40 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Bound Badge", href: "https://paragonwiki.com/wiki/Bound_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bound.png"}]
};
