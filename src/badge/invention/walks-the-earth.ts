import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const WalksTheEarth: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "walks-the-earth",
    setTitleId: 803,
    names: [{value: "Walks the Earth"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Run Speed, Jump, Fly Speed, and Range."}],
    links: [
        {title: "Walks the Earth Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Walks_the_Earth_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.RUN_SPEED, EnhancementCategory.JUMP, EnhancementCategory.FLY_SPEED, EnhancementCategory.RANGE],
            count: 11
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.RUN_SPEED, EnhancementCategory.JUMP, EnhancementCategory.FLY_SPEED, EnhancementCategory.RANGE],
            count: 11
        }
    ]
};
