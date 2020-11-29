import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WompWomp: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "womp-womp",
    setTitleId: 2440,
    names: [
        {value: "Womp Womp"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
	{value: `Crey's Revenant Hero Project has turned out some formidable foes in your career as a super. But nothing was more unsettling than racking up a count on the immature clones that sometimes get deployed in extreme crises. You try not to think about the fact that Crey has child-sized suits on-hand for them.`}
    ],
    acquisition: "Defeat 100 Immature Paragon Protectors.",
    links: [
	{title: "Womp Womp Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Womp_Womp_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/womp-womp.png"}
    ],
};
