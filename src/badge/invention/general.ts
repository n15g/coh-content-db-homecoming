import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const General: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "general",
    setTitleId: 794,
    names: [{value: "General"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Accuracy and To Hit Buff."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "General Badge", href: "https://homecoming.wiki/wiki/General_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 14
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 14
        }
    ]
};
