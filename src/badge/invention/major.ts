import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Major: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "major",
    setTitleId: 790,
    names: [{value: "Major"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 10: Accuracy and To Hit Buff."}],
    links: [
        {title: "Major Badge", href: "https://homecoming.wiki/wiki/Major_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 10,
            inventionTypes: [EnhancementCategory.ACCURACY, EnhancementCategory.TO_HIT_BUFF],
            count: 10
        }
    ]
};
