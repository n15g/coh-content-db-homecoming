import { BadgeData } from 'coh-content-db'
import { DrowningInBlood } from '../../mission/drowning-in-blood'

export const SiblingRivalry: BadgeData = {
  type: 'accomplishment',
  key: 'sibling-rivalry',
  setTitleId: [2175],
  name: 'Sibling Rivalry',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have completed the Challenge Trial: Drowning in Blood.',
  links: [
    { title: 'Sibling Rivalry Badge', href: 'https://homecoming.wiki/wiki/Sibling_Rivalry_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/sibling-rivalry.png',
  requirements: [
    { key: DrowningInBlood.key, type: 'mission', missionKey: DrowningInBlood.key },
  ],
}
