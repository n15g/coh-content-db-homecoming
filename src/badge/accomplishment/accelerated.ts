import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Accelerated: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "accelerated",
    setTitleId: 964,
    names: [
        {value: "Accelerated"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Awesome time, but I am sure you can do better!"}
    ],
    acquisition: "Complete a ski run on the Expert slope in under 35 seconds during a Winter Event",
    links: [
        {title: "Accelerated Badge", href: "https://homecoming.wiki/wiki/Accelerated_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-silver.png"}
    ],
};
