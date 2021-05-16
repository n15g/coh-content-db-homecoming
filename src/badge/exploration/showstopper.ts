import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const Showstopper: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "showstopper",
    setTitleId: 1508,
    names: [{value: "Showstopper"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [-2198.0, 16.0, -1953.0],
    badgeText: [{
        value: `Hundreds of spectators have stood in this spot, transfixed by the eclectic performances of the Carnival of Shadows.
 Many of them are never seen again; some speculate that they've joined the troupe, while others fear they met more unpleasant fates.`
    }],
    notes: `Located in [map:${StMartial.key}], in the Fortune's Wheel neighborhood.

It is at the eastern entrance of the Carnival, 328 yards ENE of the neighborhood marker.`,
    links: [
        {title: "Showstopper Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Showstopper_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "8"
};
