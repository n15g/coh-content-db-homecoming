import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const LtColonel: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "lt-colonel",
    setTitleId: 791,
    names: [{value: "Lt. Colonel"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Accuracy and To Hit Buff."}],
    links: [
        {title: "Lt. Colonel Badge", href: "https://paragonwiki.com/wiki/Lt._Colonel_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 6
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 6
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
