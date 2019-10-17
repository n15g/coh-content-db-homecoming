import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Apathetic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "apathetic",
    setTitleId: 2382,
    names: [
        {value: "Apathetic"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reject 500 inspiration drops.",
    links: [
        {title: "Apathetic Badge", href: "https://paragonwiki.com/wiki/Apathetic_Badge"}
    ],
};
