import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const TriggerMan: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "trigger-man",
    setTitleId: 785,
    names: [{value: "Trigger Man"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Recharge Rate and Interrupt Time."}],
    links: [
        {title: "Trigger Man Badge", href: "https://homecoming.wiki/wiki/Trigger_Man_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.RECHARGE_REDUCTION, EnhancementCategory.INTERRUPT_DURATION],
            count: 10
        }
    ]
};
