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
    acquisition: "Log in during May 2022 anniversary event, and subsequently available for purchase from Luna in Ouroboros during the anniversary event in May.",
    links: [
        {title: "Unquenchable Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Unquenchable_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unquenchable.png"}]
};
