import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Duelist: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "duelist",
    names: [
        {value: "Duelist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "You spend your free time battling other heroes and villains in Arena matches earning you the Duelist Day Job." +
            " Logging out in an Arena will earn you a bonus to your maximum Endurance, when you log back in, for a short time."
    }],
    acquisition: "Log out inside Arena buildings for 100 hours.",
    effect: "Day Job: +Max Endurance",
    links: [
        {title: "Duelist Badge", href: "https://paragonwiki.com/wiki/Duelist_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/duelist.png"}]
};
