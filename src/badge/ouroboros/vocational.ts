import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Vocational: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "vocational",
    setTitleId: 888,
    names: [
        {value: "Vocational"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 15 and 19 while only using your Primary and Secondary powersets.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 15 and 19 while only using your Primary and Secondary powersets.`}
    ],
    acquisition: "Complete a level 16-19 Flashback arc using no pool powers.",
    links: [
        {title: "Vocational Badge", href: "https://paragonwiki.com/wiki/Vocational_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/vocational.png"}]
};
