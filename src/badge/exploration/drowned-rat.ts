import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const DrownedRat: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "drowned-rat",
    setTitleId: 637,
    names: [{value: "Drowned Rat"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `The dam burst here due to exceptionally strong seismic activity.`},
        {type: Alternate.V, value: `This marks the location that the dam burst due to exceptionally strong seismic activity.`}
    ],
    mapKey: Faultline.key,
    location: [150.0, -51.0, 2360.0],
    notes: "The Drowned Rat Badge is in the Overflow neighborhood of [map:${Faultline.key}] located on scaffolding against the dam just above a large leak in its face.",
    links: [
        {title: "Drowned Rat Badge", href: "https://paragonwiki.com/wiki/Drowned_Rat_Badge"},
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "3"
};
