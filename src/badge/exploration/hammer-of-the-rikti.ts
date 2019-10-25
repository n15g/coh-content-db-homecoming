import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";

export const HammerOfTheRikti: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hammer-of-the-rikti",
    setTitleId: 1792,
    names: [{value: "Hammer of the Rikti"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CreysFolly.key,
    location: [2571.0, 22.0, 3691.0],
    badgeText: [{
        value: "When Venice was targeted by the Rikti in their initial strike, this is where their first attack was centered." +
            " The area was flattened and Rikti forces streamed into the area, slaying all they encountered." +
            " As this location was the site of the main Crey administration facility, various groups are eager to plumb the ruins in search of lost tech, but the Rikti are thick in this area and" +
            " have managed to repel any attempts to survey the damage."
    }],
    notes: "Located in [map:creys-folly] 140 yards SSE of The Blight marker, on top of the destroyed building.",
    links: [
        {title: "Hammer of the Rikti Badge", href: "https://paragonwiki.com/wiki/Hammer_of_the_Rikti_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
