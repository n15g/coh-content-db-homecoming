import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Trailblazer: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "trailblazer",
    setTitleId: 407,
    setTitleIdPraetorian: 1664,
    names: [
        {value: "Trailblazer"},
        {type: Alternate.P, value: "Emissary"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You can usually tell where a hero is going by having a look at where they've been, and you've " +
                "left your mark on almost everything you've touched in Paragon City. You've been there, done " +
                "that, and still adventure beckons you. Carry on, Hero!"
        },
        {
            type: Alternate.V, value: "You're a villain who knows what they want, and they take it. The world is your oyster, go " +
                "forth and conquer."
        },
        {
            type: Alternate.P, value: "Though you may be a foreigner in Primal Earth, your many and varied accomplishments precede " +
                "you nowadays."
        }
    ],
    acquisition: "Earn 200 badges",
    links: [
        {title: "Trailblazer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Trailblazer_Badge"},
        {title: "Emissary Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Emissary_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/trailblazer-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/trailblazer-v.png"}
    ],
};
