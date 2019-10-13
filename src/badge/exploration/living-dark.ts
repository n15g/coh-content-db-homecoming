import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";

export const LivingDark: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "living-dark",
    names: [{value: "Living Dark"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewerNetwork.key,
    location: [576.0, -576.0, -1536.0],
    badgeText: [{
        value: `Far away from the light of civilization and the life of normal people, darkness can take on a life of its own.
It flows into every corner, irresistible and tireless, as silent as death. It is the natural state of things down here where your presence is a violation.
The darkness can flow into you if you let it, and standing here in the heart of it, you can feel it pressing in against your consciousness, daring you to open yourself
to it as so many others down here have.`
    }],
    notes: `Located in [map:abandoned-sewer-network]

On the map, the Living Dark badge is roughly equidistant from the Steel Canyon Sector, Boomtown Sector and Underworld markers.
It is in the middle of the junction connecting those three neighborhoods.`,
    links: [
        {title: "Living Dark Badge", href: "https://paragonwiki.com/wiki/Living_Dark_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
