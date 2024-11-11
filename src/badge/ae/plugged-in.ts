import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PluggedIn: IBadgeData = {
    type: BadgeType.AE,
    key: "plugged-in",
    setTitleId: 1235,
    names: [
        {value: "Plugged In"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned 10 Mission Architect badges!"}],
    acquisition: "Earn 10 Mission Architect badges.",
    links: [
        {title: "Plugged In Badge", href: "https://homecoming.wiki/wiki/Plugged_In_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/plugged-in.png"}]
};
