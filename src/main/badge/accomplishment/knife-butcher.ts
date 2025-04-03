import { BadgeData } from 'coh-content-db'
import { Max } from '../../contact/max'

export const KnifeButcher: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'knife-butcher',
  setTitle: { id: 2190 },
  name: 'Knife Butcher',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You destroyed the source of the Knives of Vengeance, ending both their reign and also whatever was left of the Knives of Artemis.',
  links: [
    { title: 'Knife Butcher Badge', href: 'https://homecoming.wiki/wiki/Knife_Butcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: 'the-end-of-vengeance', type: 'MISSION', missionName: 'The End of Vengeance', contactKey: Max.key },
  ],
}
