import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const OutOfHarmsWay: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "out-of-harms-way",
    setTitleId: 2322,
    names: [{value: "Out of Harm's Way"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `When the Rikti invaded, their drop ships scattered bombs from every corner of the sky. Tunnels like this one were strong enough to withstand the blasts.`}],
    mapKey: EchoAtlasPark.key,
    location: [1150.1, 0.0, -1597.5],
    notes: `Located 264 yards North of the Prometheus Park marker, in an east-west traffic tunnel/underpass.`,
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "6"
};
