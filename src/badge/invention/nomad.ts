import {ALIGNMENT_ANY, BadgePartialType, BadgeType, EnhancementCategory, IBadgeData} from "coh-content-db";

export const Nomad: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "nomad",
    setTitleId: 804,
    names: [{value: "Nomad"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have memorized the following recipes at level 45 and 50: Run Speed, Jump, Fly Speed, and Range."}],
    effect: "+1 to Recipe capacity",
    links: [
        {title: "Nomad Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Nomad_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png"}],
    partials: [
        {
            key: "a",
            type: BadgePartialType.INVENTION,
            inventionLevel: 45,
            inventionTypes: [EnhancementCategory.RUN_SPEED, EnhancementCategory.JUMP, EnhancementCategory.FLY_SPEED, EnhancementCategory.RANGE],
            count: 14
        },
        {
            key: "b",
            type: BadgePartialType.INVENTION,
            inventionLevel: 50,
            inventionTypes: [EnhancementCategory.RUN_SPEED, EnhancementCategory.JUMP, EnhancementCategory.FLY_SPEED, EnhancementCategory.RANGE],
            count: 14
        }
    ]
};
