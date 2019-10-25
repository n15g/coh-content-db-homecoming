import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const RedeemedBlackguard: IBadgeData = {
    type: BadgeType.PVP,
    key: "redeemed-blackguard",
    setTitleId: 585,
    names: [
        {type: Alternate.H, value: "Redeemed Blackguard"},
        {type: Alternate.V, value: "Blackguard"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "Despite defeating all the Signature Heroes in Recluse's Victory, you are now considered a " +
        "Redeemed Blackguard."},
        {type: Alternate.V, value: "You have helped defeat all the Signature Heroes in Recluse's Victory, making you a Blackguard."}
    ],
    acquisition: "Defeat all six Signature Heroes in Recluse's Victory",
    links: [
        {title: "Redeemed Blackguard Badge", href: "https://paragonwiki.com/wiki/Redeemed_Blackguard_Badge"},
        {title: "Blackguard Badge", href: "https://paragonwiki.com/wiki/Blackguard_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatstatesman.png"}
    ],
};