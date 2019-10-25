import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HunterOfSpecters: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "hunter-of-specters",
    setTitleId: 2191,
    names: [
        {value: "Hunter of Specters"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You worked together with Praetor Duncan to put an end to Diabolique, who was discovered to be " +
        "working together with Mot."}
    ],
    acquisition: "Complete the story arc from Praetor Duncan",
    links: [
        {title: "Hunter of Specters Badge", href: "https://paragonwiki.com/wiki/Hunter_of_Specters_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png"}
    ],
};