import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Initiate: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "initiate",
    setTitleId: 1448,
    names: [
        {value: "Initiate"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've crafted your first Common Incarnate Ability earning yourself this badge."}
    ],
    acquisition: "Craft a common Incarnate Ability",
    links: [
        {title: "Initiate Badge", href: "https://homecoming.wiki/wiki/Initiate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/initiate.png"}
    ],
};
