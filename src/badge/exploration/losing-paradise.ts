import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const LosingParadise: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "losing-paradise",
    setTitleId: 1559,
    names: [{value: "Losing Paradise"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [5109.0, 64.0, 4610.0],
    badgeText: [{
        value: "The Devouring Earth's spread into Founders' Falls was stopped here, though it was far too late to save the city of Woodvale." +
            " Heroes fought the Devouring Earth menace for days before it was pushed back into Woodvale - for the most part." +
            " The monsters still wander through Founders' Falls, while its people live in the knowledge that should the Devouring Earth grow out of control once again," +
            " they will be the first to be consumed."
    }],
    notes: "Located in the Hutchinson Park neighborhood of [map:founders-falls], 82 feet east of the Eden gate.",
    links: [
        {title: "Losing Paradise Badge", href: "https://homecoming.wiki/wiki/Losing_Paradise_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
