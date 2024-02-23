import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const RedCap: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "red-cap",
    setTitleId: 529,
    names: [
        {value: "Red Cap"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You now can summon a Red Cap Rascal in the Arena pet battles."}
    ],
    acquisition: "Earn the [badge:toothbreaker] Badge (Red Caps)",
    links: [
        {title: "Red Cap Badge", href: "https://homecoming.wiki/wiki/Red_Cap_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
