import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PirateHunter: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pirate-hunter",
    setTitleId: 513,
    names: [
        {type: Alternate.H, value: "Pirate Hunter"},
        {type: Alternate.V, value: "Air Pirate"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You disrupted the Sky Raiders' wave of thefts and defeated Col. Duray himself on their " +
        "off-shore base."}
    ],
    acquisition: "Complete the Silver Mantis Strike Force: Pirates of the Sky",
    links: [
        {title: "Pirate Hunter Badge", href: "https://paragonwiki.com/wiki/Pirate_Hunter_Badge"},
        {title: "Air Pirate Badge", href: "https://paragonwiki.com/wiki/Air_Pirate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pirate-hunter.png"}
    ],
};