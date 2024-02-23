import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ApocalypseSurvivor: IBadgeData = {
    type: BadgeType.EVENT,
    key: "apocalypse-survivor",
    setTitleId: 1023,
    names: [
        {value: "Apocalypse Survivor"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've helped take down a Zombie Elite, showing you are an Apocalypse Survivor!"},
    ],
    acquisition: "Defeat a Zombie Elite Boss during a Zombie Apocalypse.",
    links: [
        {title: "Apocalypse Survivor Badge", href: "https://homecoming.wiki/wiki/Apocalypse_Survivor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/apocalypse-survivor.png"}]
};
