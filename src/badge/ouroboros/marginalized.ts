import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Marginalized: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "marginalized",
    names: [
        {value: "Marginalized"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while not using any Epic Power Pools."},
    ],
    acquisition: "Complete a level 46-50 Flashback arc using no Ancillary powers.",
    links: [
        {title: "Marginalized Badge", href: "https://paragonwiki.com/wiki/Marginalized_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/marginalized.png"}]
};
