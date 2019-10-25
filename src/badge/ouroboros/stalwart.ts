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
    acquisition: "Complete a level 35-39 Flashback arc with enemies buffed.",
    links: [
        {title: "Stalwart Badge", href: "https://paragonwiki.com/wiki/Stalwart_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/stalwart.png"}]
};
