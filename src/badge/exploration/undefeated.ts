import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const Undefeated: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "undefeated",
    setTitleId: 86,
    names: [{value: "Undefeated"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [545.0, 59.0, -2307.0],
    badgeText: [{
        value: "Here is where one of the brave souls to take up the mantle of Scirocco stood against, and fell to, the Rikti invaders."
    }],
    notes: "Located in the Promenade neighborhood of [map:atlas-park].\n" +
        "\n" +
        "It sits on a lower ledge on the east side of a building, 70 yards SE of the [map:steel-canyon] gate.",
    links: [
        {title: "Undefeated Badge", href: "https://paragonwiki.com/wiki/Undefeated_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
