import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const Geologist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "geologist",
    setTitleId: 194,
    names: [{value: "Geologist"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHollows.key,
    location: [-749.0, -539.0, -1647.0],
    badgeText: [{
        value: "This spot marks the first sighting of the strange, rock-like creatures known as Pumicites."
    }],
    notes: "Roughly 80 yards NE-E from the Grendel's Gulch's marker.",
    links: [
        {title: "Geologist Badge", href: "https://homecoming.wiki/wiki/Geologist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
