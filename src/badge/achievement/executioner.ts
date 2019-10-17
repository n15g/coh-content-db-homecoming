import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Executioner: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "executioner",
    setTitleId: 2346,
    names: [
        {value: "Executioner"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Deal 25,000,000 damage to earn this badge.",
    links: [
        {title: "Executioner Badge", href: "https://paragonwiki.com/wiki/Executioner_Badge"}
    ],
};
