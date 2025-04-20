import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { LastRites } from '../../mission/last-rites'

export const DignifiedCombatant: BadgeData = {
  type: 'achievement',
  key: 'dignified-combatant',
  setTitleId: [2100],
  name: 'Dignified Combatant',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You spared Sun Xiong, despite his attempts to have you killed, and have gained his grudging respect.',
  acquisition: `Choose to spare Sun Xiong after you defeat him in the in the ${missionLink(LastRites)} story arc.`,
  links: [
    { title: 'Dignified Combatant Badge', href: 'https://homecoming.wiki/wiki/Dignified_Combatant_Badge' },
    { title: LastRites.name, href: missionUri(LastRites) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dignified-combatant.png',
}
