import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const HitMan: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "hit-man",
    setTitleId: 787,
    names: [{value: "Hit-Man"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Recharge Rate and Interrupt Time."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Hit-Man Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hit-Man_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 8
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 8
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
