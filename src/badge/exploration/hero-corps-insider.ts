import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const HeroCorpsInsider: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hero-corps-insider",
    setTitleId: 88,
    names: [
        {type: Alternate.H, value: "Hero Corps Insider"},
        {type: Alternate.V, value: "Hero Corps Infiltrator"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [284.0, 16.0, -884.0],
    badgeText: [{
        value: "Hero Corps may be controversial in their methods but they can have good information for aspiring heroes."
    }],
    notes: "Located in the Atlas Plaza neighborhood of [map:atlas-park] on the ground in front of Henry Peter Wong.\n" +
        "\n" +
        "Henry is behind and to the left (northwest) of City Hall, just behind a large statue approximately halfway between City Hall and the Paragon City Monorail station.",
    links: [
        {title: "Hero Corps Insider Badge", href: "https://paragonwiki.com/wiki/Hero_Corps_Insider_Badge"},
        {title: "Hero Corps Infiltrator Badge", href: "https://paragonwiki.com/wiki/Hero_Corps_Infiltrator_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
