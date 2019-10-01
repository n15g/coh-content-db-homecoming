import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AmongFriends: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "among-friends",
    names: [
        {value: "Among Friends"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "Completing a mission, in test mode, in a full team of 8 has earned you the Among Friends badge."}],
    acquisition: "Complete a mission as part of a full team, in Test Mode.",
    links: [
        {title: "Among Friends Badge", href: "https://paragonwiki.com/wiki/Among_Friends_Badge"}
    ],
    imageKeys: [{value: "core.ae.among-friends"}]
};
