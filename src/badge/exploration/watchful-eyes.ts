import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const WatchfulEyes: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "watchful-eyes",
    setTitleId: 1560,
    names: [{value: "Watchful Eyes"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [4245.0, 261.0, 4572.0],
    badgeText: [{
        value: "During her time in the Knives of Artemis, Agent Indigo used this spot to assassinate many of her targets." +
            " She now presides over the area to remind herself of her past sins and to prevent the Knives from staining this area with any more blood."
    }],
    notes: "Located in the Hutchinson Park neighborhood of [map:founders-falls], right next to where Indigo is standing, 325 yards east of the Eden gate.",
    links: [
        {title: "Watchful Eyes Badge", href: "https://homecoming.wiki/wiki/Watchful_Eyes_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
