import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Fashionable: IBadgeData = {
    type: BadgeType.EVENT,
    key: "fashionable",
    setTitleId: 839,
    names: [
        {value: "Fashionable"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've collected 25 classic costumes."},
    ],
    acquisition: "Collect 25 costumes during the Halloween event",
    notes: "During the Halloween Event trick or treating occasionally drops Temporary Powers that will let the player dress up as various enemy factions." +
        "\n\nCollect 10 of them for this badge.",
    links: [
        {title: "Fashionable Badge", href: "https://paragonwiki.com/wiki/Fashionable_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-v.png"}
    ]
};
