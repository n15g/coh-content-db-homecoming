import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const LawEnforcer: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "law-enforcer",
    names: [
        {type: Alternate.H, value: "Law Enforcer"},
        {type: Alternate.V, value: "Dirty Cop"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H,
            value: "You have worked closely with the Paragon Police Department during your free time earning the Law Enforcer Day Job." +
                " Logging out in a Police Station will earn you an Experience Bonus, when you log back in, each time you complete a mission for a short time."
        },
        {
            type: Alternate.V,
            value: "The Paragon Police Department has severed its ties with you now that you're a villain."
        }
    ],
    acquisition: "Log out inside Police Stations for 100 hours.",
    effect: "Day Job: XP bonus upon mission completion",
    links: [
        {title: "Law Enforcer Badge", href: "https://paragonwiki.com/wiki/Law_Enforcer_Badge"},
        {title: "Dirty Cop Badge", href: "https://paragonwiki.com/wiki/Dirty_Cop_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.law-enforcer"}]
};
