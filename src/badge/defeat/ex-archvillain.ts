import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ExArchvillain: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "ex-archvillain",
    names: [
        {type: Alternate.H, value: "Ex-Archvillain"},
        {type: Alternate.V, value: "Archvillain"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "The Freedom Phalanx are known for seeing the good in everyone, but in your case it took a " +
        "little longer than average."},
        {type: Alternate.V, value: "You have claimed victory over the greatest heroes of Paragon City, the Freedom Phalanx!"}
    ],
    acquisition: "Defeat the Freedom Phalanx during the Lord Recluse Strike Force",
    links: [
        {title: "Ex-Archvillain Badge", href: "https://paragonwiki.com/wiki/Ex-Archvillain_Badge"},
        {title: "Archvillain Badge", href: "https://paragonwiki.com/wiki/Archvillain_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ex-archvillain.png"}
    ],
};