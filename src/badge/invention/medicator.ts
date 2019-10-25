import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Medicator: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "medicator",
    setTitleId: 765,
    names: [{value: "Medicator"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Heal."}],
    links: [
        {title: "Medicator Badge", href: "https://paragonwiki.com/wiki/Medicator_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
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
