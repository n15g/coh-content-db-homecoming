import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DeadHead: IBadgeData = {
    type: BadgeType.EVENT,
    key: "dead-head",
    setTitleId: 188,
    names: [
        {value: "Dead Head"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 50 zombies, the walking flesh of the recently dead."},
    ],
    acquisition: "Defeat 50 Zombies during the Halloween event.",
    links: [
        {title: "Dead Head Badge", href: "https://paragonwiki.com/wiki/Dead_Head_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/dead-head.png"}]
};
