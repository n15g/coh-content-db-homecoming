import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Armorer: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "armorer",
    setTitleId: 770,
    names: [{value: "Armorer"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Defense Buff, Resist Damage, Intangible."}],
    links: [
        {title: "Armorer Badge", href: "https://homecoming.wiki/wiki/Armorer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 7
        }
    ]
};
