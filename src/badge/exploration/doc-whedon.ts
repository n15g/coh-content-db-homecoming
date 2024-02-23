import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const DocWhedon: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "doc-whedon",
    setTitleId: 104,
    names: [{value: "Doc Whedon"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-2085.0, -32.0, 2853.0],
    badgeText: [{
        value: "This old dock used to be the most popular make-out spot in Paragon City. Today, however, it is more a place of violence than love."
    }],
    notes: "Located in [map:perez-park] 292 yards due east of the Everett Lake and 216 yards north of the Gaiman Woods neighborhood markers. It is also about 145 yards southeast of the Amphitheater.",
    links: [
        {title: "Doc Whedon Badge", href: "https://homecoming.wiki/wiki/Doc_Whedon_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
