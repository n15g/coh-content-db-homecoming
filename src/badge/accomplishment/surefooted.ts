import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Surefooted: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "surefooted",
    setTitleId: 1060,
    names: [
        {value: "Surefooted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have taken the bronze medal in the advanced ski course!  Now try for the silver."}
    ],
    acquisition: "Complete a ski run on the Advanced slope in under 1 minute and 10 seconds during a Winter Event",
    links: [
        {title: "Surefooted Badge", href: "https://homecoming.wiki/wiki/Surefooted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-bronze.png"}
    ],
};
