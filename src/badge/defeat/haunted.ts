import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Haunted: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "haunted",
    setTitleId: 436,
    names: [
        {value: "Haunted"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have banished hundreds of Ghosts from these lands."}
    ],
    acquisition: "Defeat 333 Croatoan Ghosts",
    links: [
        {title: "Haunted Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Haunted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/haunted.png"}
    ],
};
