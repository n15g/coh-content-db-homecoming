import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Grounded: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "grounded",
    names: [
        {type: Alternate.H, value: "Grounded"},
        {type: Alternate.V, value: "Pilot"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{
        type: Alternate.H,
        value: "Arachnos is more likely to pound you into dust than let you near one of their fliers. And your license is no good in Paragon City, it seems."
    }, {
        type: Alternate.V,
        value: "You have aided Arachnos by piloting its fliers, helping Lord Recluse better mobilize his troops, earning you the Pilot Day Job." +
            " Logging out near a Black Helicopter will earn you a Speed Bonus, when you log back in, for a short time."
    }],
    acquisition: "Log out at the Black Helicopter Line for 100 hours.",
    effect: "Day Job: +Movement Speed",
    links: [
        {title: "Grounded Badge", href: "https://paragonwiki.com/wiki/Grounded_Badge"},
        {title: "Pilot Badge", href: "https://paragonwiki.com/wiki/Pilot_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.grounded"}]
};
