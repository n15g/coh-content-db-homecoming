import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PumpkinMaster: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "pumpkin-master",
    setTitleId: 432,
    names: [
        {type: Alternate.M, value: "Pumpkin Master"},
        {type: Alternate.F, value: "Pumpkin Mistress"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "The Fir Bolg have learned to fear your name."}
    ],
    acquisition: "Defeat 333 Fir Bolg",
    links: [
        {title: "Pumpkin Master Badge", href: "https://homecoming.wiki/wiki/Pumpkin_Master_Badge"},
        {title: "Pumpkin Mistress Badge", href: "https://homecoming.wiki/wiki/Pumpkin_Mistress_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/pumpkin-master.png"}
    ],
};
