import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GhostTouched: IBadgeData = {
    type: BadgeType.EVENT,
    key: "ghost-touched",
    names: [
        {value: "Ghost Touched"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated 20 of the Unseelie Court."},
    ],
    acquisition: "Defeat 20 Unseelie Court during the Halloween event.",
    links: [
        {title: "Ghost Touched Badge", href: "https://paragonwiki.com/wiki/Ghost_Touched_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/ghost-touched.png"}]
};
