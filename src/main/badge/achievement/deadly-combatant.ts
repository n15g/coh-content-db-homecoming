import { BadgeData } from 'coh-content-db'

export const DeadlyCombatant: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'deadly-combatant',
  setTitle: { id: 2099 },
  name: [
    { value: 'Deadly Combatant' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Sun Xiong learned what it meant to face you in combat. It is not a lesson he will recover from.' },
  ],
  acquisition: 'Choose to kill Sun Xiong after you defeat him in the story arc from Graham Easton',
  links: [
    { title: 'Deadly Combatant Badge', href: 'https://homecoming.wiki/wiki/Deadly_Combatant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deadly-combatant.png' },
  ],
}
