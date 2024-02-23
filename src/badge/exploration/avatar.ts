import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const Avatar: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "avatar",
    setTitleId: 102,
    names: [{value: "Avatar"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-1538.0, -32.0, 3176.0],
    badgeText: [{
        value: "Avatar, a hero in Paragon City in the late 1950's, had a statue erected to him after his death. The gangs have not been kind to this memorial."
    }],
    notes: "Located in [map:perez-park] 358 yards north of the Skyway City entrance.",
    links: [
        {title: "Avatar Badge", href: "https://homecoming.wiki/wiki/Avatar_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
