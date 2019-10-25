import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const SeaDog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sea-dog",
    setTitleId: 197,
    names: [{value: "Sea Dog"}],
    alignment: ALIGNMENT_HERO,
    mapKey: StrigaIsle.key,
    location: [-470.0, 0.0, 1020.0],
    badgeText: [{
        value: "Port Noble's shipping industry has declined of late, as Paragon City's manufacturing has taken a hit in the wake of the Rikti War." +
            " Now, with the Council plaguing Striga Isle, the situation has gone from bad to worse."
    }],
    notes: "Located in [map:striga-isle] at the end of a dock 440 yards east of the ferry.",
    links: [
        {title: "Sea Dog Badge", href: "https://paragonwiki.com/wiki/Sea_Dog_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
