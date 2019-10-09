import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Blinding: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "blinding",
    names: [{value: "Blinding"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Sleep, Snare, Hold, Stun, Immobilize, and Fear."}],
    links: [
        {title: "Blinding Badge", href: "https://paragonwiki.com/wiki/Blinding_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.SLEEP, EnhancementCategory.SLOW, EnhancementCategory.HOLD, EnhancementCategory.STUN, EnhancementCategory.IMMOBILIZE, EnhancementCategory.FEAR],
            count: 8
        }
    ]
};
