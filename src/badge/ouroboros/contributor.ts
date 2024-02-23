import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Contributor: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "contributor",
    setTitleId: 886,
    names: [
        {value: "Contributor"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 1 and 15 while only using your Primary and Secondary powersets.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 1 and 15 while only using your Primary and Secondary powersets.`}
    ],
    acquisition: "Complete a level 1-15 Flashback story arc using no pool powers.",
    links: [
        {title: "Contributor Badge", href: "https://homecoming.wiki/wiki/Contributor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/contributor.png"}]
};
