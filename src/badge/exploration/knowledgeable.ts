import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const Knowledgeable: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "knowledgeable",
    setTitleId: 2071,
    names: [{value: "Knowledgeable"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Although the human genome was mapped out by many of the scientific community's brightest men and women, this library documents scores of super power related anomalies that continue to baffle genetic experts around the world.`}],
    mapKey: EchoAtlasPark.key,
    location: [43.4, -783.8, -1000.8],
    notes: "Located in the GIFT office, between the third and fourth row of bookshelves.",
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "5"
};
