import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Defensive: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "defensive",
    setTitleId: 774,
    names: [{value: "Defensive"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Defense Buff, Resist Damage, Intangible."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "Defensive Badge", href: "https://homecoming.wiki/wiki/Defensive_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 9
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.DEFENSE_BUFF, EnhancementCategory.RESIST_DAMAGE, EnhancementCategory.INTANGIBILITY],
            count: 9
        },
        {key: "c", type: BadgePartialType.INVENTION_PLUS_ONE}
    ]
};
