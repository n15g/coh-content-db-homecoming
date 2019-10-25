import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";

export const NatureLover: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nature-lover",
    setTitleId: 126,
    names: [
        {type: Alternate.H, value: "Nature Lover"},
        {type: Alternate.V, value: "Eco-warrior"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: TalosIsland.key,
    location: [2672.0, 124.0, 9117.0],
    badgeText: [{
        value: "Mechanus was one of Woodsman's greatest enemies. It was on this spot that the champion of nature defeated the artificially intelligent robot for the final time."
    }],
    notes: "Located in the western part of the Argo Highway neighborhood of [map:talos-island], 874 yards west of the Argo Highway marker." +
        "\n" +
        "\nThe island it is on is the island that is cut by the western war wall, and the badge marker is just east of the tall rock outcropping in the center of the island.",
    links: [
        {title: "Nature Lover Badge", href: "https://paragonwiki.com/wiki/Nature_Lover_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
