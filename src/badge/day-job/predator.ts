import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Predator: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "predator",
    setTitleId: 1047,
    names: [
        {value: "Predator"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        type: Alternate.H, value: "You spend your free time battling villains in PvP Zones earning you the Predator Day Job." +
            " Logging out in a PvP zone will earn you a bonus to your Recharge rate, when you log back in, for a short time."
    }, {
        type: Alternate.V, value: "You spend your free time battling heroes in PvP zones earning you the Predator Day Job." +
            " Logging out in a PvP zone will earn you a bonus to your Recharge rate, when you log back in, for a short time."
    }],
    acquisition: "Log out inside PvP Zones for 100 hours.",
    effect: "Day Job: +Recharge",
    links: [
        {title: "Predator Badge", href: "https://homecoming.wiki/wiki/Predator_Badge"},
        {title: "Day Jobs", href: "https://homecoming.wiki/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/predator.png"}]
};
