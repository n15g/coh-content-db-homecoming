import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const MajorGeneral: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "major-general",
    names: [{value: "Major General"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Accuracy and To Hit Buff."}],
    links: [
        {title: "Major General Badge", href: "https://paragonwiki.com/wiki/Major_General_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-4"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 11
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 11
        }
    ]
};
