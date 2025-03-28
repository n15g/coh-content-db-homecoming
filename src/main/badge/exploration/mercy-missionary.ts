import { BadgeData, zoneLink } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const MercyMissionary: BadgeData = {
  type: 'EXPLORATION',
  key: 'mercy-missionary',
  setTitle: { id: 1631 },
  name: [{ value: 'Mercy Missionary' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: ImperialCity.key,
  loc: [-582, 0, -3763],
  badgeText: [{
    value: 'You have visited the Behavioral Adjustment Facility to extend a helping hand to the lost souls housed within.'
      + ' It took great courage to enter this forbidden area, braving the sonic fence and the hordes of belligerent guards on your mission of mercy.',
  }],
  notes: `Located in ${zoneLink(ImperialCity)} directly in front of the main building in the Behavioral Adjustment Facility.`,
  links: [
    { title: 'Mercy Missionary Badge', href: 'https://homecoming.wiki/wiki/Mercy_Missionary_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '2',
}
