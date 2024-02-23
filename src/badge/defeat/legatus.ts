import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Legatus: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "legatus",
    setTitleId: 2471,
    names: [
        {value: "Legatus"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have proved yourself on the battlefield by defeating 100 Cimeroran Traitors empowered by the Path of the Dark.`}
    ],
    acquisition: `Defeat 100 Incarnate-level Cimeroran Traitors.`,
    links: [
        {title: "Legatus Badge", href: "https://homecoming.wiki/wiki/Legatus_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/legatus.png"}
    ],
};
