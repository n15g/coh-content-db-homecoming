import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ColdHandOfDeath: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "cold-hand-of-death",
    names: [
        {value: "Cold Hand of Death"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "You have withstood the oppressive influence of Mot, at great cost to your health and sanity and earning you the mark of the Cold Hand of Death." +
            " Logging out within Dark Astoria will increase your defense and resistance to cold and negative attacks for a short time after you log back in."
    }],
    acquisition: "Log out inside Dark Astoria for 100 hours.",
    effect: "Day Job: +Res (Cold/Negative Energy), +Def (Cold/Negative Energy)",
    links: [
        {title: "Cold Hand of Death Badge", href: "https://paragonwiki.com/wiki/Cold_Hand_of_Death_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.cold-hand-of-death"}]
};
