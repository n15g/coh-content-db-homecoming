import { BadgeData } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const Seer: BadgeData = {
  type: 'exploration',
  key: 'seer',
  setTitleId: [1407],
  name: 'Seer',
  morality: 'all',
  badgeText: `Blind yet seeing and casting judgment yet mindless of the crime; the Seer is the instrument of control and the constant threat of the Emperor's displeasure.`,
  notes: `Located 347 yards ENE of the Four Gables marker.`,
  links: [
    { title: 'Seer Badge', href: 'https://homecoming.wiki/wiki/Seer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ImperialCity.key, coords: [-2838, -12, 2603] }, vidiotMapKey: '6' },
  ],
}
