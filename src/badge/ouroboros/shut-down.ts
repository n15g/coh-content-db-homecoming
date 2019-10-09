import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ShutDown: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "shut-down",
    names: [
        {value: "Shut Down"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 15 and 19 while not using any Travel Power Pools."},
    ],
    acquisition: "Complete a level 15-19 Flashback arc using no travel powers.",
    links: [
        {title: "Shut Down Badge", href: "https://paragonwiki.com/wiki/Shut_Down_Badge"}
    ],
    icons: [{value: "core.ouroboros.shut-down"}]
};
