import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Chronologist: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "chronologist",
    setTitleId: 1041,
    names: [
        {value: "Chronologist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "You have spent a great deal of time working with the agents of Ouroboros earning you the Chronologist Day Job." +
            " Logging out in Ouroboros will earn you a bonus enhancement recipe, when you log back in, each time you complete a mission for a short time."
    }],
    acquisition: "Log out inside Ouroboros for 100 hours.",
    effect: "Day Job: Bonus Recipe upon mission completion",
    links: [
        {title: "Chronologist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Chronologist_Badge"},
        {title: "Day Jobs", href: "https://hcwiki.cityofheroes.dev/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/chronologist.png"}]
};
