import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const RunningOnEmpty: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "running-on-empty",
    setTitleId: 2441,
    names: [
        {value: "Running on Empty"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
	{value: `You have seen to it that Malta knows their Sapper soldiers are effective and notorious, with how often you have personally targeted their ranks on sight.`}
    ],
    acquisition: "Defeat 200 Malta Sappers.",
    links: [
	{title: "Running on Empty Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Running_on_Empty_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/running-on-empty.png"}
    ],
};
