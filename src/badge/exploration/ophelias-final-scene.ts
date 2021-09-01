import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const OpheliasFinalScene: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ophelias-final-scene",
    setTitleId: 1776,
    names: [{value: "Ophelia's Final Scene"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-1743.0, -32.0, 2567.0],
    badgeText: [{
        value: "When Perez Park was still a place of safe recreation, Greek tragedies and the plays of Shakespeare were a common occurrence at the nearby open-air theater." +
            " In productions of Hamlet, it had become tradition for Ophelia's drowning scene to be played out in the waters of Everett Lake as Queen Gertrude stood on the dock," +
            " lamenting the death of her daughter."
    }],
    notes: "Located in [map:perez-park] 215 yards northeast of the Everett Lake marker on the map, on the extreme northeast coast of the lake.",
    links: [
        {title: "Ophelia's Final Scene Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ophelia%27s_Final_Scene_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
