import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const UnwelcomeGuest: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "unwelcome-guest",
    setTitleId: 1497,
    names: [{value: "Unwelcome Guest"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [-634.0, 1.0, 1437.0],
    badgeText: [{
        value: `This Council base has managed to maintain its foothold within Sharkhead despite numerous attacks from several groups.
 These days, the biggest threats are the 5th Column raids and exposing sleeper agents among Council ranks.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], in The Pit neighborhood.

It is at the entrance of the Council base 270 yards east of the neighborhood marker.`,
    links: [
        {title: "Unwelcome Guest Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Unwelcome_Guest_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "6"
};
