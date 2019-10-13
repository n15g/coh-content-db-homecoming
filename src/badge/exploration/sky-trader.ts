import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const SkyTrader: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sky-trader",
    names: [{value: "Sky Trader"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [-2077.0, 56.0, 512.0],
    badgeText: [{
        value: `The Family's mansion in Villa Requin has played host to many higher ranking officials within the Sky Raiders.
 There are rumors that the two groups plot a potential take over of Sharkhead Isle within this mansion.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], in the Villa Requin neighborhood.

It is in front of the eastern mansion, 14 feet east of the neighborhood marker.`,
    links: [
        {title: "Sky Trader Badge", href: "https://paragonwiki.com/wiki/Sky_Trader_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "7"
};
