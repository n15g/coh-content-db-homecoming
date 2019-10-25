import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Dull: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "dull",
    setTitleId: 920,
    names: [
        {value: "Dull"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 30 and 34 while not using Inspirations.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 30 and 34 while not using Inspirations.`}
    ],
    acquisition: "Complete a level 30-34 Flashback arc using no inspirations.",
    links: [
        {title: "Dull Badge", href: "https://paragonwiki.com/wiki/Dull_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/dull.png"}]
};
