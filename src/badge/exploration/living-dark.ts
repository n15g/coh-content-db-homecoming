import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";

export const LivingDark: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "living-dark",
    setTitleId: 1827,
    names: [{value: "Living Dark"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewerNetwork.key,
    location: [-896.0, -890.3, -1018.0],
    badgeText: [{
        value: `Far away from the light of civilization and the life of normal people, darkness can take on a life of its own.
It flows into every corner, irresistible and tireless, as silent as death. It is the natural state of things down here where your presence is a violation.
The darkness can flow into you if you let it, and standing here in the heart of it, you can feel it pressing in against your consciousness, daring you to open yourself
to it as so many others down here have.`
    }],
    notes: `Located in [map:abandoned-sewer-network]

The Living Dark badge is in Dr. Vahilok's lab in the Underworld area. It is toward the back of the room, on a raised area of metal grating.`,
    links: [
        {title: "Living Dark Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Living_Dark_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
