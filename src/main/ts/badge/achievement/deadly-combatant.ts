import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { LastRites } from '../../mission/last-rites'

export const DeadlyCombatant: BadgeData = {
  type: 'achievement',
  key: 'deadly-combatant',
  setTitleId: [2099],
  name: 'Deadly Combatant',
  morality: 'heroic',
  badgeText: 'Sun Xiong learned what it meant to face you in combat. It is not a lesson he will recover from.',
  acquisition: `Choose to kill Sun Xiong after you defeat him in the ${missionLink(LastRites)} story arc.`,
  links: [
    { title: 'Deadly Combatant Badge', href: 'https://homecoming.wiki/wiki/Deadly_Combatant_Badge' },
    { title: LastRites.name, href: missionUri(LastRites) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/deadly-combatant.png',
}
