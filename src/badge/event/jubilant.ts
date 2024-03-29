import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Jubilant: IBadgeData = {
    type: BadgeType.EVENT,
    key: "jubilant",
    setTitleId: 1327,
    names: [
        {value: "Jubilant"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 5th anniversary of City of Heroes/Villains."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Jubilant Badge", href: "https://homecoming.wiki/wiki/Jubilant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/jubilant.png"}]
};
