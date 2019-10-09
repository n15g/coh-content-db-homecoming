import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Survivalist: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "survivalist",
    names: [
        {value: "Survivalist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "Your time spent learning from the hearty Survivors of First Ward has earned you the Survivalist Day Job." +
            " Logging out in the Survivor Compound will earn you a bonus chance to earn recipes on mission complete for a short time when you log back in."
    }],
    acquisition: "Log out at the Survivor Compound in First Ward for 100 hours.",
    effect: "Day Job: Bonus Recipe upon mission completion",
    links: [
        {title: "Survivalist Badge", href: "https://paragonwiki.com/wiki/Survivalist_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/survivalist.png"}]
};
