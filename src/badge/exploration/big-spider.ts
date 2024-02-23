import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {PortOakes} from "../../map/port-oakes";

export const BigSpider: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "big-spider",
    setTitleId: 1488,
    names: [{value: "Big Spider"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: PortOakes.key,
    location: [-1023.0, 97.0, -896.0],
    badgeText: [{
        value: `This towering skyscraper used to belong to the Marcones before Arachnos seized it for the purpose of "overseeing operations in Port Oakes."
 The Marcones have been bitter about it ever since.`
    }],
    notes: `Located in [map:${PortOakes.key}], in the Marconeville neighborhood.

It is at the base of the stairs in front of the Supergroup building, 54 yards north of the neighborhood marker.`,
    links: [
        {title: "Big Spider Badge", href: "https://homecoming.wiki/wiki/Big_Spider_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "6"
};
