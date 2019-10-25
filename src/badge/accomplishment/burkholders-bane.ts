import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const BurkholdersBane: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "burkholders-bane",
    setTitleId: 202,
    names: [
        {value: "Burkholder's Bane"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have stopped the Council from launching their giant robot against Paragon City."}
    ],
    acquisition: "Complete the Ernesto Hess Task Force: The MegaMech Cometh",
    links: [
        {title: "Burkholder's Bane Badge", href: "https://paragonwiki.com/wiki/Burkholder%27s_Bane_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/burkholders-bane.png"}
    ],
};