import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArchitectXXV: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "architect-xxv",
    names: [
        {value: "Architect XXV"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned 25 Mission Architect badges!"}],
    acquisition: "Earn 25 Mission Architect badges to earn this badge.",
    links: [
        {title: "Architect XXV Badge", href: "https://paragonwiki.com/wiki/Architect_XXV_Badge"}
    ],
    imageKeys: [{value: "core.ae.architect-xxv"}]
};
