import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const AngerManager: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "anger-manager",
    setTitleId: 554,
    names: [
        {type: Alternate.H, value: "Anger Manager"},
        {type: Alternate.V, value: "Vandal"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "With time, your legendary rage towards inanimate objects will be a thing of the past."},
        {type: Alternate.V, value: "You've taken your rage out on everything not nailed down in Paragon City."}
    ],
    acquisition: "Destroying 25 Hydrants, 25 Mailboxes, 25 Newspaper stands, and 25 Pay Phones in Mayhem Missions",
    links: [
        {title: "Anger Manager Badge", href: "https://paragonwiki.com/wiki/Anger_Manager_Badge"},
        {title: "Vandal Badge", href: "https://paragonwiki.com/wiki/Vandal_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/anger-manager.png"}
    ],
};