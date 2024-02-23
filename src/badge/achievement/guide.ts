import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Guide: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "guide",
    setTitleId: 13,
    setTitleIdPraetorian: 1706,
    names: [
        {type: Alternate.H, value: "Guide"},
        {type: Alternate.V, value: "Drill Instructor"},
        {type: Alternate.P, value: "Motivator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Your continued mentoring has earned you this badge."},
        {type: Alternate.V, value: "You've spent time teaching the young toughs how to do it 'Old School.'"},
        {
            type: Alternate.P, value: "If those you mentor slack off, you've got quite a few ways to motivate them. They're not all " +
                "pleasant."
        }
    ],
    acquisition: "Sidekick another hero for 8 hours",
    links: [
        {title: "Guide Badge", href: "https://homecoming.wiki/wiki/Guide_Badge"},
        {title: "Drill Instructor Badge", href: "https://homecoming.wiki/wiki/Drill_Instructor_Badge"},
        {title: "Motivator Badge", href: "https://homecoming.wiki/wiki/Motivator_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png"}
    ],
};
