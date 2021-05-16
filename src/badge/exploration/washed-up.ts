import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const WashedUp: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "washed-up",
    setTitleId: 252,
    names: [{value: "Washed Up"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [-3903.0, 16.0, -1369.0],
    badgeText: [{
        value: `Emil Marcone's brother was found at low tide in this particular vehicle.`
    }],
    notes: `Located in [map:${PortOakes.key}], in the Fort Hades neighborhood.

From the Fort Hades marker, head due east until you reach the water. There is an old rusted blue car on your left. The badge marker is on top of that car.`,
    links: [
        {title: "Washed Up Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Washed_Up_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
