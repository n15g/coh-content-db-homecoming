import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Limited: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "limited",
    names: [
        {value: "Limited"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 40 and 45 while not using any Temporary Powers."},
    ],
    acquisition: "Complete a level 41-45 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Limited Badge", href: "https://paragonwiki.com/wiki/Limited_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/limited.png"}]
};
