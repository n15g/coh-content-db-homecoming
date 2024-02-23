import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Coldblooded: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "coldblooded",
    setTitleId: 306,
    names: [
        {type: Alternate.H, value: "Coldblooded"},
        {type: Alternate.V, value: "Coldhearted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You've defeated 100 cold demons, making you Coldblooded."},
        {type: Alternate.V, value: "You've defeated 100 cold demons, making you Coldhearted."}
    ],
    acquisition: "Defeat 100 Circle of Thorns cold demons, including Hordelings, Hellfrosts and Blade Princes",
    links: [
        {title: "Coldblooded Badge", href: "https://homecoming.wiki/wiki/Coldblooded_Badge"},
        {title: "Coldhearted Badge", href: "https://homecoming.wiki/wiki/Coldhearted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/coldblooded.png"}
    ],
};
