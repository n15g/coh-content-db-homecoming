import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Trailblazer: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "trailblazer",
    names: [
        {value: "Trailblazer"},
        {type: Alternate.P, value: "Emissary"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H,
            value: "You can usually tell where a hero is going by having a look at where they've been, and you've left your mark on almost everything you've touched in Paragon City." +
                " You've been there, done that, and still adventure beckons you. Carry on, Hero!"
        },
        {type: Alternate.V, value: "You're a villain that knows what they want, and they take it. The world is your oyster, go forth and conquer."},
        {type: Alternate.P, value: "Though you may be a foreigner in Primal Earth, your many and varied accomplishments precede you nowadays."}
    ],
    acquisition: "Earn this badge by earning 200 badges.",
    links: [
        {title: "Trailblazer Badge", href: "https://paragonwiki.com/wiki/Trailblazer_Badge"},
        {title: "Emissary Badge", href: "https://paragonwiki.com/wiki/Emissary_Badge"},
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/badge-count-200-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/badge-count-200-v.png"}
    ]
};
