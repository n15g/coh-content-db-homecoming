import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Seeker: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "seeker",
    names: [
        {value: "Pathfinder"},
        {type: Alternate.P, value: "Overachiever"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You're a hero recognized for your wide range of accomplishments, but you're not done yet!"},
        {type: Alternate.V, value: "You're a villain who'll do whatever it takes to get what they want, and you've only just begun."},
        {type: Alternate.P, value: "There are still secrets to root out, and battles to be won, but an Overachiever such as yourself can spare a moment to rest on your vast array of laurels."}
    ],
    acquisition: "Earn this badge by earning 500 badges.",
    links: [
        {title: "Seeker Badge", href: "https://paragonwiki.com/wiki/Seeker_Badge"},
        {title: "Overachiever Badge", href: "https://paragonwiki.com/wiki/Overachiever_Badge"},
    ],
    icons: [
        {type: Alternate.H, value: "core.achievement.badge-count-500-h"},
        {type: Alternate.V, value: "core.achievement.badge-count-500-v"}
    ]
};
