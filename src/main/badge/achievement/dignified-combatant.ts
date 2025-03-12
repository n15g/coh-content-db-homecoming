import { BadgeData } from 'coh-content-db'

export const DignifiedCombatant: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'dignified-combatant',
  setTitle: { id: 2100 },
  name: [
    { value: 'Dignified Combatant' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You spared Sun Xiong, despite his attempts to have you killed, and have gained his grudging '
        + 'respect.',
    },
  ],
  acquisition: 'Choose to spare Sun Xiong after you defeat him in the story arc from Graham Easton',
  links: [
    { title: 'Dignified Combatant Badge', href: 'https://homecoming.wiki/wiki/Dignified_Combatant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dignified-combatant.png' },
  ],
}
