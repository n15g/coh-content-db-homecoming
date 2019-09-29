import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Jubilant: IBadgeData = {
    type: BadgeType.EVENT,
    key: "jubilant",
    names: [
        {value: "Jubilant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 5th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Jubilant Badge", href: "https://paragonwiki.com/wiki/Jubilant_Badge"}
    ],
    imageKeys: [{value: "core.event.jubilant"}]
};
