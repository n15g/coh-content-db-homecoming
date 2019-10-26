import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bold: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "bold",
    names: [
        {value: "Bold"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 20 and 24 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 21-25 Flashback story arc with enemies buffed. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Bold Badge", href: "https://paragonwiki.com/wiki/Bold_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/bold.png"}]
};
