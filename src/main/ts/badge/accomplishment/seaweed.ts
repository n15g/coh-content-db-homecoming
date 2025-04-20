import { BadgeData } from 'coh-content-db'
import { CarpeDiem } from '../../mission/carpe-diem'

export const Seaweed: BadgeData = {
  type: 'accomplishment',
  key: 'seaweed',
  setTitleId: [335],
  name: 'Seaweed',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `The Sea Witch won't be bothering you anymore.`,
  links: [
    { title: 'Seaweed Badge', href: 'https://homecoming.wiki/wiki/Seaweed_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-3.png',
  requirements: [
    { key: CarpeDiem.key, type: 'mission', missionKey: CarpeDiem.key },
  ],
}
