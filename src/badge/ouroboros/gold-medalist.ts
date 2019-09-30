import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GoldMedalist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "gold-medalist",
    names: [
        {value: "Gold Medalist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback within the Gold time allowed."},
    ],
    acquisition: "Complete a Flashback arc in under 30 minutes.",
    links: [
        {title: "Gold Medalist Badge", href: "https://paragonwiki.com/wiki/Gold_Medalist_Badge"}
    ],
    imageKeys: [{value: "core.ouroboros.gold-medalist"}]
};
