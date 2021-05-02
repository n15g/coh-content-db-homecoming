import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Legendary: IBadgeData = {
    type: BadgeType.EVENT,
    key: "legendary",
    setTitleId: 2460,
    names: [
        {value: "Legendary"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped celebrate the 17th anniversary of City of Heroes."},
    ],
    acquisition: "Available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Legendary Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Legendary_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/legendary.png"}]
};
