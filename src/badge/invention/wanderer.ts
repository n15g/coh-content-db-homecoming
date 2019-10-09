import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Wanderer: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "wanderer",
    names: [{value: "Wanderer"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Run Speed, Jump, Fly Speed, and Range."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Wanderer Badge", href: "https://paragonwiki.com/wiki/Wanderer_Badge"}
    ],
    icons: [{value: "core.invention.brain-3"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.RUN_SPEED, EnhancementCategory.JUMP, EnhancementCategory.FLY_SPEED, EnhancementCategory.RANGE],
            count: 8
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.RUN_SPEED, EnhancementCategory.JUMP, EnhancementCategory.FLY_SPEED, EnhancementCategory.RANGE],
            count: 8
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
