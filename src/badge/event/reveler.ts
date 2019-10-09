import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Reveler: IBadgeData = {
    type: BadgeType.EVENT,
    key: "reveler",
    names: [
        {value: "Reveler"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 2nd anniversary of City of Heroes."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Reveler Badge", href: "https://paragonwiki.com/wiki/Reveler_Badge"}
    ],
    icons: [{value: "core.event.reveler"}]
};
