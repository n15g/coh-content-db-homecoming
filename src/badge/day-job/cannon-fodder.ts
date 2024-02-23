import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const CannonFodder: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "cannon-fodder",
    setTitleId: 1052,
    names: [
        {type: Alternate.H, value: "Cannon Fodder"},
        {type: Alternate.V, value: "Arachnos Agent"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{
        type: Alternate.H,
        value: "There's no resigning from Arachnos, but you appear to have done just that. Good luck."
    }, {
        type: Alternate.V,
        value: "Your work with the forces of Arachnos has earned you the Arachnos Agent Day Job." +
            " Logging out in an Arachnos Base will grant you an Experience bonus, when you log back in, each time you complete a mission for a short time."
    }],
    acquisition: "Log out at Arachnos Bases with no hostile critters for 100 hours.",
    effect: "Day Job: Bonus XP upon mission completion",
    links: [
        {title: "Cannon Fodder Badge", href: "https://homecoming.wiki/wiki/Cannon_Fodder_Badge"},
        {title: "Arachnos Agent Badge", href: "https://homecoming.wiki/wiki/Arachnos_Agent_Badge"},
        {title: "Day Jobs", href: "https://homecoming.wiki/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/cannon-fodder.png"}]
};
