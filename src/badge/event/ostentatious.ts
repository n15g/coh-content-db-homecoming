import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Ostentatious: IBadgeData = {
    type: BadgeType.EVENT,
    key: "ostentatious",
    setTitleId: 840,
    names: [
        {value: "Ostentatious"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've collected 50 classic costumes."},
    ],
    acquisition: "Collect 50 costumes during the Halloween event",
    notes: "During the Halloween Event trick or treating occasionally drops Temporary Powers that will let the player dress up as various enemy factions." +
        "\n\nCollect 10 of them for this badge.",
    links: [
        {title: "Ostentatious Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ostentatious_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-v.png"}
    ]
};
