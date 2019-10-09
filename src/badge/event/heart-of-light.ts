import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const HeartOfLight: IBadgeData = {
    type: BadgeType.EVENT,
    key: "heart-of-light",
    names: [
        {type: Alternate.H, value: "Heart of Light"},
        {type: Alternate.V, value: "Heart of Darkness"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Through the choices made in your life, you have been blessed with a Heart of Light."},
        {type: Alternate.V, value: "Through the choices made in your life, you have been cursed with a Heart of Darkness."},
    ],
    acquisition: "Defeat Snaptooth once during the Valentine's Day Event.",
    links: [
        {title: "Heart of Light Badge", href: "https://paragonwiki.com/wiki/Heart_of_Light_Badge"},
        {title: "Heart of Darkness Badge", href: "https://paragonwiki.com/wiki/Heart_of_Darkness_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/heart-of-light.png"}]
};
