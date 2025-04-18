import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Cheers: IBadgeData = {
    type: BadgeType.EVENT,
    key: "cheers",
    setTitleId: 2552,
    names: [
        {value: "Cheers!"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have helped celebrate the 21st anniversary of City of Heroes.`},
    ],
    acquisition: `Awarded upon login during May 2025, and thereafter available for purchase from Luna in ${zoneLink(Ouroboros)} during the anniversary event in May.`,
    links: [
        {title: "Cheers! Badge", href: "https://homecoming.wiki/wiki/Cheers_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cheers.png"}]
};