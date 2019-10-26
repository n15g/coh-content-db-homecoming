import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Undertaker: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "undertaker",
    names: [
        {value: "Undertaker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while only using your Primary and Secondary powersets."},
    ],
    acquisition: "Complete a level 46-50 Flashback story arc using no pool powers.",
    links: [
        {title: "Undertaker Badge", href: "https://paragonwiki.com/wiki/Undertaker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/undertaker.png"}]
};
