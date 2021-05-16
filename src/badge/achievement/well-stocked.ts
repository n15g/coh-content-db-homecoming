import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WellStocked: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "well-stocked",
    setTitleId: 1985,
    names: [
        {value: "Well-Stocked"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Demonstrating a dogged persistence, you wore Marauder down in Lambda Sector without using a " +
                "single Pacification Grenade despite having a full set."
        }
    ],
    acquisition: "Complete the Lambda Sector Incarnate Trial having destroyed all the Weapons Caches in sabotage, but using no Pacification Grenades",
    links: [
        {title: "Well-Stocked Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Well-Stocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png"}
    ],
};
