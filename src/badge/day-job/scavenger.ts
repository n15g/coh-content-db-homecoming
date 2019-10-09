import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Scavenger: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "scavenger",
    names: [
        {value: "Scavenger"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "Your time spent scrounging in the wrecked city of First Ward has earned you the Scavenger Day Job." +
            " Logging out in First Ward will enable you to dig up extra Inspirations on mission complete for a short time after you log back in."
    }],
    acquisition: "Log out anywhere in First Ward for 100 hours.",
    effect: "Day Job: Bonus Inspirations upon mission completion",
    links: [
        {title: "Scavenger Badge", href: "https://paragonwiki.com/wiki/Scavenger_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "core.day-job.scavenger"}]
};
