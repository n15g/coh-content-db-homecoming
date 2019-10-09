import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Decaying: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "decaying",
    names: [{value: "Decaying"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Defense Debuff, To Hit Debuff, Taunt, and Confuse."}],
    links: [
        {title: "Decaying Badge", href: "https://paragonwiki.com/wiki/Decaying_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 1
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 1
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
