import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Banker: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "banker",
    names: [
        {type: Alternate.H, value: "Banker"},
        {type: Alternate.V, value: "Thief"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        type: Alternate.H,
        value: "Your time spent working with the financial institutions of Paragon City during your free time has earned you the Banker Day Job." +
            " Logging out in a Vault will earn you an Influence Bonus, when you log back, in each time you complete a mission for a short time."
    }, {
        type: Alternate.V,
        value: "Your time spent staging heists on the various financial institutions of the Rogue Isles has earned you the Thief Day Job." +
            " Logging out in a Vault will earn you an Infamy Bonus, when you log back in, each time you complete a mission for a short time."
    }],
    acquisition: "Log out at a Vault Reserve for 100 hours.",
    effect: "Day Job: Bonus Influence upon mission completion",
    links: [
        {title: "Banker Badge", href: "https://paragonwiki.com/wiki/Banker_Badge"},
        {title: "Thief Badge", href: "https://paragonwiki.com/wiki/Thief_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/banker.png"}]
};
