import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Courageous: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "courageous",
    setTitleId: 879,
    names: [
        {value: "Courageous"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 15 and 19 while the enemies were Buffed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 15 and 19 while the enemies were Buffed.`}
    ],
    acquisition: "Complete a level 16-20 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Courageous Badge", href: "https://homecoming.wiki/wiki/Courageous_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/courageous.png"}]
};
