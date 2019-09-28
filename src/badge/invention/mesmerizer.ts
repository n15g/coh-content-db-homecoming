import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Mesmerizer: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "mesmerizer",
    names: [{value: "Mesmerizer"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Sleep, Snare, Hold, Stun, Immobilize, and Fear."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "Mesmerizer Badge", href: "https://paragonwiki.com/wiki/Mesmerizer_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-5"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 11
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 11
        }
    ]
};
