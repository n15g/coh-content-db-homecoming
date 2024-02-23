import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Stalwart: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "stalwart",
    setTitleId: 883,
    names: [
        {value: "Stalwart"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 35 and 39 while the enemies were Buffed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 35 and 39 while the enemies were Buffed.`}
    ],
    acquisition: "Complete a level 36-40 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Stalwart Badge", href: "https://homecoming.wiki/wiki/Stalwart_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stalwart.png"}]
};
