import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const Trustworthy: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "trustworthy",
    names: [{value: "Trustworthy"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoAtlasPark.key,
    location: [-129.2, -783.8, -805.4],
    notes: "Located next to the large green crystal in the MAGI office.",
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
