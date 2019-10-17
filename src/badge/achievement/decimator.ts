import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Decimator: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "decimator",
    setTitleId: 2358,
    names: [
        {value: "Decimator"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Deal 10,000,000 damage to earn this badge.",
    links: [
        {title: "Decimator Badge", href: "https://paragonwiki.com/wiki/Decimator_Badge"}
    ],
};
