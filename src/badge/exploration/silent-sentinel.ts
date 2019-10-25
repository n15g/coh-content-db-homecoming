import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const SilentSentinel: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "silent-sentinel",
    setTitleId: 87,
    names: [{value: "Silent Sentinel"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [-1169.0, 108.0, -1586.0],
    badgeText: [{
        value: "In the 1950's the hero called 'Gargoyle' would stand watch over the city from this spot."
    }],
    notes: "Located 389 yards east of the Chiron Medical Center hospital, 361 yards north of the Hyperion Way marker.\n" +
        "\n" +
        "The badge sits on the ledge of a rooftop close to a water tower.",
    links: [
        {title: "Silent Sentinel Badge", href: "https://paragonwiki.com/wiki/Silent_Sentinel_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
