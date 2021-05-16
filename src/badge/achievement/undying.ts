import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Undying: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "undying",
    setTitleId: 234,
    setTitleIdPraetorian: 1685,
    names: [
        {value: "Undying"},
        {type: Alternate.P, value: "Never Learns"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You can't be certain, but you believe that the possibility exists that you can not die."},
        {
            type: Alternate.P, value: "Surely at some point, you will wake up and think, \"Perhaps today I will stop courting certain " +
                "doom.\" But obviously not today."
        }
    ],
    acquisition: "Pay off 600,000 debt",
    links: [
        {title: "Undying Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Undying_Badge"},
        {title: "Never Learns Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Never_Learns_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png"}
    ],
};
