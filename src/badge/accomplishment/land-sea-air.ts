import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const LandSeaAir: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "land-sea-air",
    setTitleId: 1981,
    names: [
        {value: "Land, Sea & Air"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You shut down the alliance between the Sky Raiders and the Praetorian Imperial Defense Force, " +
                "halting an assault on Skyway City in the process."
        }
    ],
    acquisition: "Complete the Admiral Sutter Task Force",
    links: [
        {title: "Land, Sea & Air Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Land%2C_Sea_%26_Air_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/land-sea-air.png"}
    ],
};
