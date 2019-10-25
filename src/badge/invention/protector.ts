import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Protector: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "protector",
    setTitleId: 772,
    names: [{value: "Protector"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Defense Buff, Resist Damage, Intangible."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Protector Badge", href: "https://paragonwiki.com/wiki/Protector_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 6
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 6
        }
    ]
};
