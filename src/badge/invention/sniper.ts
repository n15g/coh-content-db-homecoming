import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Sniper: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "sniper",
    names: [{value: "Sniper"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Recharge Rate and Interrupt Time."}],
    links: [
        {title: "Sniper Badge", href: "https://paragonwiki.com/wiki/Sniper_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 11
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 11
        }
    ]
};
