import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DimensionalExplorer: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "dimensional-explorer",
    setTitleId: 1032,
    names: [
        {type: Alternate.H, value: "Dimensional Explorer"},
        {type: Alternate.V, value: "Dimensional Plunderer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H,
            value: "You have spent a great deal of time working with the military at Firebase Zulu earning the Dimensional Explorer Day Job." +
                " Logging out in the Shadow Shard will earn you a Jetpack power, when you log back in, for a short time."
        },
        {
            type: Alternate.V,
            value: "Firebase Zulu has classified you as A.W.O.L., but they wouldn't welcome you if you showed up, either."
        }
    ],
    acquisition: "Log out inside the Shadow Shard for 100 hours.",
    effect: "Day Job: Jetpack",
    links: [
        {title: "Dimensional Explorer Badge", href: "https://paragonwiki.com/wiki/Dimensional_Explorer_Badge"},
        {title: "Dimensional Plunderer Badge", href: "https://paragonwiki.com/wiki/Dimensional_Plunderer_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/dimensional-explorer.png"}]
};
