import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const FireChief: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "fire-chief",
    setTitleId: 213,
    names: [
        {type: Alternate.H, value: "Fire Chief"},
        {type: Alternate.V, value: "Asbestos"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "The Hellions arsonists fear your name and the people of Paragon City look to you for their " +
        "fire safety tips."},
        {type: Alternate.V, value: "You're pretty much made of Asbestos as far as the Hellions arsonists are concerned. If " +
        "anyone's going to burn this town down, it's going to be you."}
    ],
    acquisition: "Defeat 100 Fires and 100 Hellion Arsonists during a Hellion Arson event",
    links: [
        {title: "Fire Chief Badge", href: "https://paragonwiki.com/wiki/Fire_Chief_Badge"},
        {title: "Asbestos Badge", href: "https://paragonwiki.com/wiki/Asbestos_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/firefighter.png"}
    ],
};