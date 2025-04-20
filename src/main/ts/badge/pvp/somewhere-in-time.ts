import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const SomewhereInTime: BadgeData = {
  type: 'pvp',
  key: 'somewhere-in-time',
  setTitleId: [565],
  name: 'Somewhere in Time',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: '50 pillboxes have fallen into your hands.',
  acquisition: `Capture 50 pillboxes in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Somewhere in Time Badge', href: 'https://homecoming.wiki/wiki/Somewhere_in_Time_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/somewhere-in-time.png',
}
