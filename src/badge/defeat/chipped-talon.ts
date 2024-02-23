import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ChippedTalon: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "chipped-talon",
    setTitleId: 2061,
    names: [
        {value: "Chipped Talon"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Sorceress Serene herself has spread word that you are to be slain on sight, as vengeance for " +
                "your attacks on her coven. Always vengeance with this lot... You defeated several Talons of " +
                "Vengeance to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Talons of Vengeance",
    links: [
        {title: "Chipped Talon Badge", href: "https://homecoming.wiki/wiki/Chipped_Talon_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/chipped-talon.png"}
    ],
};
