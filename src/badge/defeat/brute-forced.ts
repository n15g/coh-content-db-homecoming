import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BruteForced: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "brute-forced",
    setTitleId: 2445,
    names: [
        {value: "Brute Forced"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have brought eternal dishonor to Rularuu's Brutes by besting them in combat and tearing out their gems.`}
    ],
    acquisition: "Defeat 500 points worth of Rularuu Brutes (Brute and Noble Brute are worth 1 point, Honored Brute are worth 5 points).",
    links: [
        {title: "Brute Forced Badge", href: "https://homecoming.wiki/wiki/Brute_Forced_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/brute-forced.png"}
    ],
};
