import { BadgeData } from 'coh-content-db'
import { TheEndOfVengeance } from '../../mission/the-end-of-vengeance'

export const KnifeButcher: BadgeData = {
  type: 'accomplishment',
  key: 'knife-butcher',
  setTitleId: [2190],
  name: 'Knife Butcher',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You destroyed the source of the Knives of Vengeance, ending both their reign and also whatever was left of the Knives of Artemis.',
  links: [
    { title: 'Knife Butcher Badge', href: 'https://homecoming.wiki/wiki/Knife_Butcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: TheEndOfVengeance.key, type: 'mission', missionKey: TheEndOfVengeance.key },
  ],
}
