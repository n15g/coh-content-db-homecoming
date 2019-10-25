import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Usurper: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "usurper",
    setTitleId: 571,
    names: [
        {value: "Usurper"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have claimed victory over the master of villainy himself, Lord Recluse!"}
    ],
    acquisition: "Defeat Lord Recluse in the second Patron story arc",
    links: [
        {title: "Usurper Badge", href: "https://paragonwiki.com/wiki/Usurper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/defeatrecluse.png"}
    ],
};