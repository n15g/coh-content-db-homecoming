import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SomewhereInTime: IBadgeData = {
    type: BadgeType.PVP,
    key: "somewhere-in-time",
    setTitleId: 565,
    names: [
        {value: "Somewhere in Time"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "50 pillboxes have fallen into your hands."}
    ],
    acquisition: "Capture 50 pillboxes in Recluse's Victory",
    links: [
        {title: "Somewhere in Time Badge", href: "https://paragonwiki.com/wiki/Somewhere_in_Time_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/somewhere-in-time.png"}
    ],
};