import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";

export const TheWoundedEarth: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-wounded-earth",
    setTitleId: 1849,
    names: [{value: "The Wounded Earth"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [1550.0, 84.0, -4165.0],
    badgeText: [{
        value: `You can sense a palpable anger radiating from the Devouring Earth when you stand upon this, the last remnant of mankind's creation in Hamidon's pristine garden.
The Devouring Earth do not hold back their thoughts about this place: it is a scab, a wound, an affront.
When you look at the green sward blanketing the land around you, it is hard not to feel something akin to that, looking down at the rusting hulks and decaying metal beneath your feet.`
    }],
    notes: `Located in [map:${TheHive.key}] 1.02 miles from the Eden transfer point, in the center of the southern edge of the elongated building.`,
    links: [
        {title: "The Wounded Earth Badge", href: "https://paragonwiki.com/wiki/The_Wounded_Earth_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
