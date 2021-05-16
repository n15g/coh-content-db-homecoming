import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const RiptidesComrade: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "riptides-comrade",
    setTitleId: 2265,
    names: [
        {value: "Riptide's Comrade"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You were able to prevent Riptide from being defeated while he was fighting Nosferatu by " +
                "himself."
        }
    ],
    acquisition: "Complete all objectives in the second mission of the third story arc from Provost Marchand before Riptide is defeated",
    links: [
        {title: "Riptide's Comrade Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Riptide%27s_Comrade_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png"}
    ],
};
