import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const IronChef: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "iron-chef",
    names: [
        {value: "Iron Chef"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reject 1000 recipe drops.",
    links: [
        {title: "Iron Chef Badge", href: "https://paragonwiki.com/wiki/Iron_Chef_Badge"}
    ],
};
