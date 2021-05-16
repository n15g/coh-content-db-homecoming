import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const AllBusiness: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "all-business",
    setTitleId: 890,
    names: [
        {value: "All Business"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 25 and 29 while only using your Primary and Secondary powersets.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 25 and 29 while only using your Primary and Secondary powersets.`}
    ],
    acquisition: "Complete a level 26-30 Flashback story arc using no pool powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "All Business Badge", href: "https://hcwiki.cityofheroes.dev/wiki/All_Business_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/all-business.png"}]
};
