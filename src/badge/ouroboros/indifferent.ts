import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Indifferent: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "indifferent",
    setTitleId: 922,
    names: [
        {value: "Indifferent"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 40 and 45 while not using Inspirations.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using Inspirations.`}
    ],
    acquisition: "Complete a level 41-45 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Indifferent Badge", href: "https://homecoming.wiki/wiki/Indifferent_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/indifferent.png"}]
};
