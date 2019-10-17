import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SecurityExpert: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "security-expert",
    setTitleId: 643,
    names: [
        {type: Alternate.H, value: "Security Expert"},
        {type: Alternate.MV, value: "Inside Man"},
        {type: Alternate.FV, value: "Inside Woman"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have protected several local businesses in Paragon City, and the public loves you for it."},
        {type: Alternate.V, value: "You have protected several local businesses in Paragon City, and now know their security " +
        "inside and out."}
    ],
    acquisition: "Stop 5 vault break-ins in Safeguard Missions",
    links: [
        {title: "Security Expert Badge", href: "https://paragonwiki.com/wiki/Security_Expert_Badge"},
        {title: "Inside Man Badge", href: "https://paragonwiki.com/wiki/Inside_Man_Badge"},
        {title: "Inside Woman Badge", href: "https://paragonwiki.com/wiki/Inside_Woman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/security-expert.png"}
    ],
};