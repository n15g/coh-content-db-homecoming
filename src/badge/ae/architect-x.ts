import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArchitectX: IBadgeData = {
    type: BadgeType.AE,
    key: "architect-x",
    setTitleId: 1235,
    names: [
        {value: "Plugged In"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned 10 Mission Architect badges!"}],
    acquisition: "Earn 10 Mission Architect badges to earn this badge.",
    links: [
        {title: "Plugged In Badge", href: "https://homecoming.wiki/wiki/Plugged_In_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/architect-x.png"}]
};
