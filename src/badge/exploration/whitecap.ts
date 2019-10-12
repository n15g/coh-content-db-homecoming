import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";

export const Whitecap: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "whitecap",
    names: [{value: "Whitecap"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TalosIsland.key,
    location: [-5613.0, 80.0, 1855.0],
    badgeText: [{
        value: "The cargo ship Alba Varden tends to be a hotbed of criminal activity."
    }],
    notes: "Located on a ship in the large sea northeast of the main island in the [map:talos-island] zone.\n" +
        "\n" +
        "The ship is about 630 yards east of the Ithaca Island marker, and the badge marker is on top of the cabin.",
    links: [
        {title: "Whitecap Badge", href: "https://paragonwiki.com/wiki/Whitecap_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
