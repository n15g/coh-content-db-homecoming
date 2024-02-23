import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TimeSaver: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "time-saver",
    setTitleId: 2200,
    names: [
        {value: "Time Saver"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You were able to save Kadabra Kill and Sigil by defeating all the members of the Knives of " +
                "Vengeance within two minutes."
        }
    ],
    acquisition: "Save both Sigil and Kadabra Kill within two minutes of starting the final fight in the final mission from Heather Townshend",
    links: [
        {title: "Time Saver Badge", href: "https://homecoming.wiki/wiki/Time_Saver_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png"}
    ],
};
