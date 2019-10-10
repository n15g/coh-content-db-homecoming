import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const DrownedRat: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "drowned-rat",
    names: [{value: "Drowned Rat"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Faultline.key,
    location: [150.0, -51.0, 2360.0],
    badgeText: [{value: "The dam burst here due to exceptionally strong seismic activity."}],
    notes: "The Drowned Rat Badge is in the Overflow neighborhood of Faultline located on scaffolding against the dam just above a large leak in its face.",
    links: [
        {title: "Drowned Rat Badge", href: "https://paragonwiki.com/wiki/Drowned_Rat_Badge"},
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
