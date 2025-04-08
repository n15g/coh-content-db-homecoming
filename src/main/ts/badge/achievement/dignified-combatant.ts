import { BadgeData, contactLink } from 'coh-content-db'
import { GrahamEaston } from '../../contact/graham-easton'

export const DignifiedCombatant: BadgeData = {
  type: 'achievement',
  key: 'dignified-combatant',
  setTitleId: [2100],
  name: 'Dignified Combatant',
  morality: 'heroic',
  badgeText: 'You spared Sun Xiong, despite his attempts to have you killed, and have gained his grudging respect.',
  acquisition: `Choose to spare Sun Xiong after you defeat him in the story arc from ${contactLink(GrahamEaston)}.`,
  links: [
    { title: 'Dignified Combatant Badge', href: 'https://homecoming.wiki/wiki/Dignified_Combatant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dignified-combatant.png',
}
