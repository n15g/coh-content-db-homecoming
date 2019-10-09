import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Despoiler: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "despoiler",
    names: [{value: "Despoiler"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Defense Debuff, To Hit Debuff, Taunt, and Confuse."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Despoiler Badge", href: "https://paragonwiki.com/wiki/Despoiler_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 2
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 2
        }
    ]
};
