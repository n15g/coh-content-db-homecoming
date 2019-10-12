import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheStormPalace} from "../../map/the-storm-palace";

export const CourtingMadness: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "courting-madness",
    names: [{value: "Courting Madness"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheStormPalace.key,
    location: [1630.0, -65.0, 10144.0],
    badgeText: [{
        value: `As humanity has begun expanding its interests into extra-dimensional spaces, particularly the Shadow Shard, peculiar psychological disorders have begun to infect those
spending a large amount of time away from their home dimension.
New categories of mental illness have been coined to give shape to the odd manias and delusions creeping into the minds of the people staffing the outposts in Firebase Zulu,
and you too have had strange thoughts emerging unbidden from your own psyche.
Yet you continue to engage this strange place in a race against time: either you will stand triumphant against the Shadow Shard's many challenges, or you will succumb to the madness
that has claimed lesser minds.`
    }],
    notes: `Located in [map:${TheStormPalace.key}] 34 feet north of the Path of Madness marker.`,
    links: [
        {title: "Courting Madness Badge", href: "https://paragonwiki.com/wiki/Courting_Madness_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
