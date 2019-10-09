import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Intrepid: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "intrepid",
    names: [
        {value: "Intrepid"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 46 and 50 while the enemies were Buffed."},
    ],
    acquisition: "Complete a level 46-50 Flashback arc with enemies buffed.",
    links: [
        {title: "Intrepid Badge", href: "https://paragonwiki.com/wiki/Intrepid_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/intrepid.png"}]
};
