import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const CutOff: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "cut-off",
    setTitleId: 913,
    names: [
        {value: "Cut-Off"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 40 and 45 while not using any Epic Power Pools.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using any Epic Power Pools.`}
    ],
    acquisition: "Complete a level 41-45 Flashback story arc using no Ancillary powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Cut-Off Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Cut-Off_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/cut-off.png"}]
};
