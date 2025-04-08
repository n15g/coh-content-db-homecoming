import { BadgeData, contactLink } from 'coh-content-db'
import { GrahamEaston } from '../../contact/graham-easton'

export const DeadlyCombatant: BadgeData = {
  type: 'achievement',
  key: 'deadly-combatant',
  setTitleId: [2099],
  name: 'Deadly Combatant',
  morality: 'heroic',
  badgeText: 'Sun Xiong learned what it meant to face you in combat. It is not a lesson he will recover from.',
  acquisition: `Choose to kill Sun Xiong after you defeat him in the story arc from ${contactLink(GrahamEaston)}.`,
  links: [
    { title: 'Deadly Combatant Badge', href: 'https://homecoming.wiki/wiki/Deadly_Combatant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deadly-combatant.png',
}
