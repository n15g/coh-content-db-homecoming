import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArchitectX: IBadgeData = {
    type: BadgeType.AE,
    key: "architect-x",
    setTitleId: 1235,
    names: [
        {value: "Architect X"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned 10 Mission Architect badges!"}],
    acquisition: "Earn 10 Mission Architect badges to earn this badge.",
    links: [
        {title: "Architect X Badge", href: "https://homecoming.wiki/wiki/Architect_X_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/architect-x.png"}]
};
