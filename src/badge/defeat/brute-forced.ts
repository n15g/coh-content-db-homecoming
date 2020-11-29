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
    acquisition: "Defeat 500 Points worth of Rularuu Brutes (Boss = 5, Others = 1).",
    links: [
	{title: "Brute Forced Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Brute_Forced_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/brute-forced.png"}
    ],
};
