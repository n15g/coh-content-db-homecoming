import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gardener: IBadgeData = {
    type: BadgeType.EVENT,
    key: "gardener",
    setTitleId: 2526,
    names: [
        {value: "Gardener"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've relived the past by defeating 25 of the old school Circle of Thorns found during the City of Heroes Anniversary Event."},
    ],
    acquisition: "Defeat 25 old school Circle of Thorns spawned from time capsules during the anniversary event.",
    links: [
        {title: "Gardener Badge", href: "https://homecoming.wiki/wiki/Gardener_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gardener.png"}]
};