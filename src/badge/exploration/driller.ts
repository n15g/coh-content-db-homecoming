import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const Driller: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "driller",
    setTitleId: 254,
    names: [{value: "Driller"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [1030.0, 8.0, 1982.0],
    badgeText: [{
        value: `Three years ago, Ms. Liberty smashed the supervillain Thermonuke through the deck and into the volatile crude below.
 Thermonuke's devastating powers ignited the oil and cracked open the Cairo Queen like a pixie stick.`
    }],
    notes: `Located in [map:${PortOakes.key}], on a sunken ship off the southwest coast.

The marker is almost where the water comes over the deck.`,
    links: [
        {title: "Driller Badge", href: "https://homecoming.wiki/wiki/Driller_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "4"
};
