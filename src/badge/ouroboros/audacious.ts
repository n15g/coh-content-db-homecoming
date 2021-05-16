import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Audacious: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "audacious",
    setTitleId: 877,
    names: [
        {value: "Audacious"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 1 and 15 while the enemies were Buffed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 1 and 15 while the enemies were Buffed.`}
    ],
    acquisition: "Complete a level 1-15 Flashback story arc with enemies buffed.",
    links: [
        {title: "Audacious Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Audacious_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/audacious.png"}]
};
