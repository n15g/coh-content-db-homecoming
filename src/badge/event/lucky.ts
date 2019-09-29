import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Lucky: IBadgeData = {
    type: BadgeType.EVENT,
    key: "lucky",
    names: [
        {value: "Lucky"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 7th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Lucky Badge", href: "https://paragonwiki.com/wiki/Lucky_Badge"}
    ],
    imageKeys: [{value: "core.event.lucky"}]
};
