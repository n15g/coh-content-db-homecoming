import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";

export const CreyWatcher: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "crey-watcher",
    setTitleId: 138,
    names: [{value: "Crey Watcher"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CreysFolly.key,
    location: [1080.0, 0.0, 2320.0],
    badgeText: [{
        value: "Crey's defensive measures against the Rikti brought about an environmental nightmare in this area, turning the neighborhood once called 'Venice' into 'Crey's Folly.'"
    }],
    notes: "Located in [map:creys-folly] 230 yards west of the Crey Factories marker along the south side of a ditch.",
    links: [
        {title: "Crey Watcher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Crey_Watcher_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
