import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Pursuer: IBadgeData = {
    type: BadgeType.EVENT,
    key: "pursuer",
    names: [
        {type: Alternate.H, value: "Pursuer"},
        {type: Alternate.V, value: "Elusive"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Villains have escaped from the Big Zig, and you have taken it upon yourself to track them down."},
        {type: Alternate.V, value: "Ever since you got out of the Big Zig, heroes and do-gooders have hunted you down."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Pursuer Badge", href: "https://paragonwiki.com/wiki/Pursuer_Badge"},
        {title: "Elusive Badge", href: "https://paragonwiki.com/wiki/Elusive_Badge"}
    ],
    icons: [{value: "core.event.pursuer"}]
};
