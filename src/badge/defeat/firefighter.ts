import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Firefighter: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "firefighter",
    setTitleId: 212,
    names: [
        {type: Alternate.H, value: "Firefighter"},
        {type: Alternate.V, value: "Firestomper"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            type: Alternate.H, value: "Once again, you have risen to the call of duty and put an end to the evil arsonists that " +
                "plague Paragon City.  Smokey would be proud!"
        },
        {
            type: Alternate.V, value: "Once again, the Hellions have tried to set the town ablaze and you have stepped in to stomp " +
                "them and the fires out. Killjoy."
        }
    ],
    acquisition: "Defeat 25 Fires and 25 Hellion Arsonists during a Hellion Arson event",
    links: [
        {title: "Firefighter Badge", href: "https://homecoming.wiki/wiki/Firefighter_Badge"},
        {title: "Firestomper Badge", href: "https://homecoming.wiki/wiki/Firestomper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/firefighter.png"}
    ],
};
