import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Charming: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "charming",
    setTitleId: 777,
    names: [{value: "Charming"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Sleep, Snare, Hold, Stun, Immobilize, and Fear."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Charming Badge", href: "https://paragonwiki.com/wiki/Charming_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 6
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 6
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
