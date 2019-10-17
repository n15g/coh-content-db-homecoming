import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Pickpocket: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "pickpocket",
    setTitleId: 2363,
    names: [
        {value: "Pickpocket"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Not content with grabbing a few mementos in the course of your adventures, you've started " +
        "going through the pockets of your defeated foes for souvenirs."}
    ],
    acquisition: "Colllect 25 Souvenirs",
    links: [
        {title: "Pickpocket Badge", href: "https://paragonwiki.com/wiki/Pickpocket_Badge"}
    ],
};
