import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const WentOffScript: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "went-off-script",
    setTitleId: 2436,
    names: [
        {value: "Went Off Script"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
	{value: `You chose to defy your contact and risk the lives of countless innocents to put a firm end to the Vahzilok civil war.`}
    ],
    acquisition: "Refuse to quarantine during The Graveyard Shift story arc.",
    links: [
	{title: "Went Off Script Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Went_Off_Script_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/went-off-script.png"}
    ],
};
