import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";

export const Purifier: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "purifier",
    setTitleId: 110,
    names: [
        {type: Alternate.H, value: "Purifier"},
        {type: Alternate.V, value: "Defiler"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SkywayCity.key,
    location: [-1085.0, -16.0, -7612.0],
    badgeText: [{
        value: "Defiler, an evil spirit brought forth by the Devouring Earth, was defeated on this spot by Ms. Liberty... with a little help from MAGI."
    }],
    notes: "In the extreme northeast corner of Skyway City, between the two basketball courts.",
    links: [
        {title: "Purifier Badge", href: "https://paragonwiki.com/wiki/Purifier_Badge"},
        {title: "Defiler Badge", href: "https://paragonwiki.com/wiki/Defiler_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
