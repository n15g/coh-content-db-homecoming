import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfTheDescentToTheHydra: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-descent-to-the-hydra",
    setTitleId: 2490,
    names: [
        {value: "Master of the Descent to the Hydra"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You have proven yourself Master of the Descent to the Hydra Trial.`}
    ],
    acquisition: `Complete the Master of the Descent to the Hydra challenge (zero defeats, temporary and incarnate powers disabled)`,
    links: [
        {title: "Master of the Descent to the Hydra Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_the_Descent_to_the_Hydra_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-descent-to-the-hydra.png"}
    ],
};
