import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Locksmith: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "locksmith",
    setTitleId: 553,
    names: [
        {type: Alternate.H, value: "Locksmith"},
        {type: Alternate.V, value: "Safecracker"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "With your knowledge of safecracking, you've given the local locksmiths a few pointers."},
        {type: Alternate.V, value: "No vault can keep its treasures safe from your brutal onslaught."}
    ],
    acquisition: "Destroy 10 Vault Doors in Mayhem Missions",
    links: [
        {title: "Locksmith Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Locksmith_Badge"},
        {title: "Safecracker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Safecracker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/locksmith.png"}
    ],
};
