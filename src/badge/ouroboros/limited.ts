import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Limited: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "limited",
    setTitleId: 911,
    names: [
        {value: "Limited"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 40 and 45 while not using any Temporary Powers.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 40 and 45 while not using any Temporary Powers.`}
    ],
    acquisition: "Complete a level 41-45 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Limited Badge", href: "https://homecoming.wiki/wiki/Limited_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/limited.png"}]
};
