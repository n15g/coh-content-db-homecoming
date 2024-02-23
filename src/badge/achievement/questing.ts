import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Questing: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "questing",
    setTitleId: 1582,
    setTitleIdPraetorian: 1667,
    names: [
        {value: "Questing"},
        {type: Alternate.P, value: "Prepared"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You've experienced more in the last few years than most will in their entire lives. That said, " +
                "you know you're not done yet."
        },
        {type: Alternate.V, value: "You've seen what the world has to offer, and you want it all."},
        {
            type: Alternate.P, value: "If experience is any measure, you've accomplished enough for several lifetimes. You'd like to " +
                "see any dimension, Primal or Praetorian, try to pull something you can't handle."
        }
    ],
    acquisition: "Earn 1000 badges",
    links: [
        {title: "Questing Badge", href: "https://homecoming.wiki/wiki/Questing_Badge"},
        {title: "Prepared Badge", href: "https://homecoming.wiki/wiki/Prepared_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/questing-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/questing-v.png"}
    ],
};
