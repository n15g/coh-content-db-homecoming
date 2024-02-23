import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const NoOneLeftBehind: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "no-one-left-behind",
    setTitleId: 1895,
    names: [
        {value: "No One Left Behind"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You helped saved the injured Rogue PPD from being killed in a burning building, showing that " +
                "you're willing to lend a helping hand even to your enemies."
        }
    ],
    acquisition: "Save all the Rogue PPD in the hero story arc from Roy Cooling",
    links: [
        {title: "No One Left Behind Badge", href: "https://homecoming.wiki/wiki/No_One_Left_Behind_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/no-one-left-behind.png"}
    ],
};
