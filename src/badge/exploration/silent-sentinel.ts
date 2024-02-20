import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const SilentSentinel: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "silent-sentinel",
    setTitleId: 87,
    names: [{value: "Silent Sentinel"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoAtlasPark.key,
    location: [-608.0, 70.3, -1890.0],
    badgeText: [{
        value: `In the 1950's the hero called 'Gargoyle' would stand watch over the city from this spot.`
    }],
    notes: "UPDATE LOCATION.",
    links: [
        {title: "Silent Sentinel Badge", href: "https://homecoming.wiki/wiki/Silent_Sentinel_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
