import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const DepthsOfTime: BadgeData = {
  type: 'exploration',
  key: 'depths-of-time',
  setTitleId: [990],
  name: 'Depths of Time',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have traveled back in time to the Roman era. Here is the origins of all you have come to understand as heroic and villainous.`,
  notes: 'Located next to the fountain in the central square, just in front of Marcus Valerius.',
  links: [
    { title: 'Depths of Time Badge', href: 'https://homecoming.wiki/wiki/Depths_of_Time_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Cimerora.key, coords: [-1108, 9, 4262], icon: 'badge', iconText: '1' } },
  ],
}
