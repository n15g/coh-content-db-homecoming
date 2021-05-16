import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Advisor: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "advisor",
    setTitleId: 12,
    setTitleIdPraetorian: 1705,
    names: [
        {type: Alternate.H, value: "Advisor"},
        {type: Alternate.V, value: "Comrade"},
        {type: Alternate.P, value: "Encourager"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have earned this badge for your time spent tutoring others."},
        {type: Alternate.V, value: "You've spent time helping others on the path of super-villainy."},
        {
            type: Alternate.P, value: "There's always new blood flowing through Praetoria. You've spent some time trying to keep all " +
                "of it from being spilled."
        }
    ],
    acquisition: "Sidekick another hero for 4 hours",
    links: [
        {title: "Advisor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Advisor_Badge"},
        {title: "Comrade Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Comrade_Badge"},
        {title: "Encourager Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Encourager_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png"}
    ],
};
