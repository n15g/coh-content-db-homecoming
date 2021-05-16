import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArchitectXXV: IBadgeData = {
    type: BadgeType.AE,
    key: "architect-xxv",
    setTitleId: 1236,
    names: [
        {value: "Architect XXV"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned 25 Mission Architect badges!"}],
    acquisition: "Earn 25 Mission Architect badges to earn this badge.",
    links: [
        {title: "Architect XXV Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Architect_XXV_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/architect-xxv.png"}]
};
