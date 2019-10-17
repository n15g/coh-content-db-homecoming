import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AlphaStruck: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "alpha-struck",
    setTitleId: 1938,
    names: [
        {value: "Alpha Struck"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You took the fight to the Praetorians and stopped their plans for a large-scale invasion into " +
        "the heart of Atlas Park and Grandville!"}
    ],
    acquisition: "Complete the Tin Mage Task Force",
    links: [
        {title: "Alpha Struck Badge", href: "https://paragonwiki.com/wiki/Alpha_Struck_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/alpha-struck.png"}
    ],
};