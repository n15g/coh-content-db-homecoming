import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Justiciar: IBadgeData = {
    type: BadgeType.PVP,
    key: "justiciar",
    names: [
        {type: Alternate.H, value: "Justiciar"},
        {type: Alternate.V, value: "Fallen Justiciar"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have helped defeat all the Signature Villains in Recluse's Victory, making you a Justiciar."},
        {type: Alternate.V, value: "Defeating all the Signature Villains in Recluse's Victory has made your fall to villainy only " +
        "that much sweeter. Now Recluse and his group won't even think about crossing you."}
    ],
    acquisition: "Defeat all five Signature Villains in Recluse's Victory",
    links: [
        {title: "Justiciar Badge", href: "https://paragonwiki.com/wiki/Justiciar_Badge"},
        {title: "Fallen Justiciar Badge", href: "https://paragonwiki.com/wiki/Fallen_Justiciar_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatrecluse.png"}
    ],
};