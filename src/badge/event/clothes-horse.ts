import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ClothesHorse: IBadgeData = {
    type: BadgeType.EVENT,
    key: "clothes-horse",
    setTitleId: 838,
    names: [
        {value: "Clothes Horse"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've collected 10 classic costumes."},
    ],
    acquisition: "Collect 10 costumes during the Halloween event",
    notes: "During the Halloween Event trick or treating occasionally drops Temporary Powers that will let the player dress up as various enemy factions." +
        "\n\nCollect 10 of them for this badge.",
    links: [
        {title: "Clothes Horse Badge", href: "https://homecoming.wiki/wiki/Clothes_Horse_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-v.png"}
    ]
};
