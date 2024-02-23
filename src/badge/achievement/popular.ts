import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Popular: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "popular",
    setTitleId: 243,
    setTitleIdPraetorian: 1703,
    names: [
        {value: "Popular"},
        {type: Alternate.P, value: "Living Legend"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "The citizens of Paragon City have begun a petition to make a statue in your name."},
        {type: Alternate.V, value: "The citizens of the Rogue Isles have begun a petition to make a statue in your name."},
        {
            type: Alternate.P, value: "There is an urban legend floating around Praetoria that one day you will return, and on that " +
                "day Praetoria will change forever. You're kind of flattered."
        }
    ],
    acquisition: "Earn 250,000,000 influence",
    links: [
        {title: "Popular Badge", href: "https://homecoming.wiki/wiki/Popular_Badge"},
        {title: "Living Legend Badge", href: "https://homecoming.wiki/wiki/Living_Legend_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/inf-v.png"}
    ],
};
