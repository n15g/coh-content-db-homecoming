import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Centurion: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "centurion",
    setTitleId: 994,
    names: [
        {value: "Centurion"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have proved yourself on the battlefield by defeating 100 Cimeroran Traitors."}
    ],
    acquisition: "Defeat 100 Cimeroran Traitors",
    links: [
        {title: "Centurion Badge", href: "https://homecoming.wiki/wiki/Centurion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/centurion.png"}
    ],
};
