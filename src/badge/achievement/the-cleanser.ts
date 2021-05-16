import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TheCleanser: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "the-cleanser",
    setTitleId: 2022,
    names: [
        {value: "The Cleanser"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You defeated all of the Lost worshippers before tackling their leader, ensuring he had no " +
                "followers to fuel his power."
        }
    ],
    acquisition: "Defeat all the Lost Worshippers in the Death from Below Sewer Trial before defeating the Lost Leader",
    links: [
        {title: "The Cleanser Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Cleanser_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sewer-trial.png"}
    ],
};
