import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";

export const Reborn: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "reborn",
    setTitleId: 745,
    names: [{value: "Reborn"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: TheAbyss.key,
    location: [679.0, -544.0, -3189.0],
    badgeText: [{
        value: `You have located where the Devouring Earth have attempted to bring forth the Hamidon outside of the prying eyes of Paragon City.`
    }],
    notes: `Located in [map:${TheAbyss.key}], directly under the nucleus of Hamidon, in the bowl-shaped water area in the northern part of the map.

It is located underwater (but visible, if a villain is close enough to it) roughly where the feeding streams point in the center of the bowl.
 It is possible to get this badge when Hamidon is not present (i.e. there are Devouring Earth Monsters present in the zone).`,
    links: [
        {title: "Reborn Badge", href: "https://paragonwiki.com/wiki/Reborn_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
