import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheMarketCrash: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-market-crash",
    setTitleId: 2491,
    names: [
        {value: "Master of the Market Crash"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have proven yourself Master of the Market Crash Trial.`}
    ],
    acquisition: `Complete the Master of the Market Crash challenge (no deaths, no temp powers, no incarnate powers)`,
    links: [
        {title: "Master of the Market Crash Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_the_Market_Crash_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-market-crash.png"}
    ],
};