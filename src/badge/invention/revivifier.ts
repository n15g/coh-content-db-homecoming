import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Revivifier: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "revivifier",
    setTitleId: 768,
    names: [{value: "Revivifier"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 35 and 40: Heal."}],
    links: [
        {title: "Revivifier Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Revivifier_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 35,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 7
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 40,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 7
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
