import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HordelingLasher: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "hordeling-lasher",
    setTitleId: 461,
    names: [
        {value: "Hordeling Lasher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have command of infernal minions."}
    ],
    acquisition: "Defeat 100 Hordelings (Circle of Thorns)",
    links: [
        {title: "Hordeling Lasher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hordeling_Lasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
