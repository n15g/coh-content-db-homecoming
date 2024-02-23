import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Mortician: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "mortician",
    setTitleId: 1049,
    names: [
        {value: "Mortician"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "Your time spent studying death itself has earned you the Mortician Day Job." +
            " Logging out in a graveyard will earn you protection against Experience Debt, when you log back in, for a short time."
    }],
    acquisition: "Log out a Graveyard for 100 hours.",
    effect: "Day Job: XP Debt protection",
    links: [
        {title: "Mortician Badge", href: "https://homecoming.wiki/wiki/Mortician_Badge"},
        {title: "Day Jobs", href: "https://homecoming.wiki/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/mortician.png"}]
};
