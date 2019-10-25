import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Fearless: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "fearless",
    setTitleId: 881,
    names: [
        {value: "Fearless"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 25 and 29 while the enemies were Buffed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 25 and 29 while the enemies were Buffed.`}
    ],
    acquisition: "Complete a level 25-29 Flashback arc with enemies buffed.",
    links: [
        {title: "Fearless Badge", href: "https://paragonwiki.com/wiki/Fearless_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/fearless.png"}]
};
