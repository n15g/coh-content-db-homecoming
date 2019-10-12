import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";

export const EyesOfNemesis: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "eyes-of-nemesis",
    names: [{value: "Eyes of Nemesis"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CreysFolly.key,
    location: [226.0, 128.0, 1520.0],
    badgeText: [{
        value: "From this non-descript perch near the Brickstown entrance, the agents of Nemesis monitor everyone who enters Crey's Folly." +
            " Though it would not seem so on the surface, Crey's Folly is a hotly contested area, particularly among groups with a strong scientific background such as Crey and Nemesis."
    }],
    notes: "Located in [map:creys-folly] 105 yards SW of the [map:brickstown] gate, on top of the ducting that runs between the holding tanks.",
    links: [
        {title: "Eyes of Nemesis Badge", href: "https://paragonwiki.com/wiki/Eyes_of_Nemesis_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
