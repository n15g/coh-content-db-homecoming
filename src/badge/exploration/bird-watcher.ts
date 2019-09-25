import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";

export const BirdWatcher: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "bird-watcher",
    names: [{value: "Bird Watcher"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoGalaxyCity.key,
    location: [-1099.0, 48.0, -2264.0],
    badgeText: [{value: "The Invisible Falcon disappeared without a trace in the mid 90's."}],
    notes: "The Bird Watcher Badge is in the Orion Beltway neighborhood of Echo: Galaxy City." +
        " It is 87 yds south east of the Orion Beltway marker, there is a brown building on the left (east), across from Major Flanders, City of Gyros, and Paragon City Pizza." +
        "\n\nThe badge marker is on the lowest ledge on the northeastern corner of the building." +
        " Though not directly accessible, there is a fire escape that leads up the eastern side of the building." +
        " A non-airborne hero may access the badge by climbing up the fire escape and jumping to the ledge from a higher height.",
    links: [
        {title: "Bird Watcher Badge", href: "https://paragonwiki.com/wiki/Bird_Watcher_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "1"
};
