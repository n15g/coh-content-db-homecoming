import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Workaholic: IBadgeData = {
    type: BadgeType.AE,
    key: "workaholic",
    setTitleId: 1314,
    names: [
        {value: "Workaholic"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've completed your first non-required mission objective in a Architect mission. Other heroes consider you a Workaholic.`},
        {type: Alternate.V, value: `You've completed your first non-required mission objective in a Architect mission. Other villains consider you a Workaholic.`}
    ],
    acquisition: "Earn this badge by completing one non-required mission objective in an Architect mission.",
    links: [
        {title: "Workaholic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Workaholic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/workaholic.png"}]
};
