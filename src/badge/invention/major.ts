import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Major: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "Major",
    names: [{value: "Major"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Accuracy and To Hit Buff."}],
    links: [
        {title: "Major Badge", href: "https://paragonwiki.com/wiki/Major_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-1"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 10
        }
    ]
};
