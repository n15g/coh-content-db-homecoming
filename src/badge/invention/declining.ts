import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Declining: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "declining",
    names: [{value: "Declining"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Defense Debuff, To Hit Debuff, Taunt, and Confuse."}],
    links: [
        {title: "Declining Badge", href: "https://paragonwiki.com/wiki/Declining_Badge"}
    ],
    icons: [{value: "core.invention.brain-1"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 2
        }
    ]
};
