import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Pilgrim: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "pilgrim",
    setTitleId: 800,
    names: [{value: "Pilgrim"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Run Speed, Jump, Fly Speed, and Range."}],
    links: [
        {title: "Pilgrim Badge", href: "https://homecoming.wiki/wiki/Pilgrim_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.RUN_SPEED, EnhancementCategory.JUMP, EnhancementCategory.FLY_SPEED, EnhancementCategory.RANGE],
            count: 10
        }
    ]
};
