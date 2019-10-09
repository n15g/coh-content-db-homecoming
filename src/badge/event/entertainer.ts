import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Entertainer: IBadgeData = {
    type: BadgeType.EVENT,
    key: "entertainer",
    names: [
        {value: "Entertainer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 4th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Entertainer Badge", href: "https://paragonwiki.com/wiki/Entertainer_Badge"}
    ],
    icons: [{value: "core.event.entertainer"}]
};
