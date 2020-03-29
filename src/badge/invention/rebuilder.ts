import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Rebuilder: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "rebuilder",
    setTitleId: 767,
    names: [{value: "Rebuilder"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 25 and 30: Heal."}],
    effect: "+2 to Invention Salvage capacity",
    links: [
        {title: "Rebuilder Badge", href: "https://paragonwiki.com/wiki/Rebuilder_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 25,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 6
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 30,
            inventionTypes: [EnhancementCategory.HEALING],
            count: 6
        }
    ]
};
