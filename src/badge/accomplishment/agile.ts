import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Agile: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "agile",
    setTitleId: 1059,
    names: [
        {value: "Agile"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have taken the silver medal in the advanced ski course!  Now try for the gold."}
    ],
    acquisition: "Complete a ski run on the Advanced slope in under 1 minute during a Winter Event",
    links: [
        {title: "Agile Badge", href: "https://homecoming.wiki/wiki/Agile_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-silver.png"}
    ],
};
