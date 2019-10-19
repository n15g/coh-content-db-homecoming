import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {DimensionalExplorer} from "../day-job/dimensional-explorer";
import {Commuter} from "../day-job/commuter";

export const Traveler: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "traveler",
    setTitleId: 1064,
    names: [
        {type: Alternate.H, value: "Traveler"},
        {type: Alternate.V, value: "Border Crosser"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your travels around both Paragon City and the Shadow Shard have become a full time job for you and have earned you the title of Traveler.  While logged out in either a Train Station or the Shadow Shard you will earn fuel for your Traveler's Jet Pack at an accelerated rate.`},
        {type: Alternate.V, value: `You've made a breakthrough in getting to new places, heading all the way to the Rogue Isles for more travel opportunities.`}
    ],
    notes: `Earn the [badge:dimensional-explorer] and [badge:commuter] Day Jobs`,
    links: [
        {title: "Traveler Badge", href: "https://paragonwiki.com/wiki/Traveler_Badge"},
        {title: "Border Crosser Badge", href: "https://paragonwiki.com/wiki/Border_Crosser_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/traveler.png"}
    ],
    partials: [
            {key: DimensionalExplorer.key, type: BadgePartialType.BADGE, badgeKey: DimensionalExplorer.key},
            {key: Commuter.key, type: BadgePartialType.BADGE, badgeKey: Commuter.key}
    ]
};