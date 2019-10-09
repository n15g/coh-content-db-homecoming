import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const CreyTestSubject: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "crey-test-subject",
    names: [
        {type: Alternate.H, value: "Crey Test Subject"},
        {type: Alternate.V, value: "Crey Employee"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{
        type: Alternate.H,
        value: "Your utility to Crey Industries is now limited to your tolerance for experimental treatments."
    }, {
        type: Alternate.V,
        value: "Your work with Crey Industries has earned you the Crey Employee Day Job." +
            " Logging out in the Crey Industries building will grant you a random Large Inspiration, after you log back in, each time you complete a mission for a short time."
    }],
    acquisition: "Log out in the Crey building in Nerva Archipelago for 100 hours.",
    effect: "Day Job: Bonus Large Inspiration upon mission completion",
    links: [
        {title: "Crey Test Subject Badge", href: "https://paragonwiki.com/wiki/Crey_Test_Subject_Badge"},
        {title: "Crey Employee Badge", href: "https://paragonwiki.com/wiki/Crey_Employee_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "core.day-job.crey-test-subject"}]
};
