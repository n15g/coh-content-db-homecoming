import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const SaviorOfAtlasPark: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "savior-of-atlas-park",
    setTitleId: 2012,
    names: [
        {value: "Savior of Atlas Park"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You've saved Atlas Park from the Arachnos invasion!"}
    ],
    acquisition: "Complete Aaron Thiery's story arc in Atlas Park",
    links: [
        {title: "Savior of Atlas Park Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Savior_of_Atlas_Park_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/savior-of-atlas-park.png"}
    ],
};
