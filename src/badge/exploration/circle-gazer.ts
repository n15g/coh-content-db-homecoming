import {ALIGNMENT_VILLAIN, BadgeType, CohContentDbImageLibrary, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const CircleGazer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "circle-gazer",
    canonicalName: "Circle Gazer",
    alignment: ALIGNMENT_VILLAIN,
    mapKey: CapAuDiable.key,
    location: [-130.0, 37.0, -2394.0],
    badgeText: "No one is quite sure about the purpose of these odd monuments." +
        " Some say that Dr. Aeon sent a squad of Arachnos to decimate them long ago and though his minions managed to destroy one, spirits haunted Dr. Aeon for weeks." +
        " The operation was inexplicably called off.",
    notes: "The Circle Gazer Badge is located in the New Haven neighborhood of Cap au Diable." +
        " It is on top of the easternmost Circle of Thorns monument, 261 yards NNW of the neighborhood marker.",
    links: [
        {title: "Circle Gazer Badge", href: "https://paragonwiki.com/wiki/Circle_Gazer_Badge"}
    ],
    images: [CohContentDbImageLibrary.badge.exploration.villain],
    vidiotMapKey: "8"
};
