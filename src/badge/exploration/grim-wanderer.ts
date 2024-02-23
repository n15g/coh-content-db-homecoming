import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Croatoa} from "../../map/croatoa";

export const GrimWanderer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "grim-wanderer",
    setTitleId: 408,
    names: [{value: "Grim Wanderer"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Croatoa.key,
    location: [762.0, 48.0, -2440.0],
    badgeText: [{
        value: "This deadly valley is witness to some of the most brutal battles in all of Croatoa."
    }],
    notes: "Located on the floor of the Grim Vale between the three standing stones.",
    links: [
        {title: "Grim Wanderer Badge", href: "https://homecoming.wiki/wiki/Grim_Wanderer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
