import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Reunited: IBadgeData = {
    type: BadgeType.EVENT,
    key: "reunited",
    setTitleId: 2510,
    names: [
        {value: "Reunited"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 20th anniversary of City of Heroes."},
    ],
    acquisition: "Awarded upon login during May 2024, and thereafter available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Reunited Badge", href: "https://homecoming.wiki/wiki/Reunited_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reunited.png"}]
};