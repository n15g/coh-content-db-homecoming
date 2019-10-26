import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SilverMedalist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "silver-medalist",
    setTitleId: 863,
    names: [
        {value: "Silver Medalist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback within the Silver time allowed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback within the Silver time allowed.`}
    ],
    acquisition: "Complete a Flashback story arc in under 60 minutes.",
    links: [
        {title: "Silver Medalist Badge", href: "https://paragonwiki.com/wiki/Silver_Medalist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/silver-medalist.png"}]
};
