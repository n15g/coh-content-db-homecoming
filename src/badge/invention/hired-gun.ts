import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const HiredGun: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "hired-gun",
    setTitleId: 786,
    names: [{value: "Hired Gun"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Recharge Rate and Interrupt Time."}],
    links: [
        {title: "Hired Gun Badge", href: "https://paragonwiki.com/wiki/Hired_Gun_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 6
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 6
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
