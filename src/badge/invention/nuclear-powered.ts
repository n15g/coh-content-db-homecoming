import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const NuclearPowered: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "nuclear-powered",
    names: [{value: "Nuclear Powered"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Endurance Modification and Endurance Reduction."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Nuclear Powered Badge", href: "https://paragonwiki.com/wiki/Nuclear_Powered_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-3"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 7
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 7
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
