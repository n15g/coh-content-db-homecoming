import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Exultant: IBadgeData = {
    type: BadgeType.EVENT,
    key: "exultant",
    names: [
        {value: "Exultant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 6th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Exultant Badge", href: "https://paragonwiki.com/wiki/Exultant_Badge"}
    ],
    icons: [{value: "core.event.exultant"}]
};
