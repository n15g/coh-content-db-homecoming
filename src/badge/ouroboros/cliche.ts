import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Cliche: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "cliche",
    names: [
        {value: "Cliché"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 1 and 15 while not using Inspirations."},
    ],
    acquisition: "Complete a level 1-15 Flashback story arc using no inspirations.",
    links: [
        {title: "Cliche Badge", href: "https://paragonwiki.com/wiki/Cliche_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/cliche.png"}]
};
