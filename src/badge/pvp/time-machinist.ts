import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TimeMachinist: IBadgeData = {
    type: BadgeType.PVP,
    key: "time-machinist",
    setTitleId: 564,
    names: [
        {value: "Time Machinist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have taken over 10 pillboxes in Recluse's Victory, making you a Time Machinist."}
    ],
    acquisition: "Capture 10 pillboxes in Recluse's Victory",
    links: [
        {title: "Time Machinist Badge", href: "https://homecoming.wiki/wiki/Time_Machinist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/time-machinist.png"}
    ],
};
