import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Munitionist: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "munitionist",
    names: [{value: "Munitionist"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Damage and Knockback."}],
    links: [
        {title: "Munitionist Badge", href: "https://paragonwiki.com/wiki/Munitionist_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-1"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 10
        }
    ]
};
