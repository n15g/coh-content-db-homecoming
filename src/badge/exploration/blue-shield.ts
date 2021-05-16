import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";

export const BlueShield: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "blue-shield",
    setTitleId: 92,
    names: [{value: "Blue Shield"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoGalaxyCity.key,
    location: [-1170.0, 39.0, -2470.0],
    badgeText: [{
        value: "Blue Steel, the only hero in Paragon City who works directly for the police, arrested the Tsoo's leader Tub Ci on this spot." +
            " The charges didn't stick, and Tub Ci is free today."
    }],
    notes: "The Blue Shield Badge is in the Orion Beltway neighborhood of Echo: Galaxy City." +
        " Eighty yards east of the Orion Beltway marker, there is a Vanguard billboard proclaiming, \"They are among us...\"." +
        "\n\nThe badge marker is on the back left (north) ledge of the billboard." +
        " It is possible for non-airborne heroes to earn this badge by climbing up the fire escape to the landing of the brown building southwest of billboard" +
        " (the same building that has the Bird Watcher Badge on it), jumping onto the lower ledge of the building east of that building, then onto the roof of the Paragon Parts Plus building" +
        " next to the billboard." +
        "\n\nFrom the roof of that building, it is an easy jump onto the back ledge of the billboard, where the badge marker is.",
    links: [
        {title: "Blue Shield Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Blue_Shield_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
