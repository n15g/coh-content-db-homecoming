import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Festive: IBadgeData = {
    type: BadgeType.EVENT,
    key: "festive",
    names: [
        {value: "Festive"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You celebrated the winter season during the annual Winter Event."},
    ],
    acquisition: "Log in during the Winter Event.",
    links: [
        {title: "Festive Badge", href: "https://paragonwiki.com/wiki/Festive_Badge"}
    ],
    imageKeys: [{value: "core.event.festive"}]
};
