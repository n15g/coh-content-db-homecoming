import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Explorer: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "explorer",
    names: [
        {type: Alternate.H, value: "Explorer"},
        {type: Alternate.V, value: "Obsessed"},
        {type: Alternate.P, value: "Knows the Truth"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Your diligence has earned you 50 badges."},
        {type: Alternate.V, value: "That's 50 Badges. Some call you determined. Most call you Obsessed."},
        {type: Alternate.P, value: "From the depths of the Underground to the top of the Magisterium, Praetoria is built on lies. After 50 badges, you've learned this truth."}
    ],
    acquisition: "Earn this badge by earning 50 badges.",
    links: [
        {title: "Explorer Badge", href: "https://paragonwiki.com/wiki/Explorer_Badge"},
        {title: "Obsessed Badge", href: "https://paragonwiki.com/wiki/Obsessed_Badge"},
        {title: "Knows the Truth Badge", href: "https://paragonwiki.com/wiki/Knows_the_Truth_Badge"},
    ],
    icons: [
        {type: Alternate.H, value: "core.achievement.badge-count-50-h"},
        {type: Alternate.V, value: "core.achievement.badge-count-50-v"}
    ]
};
