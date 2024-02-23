import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const VolunteerFirefighter: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "volunteer-firefighter",
    setTitleId: 211,
    names: [
        {type: Alternate.H, value: "Volunteer Firefighter"},
        {type: Alternate.V, value: "Fire Bane"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have helped save the people of Paragon City from burning!"},
        {type: Alternate.V, value: "You put a stop to the Hellions' fun with fire."}
    ],
    acquisition: "Defeat 10 Hellion Arsonists during a Hellion Arson event",
    links: [
        {title: "Volunteer Firefighter Badge", href: "https://homecoming.wiki/wiki/Volunteer_Firefighter_Badge"},
        {title: "Fire Bane Badge", href: "https://homecoming.wiki/wiki/Fire_Bane_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/firefighter.png"}
    ],
};
