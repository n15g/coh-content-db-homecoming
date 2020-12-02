import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PowerLiberator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "power-liberator",
    setTitleId: 375,
    names: [
        {type: Alternate.H, value: "Power Liberator"},
        {type: Alternate.V, value: "Master Thief"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Your success at liberating items from trophy vaults has earned you the title of Power " +
        "Liberator."},
        {type: Alternate.V, value: "There isn't a trophy vault made you can't steal from!"}
    ],
    acquisition: "Complete the Cathedral of Pain Trial and choose the Item of Power reward option.",
    links: [
        {title: "Power Liberator Badge", href: "https://paragonwiki.com/wiki/Power_Liberator_Badge"},
        {title: "Master Thief Badge", href: "https://paragonwiki.com/wiki/Master_Thief_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/power-liberator.png"}
    ],
};