import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const Globetrotter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "globetrotter",
    setTitleId: 287,
    names: [{value: "Globetrotter"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [128.0, 16.0, -249.0],
    badgeText: [{value: "Lord Recluse targeted the statue of Atlas first, knowing it was an important symbol to Paragon's 'heroes.'"}],
    notes: "The Globetrotter Badge is located in the [map:${ReclusesVictory.key}] zone in Sector 5." +
        " It is in front of the Atlas Statue, just behind the dais that Ms. Liberty stands on in the hero's version of Atlas Park.",
    links: [
        {title: "Globetrotter Badge", href: "https://paragonwiki.com/wiki/Globetrotter_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
