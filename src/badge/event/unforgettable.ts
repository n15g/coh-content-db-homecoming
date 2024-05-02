import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unforgettable: IBadgeData = {
    type: BadgeType.EVENT,
    key: "unforgettable",
    setTitleId: 2509,
    names: [
        {value: "Unforgettable"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 19th anniversary of City of Heroes."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Unforgettable Badge", href: "https://homecoming.wiki/wiki/Unforgettable_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unforgettable.png"}]
};
