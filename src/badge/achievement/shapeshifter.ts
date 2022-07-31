import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Shapeshifter: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "shapeshifter",
    setTitleId: 2502,
    names: [
        {value: "Shapeshifter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've purchased ten costume powers using the Prismatic Aether you amassed from overcoming an enormous number of challenges.`}
    ],
    acquisition: `Use Prismatic Aether salvage to purchase a total of ten permanent costume power from BenevoLabs vendors in any Vault Reserve location`,
    links: [
        {title: "Shapeshifter Badge", href: "https://homecoming.wiki/wiki/Shapeshifter_Badge"}
    ],
	icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/shapeshifter.png"}
	],
};