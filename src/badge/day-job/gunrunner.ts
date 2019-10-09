import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Gunrunner: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "gunrunner",
    names: [
        {type: Alternate.H, value: "Gunrunner"},
        {type: Alternate.V, value: "Smuggler"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{
        type: Alternate.H,
        value: "You've shttps://n15g.github.io/coh-content-db-homecoming/images/badges/ the biggest coup of all; smuggling directly into Paragon City/ Unfortunately, it's a long round-trip..png"
    }, {
        type: Alternate.V,
        value: "You spend your free time smuggling in illicit black market goods earning you the Smuggler Day Job." +
            " Logging out near a ferry will earn you a random enhancement, upon each mission completion, for a short time."
    }],
    acquisition: "Log out at a Ferry for 100 hours.",
    effect: "Day Job: Bonus Enhancement upon mission completion",
    links: [
        {title: "Gunrunner Badge", href: "https://paragonwiki.com/wiki/Gunrunner_Badge"},
        {title: "Smuggler Badge", href: "https://paragonwiki.com/wiki/Smuggler_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/gunrunner.png"}]
};
