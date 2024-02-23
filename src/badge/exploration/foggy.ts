import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const Foggy: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "foggy",
    setTitleId: 134,
    names: [{value: "Foggy"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [968.0, 0.0, 2621.0],
    badgeText: [{
        value: "This building is in the final stages of preparing suites for the use of the city's Super Groups."
    }],
    notes: "Located in The Gaspee neighborhood of [map:founders-falls]. It is located by a fountain in front (east) of a tall building 100 yards south of The Gaspee marker.",
    links: [
        {title: "Foggy Badge", href: "https://homecoming.wiki/wiki/Foggy_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
