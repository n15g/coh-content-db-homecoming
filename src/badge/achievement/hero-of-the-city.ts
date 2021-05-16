import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const HeroOfTheCity: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "hero-of-the-city",
    setTitleId: 25,
    setTitleIdPraetorian: 1673,
    names: [
        {type: Alternate.H, value: "Hero of the City"},
        {type: Alternate.V, value: "Made"},
        {type: Alternate.P, value: "Praetor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Positron has awarded you this badge for achieving Security Level 50."},
        {type: Alternate.V, value: "Arachnos has awarded you the Made Badge for reaching Level 50."},
        {
            type: Alternate.P, value: "Even Emperor Cole would have to admit you would make a fine Praetor. You can feel the time of " +
                "reckoning drawing near..."
        }
    ],
    acquisition: "Reach level 50",
    links: [
        {title: "Hero of the City Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hero_of_the_City_Badge"},
        {title: "Made Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Made_Badge"},
        {title: "Praetor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Praetor_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hero-of-the-city-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hero-of-the-city-v.png"}
    ],
};
