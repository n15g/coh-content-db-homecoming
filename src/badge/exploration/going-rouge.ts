import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {ImperialCity} from "../../map/imperial-city";

export const GoingRouge: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "going-rouge",
    setTitleId: 1731,
    names: [{value: "Going Rouge"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ImperialCity.key,
    location: [-2358.0, -16.0, 934.0],
    badgeText: [{
        value: "Rita Mayfair's cosmetic biochemistry and plastic surgery skills perfectly compliment her taste and sense of style." +
            " She is so good, there are rumors in shadowy corners that she even taught the elusive Doppelganger a thing or two."
    }],
    notes: "Located in [map:imperial-city] 365 yards E of the Industry Avenue marker, and directly in front of Rita Mayfair.",
    links: [
        {title: "Going Rouge Badge", href: "https://homecoming.wiki/wiki/Going_Rouge_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "9"
};
