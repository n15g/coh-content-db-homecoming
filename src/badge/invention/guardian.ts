import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Guardian: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "guardian",
    setTitleId: 771,
    names: [{value: "Guardian"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Defense Buff, Resist Damage, Intangible."}],
    links: [
        {title: "Guardian Badge", href: "https://paragonwiki.com/wiki/Guardian_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 4
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 4
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
