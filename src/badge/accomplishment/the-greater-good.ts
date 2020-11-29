import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TheGreaterGood: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-greater-good",
    setTitleId: 2435,
    names: [
        {value: "The Greater Good"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
	{value: `You chose to sit tight and quarantine yourself, rather than jeopardize Paragon with the diseases from Pathogen's warehouse.`}
    ],
    acquisition: "Quarantine during The Graveyard Shift story arc.",
    links: [
	{title: "The Greater Good Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Greater_Good_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-greater-good.png"}
    ],
};
