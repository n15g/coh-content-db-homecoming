import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArmyOfNeu: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "army-of-neu",
    names: [
        {value: "Army of Neu"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You waded through a small army of Neuron's clones in order to help push back Praetoria's " +
        "invasion of Primal Earth."}
    ],
    acquisition: "Defeat 40 of Neuron's clones in the third mission of the Tin Mage Mark II Task Force",
    links: [
        {title: "Army of Neu Badge", href: "https://paragonwiki.com/wiki/Army_of_Neu_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png"}
    ],
};