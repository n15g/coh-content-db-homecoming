import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Ectoplasmic: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "ectoplasmic",
    setTitleId: 208,
    names: [
        {value: "Ectoplasmic"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You have held back the forces of the afterlife in their eternal struggle to break through to " +
                "the mortal world."
        }
    ],
    acquisition: "Defeat 50 Ghosts that spawn from the Ghost Ship",
    links: [
        {title: "Ectoplasmic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ectoplasmic_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ectoplasmic.png"}
    ],
};
