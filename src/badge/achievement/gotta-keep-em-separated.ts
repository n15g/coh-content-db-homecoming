import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GottaKeepEmSeparated: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "gotta-keep-em-separated",
    setTitleId: 1977,
    names: [
        {value: "Gotta Keep 'Em Separated"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Siege and Nightstar usually fight as a duo, but you decided to divide and conquer, defeating " +
        "them in the Behavioral Adjustment Facility where they stood."}
    ],
    acquisition: "Defeat Siege & Nightstar without moving them from their initial locations during a Behavioral Adjustment Facility Incarnate Trial",
    links: [
        {title: "Gotta Keep 'Em Separated Badge", href: "https://paragonwiki.com/wiki/Gotta_Keep_%27Em_Separated_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-baf.png"}
    ],
};