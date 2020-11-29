import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GreenMachine: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "green-machine",
    setTitleId: 2443,
    names: [
        {value: "Green Machine"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
	{value: `You have gone above and beyond to obliterate the Warhulks of the Nemesis army, keeping the streets safe from their steam-powered terror. Amongst the Nemesis Army, you are often deemed 'Unpopular When Irritated'.`}
    ],
    acquisition: "Defeat 100 Nemesis Warhulks.",
    links: [
	{title: "Green Machine Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Green_Machine_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/green-machine.png"}
    ],
};
