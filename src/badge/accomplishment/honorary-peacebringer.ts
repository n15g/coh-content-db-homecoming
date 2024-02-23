import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const HonoraryPeacebringer: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "honorary-peacebringer",
    setTitleId: 412,
    names: [
        {type: Alternate.H, value: "Honorary Peacebringer"},
        {type: Alternate.V, value: "Alien Fighter"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have stopped the Council's plan to infect the populace with Nictus aliens."}
    ],
    acquisition: "Complete the Moonfire Task Force: The Kheldian War",
    links: [
        {title: "Honorary Peacebringer Badge", href: "https://homecoming.wiki/wiki/Honorary_Peacebringer_Badge"},
        {title: "Alien Fighter Badge", href: "https://homecoming.wiki/wiki/Alien_Fighter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/honorary-peacebringer.png"}
    ],
};
