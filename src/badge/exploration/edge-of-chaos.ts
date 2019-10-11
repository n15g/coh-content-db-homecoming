import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const EdgeOfChaos: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "edge-of-chaos",
    names: [{value: "Edge of Chaos"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [-145.0, -784.0, -902.0],
    badgeText: [{
        value: "Longbow has set up this portal in the heart of City Hall. It leads to a possible future where Recluse achieves his ultimate victory over Atlas Park." +
            " While it's business as usual in City Hall, Longbow fights for their lives against Arachnos on the other side of this portal."
    }],
    notes: "The Edge of Chaos Badge is located in City Hall at the back of the D.A.T.A room.\n" +
        "\n" +
        "It is just before you reach the elevator that takes you to the portal to [map:recluses-victory]",
    links: [
        {title: "Edge of Chaos Badge", href: "https://paragonwiki.com/wiki/Edge_of_Chaos_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
