import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Merrymaker: IBadgeData = {
    type: BadgeType.EVENT,
    key: "merrymaker",
    names: [
        {value: "Merrymaker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 3rd anniversary of City of Heroes."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Merrymaker Badge", href: "https://paragonwiki.com/wiki/Merrymaker_Badge"}
    ],
    imageKeys: [{value: "core.event.merrymaker"}]
};
