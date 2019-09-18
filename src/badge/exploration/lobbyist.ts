import {AlternateNameType, BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {MapKey} from "../../maps";

export const Lobbyist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "lobbyist",
    canonicalName: "Lobbyist",
    alignment: {h: true, v: true, p: true},
    mapKey: MapKey.BLOODY_BAY,
    location: [2265.0, 137.0, -832.0],
    alternateNames: [
        {type: AlternateNameType.H, value: "Lobbyist"},
        {type: AlternateNameType.V, value: "Crooked Politician"}
    ],
    badgeText: "Spanky Rabinowitz' cousin Charlie 'Big Buck' Rabinowitz owned Big Bucks Casino. It is said much of Spanky's campaign money came from the take here.",
    notes: "The Crooked Politician Badge is located in Bloody Bay on top of the casino building 120 yards due east of Meteor Do.",
    links: [
        {title: "Lobbyist Badge", href: "https://paragonwiki.com/wiki/Lobbyist_Badge"},
        {title: "Crooked Politician Badge", href: "https://paragonwiki.com/wiki/Crooked_Politician_Badge"}
    ],
    images: [CohContentDbImageLibrary.badge.exploration.hero, CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapNumber: 1
};
