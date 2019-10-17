import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const DignifiedCombatant: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "dignified-combatant",
    setTitleId: 2100,
    names: [
        {value: "Dignified Combatant"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You spared Sun Xiong, despite his attempts to have you killed, and have gained his grudging " +
        "respect."}
    ],
    acquisition: "Choose to spare Sun Xiong after you defeat him in the story arc from Graham Easton",
    links: [
        {title: "Dignified Combatant Badge", href: "https://paragonwiki.com/wiki/Dignified_Combatant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dignified-combatant.png"}
    ],
};