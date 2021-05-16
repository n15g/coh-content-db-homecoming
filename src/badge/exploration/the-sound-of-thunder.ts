import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";
import {Eden} from "../../map/eden";

export const TheSoundOfThunder: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-sound-of-thunder",
    setTitleId: 1852,
    names: [{value: "The Sound of Thunder"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [-813.0, 0.0, -791.0],
    badgeText: [{
        value: `The Devouring Earth have gathered here in force, their stomping legs echoing off the distant hillsides like the thunder of angry gods.
The closer your approach, the more excited they seem to grow and the louder their roars and pounding feet become, creating a deafening racket that makes even shouted speech nearly impossible to hear.`
    }],
    notes: `Located in [map:${TheHive.key}] 558 yards west and a bit north of the [map:${Eden.key}] transfer point, in the middle of a valley guarded
by two barricades of monsters off the southeast edge of the crater.`,
    links: [
        {title: "The Sound of Thunder Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Sound_of_Thunder_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
