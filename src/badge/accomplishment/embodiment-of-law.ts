import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const EmbodimentOfLaw: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "embodiment-of-law",
    setTitleId: 2218,
    names: [
        {value: "Embodiment of Law"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You played through Emperor Cole's personal story and saw him fight against the entire army of " +
        "Arachnos."}
    ],
    acquisition: "Complete the personal story mission from Emperor Cole",
    links: [
        {title: "Embodiment of Law Badge", href: "https://paragonwiki.com/wiki/Embodiment_of_Law_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/embodiment-of-law.png"}
    ],
};