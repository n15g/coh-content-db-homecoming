import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Armorer: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "armorer",
    names: [{value: "Armorer"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Defense Buff, Resist Damage, Intangible."}],
    links: [
        {title: "Armorer Badge", href: "https://paragonwiki.com/wiki/Armorer_Badge"}
    ],
    icons: [{value: "core.invention.brain-1"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 7
        }
    ]
};
