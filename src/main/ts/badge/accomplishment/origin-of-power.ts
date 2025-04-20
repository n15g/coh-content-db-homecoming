import { BadgeData } from 'coh-content-db'
import { TheOriginOfPower } from '../../mission/the-origin-of-power'

export const OriginOfPower: BadgeData = {
  type: 'accomplishment',
  key: 'origin-of-power',
  setTitleId: [989],
  name: 'Origin of Power',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You gain a deeper understanding of the power and history of origins by talking to a representative of each path.',
  links: [
    { title: 'Origin of Power Badge', href: 'https://homecoming.wiki/wiki/Origin_of_Power_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/origin-of-power.png',
  requirements: [
    { key: TheOriginOfPower.key, type: 'mission', missionKey: TheOriginOfPower.key },
  ],
}
