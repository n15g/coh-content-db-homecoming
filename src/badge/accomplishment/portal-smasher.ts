import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const PortalSmasher: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "portal-smasher",
    names: [
        {value: "Portal Smasher"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You cut off the illegal portals the Nemesis army and Crey had built to access the Shadow " +
        "Shard, and prevented the Rularuu from escaping into our world."}
    ],
    acquisition: "Complete the Dr. Quaterfield Task Force: Explorers and Exploiters",
    links: [
        {title: "Portal Smasher Badge", href: "https://paragonwiki.com/wiki/Portal_Smasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/portal-smasher.png"}
    ],
};