import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const Rookie: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "rookie",
    setTitleId: 2025,
    names: [{value: "Rookie"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Newly registered heroes in Paragon City often start out in Atlas Park, where they can speak with more established heroes to receive advice and guidance.`}],
    mapKey: EchoAtlasPark.key,
    location: [127.4, 0.3, -111.3],
    notes: `Located at the base of the stairs out of the [map:${EchoAtlasPark.key}] plaza, where a new character would spawn.`,
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "4"
};
