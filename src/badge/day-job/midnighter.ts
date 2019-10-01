import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Midnighter: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "midnighter",
    names: [
        {value: "Midnighter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "Your studies at the Midnighter Club has earned you the Midnighter Day Job." +
            " Logging out in the Midnighter Club will earn you a random piece of Arcane Salvage, when you log back in, each time you complete a mission, for a short time."
    }],
    acquisition: "Log out inside the Midnight Club building for 100 hours.",
    effect: "Day Job: Bonus Arcane Salvage upon mission completion",
    links: [
        {title: "Midnighter Badge", href: "https://paragonwiki.com/wiki/Midnighter_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.midnighter"}]
};
