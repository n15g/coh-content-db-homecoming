import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const BatteryPowered: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "battery-powered",
    setTitleId: 781,
    names: [{value: "Battery Powered"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 15 and 20: Endurance Modification and Endurance Reduction."}],
    links: [
        {title: "Battery Powered Badge", href: "https://homecoming.wiki/wiki/Battery_Powered_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 15,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 6
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 20,
            inventionTypes: [EnhancementCategory.ENDURANCE_MODIFICATION, EnhancementCategory.ENDURANCE_REDUCTION],
            count: 6
        }
    ]
};
