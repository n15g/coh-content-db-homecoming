import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Cataclysmic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "cataclysmic",
    names: [
        {value: "Cataclysmic"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Deal 100,000,000 damage to earn this badge.",
    links: [
        {title: "Cataclysmic Badge", href: "https://paragonwiki.com/wiki/Cataclysmic_Badge"}
    ],
};
