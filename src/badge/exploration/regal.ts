import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";

export const Regal: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "regal",
    names: [{value: "Regal"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Boomtown.key,
    location: [-448.0, 42.0, 2170.0],
    badgeText: [{value: "King Mihenra, a self-proclaimed warlord from the Netherworld, attempted to seize control of Paragon City, only to be defeated by Positron on this very spot."}],
    notes: "The Regal Badge is located in the Powderkeg neighborhood of Boomtown. It is one of the trickiest exploration badges to find in the game." +
        " 600 yards due west of the Powderkeg marker, there is a road. Directly north of that location, one level down, is a tunnel entrance." +
        "\n\nThe badge marker is located in the middle of that tunnel along the center divider, 682 yards west of the Powderkeg marker.",
    links: [
        {title: "Regal Badge", href: "https://paragonwiki.com/wiki/Regal_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "2"
};
