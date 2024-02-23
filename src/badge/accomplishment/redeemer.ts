import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Redeemer: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "redeemer",
    setTitleId: 76,
    names: [
        {type: Alternate.H, value: "Redeemer"},
        {type: Alternate.V, value: "Conqueror"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You negotiated the surrender of Alexander, a Warrior boss."}
    ],
    acquisition: "Complete the Speak to Alexander mini-arc from Ashwin Lannister or Laurie Pennington",
    links: [
        {title: "Redeemer Badge", href: "https://homecoming.wiki/wiki/Redeemer_Badge"},
        {title: "Conqueror Badge", href: "https://homecoming.wiki/wiki/Conqueror_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/redeemer.png"}
    ],
};
