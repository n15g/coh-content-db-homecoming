import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Reanimator: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "reanimator",
    setTitleId: 769,
    names: [{value: "Reanimator"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Heal."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "Reanimator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Reanimator_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 9
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 9
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
