import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AmongFriends: IBadgeData = {
    type: BadgeType.AE,
    key: "among-friends",
    setTitleId: 1211,
    names: [
        {value: "Among Friends"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "Completing a mission, in test mode, in a full team of 8 has earned you the Among Friends badge."}],
    acquisition: "Complete a mission as part of a full team, in Test Mode.",
    links: [
        {title: "Among Friends Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Among_Friends_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/among-friends.png"}]
};
