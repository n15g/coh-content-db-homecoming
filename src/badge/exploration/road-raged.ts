import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SAFEGUARD_MAYHEM_CONTACT} from "../_badge-misc";
import {MayhemSkywayCity} from "../../map/mayhem-skyway-city";

export const RoadRaged: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "road-raged",
    setTitleId: 557,
    names: [{value: "Road Raged"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MayhemSkywayCity.key,
    badgeText: [{
        value: "Hair pin risers like this road in Skyway City can incite rage even in pedestrians."
    }],
    location: [-646.0, 42.0, -4031.0],
    notes: "Located in the middle of the road, at the main switchback in the center of the map.\n" +
        "\n" +
        SAFEGUARD_MAYHEM_CONTACT,
    links: [
        {title: "Road Raged Badge", href: "https://homecoming.wiki/wiki/Road_Raged_Badge"},
        {title: "I25 Safeguard/Mayhem Contact", href: "https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges"}

    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
