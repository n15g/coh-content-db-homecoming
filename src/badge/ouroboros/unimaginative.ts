import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Unimaginative: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "unimaginative",
    setTitleId: 917,
    names: [
        {value: "Unimaginative"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 15 and 19 while not using Inspirations.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 15 and 19 while not using Inspirations.`}
    ],
    acquisition: "Complete a level 16-20 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Unimaginative Badge", href: "https://homecoming.wiki/wiki/Unimaginative_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/unimaginative.png"}]
};
