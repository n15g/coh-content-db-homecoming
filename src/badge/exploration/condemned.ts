import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const Condemned: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "condemned",
    setTitleId: 2323,
    names: [{value: "Condemned"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `The properties along Miller Street have been condemned and will be demolished and replaced with new attractions within a few years.`}],
    mapKey: EchoAtlasPark.key,
    location: [-543.0, 15.8, -900.3],
    notes: `There's a brown brick building 289 yards NE of the Atlas Plaza marker, the badge is on the overhanging roof above a pair of double-doors on this building.`,
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "7"
};
