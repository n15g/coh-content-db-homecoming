import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Munitionist: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "munitionist",
    setTitleId: 795,
    names: [{value: "Munitionist"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Damage and Knockback."}],
    links: [
        {title: "Munitionist Badge", href: "https://homecoming.wiki/wiki/Munitionist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.DAMAGE, EnhancementCategory.KNOCKBACK],
            count: 10
        }
    ]
};
