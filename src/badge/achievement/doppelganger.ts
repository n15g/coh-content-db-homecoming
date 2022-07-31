import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Doppelganger: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "doppelganger",
    setTitleId: 2501,
    names: [
        {value: "Doppelganger"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've purchased five permanent costume powers using the Prismatic Aether you assembled from overcoming many challenges.`}
    ],
    acquisition: `Use Prismatic Aether salvage to purchase a total of five permanent costume power from BenevoLabs vendors in any Vault Reserve location`,
    links: [
        {title: "Doppelganger Badge", href: "https://homecoming.wiki/wiki/Doppelganger_Badge"}
    ],
	icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/doppelganger.png"}
	],
};