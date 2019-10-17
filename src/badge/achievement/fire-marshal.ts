import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const FireMarshal: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "fire-marshal",
    setTitleId: 640,
    names: [
        {type: Alternate.H, value: "Fire Marshal"},
        {type: Alternate.V, value: "Fired"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Paragon officials recognize your efforts in thwarting arsons, and have made you an honorary " +
        "Fire Marshal."},
        {type: Alternate.V, value: "You were Fired from your honorary post as Fire Marshal when you left for the Rogue Isles."}
    ],
    acquisition: "Stop 5 arson side missions in Safeguard Missions",
    links: [
        {title: "Fire Marshal Badge", href: "https://paragonwiki.com/wiki/Fire_Marshal_Badge"},
        {title: "Fired Badge", href: "https://paragonwiki.com/wiki/Fired_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/fire-marshal.png"}
    ],
};