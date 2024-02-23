import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";

export const PortalParter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "portal-parter",
    setTitleId: 144,
    names: [{value: "Portal Parter"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PeregrineIsland.key,
    location: [3045.0, 0.0, 1287.0],
    badgeText: [{
        value: "This R&D facility suffered one too many accidents and has since fallen into ruin."
    }],
    notes: "Located on a small island in the [map:peregrine-island] zone.\n" +
        "\n" +
        "The island it is on is approximately 834 yards southwest of the Talos Island Ferry, and the marker is located in the center of the grassy area," +
        " between the rock outcropping and the large electrical tower.",
    links: [
        {title: "Portal Parter Badge", href: "https://homecoming.wiki/wiki/Portal_Parter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
