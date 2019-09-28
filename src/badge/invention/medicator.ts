import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Medicator: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "medicator",
    names: [{value: "Medicator"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Heal."}],
    links: [
        {title: "Medicator Badge", href: "https://paragonwiki.com/wiki/Medicator_Badge"}
    ],
    imageKeys: [{value: "core.invention.brain-1"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 7
        }
    ]
};
