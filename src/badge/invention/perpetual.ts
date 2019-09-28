import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Perpetual: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "perpetual",
    names: [{value: "Perpetual"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Endurance Modification and Endurance Reduction."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "Perpetual Badge", href: "https://paragonwiki.com/wiki/Perpetual_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-5"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 12
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 12
        }
    ]
};
