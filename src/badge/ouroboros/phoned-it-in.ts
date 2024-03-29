import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PhonedItIn: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "phoned-it-in",
    setTitleId: 921,
    names: [
        {value: "Phoned it in"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 35 and 39 while not using Inspirations.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 35 and 39 while not using Inspirations.`}
    ],
    acquisition: "Complete a level 36-40 Flashback story arc using no inspirations. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Phoned it in Badge", href: "https://homecoming.wiki/wiki/Phoned_It_In_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/phoned-it-in.png"}]
};
