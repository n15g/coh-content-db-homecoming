import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHive} from "../../map/the-hive";

export const HeartOfTheHamidon: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "heart-of-the-hamidon",
    names: [{value: "Heart of the Hamidon"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHive.key,
    location: [-3.0, -338.0, -2183.0],
    badgeText: [{
        value: `The Hamidon has defeated many heroes.`
    }],
    notes: `Located in the dead center of [map:${TheHive.key}], where Hamidon appears.`,
    links: [
        {title: "Heart of the Hamidon Badge", href: "https://paragonwiki.com/wiki/Heart_of_the_Hamidon_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
