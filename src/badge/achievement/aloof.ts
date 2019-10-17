import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Aloof: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "aloof",
    setTitleId: 2380,
    names: [
        {value: "Aloof"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Word of your accomplishments is spreading, but you don't seem to care much about it."}
    ],
    acquisition: "Reject 50 inspiration drops.",
    links: [
        {title: "Aloof Badge", href: "https://paragonwiki.com/wiki/Aloof_Badge"}
    ],
};
