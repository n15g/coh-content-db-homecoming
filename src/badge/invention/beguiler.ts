import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Beguiler: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "beguiler",
    setTitleId: 776,
    names: [{value: "Beguiler"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Sleep, Snare, Hold, Stun, Immobilize, and Fear."}],
    links: [
        {title: "Beguiler Badge", href: "https://paragonwiki.com/wiki/Guardian_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 5
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 5
        }
    ]
};
