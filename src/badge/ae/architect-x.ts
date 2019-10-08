import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArchitectX: IBadgeData = {
    type: BadgeType.AE,
    key: "architect-x",
    names: [
        {value: "Architect X"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned 10 Mission Architect badges!"}],
    acquisition: "Earn 10 Mission Architect badges to earn this badge.",
    links: [
        {title: "Architect X Badge", href: "https://paragonwiki.com/wiki/Architect_X_Badge"}
    ],
    imageKeys: [{value: "core.ae.architect-x"}]
};
