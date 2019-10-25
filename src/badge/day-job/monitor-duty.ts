import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MonitorDuty: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "monitor-duty",
    setTitleId: 1048,
    names: [
        {value: "Monitor Duty"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "Your time spent protecting your Supergroup's base has earned you the Monitor Duty Day Job." +
            " Logging out in your Supergroup base will earn you a Prestige bonus, when you log back in, each time you complete a mission for a short time."
    }],
    acquisition: "Log out inside your Supergroup Base for 100 hours.",
    effect: "Day Job: Base Teleporter",
    links: [
        {title: "Monitor Duty Badge", href: "https://paragonwiki.com/wiki/Monitor_Duty_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/monitor-duty.png"}]
};
