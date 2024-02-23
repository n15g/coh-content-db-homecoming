import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const MedicineMan: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "medicine-man",
    setTitleId: 237,
    setTitleIdPraetorian: 1691,
    names: [
        {type: Alternate.M, value: "Medicine Man"},
        {type: Alternate.F, value: "Medicine Woman"},
        {type: Alternate.P, value: "Savior"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have helped your fellow heroes by healing them for five million hit points."},
        {
            type: Alternate.P, value: "You might demur from the title of \"Savior\" for your healing prowess, but then again, yes, yes " +
                "it seems to fit."
        }
    ],
    acquisition: "Heal others for 5,000,000 hit points",
    links: [
        {title: "Medicine Man Badge", href: "https://homecoming.wiki/wiki/Medicine_Man_Badge"},
        {title: "Medicine Woman Badge", href: "https://homecoming.wiki/wiki/Medicine_Woman_Badge"},
        {title: "Savior Badge", href: "https://homecoming.wiki/wiki/Savior_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png"}
    ],
};
