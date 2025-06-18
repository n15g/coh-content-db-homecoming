import { BadgeData } from 'coh-content-db'
import { KnowThyEnemy } from '../../mission/know-thy-enemy'

export const ThickerThanWater: BadgeData = {
  type: 'accomplishment',
  key: 'thicker-than-water',
  setTitleId: [2563],
  name: 'Thicker Than Water',
  releaseDate: '2025-06-17',
  morality: 'heroic',
  badgeText: `Alexander 'the Great' Pavlidis used the full quote: 'The blood of the battlefield is thicker than the water of the womb.' His former brothers in arms among the Warriors have fallen victim to demonic trickery but he remains honorbound to try to save their souls.`,
  links: [
    { title: 'Thicker Than Water Badge', href: 'https://homecoming.wiki/wiki/Thicker_Than_Water_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/thicker-than-water.png',
  requirements: [
    { key: KnowThyEnemy.key, type: 'mission', missionKey: KnowThyEnemy.key },
  ],
}
