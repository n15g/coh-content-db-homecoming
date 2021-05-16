import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BaneOfDannan: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "bane-of-dannan",
    setTitleId: 433,
    names: [
        {value: "Bane of Dannan"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Tuatha de Dannan cannot stand before you."}
    ],
    acquisition: "Defeat 333 Tuatha de Dannan",
    links: [
        {title: "Bane of Dannan Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bane_of_Dannan_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/bane-of-dannan.png"}
    ],
};
