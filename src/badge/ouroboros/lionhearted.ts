import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Lionhearted: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "lionhearted",
    setTitleId: 884,
    names: [
        {value: "Lionhearted"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 40 and 45 while the enemies were Buffed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 40 and 45 while the enemies were Buffed.`}
    ],
    acquisition: "Complete a level 40-45 Flashback arc with enemies buffed.",
    links: [
        {title: "Lionhearted Badge", href: "https://paragonwiki.com/wiki/Lionhearted_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/lionhearted.png"}]
};
