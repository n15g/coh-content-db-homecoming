import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const ArmsDealer: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "arms-dealer",
    setTitleId: 798,
    names: [{value: "Arms Dealer"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Damage and Knockback."}],
    links: [
        {title: "Arms Dealer Badge", href: "https://paragonwiki.com/wiki/Arms_Dealer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 11
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 11
        }
    ]
};
