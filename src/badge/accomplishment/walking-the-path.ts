import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WalkingThePath: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "walking-the-path",
    setTitleId: 1424,
    names: [
        {value: "Walking the Path"}
    ],
    alignment: ALIGNMENT_ANY,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_align_mission.png"}],
    badgeText: [
        {
            value: "You strove for what you believe in and, against all odds, came out on top. You've earned the " +
                "Walking the Path badge by completing your first Alignment Mission."
        }
    ],
    acquisition: "Complete an Alignment mission",
    links: [
        {title: "Walking the Path Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Walking_the_Path_Badge"}
    ]
};
