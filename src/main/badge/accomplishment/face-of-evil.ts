import { BadgeData } from 'coh-content-db'
import { DrGraves } from '../../contact/dr-graves'

export const FaceOfEvil: BadgeData = {
  type: 'accomplishment',
  key: 'face-of-evil',
  setTitleId: [2019],
  name: 'Face of Evil',
  morality: 'villainous',
  badgeText: 'You gained control of the Hearts of Darkness and defeated an ancient evil bent on consuming your soul.',
  acquisition: 'Complete the Level 15-19 Ongoing Training story arc from Dr. Graves',
  links: [
    { title: 'Face Of Evil Badge', href: 'https://homecoming.wiki/wiki/Face_Of_Evil_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-of-evil.png',
  requirements: [
    { key: 'the-hearts-of-darkness-price-of-victory', type: 'ARC', missionName: 'The Hearts of Darkness - Price of Victory', contactKey: DrGraves.key },
  ],
}
