import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {DayTrader} from "../day-job/day-trader";
import {ShopKeeper} from "../day-job/shop-keeper";

export const Entrepreneur: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "entrepreneur",
    setTitleId: 1065,
    names: [
        {type: Alternate.H, value: "Entrepreneur"},
        {type: Alternate.V, value: "Free Trade Advocate"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your masterful knowledge of the Auction House combined with a great head for business has made you a very successful Entrepreneur.  While logged out at either Wentworth's or inside a Shop you will earn tokens that will grant you discount when crafting inventions.`},
        {type: Alternate.V, value: `Your studies of business theory and practice have driven you to press for free trade between the Rogue Isles and Paragon City. On the surface, your efforts appear fruitless, but there are shadowy rumors they have had an effect...`}
    ],
    notes: `Earn the [badge:shop-keeper] and [badge:day-trader] Day Jobs`,
    links: [
        {title: "Entrepreneur Badge", href: "https://paragonwiki.com/wiki/Entrepreneur_Badge"},
        {title: "Free Trade Advocate Badge", href: "https://paragonwiki.com/wiki/Free_Trade_Advocate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/entrepreneur.png"}
    ],
    partials: [
            {key: DayTrader.key, type: BadgePartialType.BADGE, badgeKey: DayTrader.key},
            {key: ShopKeeper.key, type: BadgePartialType.BADGE, badgeKey: ShopKeeper.key}
    ]
};