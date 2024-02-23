import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Eden} from "../../map/eden";

export const CreyFish: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "crey-fish",
    setTitleId: 140,
    names: [{value: "Crey Fish"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Eden.key,
    location: [-1787.0, 0.0, 4550.0],
    badgeText: [{
        value: `Surprisingly it was the Devouring Earth, not Crey, that caused Woodvale to become the overrun Eden.`
    }],
    notes: `Located in [map:${Eden.key}] 26 feet to the east of The Utopia Complex marker.`,
    links: [
        {title: "Crey Fish Badge", href: "https://homecoming.wiki/wiki/Crey_Fish_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
