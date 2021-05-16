import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Tourist: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "tourist",
    setTitleId: 26,
    setTitleIdPraetorian: 1660,
    names: [
        {type: Alternate.H, value: "Tourist"},
        {type: Alternate.V, value: "Visitor"},
        {type: Alternate.P, value: "Lead-Follower"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have earned 10 badges. You are officially a tourist in Paragon City."},
        {type: Alternate.V, value: "You've earned 10 Badges, making you a Visitor of the Rogue Isles."},
        {
            type: Alternate.P, value: "Keeping your eyes and ears open, you've earned 10 badges. Amongst those who follow these " +
                "things, this qualifies you as a Lead-Follower."
        }
    ],
    acquisition: "Earn 10 badges",
    links: [
        {title: "Tourist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Tourist_Badge"},
        {title: "Visitor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Visitor_Badge"},
        {title: "Lead-Follower Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Lead-Follower_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tourist-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tourist-v.png"}
    ],
};
