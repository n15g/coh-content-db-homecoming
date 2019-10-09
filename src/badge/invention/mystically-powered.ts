import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const MysticallyPowered: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "mystically-powered",
    names: [{value: "Mystically Powered"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Endurance Modification and Endurance Reduction."}],
    links: [
        {title: "Mystically Powered Badge", href: "https://paragonwiki.com/wiki/Mystically_Powered_Badge"}
    ],
    icons: [{value: "core.invention.brain-4"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 9
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 9
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
