import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GrandGourmet: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "grand-gourmet",
    names: [
        {value: "Grand Gourmet"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reject 500 recipe drops.",
    links: [
        {title: "Grand Gourmet Badge", href: "https://paragonwiki.com/wiki/Grand_Gourmet_Badge"}
    ],
};
