import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WatchesTheWatchers: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "watches-the-watchers",
    setTitleId: 2213,
    names: [
        {value: "Watches the Watchers"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Though they fought valiantly, even the watchkeepers of the Eternal Prison were no match for " +
        "your might. You cleaved your way through a legion of Black Knights to earn this badge."}
    ],
    acquisition: "Defeat 100 points worth of The Black Knights",
    links: [
        {title: "Watches the Watchers Badge", href: "https://paragonwiki.com/wiki/Watches_the_Watchers_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/watches-the-watchers.png"}
    ],
};