import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Pickpocket: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "pickpocket",
    setTitleId: 2363,
    names: [
        {value: "Pickpocket"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pickpocket.png"}],
    badgeText: [
        {
            value: "Not content with grabbing a few mementos in the course of your adventures, you've started " +
                "going through the pockets of your defeated foes for souvenirs."
        }
    ],
    acquisition: "Collect 25 Souvenirs",
    links: [
        {title: "Pickpocket Badge", href: "https://homecoming.wiki/wiki/Pickpocket_Badge"}
    ],
};
