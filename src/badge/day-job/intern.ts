import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Intern: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "intern",
    setTitleId: 1033,
    names: [
        {type: Alternate.H, value: "Intern"},
        {type: Alternate.V, value: "Wage Slave"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H,
            value: "You have worked with Portal Corps during your free time earning the Intern Day Job." +
                " Logging out in a Portal Corps building will earn you a Large Inspiration, when you log back in, each time you complete a mission for a short time."
        },
        {
            type: Alternate.V,
            value: "You wouldn't make it past the guards at Portal Corps nowadays, but at least you never have to make the coffee anymore."
        }
    ],
    acquisition: "Log out inside Portal Corps for 100 hours.",
    effect: "Day Job: Bonus Large Inspiration upon mission completion",
    links: [
        {title: "Intern Badge", href: "https://paragonwiki.com/wiki/Intern_Badge"},
        {title: "Wage Slave Badge", href: "https://paragonwiki.com/wiki/Wage_Slave_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/intern.png"}]
};
