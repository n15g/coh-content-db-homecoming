import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const Virtuous: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "virtuous",
    setTitleId: 1220,
    names: [{value: "Virtuous"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Throughout Atlas Park and the rest of Paragon City there are numerous statues of heroes who fell in battle while defending their beliefs.`}],
    mapKey: EchoAtlasPark.key,
    location: [965.1, -26.7, -753.7],
    notes: "Located at the foot of the statue in Promethous Park's lake.",
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "2"
};
