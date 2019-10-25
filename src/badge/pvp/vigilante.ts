import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Vigilante: IBadgeData = {
    type: BadgeType.PVP,
    key: "vigilante",
    setTitleId: 367,
    names: [
        {type: Alternate.H, value: "Vigilante"},
        {type: Alternate.V, value: "Wanted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Your success in PvP missions has been noticed by the media. You are being called a Vigilante."},
        {type: Alternate.V, value: "The authorities have mentioned your name in more than one report on successfully completing " +
        "PvP missions."}
    ],
    acquisition: "Complete a debuff mission in a PvP zone (Bloody Bay, Siren's Call, or Warburg)",
    links: [
        {title: "Vigilante Badge", href: "https://paragonwiki.com/wiki/Vigilante_Badge"},
        {title: "Wanted Badge", href: "https://paragonwiki.com/wiki/Wanted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png"}
    ],
};