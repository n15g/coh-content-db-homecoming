import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Cimeroran: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "cimeroran",
    setTitleId: 1046,
    names: [
        {value: "Cimeroran"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        type: Alternate.H, value: "Your time spent protecting the inhabitants of Cimerora has earned you the Cimeroran Day Job." +
            " Logging out in Cimerora will earn you a bonus to your damage resistance, when you log back in, for a short time."
    }, {
        type: Alternate.V, value: "Your time spent plotting against the inhabitants of Cimerora has earned you the Cimeroran Day Job." +
            " Logging out in Cimerora will earn you a bonus to your damage resistance, when you log back in, for a short time."
    }],
    acquisition: "Log out inside Cimerora for 100 hours.",
    effect: "Day Job: +Res(All)",
    links: [
        {title: "Cimeroran Badge", href: "https://paragonwiki.com/wiki/Cimeroran_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/cimeroran.png"}]
};
