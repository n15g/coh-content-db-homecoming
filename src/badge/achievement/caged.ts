import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Caged: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "caged",
    setTitleId: 240,
    setTitleIdPraetorian: 1697,
    names: [
        {value: "Caged"},
        {type: Alternate.P, value: "Can't Do That"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "In your efforts to be a perfect statue, your skills are unmatched."},
        {
            type: Alternate.P, value: "For most, each day brings a million new things they can do. In your case, it seems to be the " +
                "opposite."
        }
    ],
    acquisition: "Be held for 6 hours",
    links: [
        {title: "Caged Badge", href: "https://homecoming.wiki/wiki/Caged_Badge"},
        {title: "Can't Do That Badge", href: "https://homecoming.wiki/wiki/Can%27t_Do_That_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png"}
    ],
};
