import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Festive: IBadgeData = {
    type: BadgeType.EVENT,
    key: "festive",
    setTitleId: 1376,
    names: [
        {value: "Festive"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You celebrated the winter season during the annual Winter Event."},
    ],
    acquisition: "Log in during the Winter Event.",
    links: [
        {title: "Festive Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Festive_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/festive.png"}]
};
