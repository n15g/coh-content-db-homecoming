import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfDilemmaDiabolique: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-dilemma-diabolique",
    setTitleId: 2168,
    names: [
        {value: "Master of Dilemma Diabolique"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have mastered the Incarnate Trial: Dilemma Diabolique."}
    ],
    acquisition: "Earn the Spinebreaker, Sentinel Smasher, Sacrificial Lamb, and Life and Death badges",
    links: [
        {title: "Master of Dilemma Diabolique Badge", href: "https://homecoming.wiki/wiki/Master_of_Dilemma_Diabolique_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-dilemma-diabolique.png"}
    ],
};
