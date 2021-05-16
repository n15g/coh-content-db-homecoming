import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const DeadlyCombatant: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "deadly-combatant",
    setTitleId: 2099,
    names: [
        {value: "Deadly Combatant"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Sun Xiong learned what it meant to face you in combat. It is not a lesson he will recover from."}
    ],
    acquisition: "Choose to kill Sun Xiong after you defeat him in the story arc from Graham Easton",
    links: [
        {title: "Deadly Combatant Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Deadly_Combatant_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deadly-combatant.png"}
    ],
};
