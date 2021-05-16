import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const PendragonsAlly: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pendragons-ally",
    setTitleId: 2264,
    names: [
        {value: "Pendragon's Ally"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You were able to keep Pendragon from being defeated while he was fighting Maestro by himself."}
    ],
    acquisition: "Complete all objectives in the first mission of the third story arc from Provost Marchand before Pendragon is defeated",
    links: [
        {title: "Pendragon's Ally Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Pendragon%27s_Ally_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png"}
    ],
};
