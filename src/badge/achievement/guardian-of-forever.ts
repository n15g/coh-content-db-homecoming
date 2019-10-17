import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GuardianOfForever: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "guardian-of-forever",
    setTitleId: 2390,
    names: [
        {value: "Guardian of Forever"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Recruit a new member into Ouroboros.",
    links: [
        {title: "Guardian of Forever Badge", href: "https://paragonwiki.com/wiki/Guardian_of_Forever_Badge"}
    ],
};
