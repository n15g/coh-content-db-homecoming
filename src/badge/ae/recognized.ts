import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Recognized: IBadgeData = {
    type: BadgeType.AE,
    key: "recognized",
    setTitleId: 1304,
    names: [
        {value: "Recognized"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "Another player has rated an arc that you've published earning you the Recognized badge. This badge is awarded to all characters on your account."}],
    acquisition: "Another player has rated your published arc. (Account-wide)",
    links: [
        {title: "Recognized Badge", href: "https://homecoming.wiki/wiki/Recognized_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/recognized.png"}]
};
