import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";

export const BridgeToNowhere: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "bridge-to-nowhere",
    names: [{value: "Bridge to Nowhere"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SkywayCity.key,
    location: [251.0, -12.0, -3644.0],
    badgeText: [{
        value: "The construction of Skyway's next set of bridges was halted by the first Rikti War and remains on hold." +
            " Citizens walking nearby constantly look at this bridge with some fear, noticing that its foundations grow weaker by the day." +
            " It may be only a matter of time until this bridge collapses."
    }],
    notes: "The Bridge to Nowhere Badge is in The Gruff neighborhood of Skyway City." +
        "\n\nIt is in the middle of a free-standing section of bridge 490 yards SSE of the north Paragon City Monorail station.",
    links: [
        {title: "Bridge to Nowhere Badge", href: "https://paragonwiki.com/wiki/Bridge_to_Nowhere_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "8"
};
