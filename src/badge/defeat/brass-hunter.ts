import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BrassHunter: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "brass-hunter",
    setTitleId: 2442,
    names: [
        {value: "Brass Hunter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your ongoing efforts to root out Nemesis' influence have resulted in the destruction of at a least thousand of his Jaegers, and local bars are serving drinks in your honor.`}
    ],
    acquisition: "Defeat 1000 Nemesis Jaegers.",
    links: [
	{title: "Brass Hunter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Brass_Hunter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/brass-hunter.png"}
    ],
};
