import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const MercyMissionary: BadgeData = {
  type: 'exploration',
  key: 'mercy-missionary',
  setTitleId: [1631],
  name: 'Mercy Missionary',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have visited the Behavioral Adjustment Facility to extend a helping hand to the lost souls housed within.
It took great courage to enter this forbidden area, braving the sonic fence and the hordes of belligerent guards on your mission of mercy.`,
  notes: `Located directly in front of the main building in the Behavioral Adjustment Facility.`,
  links: [
    { title: 'Mercy Missionary Badge', href: 'https://homecoming.wiki/wiki/Mercy_Missionary_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [-582, 0, -3763], icon: 'badge', iconText: '2' } },
  ],
}
