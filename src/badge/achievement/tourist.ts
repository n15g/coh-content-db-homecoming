import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Tourist: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "tourist",
    names: [
        {type: Alternate.H, value: "Tourist"},
        {type: Alternate.V, value: "Visitor"},
        {type: Alternate.P, value: "Lead-Follower"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have earned 10 badges. You are officially a tourist in Paragon City."},
        {type: Alternate.V, value: "You've earned 10 Badges, making you a Visitor of the Rogue Isles."},
        {type: Alternate.P, value: "Keeping your eyes and ears open, you've earned 10 badges. Amongst those who follow these things, this qualifies you as a Lead-Follower."}
    ],
    acquisition: "Earn this badge by earning 10 badges.",
    links: [
        {title: "Tourist Badge", href: "https://paragonwiki.com/wiki/Tourist_Badge"},
        {title: "Visitor Badge", href: "https://paragonwiki.com/wiki/Visitor_Badge"},
        {title: "Lead-Follower Badge", href: "https://paragonwiki.com/wiki/Lead-Follower_Badge"},
    ],
    imageKeys: [
        {type: Alternate.H, value: "core.achievement.badge-count-10-h"},
        {type: Alternate.V, value: "core.achievement.badge-count-10-v"}
    ]
};
