import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Patroller: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "patroller",
    setTitleId: 1036,
    setTitleIdPraetorian: 1757,
    names: [
        {type: Alternate.H, value: "Patroller"},
        {type: Alternate.V, value: "Criminal"},
        {type: Alternate.P, value: "Patroller"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        type: Alternate.H,
        value: "You have spent your free time making the streets of Paragon City a safer place for its citizens earning the Patroller Day Job."
    }, {
        type: Alternate.V,
        value: "You spent your free time causing havoc in the Rogue Isles and bring terror to its citizens earning the Criminal Day Job."
    }, {
        type: Alternate.P,
        value: "You have spent your free time on the streets, Praetorian or otherwise, earning the Patroller Day Job."
    }],
    acquisition: "Log out anywhere for 100 hours.",
    effect: "Day Job: Patrol XP",
    links: [
        {title: "Patroller Badge", href: "https://paragonwiki.com/wiki/Patroller_Badge"},
        {title: "Criminal Badge", href: "https://paragonwiki.com/wiki/Criminal_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/patroller.png"}]
};
