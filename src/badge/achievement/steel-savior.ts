import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const SteelSavior: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "steel-savior",
    setTitleId: 2097,
    names: [
        {value: "Steel Savior"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You have gone above and beyond the call of duty and prevented Steel Canyon from turning into a " +
                "war zone."
        }
    ],
    acquisition: "Defeat all the enemies at the end of Laura Lockhart's second mission in less than 3:00",
    links: [
        {title: "Steel Savior Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Steel_Savior_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/steel-savior.png"}
    ],
};
