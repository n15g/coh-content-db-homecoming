import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const OutOfHarmsWay: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "out-of-harms-way",
    names: [{value: "Out of Harm's Way"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoAtlasPark.key,
    location: [1150.1, 0.0, -1597.5],
    notes: `Located 264 yards North of the Prometheus Park marker, in an east-west traffic tunnel/underpass.`,
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
