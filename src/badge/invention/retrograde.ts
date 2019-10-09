import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Retrograde: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "retrograde",
    names: [{value: "Retrograde"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Defense Debuff, To Hit Debuff, Taunt, and Confuse."}],
    links: [
        {title: "Retrograde Badge", href: "https://paragonwiki.com/wiki/Retrograde_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 3
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 3
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
