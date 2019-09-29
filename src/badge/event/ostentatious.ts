import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Ostentatious: IBadgeData = {
    type: BadgeType.EVENT,
    key: "ostentatious",
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
        {title: "Ostentatious Badge", href: "https://paragonwiki.com/wiki/Ostentatious_Badge"}
    ],
    imageKeys: [
        {type: Alternate.H, value: "core.event.costume-h"},
        {type: Alternate.V, value: "core.event.costume-v"}
    ]
};
