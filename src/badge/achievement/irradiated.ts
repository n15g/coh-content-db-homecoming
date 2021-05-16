import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Irradiated: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "irradiated",
    setTitleId: 401,
    names: [
        {value: "Irradiated"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've basked for more than one hour in the weird radiation of Bloody Bay."}
    ],
    acquisition: "Spend 1 hour in Bloody Bay",
    links: [
        {title: "Irradiated Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Irradiated_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png"}
    ],
};
