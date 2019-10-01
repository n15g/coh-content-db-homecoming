import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Architect: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "architect",
    names: [
        {value: "Architect"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "Your study of the Mission Architect system has earned you the Architect Day Job." +
            " Logging out in the Mission Architect will earn you 2 bonus Mission Architect Tickets, when you log back in, each time you complete a mission for a short time."
    }],
    acquisition: "Log out inside Architect Entertainment buildings for 100 hours.",
    effect: "Day Job: Bonus Mission Architect tickets upon mission completion",
    links: [
        {title: "Architect Badge", href: "https://paragonwiki.com/wiki/Architect_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.architect"}]
};
