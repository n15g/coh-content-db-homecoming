import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Declining: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "declining",
    setTitleId: 760,
    names: [{value: "Declining"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Defense Debuff, To Hit Debuff, Taunt, and Confuse."}],
    links: [
        {title: "Declining Badge", href: "https://homecoming.wiki/wiki/Declining_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.DEFENSE_DEBUFF, EnhancementCategory.TO_HIT_DEBUFF, EnhancementCategory.TAUNT, EnhancementCategory.CONFUSE],
            count: 2
        }
    ]
};
