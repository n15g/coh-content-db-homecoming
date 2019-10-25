import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Neutropolis} from "../../map/neutropolis";

export const Stockpiling: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "stockpiling",
    setTitleId: 1728,
    names: [{value: "Stockpiling"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Neutropolis.key,
    location: [5182.0, -56.0, -457.0],
    badgeText: [{
        value: "Lambda Sector is the core of the Imperial Defense Force's armaments and heavy machinery stockpile, fed daily by the anti-matter powered factories of Neutropolis." +
            " What is not immediately needed elsewhere is kept here for a 'rainy day.'"
    }],
    notes: "Located in [map:neutropolis] 217 yards NE of the Lambda Sector marker.",
    links: [
        {title: "Stockpiling Badge", href: "https://paragonwiki.com/wiki/Stockpiling_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "6"
};
