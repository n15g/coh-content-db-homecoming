import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CoralaxBlueHybrid: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "coralax-blue-hybrid",
    setTitleId: 449,
    names: [
        {value: "Coralax Blue Hybrid"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The choices of the Coralax are a mystery."}
    ],
    acquisition: "Defeat 100 Coralax (Coralax)",
    links: [
        {title: "Coralax Blue Hybrid Badge", href: "https://homecoming.wiki/wiki/Coralax_Blue_Hybrid_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
