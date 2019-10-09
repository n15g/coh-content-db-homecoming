import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ApocalypseSurvivor: IBadgeData = {
    type: BadgeType.EVENT,
    key: "apocalypse-survivor",
    names: [
        {value: "Apocalypse Survivor"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've helped take down a Zombie Elite, showing you are an Apocalypse Survivor!"},
    ],
    acquisition: "Defeat a Zombie Elite Boss during a Zombie Apocalypse.",
    links: [
        {title: "Apocalypse Survivor Badge", href: "https://paragonwiki.com/wiki/Apocalypse_Survivor_Badge"}
    ],
    icons: [{value: "core.event.apocalypse-survivor"}]
};
