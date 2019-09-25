import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";

export const HealingNode: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "healing-node",
    names: [{value: "Healing Node"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SkywayCity.key,
    location: [1577.0, -84.0, -677.0],
    badgeText: [{
        value: "The MedCom is the teleportation network that can send fallen heroes directly to the hospital for treatment." +
            " This node is the center of the network; the other nodes are on the outskirts of the city."
    }],
    notes: "The badge is 354 yards southwest of the Land of the Lost marker." +
        "\n\nFirst make sure you are on the lowest level for traveling because as you know, Skyway City has many levels." +
        " The badge marker is located just to the right of Vitaly Cherenko, a contact in the Land of the Lost neighborhood of Skyway City." +
        "\n\nThe marker is approximately 280 yards due west of the midpoint between the Land of the Lost marker and the helicopter to Bloody Bay.",
    links: [
        {title: "Healing Node Badge", href: "https://paragonwiki.com/wiki/Healing_Node_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "4"
};
