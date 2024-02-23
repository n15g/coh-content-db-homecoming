import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unquenchable: IBadgeData = {
    type: BadgeType.EVENT,
    key: "unquenchable",
    setTitleId: 2493,
    names: [
        {value: "Unquenchable"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 18th anniversary of City of Heroes."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Unquenchable Badge", href: "https://homecoming.wiki/wiki/Unquenchable_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unquenchable.png"}]
};
