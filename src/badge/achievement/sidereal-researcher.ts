import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SiderealResearcher: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "sidereal-researcher",
    setTitleId: 2177,
    names: [
        {value: "Sidereal Researcher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have furthered our understanding of the Shivan by collecting samples from Bloody Bay."}
    ],
    acquisition: "Collect 4 meteor samples during a single run of the Drowning in Blood trial",
    links: [
        {title: "Sidereal Researcher Badge", href: "https://paragonwiki.com/wiki/Sidereal_Researcher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sidereal-researcher.png"}
    ],
};