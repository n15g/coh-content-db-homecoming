import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ShopKeeper: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "shop-keeper",
    names: [
        {type: Alternate.H, value: "Shop Keeper"},
        {type: Alternate.V, value: "Price Gouger"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H,
            value: "You have spent your free time running a shop in Paragon City selling various wares earning you the Shop Keeper Day Job." +
                " Logging out in a store will earn you a random enhancement, upon each mission completion, for a short time."
        },
        {
            type: Alternate.V,
            value: "You know better than to work retail in the Rogue Isles." +
                " Logging out in a store will earn you a random enhancement, upon each mission completion, for a short time."
        }
    ],
    acquisition: "Log out inside Stores for 100 hours.",
    effect: "Day Job: Bonus enhancement upon mission completion",
    links: [
        {title: "Shop Keeper Badge", href: "https://paragonwiki.com/wiki/Shop_Keeper_Badge"},
        {title: "Price Gouger Badge", href: "https://paragonwiki.com/wiki/Price_Gouger_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/shop-keeper.png"}]
};
