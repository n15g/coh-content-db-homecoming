import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FreezerBurn: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "freezer-burn",
    setTitleId: 2496,
    names: [
        {value: "Freezer Burn"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Despite not having their intended Incarnate-power batteries, the 5th Column's twin Aereus Colossi Dextro and Laeva were formidable displays of engineering.`}
    ],
    acquisition: `Defeat the 5th Column colossi Dextro and Laeva during the Imperious Task Force`,
    links: [
        {title: "Freezer Burn Badge", href: "https://homecoming.wiki/wiki/Freezer_Burn_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/freezer-burn.png"}
    ],
};