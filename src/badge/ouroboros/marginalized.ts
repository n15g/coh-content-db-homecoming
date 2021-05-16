import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Marginalized: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "marginalized",
    setTitleId: 914,
    names: [
        {value: "Marginalized"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 46 and 50 while not using any Epic Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 46 and 50 while not using any Epic Power Pools.`}
    ],
    acquisition: "Complete a level 46-50 Flashback story arc using no Ancillary powers.",
    links: [
        {title: "Marginalized Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Marginalized_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/marginalized.png"}]
};
