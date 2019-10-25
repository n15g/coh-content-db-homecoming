import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {Grandville} from "../../map/grandville";

export const LineHolder: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "line-holder",
    setTitleId: 1512,
    names: [{value: "Line Holder"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: Grandville.key,
    location: [1728.0, -400.0, 656.0],
    badgeText: [{
        value: `Arachnos stationed here are the first line of defense against any Arachnoids trying to break out of the Gutter.
Arachnoids foolish enough to attempt an attack from above ground never succeed, though it's well known that most Arachnoids utilize their own underground tunnels to travel.`
    }],
    notes: `Located in [map:${Grandville.key}], in the Gutter neighborhood.

It is at the gate between the North and East Wards, 64 yards ENE of the East Ward 2 Lift marker.`,
    links: [
        {title: "Line Holder Badge", href: "https://paragonwiki.com/wiki/Line_Holder_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "7"
};
