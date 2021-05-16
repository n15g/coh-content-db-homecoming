import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Weaponeer: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "weaponeer",
    setTitleId: 796,
    names: [{value: "Weaponeer"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Damage and Knockback."}],
    links: [
        {title: "Weaponeer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Weaponeer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 6
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 6
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
