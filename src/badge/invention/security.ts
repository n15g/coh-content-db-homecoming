import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Security: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "security",
    setTitleId: 773,
    names: [{value: "Security"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Defense Buff, Resist Damage, Intangible."}],
    links: [
        {title: "Security Badge", href: "https://homecoming.wiki/wiki/Security_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 7
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 7
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
