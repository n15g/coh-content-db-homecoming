import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const EnergyConservationist: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "energy-conservationist",
    setTitleId: 780,
    names: [{value: "Energy Conservationist"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Endurance Modification and Endurance Reduction."}],
    links: [
        {title: "Energy Conservationist Badge", href: "https://paragonwiki.com/wiki/Energy_Conservationist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 9
        }
    ]
};
