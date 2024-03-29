import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const NaniteMan: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "nanite-man",
    setTitleId: 2196,
    names: [
        {type: Alternate.M, value: "Nanite Man"},
        {type: Alternate.F, value: "Nanite Woman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You played through Max's personal story, witnessing the event where Malta recruited Battle " +
                "Maiden to upgrade their technology with her nanites."
        }
    ],
    acquisition: "Complete the personal story mission from Max",
    links: [
        {title: "Nanite Man Badge", href: "https://homecoming.wiki/wiki/Nanite_Man_Badge"},
        {title: "Nanite Woman Badge", href: "https://homecoming.wiki/wiki/Nanite_Woman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-parc.png"}
    ],
};
