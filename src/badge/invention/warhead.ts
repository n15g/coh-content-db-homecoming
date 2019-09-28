import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Warhead: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "warhead",
    names: [{value: "Warhead"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Damage and Knockback."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Warhead Badge", href: "https://paragonwiki.com/wiki/Warhead_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-3"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 8
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 8
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
