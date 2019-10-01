import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DayTrader: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "day-trader",
    names: [
        {type: Alternate.H, value: "Day Trader"},
        {type: Alternate.V, value: "Marketeer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        type: Alternate.H,
        value: "Your time spent working at Wentworth's has earned you the Day Trader Day Job." +
            " Logging out in Wentworth's will grant you a power that will allow you to teleport to an Auction House of your choice, when you log in."
    }, {
        type: Alternate.V,
        value: "Your time spent supplying the Black Market has earned you the Marketeer Day Job." +
            " Logging out near a Black Market will grant you a power that will allow you to teleport to a Black Market of your choice, when you log back in."
    }],
    acquisition: "Log out at a Consignment House for 100 hours.",
    effect: "Day Job: Teleport to Consignment House",
    links: [
        {title: "Day Trader Badge", href: "https://paragonwiki.com/wiki/Day Trader_Badge"},
        {title: "Marketeer Badge", href: "https://paragonwiki.com/wiki/Marketeer_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    imageKeys: [{value: "core.day-job.day-trader"}]
};
