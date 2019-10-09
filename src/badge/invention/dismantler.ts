import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Dismantler: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "dismantler",
    names: [{value: "Dismantler"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Defense Debuff, To Hit Debuff, Taunt, and Confuse."}],
    links: [
        {title: "Dismantler Badge", href: "https://paragonwiki.com/wiki/Dismantler_Badge"}
    ],
    icons: [{value: "core.invention.brain-4"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 2
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 2
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
