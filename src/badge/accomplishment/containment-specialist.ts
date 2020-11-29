import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ContainmentSpecialist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "containment-specialist",
    setTitleId: 2434,
    names: [
        {value: "Containment Specialist"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
	{value: `Under extreme pressure, you were cool in a crisis. With only five minutes in a warehouse engulfed in flames, you were able to disable the rigged sprinklers before the situation became a national tragedy.`}
    ],
    acquisition: "Turn off the sprinklers before the timer runs out during The Graveyard Shift story arc.",
    links: [
	{title: "Containment Specialist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Containment_Specialist_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/containment-specialist.png"}
    ],
};
