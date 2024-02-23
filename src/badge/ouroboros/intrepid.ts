import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Intrepid: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "intrepid",
    setTitleId: 885,
    names: [
        {value: "Intrepid"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 46 and 50 while the enemies were Buffed.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 46 and 50 while the enemies were Buffed.`}
    ],
    acquisition: "Complete a level 46-50 Flashback story arc with enemies buffed.",
    links: [
        {title: "Intrepid Badge", href: "https://homecoming.wiki/wiki/Intrepid_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/intrepid.png"}]
};
