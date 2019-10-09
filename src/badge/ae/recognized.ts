import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Recognized: IBadgeData = {
    type: BadgeType.AE,
    key: "recognized",
    names: [
        {value: "Recognized"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "Another player has rated an arc that you've published earning you the Recognized badge. This badge is awarded to all characters on your account."}],
    acquisition: "Another player has rated your published arc. (Account-wide)",
    links: [
        {title: "Recognized Badge", href: "https://paragonwiki.com/wiki/Recognized_Badge"}
    ],
    icons: [{value: "core.ae.recognized"}]
};
