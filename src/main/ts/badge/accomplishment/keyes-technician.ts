import { BadgeData } from 'coh-content-db'
import { KeyesIslandReactorTrial } from '../../mission/keyes-island-reactor-trial'

export const KeyesTechnician: BadgeData = {
  type: 'accomplishment',
  key: 'keyes-technician',
  setTitleId: [1989],
  name: 'Keyes Technician',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Keyes Island Reactor.',
  links: [
    { title: 'Keyes Technician Badge', href: 'https://homecoming.wiki/wiki/Keyes_Technician_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/keyes-technician.png',
  requirements: [
    { key: KeyesIslandReactorTrial.key, type: 'mission', missionKey: KeyesIslandReactorTrial.key },
  ],
}
