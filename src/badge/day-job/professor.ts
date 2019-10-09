import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Professor: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "professor",
    names: [
        {value: "Professor"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        type: Alternate.H, value: "Your studies at the Universities of Paragon City during your free time has earned you the Professor Day Job." +
            " Logging out in a University will earn you a random piece of Tech Salvage, when you log back in, each time you complete a mission for a short time."
    }, {
        type: Alternate.V, value: "Your studies at the universites of the Rogue Isles during your free time has earned you the Professor Day Job." +
            " Logging out in a University will earn you a random piece of Tech Salvage, when you log back in, each time you complete a mission for a short time."
    }],
    acquisition: "Log out inside University buildings for 100 hours.",
    effect: "Day Job: Bonus Tech Salvage upon mission completion",
    links: [
        {title: "Professor Badge", href: "https://paragonwiki.com/wiki/Professor_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "core.day-job.professor"}]
};
