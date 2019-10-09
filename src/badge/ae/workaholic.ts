import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Workaholic: IBadgeData = {
    type: BadgeType.AE,
    key: "workaholic",
    names: [
        {value: "Workaholic"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've completed your first non-required mission objective in a Architect mission. Other heroes consider you a Workaholic."}],
    acquisition: "Earn this badge by completing one non-required mission objective in an Architect mission.",
    links: [
        {title: "Workaholic Badge", href: "https://paragonwiki.com/wiki/Workaholic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/workaholic.png"}]
};
