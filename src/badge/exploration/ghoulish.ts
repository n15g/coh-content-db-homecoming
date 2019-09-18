import {BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {MapKey} from "../../maps";

export const Ghoulish: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ghoulish",
    canonicalName: "Ghoulish",
    alignment: {h: true, v: true, p: true},
    mapKey: MapKey.BLOODY_BAY,
    location: [91.0, 65.0, 360.0],
    badgeText: "The shards must be vibrating the very bones of the graves. You are almost sure you can hear scratching and clawing from the inside of the mausoleums.",
    notes: "The Ghoulish Badge is 185 yards east and slightly north of the Ground Zero neighborhood in Bloody Bay near the center of the map." +
        " There is a small building with a tunnel through it over the stone walkway." +
        " The badge marker is inside that small building.",
    links: [
        {title: "Ghoulish Badge", href: "https://paragonwiki.com/wiki/Ghoulish_Badge"}
    ],
    images: [CohContentDbImageLibrary.badge.exploration.hero, CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapNumber: 4
};
