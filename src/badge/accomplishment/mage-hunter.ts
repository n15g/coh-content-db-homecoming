import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const MageHunter: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "mage-hunter",
    setTitleId: 345,
    names: [
        {value: "Mage Hunter"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "That's one less creepy mystic to get in your way."}
    ],
    acquisition: "Complete the Defeat Selestar mission from Mage-Killer Zuhkara",
    links: [
        {title: "Mage Hunter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Mage_Hunter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png"}
    ],
};
