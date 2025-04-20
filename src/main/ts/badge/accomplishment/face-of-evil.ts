import { BadgeData } from 'coh-content-db'
import { TheHeartsOfDarknessPriceOfVictory } from '../../mission/the-hearts-of-darkness-price-of-victory'

export const FaceOfEvil: BadgeData = {
  type: 'accomplishment',
  key: 'face-of-evil',
  setTitleId: [2019],
  name: 'Face of Evil',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'You gained control of the Hearts of Darkness and defeated an ancient evil bent on consuming your soul.',
  links: [
    { title: 'Face Of Evil Badge', href: 'https://homecoming.wiki/wiki/Face_Of_Evil_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-of-evil.png',
  requirements: [
    { key: TheHeartsOfDarknessPriceOfVictory.key, type: 'mission', missionKey: TheHeartsOfDarknessPriceOfVictory.key },
  ],
}
