import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArchitectXXV: IBadgeData = {
    type: BadgeType.AE,
    key: "mission-seeker",
    setTitleId: 1236,
    names: [
        {value: "Mission Seeker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned 25 Mission Architect badges!"}],
    acquisition: "Earn 25 Mission Architect badges to earn this badge.",
    links: [
        {title: "Mission Seeker Badge", href: "https://homecoming.wiki/wiki/Mission_Seeker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/mission-seeker.png"}]
};
